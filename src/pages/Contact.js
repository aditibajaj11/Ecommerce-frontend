import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to API)
    console.log("Form Submitted:", formData);
    // Reset form fields after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout title={"Contact Us"}>
      <div className="container mt-5" style={{ paddingTop: "30px" }}>
        <h1
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            fontFamily: "'Poppins', sans-serif",
            color: "#2C3E50",
          }}
        >
          Contact Us
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} style={{ backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">Send Message</button>
            </form>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <h2
              className="text-center mb-4"
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                fontFamily: "'Poppins', sans-serif",
                color: "#2C3E50",
              }}
            >
              Contact Information
            </h2>
            <p className="mt-3">
              <BiMailSend /> Email: help@ecommerceapp.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> Phone: 012-3456789
            </p>
            <p className="mt-3">
              <BiSupport /> Support: 1800-0000-0000 (toll free)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
