import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function LoginPage({ onBackToHome, onClearCart }) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSuccess(true); 
      onClearCart(); 
    }, 2000); 
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSuccess(true);
      onClearCart(); 
    }, 2000); 
  };

  if (orderSuccess) {
    return (
      <div
        style={{
          backgroundColor: "#f2f2f2",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            width: "400px",
            textAlign: "center",
          }}
        >
          <FaCheckCircle
            style={{ fontSize: "60px", color: "#2ecc71", marginBottom: "20px" }}
          />
          <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Your order was successful!
          </h2>
          <p>Your account has been successfully logged in or created.</p>
          <button
            onClick={onBackToHome}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#415d43",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
          {isSignIn ? "Sign In" : "Login"}
        </h2>
        <form onSubmit={isSignIn ? handleSignIn : handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "16px",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "16px",
              }}
              required
            />
          </div>

          {isSignIn && (
            <div style={{ marginBottom: "15px" }}>
              <input
                type="password"
                placeholder="Confirm Password"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                  fontSize: "16px",
                }}
                required
              />
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#415d43",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginBottom: "20px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#415d43")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#415d43")}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : isSignIn ? "Create Account" : "Login"}
          </button>
        </form>

        <button
          onClick={() => setIsSignIn(!isSignIn)}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#415d43",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#415d43")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#415d43")}
        >
          {isSignIn
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>

        <button
          onClick={onBackToHome}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#415d43",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default LoginPage;


















