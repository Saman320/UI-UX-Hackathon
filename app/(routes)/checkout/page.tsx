"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { RootState } from "@/app/store/features/store";
import { useSelector, useDispatch } from "react-redux";
import Header from "@/app/multiy-components/headers/header";
import { setCart } from "@/app/store/features/cart";
import { Button } from "@/app/components/ui/button";
import Top_Head from "@/app/multiy-components/headers/top-header";

const Checkout: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);
    const router = useRouter();

    // Load cart from localStorage on component mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("cart");
            if (savedCart) {
                dispatch(setCart(JSON.parse(savedCart)));
            }
        }
    }, [dispatch]);

    const total: number = cart.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
    );

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const cartWithKeys = cart.map((item) => ({
                ...item,
                _key: item._id || Math.random().toString(36).substr(2, 9),
            }));

            await client.create({
                _type: "order",
                name: formData.name,
                email: formData.email,
                address: formData.address,
                phone: formData.phone,
                cartItems: cartWithKeys,
                totalAmount: total,
            });

            const orderDetails = cart
                .map(
                    (item) => `
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">${item.title}</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${item.quantity} pcs</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">$${item.price.toFixed(2)}</td>
                            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">$${(
                            item.price * item.quantity
                        ).toFixed(2)}</td>
                        </tr>`
                )
                .join("");

            const message = `
                <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
                    <h2 style="color: #333;">Hello <span style="color: #007bff; font-weight: bold;">${formData.name}</span>,</h2>
                    <p style="color: #555;">
                    Thank you for shopping with us at <strong style='color: #007bff;'>Bandage Online</strong>! We are thrilled to have you as part of our community. Your order has been successfully placed, and we are working hard to get it to you as soon as possible.</p>
                    <h3 style="color: #333;">Order Summary:</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <thead>
                            <tr style="background-color: #f4f4f4;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Product</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Quantity</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Price</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${orderDetails}
                        </tbody>
                    </table>
                    <p style="font-size: 18px; color: red; font-weight: bold; margin-top: 15px;">
                        Total Amount: $${total.toFixed(2)}
                    </p>
                    <p style="color: #555;">
                        <strong> 📍 Shipping Address:</strong> ${formData.address} <br>
                        <strong>📞 Contact Number:</strong> ${formData.phone}
                    </p>
                    <p style="margin-top: 20px; color: #777;">
                        If you have any questions, please contact us at 
                        <a href="mailto:support@hammadabbasi102030@gmail.com" style="color: #007bff;">support@hammadabbasi102030@gmail.com</a> 
                        or call <strong style="color: #007bff;">📞 +92 3493002352</strong>.
                    </p>
                    <p style="margin-top: 30px; font-weight: bold; color: #333;">Best Regards,</p>
                    <p style="color: #007bff; font-weight: bold;">"Hammad" / Student of GIAIC</p>
                </div>`;

            const response = await axios.post("/api/email", {
                email: formData.email,
                name: formData.name,
                message: message,
            });
              console.log(response,"response")
              
            if (response.status === 200) {
                router.push("/form");
            } else {
                alert("Order placed, but email sending failed.");
            }
        } catch (error) {
            console.log(error)

            alert("There was an issue with the order submission.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen">
            <Top_Head />
            <Header />
            <div className="flex flex-col lg:flex-row p-6 bg-slate-50 gap-6 font-sans font-semibold">
                {cart.length === 0 ? (
                    <div className="text-center w-full mt-8">
                        <p className="text-lg text-gray-600">Your cart is empty!</p>
                    </div>
                ) : (
                    <div className="lg:w-1/2 w-full bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4 text-center font-serif text-[#737373]">Order Summary</h2>
                        <div className="space-y-4 h-auto">
                            {cart.map((product) => (
                                <div
                                    key={product._id}
                                    className="flex justify-between items-center border-b pb-4"
                                >
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            className="object-cover rounded w-[50px] h-[50px]"
                                            src={product.imageUrl}
                                            width={100}
                                            height={100}
                                            alt="product"
                                        />
                                        <h3 className="font-semibold text-sm md:text-base">
                                            {product.title}
                                        </h3>
                                    </div>
                                    <p className="text-[#737373] font-semibold">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            ))}
                            <div className="mt-4 font-bold flex justify-between text-xl py-5 text-[#737373]">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="lg:w-1/2 w-full bg-white p-5 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-center font-serif text-[#737373]">User Information</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-1 font-bold text-[#737373]">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border rounded w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-bold text-[#737373]">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border rounded w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-bold text-[#737373]">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="border rounded w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter Your Address"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-bold text-[#737373]">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border rounded w-full p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter Your Phone Number"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className={`bg-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
                                } text-white font-bold p-3 w-full hover:text-blue-500 border hover:border-blue-500 mt-5 rounded transition duration-300`}
                        >
                            {loading ? "Processing..." : "Place Order"}
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Checkout;