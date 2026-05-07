import { Search, Mail, Phone, MessageCircle } from "lucide-react";

export default function SchoolHelpDeskPage() {
    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10 pt-28">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    School Help Desk
                </h1>
                <p className="text-gray-500 mt-2">
                    Find answers, guides, and support for your school management system
                </p>

                {/* Search */}
                <div className="mt-6 relative">
                    <input
                        type="text"
                        placeholder="Search help articles..."
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <Search className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
                </div>
            </div>

            {/* QUICK HELP */}
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                {[
                    { title: "Student Management", desc: "Manage student data easily" },
                    { title: "Fee Management", desc: "Track payments & invoices" },
                    { title: "Attendance", desc: "Mark & monitor attendance" },
                    { title: "Reports & Analytics", desc: "View school performance" },
                    { title: "Parent Portal", desc: "Connect with parents" },
                    { title: "Teacher Tools", desc: "Tools for teachers" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer"
                    >
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                ))}

            </div>

            {/* FAQ */}
            <div className="w-full max-w-screen-xl mx-auto mb-12">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Frequently Asked Questions
                </h2>

                {[
                    "How do I add a new student?",
                    "How to generate fee reports?",
                    "How to reset password?",
                    "How to manage attendance?",
                ].map((q, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 rounded-xl border mb-3 cursor-pointer hover:bg-gray-50"
                    >
                        {q}
                    </div>
                ))}
            </div>

            {/* CONTACT SUPPORT */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Contact Support
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-500" />
                            <span>support@schoolmitra.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-green-500" />
                            <span>+91 98765 43210</span>
                        </div>

                    </div>
                </div>

                {/* Right Form */}


            </div>
        </div>
    );
}