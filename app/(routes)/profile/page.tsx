"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("jwt");

      if (!token) {
        router.push("/login"); // User logged in nahi hai to login page pe bhej do
        return;
      }

      const res = await fetch("/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (res.status === 200) {
        setUser(data);
      } else {
        setError(data.error || "Failed to fetch profile");
      }
    };

    fetchProfile();
  }, [router]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">User Profile</h2>

      {error && <p className="text-red-500">{error}</p>}

      {user ? (
        <div className="mt-4">
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>User ID:</strong> {user?._id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
