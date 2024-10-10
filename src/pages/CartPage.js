import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";
import { FaTrashAlt } from "react-icons/fa";
const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // total price calculation
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total += item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // delete item from cart
  const removeCartItem = (pid) => {
    try {
      const myCart = cart.filter((item) => item._id !== pid);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  // get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  // Effect to get the payment token (with proper dependency array)
  useEffect(() => {
    if (auth?.token) {
      getToken();
    }
  }, [auth?.token]); // Ensure we have `auth?.token` in the dependency array

  // handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("http://localhost:8080/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

   
  return (
    <Layout>
      <div className="cart-page">
        <div className="container">
          <h1 className="text-center bg-light p-2 mb-4 cart-header">
            {!auth?.user ? "Hello Guest" : `Hello, ${auth?.token && auth?.user?.name}`}
          </h1>

          <div className="row">
            <div className="col-md-8 col-sm-12">
              {cart?.length > 0 ? (
                cart.map((p) => (
                  <div className="card flex-row mb-3" key={p._id}>
                    <div className="col-md-4">
                      <img
                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                        width="100%"
                        height={"150px"}
                      />
                    </div>
                    <div className="col-md-5 product-details">
                      <p className="product-name">{p.name}</p>
                      <p className="product-description">{p.description.substring(0, 30)}...</p>
                      <p className="product-price">Price: {p.price}</p>
                    </div>
                    <div className="col-md-3 cart-remove-btn">
                      <button className="btn btn-outline-danger" onClick={() => removeCartItem(p._id)}>
                        <FaTrashAlt /> Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center empty-cart">Your Cart Is Empty</p>
              )}
            </div>
            <div className="col-md-4 cart-summary">
              <h2>Cart Summary</h2>
              <p>Total: {totalPrice()}</p>
              <hr />
              {auth?.user?.address ? (
                <div>
                  <h4>Delivery Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button className="btn btn-outline-primary" onClick={() => navigate("/dashboard/user/profile")}>
                    Update Address
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigate(auth?.token ? "/dashboard/user/profile" : "/login")}
                >
                  {auth?.token ? "Add Address" : "Please Login to Checkout"}
                </button>
              )}
              <div className="mt-4">
                {clientToken && auth?.token && cart.length > 0 && (
                  <div>
                    <DropIn
                      options={{ authorization: clientToken, paypal: { flow: "vault" } }}
                      onInstance={(instance) => setInstance(instance)}
                    />
                    <button
                      className="btn btn-success"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Processing..." : "Make Payment"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
