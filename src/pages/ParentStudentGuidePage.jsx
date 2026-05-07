import { BookOpen, User, Users, GraduationCap } from "lucide-react";

const guides = [
    {
        title: "For Parents",
        icon: Users,
        points: [
            "Track your child’s attendance",
            "View fee details & payment history",
            "Receive school notifications",
            "Communicate with teachers",
        ],
    },
    {
        title: "For Students",
        icon: GraduationCap,
        points: [
            "Check attendance records",
            "View homework & assignments",
            "Access exam results",
            "Stay updated with school notices",
        ],
    },
];

export default function ParentStudentGuidePage() {
    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10 pt-28">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">
                    Parent & Student Guide
                </h1>
                <p className="text-gray-500 mt-2">
                    Learn how to use School Mitra effectively for better communication and management
                </p>
            </div>

            {/* GUIDE CARDS */}
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                {guides.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-100 rounded-xl">
                                    <Icon className="text-blue-600 w-6 h-6" />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {item.title}
                                </h2>
                            </div>

                            <ul className="space-y-2 text-gray-600">
                                {item.points.map((point, idx) => (
                                    <li key={idx}>• {point}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}

            </div>

            {/* STEP GUIDE */}
            <div className="w-full max-w-screen-xl mx-auto bg-white p-8 rounded-2xl shadow-md mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Getting Started
                </h2>

                <div className="space-y-4 text-gray-600">
                    <p>1. Login using your registered mobile number or email.</p>
                    <p>2. Navigate through dashboard to access features.</p>
                    <p>3. Check notifications regularly.</p>
                    <p>4. Contact school admin if you face issues.</p>
                </div>
            </div>

            {/* VIDEO / HELP SECTION */}


        </div>
    );
}