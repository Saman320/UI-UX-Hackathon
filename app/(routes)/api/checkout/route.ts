"use server"
import { NextResponse } from "next/server";
import Stripe from "stripe"

// // Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, 
  { apiVersion: "2022-11-15" }
);

const calculateOrderAmount = () => {
 return 1400;
  }

  // Calculate total amount dynamically

  export async function POST() {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "eur",
        automatic_payment_methods: { enabled: true },
      });
  
      return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Stripe Error:", error.message); // Now `error.message` works
        return NextResponse.json({ error: error.message }, { status: 500 });
      } else {
        console.error("Unknown error:", error); // If it's not an instance of Error
        return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
      }
    }
  }
  