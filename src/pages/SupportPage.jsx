import React, { useState } from "react";

const faqs = [
    {
        q: "How do I add new students?",
        a: "Go to the Academic Management section and click on 'Add Student'. Fill in the required details and save.",
    },
    {
        q: "How can I reset my password?",
        a: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
        q: "Is my data secure?",
        a: "Yes, we use encrypted cloud storage and follow industry security standards.",
    },
    {
        q: "Can I manage multiple branches?",
        a: "Yes, multi-branch management is available in Pro and Enterprise plans.",
    },
];

export default function SupportPage() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="min-h-screen bg-white text-black px-6 py-16 mt-20">

            {/* 🔥 Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-black mb-4">
                    Need Help? We’re Here 🚀
                </h1>
                <p className="text-slate-400 text-lg">
                    Find answers, get support, or contact our team anytime.
                </p>
            </div>

            {/* 🔹 Support Options */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">

                <div className="bg-white p-6 rounded-2xl border border-slate-700 text-center hover:scale-105 transition">
                    <h3 className="text-xl font-bold mb-2 ">📧 Email Support</h3>
                    <p className="text-slate-400 mb-4">Reach us anytime via email</p>
                    <p className="font-semibold">support@schoolapp.com</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-700 text-center hover:scale-105 transition">
                    <h3 className="text-xl font-bold mb-2">💬 Live Chat</h3>
                    <p className="text-slate-400 mb-4">Chat with our support team</p>
                    <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500">
                        Start Chat
                    </button>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-700 text-center hover:scale-105 transition">
                    <h3 className="text-xl font-bold mb-2">📞 Call Us</h3>
                    <p className="text-slate-400 mb-4">Mon–Fri, 9AM–6PM</p>
                    <p className="font-semibold">+91 98765 43210</p>
                </div>

            </div>

            {/* 🔹 Contact Form */}
            <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl border border-slate-700 mb-20">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

                <form className="grid md:grid-cols-2 gap-6">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-white p-4 rounded-xl border border-slate-600 focus:outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="bg-white p-4 rounded-xl border border-slate-600 focus:outline-none"
                    />

                    <textarea
                        placeholder="Describe your issue..."
                        rows="5"
                        className="md:col-span-2 bg-white p-4 rounded-xl border border-slate-600 focus:outline-none"
                    />

                    <button
                        className="md:col-span-2 bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-500 transition"
                    >
                        Submit Request
                    </button>

                </form>
            </div>

            {/* 🔹 FAQ Section */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white p-5 rounded-xl border border-slate-700 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">{faq.q}</h3>
                                <span>{openIndex === i ? "-" : "+"}</span>
                            </div>

                            {openIndex === i && (
                                <p className="text-slate-400 mt-3">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}