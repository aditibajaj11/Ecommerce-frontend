import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
            <div className="container mt-5" style={{ paddingTop: "30px" }}>
        <div className="col-md-12">
          <h2 className="text-center mb-4" style={{
            fontWeight: "bold",
            fontSize: "2rem", // Larger size for emphasis
            fontFamily: "'Poppins', sans-serif", // Stylish font
            color: "#2C3E50", // Dark shade for contrast
            textTransform: "uppercase", // Adds emphasis with all caps
            letterSpacing: "2px",
          }}>
            Privacy Policy
          </h2>

          <p style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "'Roboto', sans-serif", // Clean font for body text
            color: "#34495E", // Softer dark shade for readability
            marginBottom: "10px",
          }}>
            At SmartTick, we value your privacy and are committed to protecting your personal information. This privacy policy outlines the types of information we collect and how we use, disclose, and protect that information.
          </p>

          <h4 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>1. Information We Collect</h4>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "'Roboto', sans-serif",
            color: "#34495E",
            marginBottom: "10px",
          }}>
            We may collect personal information, such as your name, email address, phone number, and shipping address when you create an account, place an order, or contact us for support.
          </p>

          <h4 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>2. How We Use Your Information</h4>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "'Roboto', sans-serif",
            color: "#34495E",
            marginBottom: "10px",
          }}>
            We use your information to process transactions, improve our services, communicate with you, and send you promotional offers and updates if you opt-in.
          </p>

          <h4 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>3. Information Sharing</h4>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "'Roboto', sans-serif",
            color: "#34495E",
            marginBottom: "10px",
          }}>
            We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in delivering our services.
          </p>

          <h4 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>4. Data Security</h4>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "'Roboto', sans-serif",
            color: "#34495E",
            marginBottom: "10px",
          }}>
            We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is completely secure.
          </p>

          <h4 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>5. Changes to This Privacy Policy</h4>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "'Roboto', sans-serif",
            color: "#34495E",
            marginBottom: "10px",
          }}>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
