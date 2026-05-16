import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';

// EMAILJS CONFIGURATION
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ORG = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SITE_NAME = "School Mitra";

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const ContactCard = ({ icon: Icon, title, text, color }) => {
    return (
        <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl shadow-sm">
            <div className={`p-3 rounded-lg ${color}`}>
                <Icon className="text-white w-5 h-5" />
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{text}</p>
            </div>
        </div>
    );
};

export default function ContactPage() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        fullName: '',
        schoolName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const now = new Date().toLocaleString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        // Parameters for Admin Notification
        const ownerParams = {
            to_email: "info@biosoftech.in",
            owner_name: formData.fullName,
            school_name: formData.schoolName,
            user_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            date_time: now,
            site_name: SITE_NAME,
        };

        // Parameters for User Confirmation
        const userParams = {
            owner_name: formData.fullName,
            user_email: formData.email,
            site_name: SITE_NAME,
            company_name: "Biosoftech Solutions",
            support_email: "info@biosoftech.in",
            to_email: formData.email
        };

        try {
            // 1. Send Email to Admin
            if (EMAILJS_TEMPLATE_ID_ORG) {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID_ORG,
                    ownerParams,
                    EMAILJS_PUBLIC_KEY
                );
            }

            // 2. Send Confirmation Email to User
            if (EMAILJS_TEMPLATE_ID_USER) {
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID_USER,
                    userParams,
                    EMAILJS_PUBLIC_KEY
                );
            }

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.'
            });
            setFormData({ fullName: '', schoolName: '', phone: '', email: '', message: '' });

            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-12">

            {/* Top Section */}
            <div className="text-center mb-12 md:mb-16">
                <div className="inline-block px-4 py-1 bg-white rounded-full shadow text-blue-500 font-medium text-sm md:text-base">
                    ✨ Contact Us
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-gray-800 tracking-tight">
                    Get In Touch With Us
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                    Have questions or need assistance? Reach out to our team, and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20">
                <ContactCard
                    icon={Mail}
                    title="Email"
                    text="info@biosoftech.in"
                    color="bg-blue-500"
                />
                <ContactCard
                    icon={Phone}
                    title="Phone"
                    text={
                        <>
                            +91 62096 88930 <br />
                            +91 9044425858
                        </>
                    }
                    color="bg-indigo-500"
                />
                <ContactCard
                    icon={MapPin}
                    title="Office"
                    text="3rd Floor, Office No- 624F/20A, Kotwali Rd, Matiyari, Chinhat, Lucknow, Uttar Pradesh 226028"
                    color="bg-green-500"
                />
                <ContactCard
                    icon={Clock}
                    title="Days"
                    text="Mon - Sat"
                    color="bg-orange-500"
                />
                <ContactCard
                    icon={Mail}
                    title="Support"
                    text="info@biosoftech.in"
                    color="bg-cyan-500"
                />
            </div>

            {/* Bottom Section */}
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Image */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                        alt="support"
                        className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3] lg:aspect-auto"
                    />
                </div>

                {/* Form */}
                <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">School Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your school name"
                                    required
                                    value={formData.schoolName}
                                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block ">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
                                <input
                                    type="Email"
                                    placeholder="Enter your email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50/50"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none transition-all"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-200 uppercase tracking-wider text-sm shadow-lg ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-blue-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'}`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message →'}
                        </button>

                        {status.message && (
                            <p className={`text-center text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}