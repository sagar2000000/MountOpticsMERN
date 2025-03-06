import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { base64Decode } from "esewajs";
import axios from "axios";

const Success = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the token from the URL search params
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("data");

  // Decode the JWT without verifying the signature
  const decoded = base64Decode(token);

  // Log decoded values to debug
  console.log("Decoded token:", decoded);

  // Function to verify payment status
  const verifyPaymentAndUpdateStatus = async () => {
    if (!decoded || !decoded.transaction_uuid) {
      console.error("Invalid token or missing transaction UUID");
      setIsLoading(false);
      return;
    }

    try {
      // Send the order ID (transaction UUID) to the backend to verify payment
      const response = await axios.post(
        "http://localhost:4000/esewa/payment-status", 
        { order_id: decoded.transaction_uuid } // Send order_id to the backend
      );

      // Check the response status
      if (response.status === 200) {
        setIsLoading(false);
        setIsSuccess(true);
      } else {
        throw new Error("Payment verification failed");
      }
    } catch (error) {
      console.error("Error initiating payment verification:", error);
      setIsLoading(false);
    }
  };

  // Call verify payment function on component mount
  useEffect(() => {
    verifyPaymentAndUpdateStatus();
  }, []);

  // Loading state
  if (isLoading && !isSuccess) return <>Loading...</>;

  // Error handling if payment verification fails
  if (!isLoading && !isSuccess) {
    return (
      <>
        <h1>Oops!.. Error occurred while confirming payment</h1>
        <h2>We will resolve it soon.</h2>
        <button onClick={() => navigate("/")} className="go-home-button">
          Go to Homepage
        </button>
      </>
    );
  }

  // Success page if payment is verified
  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your transaction was successful.</p>
      <button onClick={() => navigate("/")} className="go-home-button">
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
