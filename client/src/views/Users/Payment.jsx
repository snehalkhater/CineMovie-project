import React, { useState } from "react";
import { CreditCard, User, Calendar, Lock } from "lucide-react";
import Navbar from "../../components/UserNavbar.jsx";
import Footer from "../../components/Footer.jsx";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../components/Button.jsx";
const Payment = () => {
    const [paymentData, setPaymentData] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        amount: "",
    });

    const handleChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (paymentData.cardNumber.length !== 16) {
            toast.error("Card number must be 16 digits");
            return;
        }

        if (paymentData.cvv.length !== 3) {
            toast.error("CVV must be 3 digits");
            return;
        }

        toast.success("Payment Successful");
        console.log(paymentData);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center px-4 py-20">
                <div className=" mt-10 w-full max-w-lg rounded-3xl bg-[#006A71] backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-gray-200 transition duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]">
                    <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-2 tracking-wide">
                        💳 Payment
                    </h2>
                    <p className="text-center text-gray-300 mb-8">
                        Secure MovieZone Payment
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {[
                            { label: "Card Holder Name", name: "name", icon: <User size={18} /> },
                            { label: "Card Number", name: "cardNumber", icon: <CreditCard size={18} />, maxLength: 16 },
                        ].map((field, i) => (
                            <div key={i}>
                                <label className="block mb-2 text-gray-300">{field.label}</label>
                                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-teal-400 transition">
                                    <span className="text-gray-400">{field.icon}</span>
                                    <input
                                        type="text"
                                        name={field.name}
                                        value={paymentData[field.name]}
                                        onChange={handleChange}
                                        required
                                        maxLength={field.maxLength}
                                        className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                                    />
                                </div>
                            </div>
                        ))}
                        <div>
                            <label className="block mb-2 text-gray-300">Expiry Date</label>
                            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-teal-400">
                                <Calendar size={18} className="text-gray-400" />
                                <input
                                    type="month"
                                    name="expiry"
                                    value={paymentData.expiry}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent w-full outline-none text-gray-200"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-300">CVV</label>
                            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-teal-400">
                                <Lock size={18} className="text-gray-400" />
                                <input
                                    type="password"
                                    name="cvv"
                                    value={paymentData.cvv}
                                    onChange={handleChange}
                                    required
                                    maxLength="3"
                                    className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-300">Amount</label>
                            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-teal-400">
                                <input
                                    type="number"
                                    name="amount"
                                    value={paymentData.amount}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <Button
                            title="Pay Now"
                            variant="secondary"
                            size="large">
                        </Button>
                    </form>
                </div>
            </div>
            <Toaster />
            <Footer />
        </>
    );
};

export default Payment;