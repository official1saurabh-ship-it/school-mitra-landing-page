import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import {
    ArrowLeft,
    UserCheck,
    GraduationCap,
    Banknote,
    FileSearch,
    LayoutDashboard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';




export const settingsConfig = [
    {
        title: "General Settings",
        icon: "shield",
        key: "general",
        children: [
            { name: "Profile Settings", path: "/settings/profile" },
            { name: "Security Settings", path: "/settings/security" },
            { name: "Notifications Settings", path: "/settings/notifications" },
            { name: "Connected Apps", path: "/settings/apps" },
        ],
    },
    {
        title: "Website Settings",
        icon: "laptop",
        key: "website",
        children: [
            { name: "Company Settings", path: "/settings/company" },
            { name: "Localization", path: "/settings/localization" },
            { name: "Prefixes", path: "/settings/prefixes" },
            { name: "Salary Templates", path: "/settings/salary" },
            { name: "Preference", path: "/settings/preference" },
            { name: "Social Authentication", path: "/settings/social-auth" },
            { name: "Language", path: "/settings/language" },
        ],
    },
    {
        title: "App Settings",
        icon: "grid",
        key: "app",
        children: [
            { name: "Invoice Settings", path: "/settings/invoice" },
            { name: "Custom Fields", path: "/settings/custom-fields" },
        ],
    },
    {
        title: "System Settings",
        icon: "file",
        key: "system",
        children: [
            { name: "Email Settings", path: "/settings/email" },
            { name: "Email Templates", path: "/settings/email-templates" },
            { name: "SMS Settings", path: "/settings/sms" },
            { name: "OTP", path: "/settings/otp" },
            { name: "GDPR Cookies", path: "/settings/gdpr" },
        ],
    },
    {
        title: "Academic Settings",
        icon: "calendar",
        key: "academic",
        children: [
            { name: "Academic Year", path: "/settings/academic-year" },
            { name: "School Settings", path: "/settings/school" },
            { name: "Religion", path: "/settings/religion" },
        ],
    },
];

const SettingsPage = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(null);

    const toggle = (key) => {
        setActive(active === key ? null : key);
    };

    return (
        <div className=" bg-white font-sans text-slate-900">
            <section className="relative h-[40vh] min-h-[600px] flex items-center bg-slate-950 overflow-hidden">
                <Scene3D type="reports" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950 z-10" />
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-20">
                    <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold text-sm uppercase tracking-widest">Back</span>
                    </button>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                            System  <span className="text-blue-600">Settings</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed">
                            Configure your institution's preferences, manage security, and customize your School Mitra experience.
                        </p>
                    </div>
                </div>
            </section>

            <div className='w-full flex justify-center py-20 px-4 sm:px-6 lg:px-8'>
                <div className="w-full max-w-screen-xl bg-white text-black space-y-3">
                    <h1 className="text-3xl md:text-5xl font-black mb-12">Settings</h1>
                    {settingsConfig.map((section) => (
                        <div key={section.key} className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-4">
                            {/* Header */}
                            <div
                                onClick={() => toggle(section.key)}
                                className={`flex justify-between items-center p-6 cursor-pointer transition-all duration-300
                ${active === section.key ? "bg-blue-600 text-white" : "hover:bg-slate-50 text-slate-900"}`}
                            >
                                <span className="text-lg font-bold uppercase tracking-wider">{section.title}</span>
                                <span className={`text-2xl transition-transform duration-300 ${active === section.key ? "rotate-180" : ""}`}>⌄</span>
                            </div>

                            {/* Animated Dropdown */}
                            <AnimatePresence>
                                {active === section.key && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="px-8 py-6 space-y-4 bg-slate-50/50">
                                            {section.children.map((item) => (
                                                <li
                                                    key={item.path}
                                                    onClick={() => navigate(item.path)}
                                                    className="text-slate-600 hover:text-blue-600 cursor-pointer transition-all font-bold flex items-center gap-3 group"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;
