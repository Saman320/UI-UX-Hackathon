"use client";
import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "@/app/multiy-components/checkout-form";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function FormPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/check-out", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        items: [{ id: "xl-tshirt", quantity: 1 }] 
      }),
    })
    .then((res) => {
      if (!res.ok) throw new Error('Payment failed to initialize');
      return res.json();
    })
    .then((data) => setClientSecret(data.clientSecret))
    .catch((error) => setError(error.message));
  }, []);

  return (
    <section>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-extrabold text-center mb-6">Checkout</h1>
        
        {error && (
          <div className="text-red-500 text-center mb-4">
            Error: {error}
          </div>
        )}

        {clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="spinner border-t-2 border-indigo-600 border-solid w-6 h-6 animate-spin"></div>
          </div>
        )}
      </div>
    </section>
  );
}