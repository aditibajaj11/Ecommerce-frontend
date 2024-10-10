import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
      <div
      className="container mt-5" style={{ paddingTop: "50px" }}>
        <div className="col-md-12">
          <h2
            className="text-center mb-4"
            style={{
              fontWeight: "bold",
              fontSize: "3rem",
              fontFamily: "'Poppins', sans-serif",
              color: "#2C3E50",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            About Us
          </h2>
          <p
            className="text-justify mt-2"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontFamily: "'Roboto', sans-serif",
              color: "#34495E",
              
            }}
          >
            Welcome to our Smartwatch E-commerce platform! We are dedicated to providing the latest and most innovative smartwatches on the market. Our mission is to bring you top-notch technology, combined with sleek designs and user-friendly features, to keep you connected and enhance your daily life.
          </p>
          <p
            className="text-justify mt-2"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontFamily: "'Roboto', sans-serif",
              color: "#34495E",
              marginBottom: "20px",
            }}
          >
            Our collection includes a wide range of smartwatches from various brands, offering features such as health tracking, GPS, notifications, and more. Whether you're a fitness enthusiast, a tech lover, or someone looking for a convenient way to manage your day-to-day activities, we have the perfect smartwatch for you.
          </p>
          <p
            className="text-justify mt-2"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontFamily: "'Roboto', sans-serif",
              color: "#34495E",
            }}
          >
            We pride ourselves on delivering excellent customer service and a seamless shopping experience. Thank you for choosing us as your trusted source for the best smartwatches available today!
          </p>
        </div>
        </div>
    </Layout>
  );
};

export default About;

