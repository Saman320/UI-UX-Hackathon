import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@sanity/client";

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export async function middleware(req: NextRequest) {
  // Clerk ka authentication header fetch karo
  const clerkUserId = req.headers.get("x-clerk-user-id");

  if (!clerkUserId) {
    console.log("❌ No user found in Clerk headers");
    return NextResponse.next();
  }

  try {
    const newUser = {
      _type: "user",
      _id: "clerk_" + clerkUserId, // Unique ID
      name: "Unknown User", // Clerk se proper name fetch nahi ho sakta middleware me
      email: "unknown@example.com", // Clerk se email bhi nahi mil sakta middleware me
      createdAt: new Date().toISOString(),
    };

    // Sanity me user store karo agar exist nahi karta
    await client.createIfNotExists(newUser);
    console.log("✅ User Created in Sanity from Middleware:", clerkUserId);
  } catch (error) {
    console.error("❌ Sanity Error:", error);
  }

  return NextResponse.next();
}

// Middleware sirf `/dashboard` aur uske subroutes pe chalega
export const config = {
  matcher: "/dashboard/:path*",
};
