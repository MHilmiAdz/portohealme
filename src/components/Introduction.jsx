import { useState } from "react";
import heroimg from "../assets/images/pphero2.svg";
import fullresume from "../assets/files/CV ATS - Muhammad Hilmi Adzkia [English] V2.pdf";

// Example skill images (replace with actual paths)
import skill1 from "../assets/images/androidskill.png";
import skill2 from "../assets/images/cloudcompskill.png";
import skill3 from "../assets/images/gamedevskill.png";
import skill4 from "../assets/images/designskill.png";
import skill5 from "../assets/images/teachingskill.png";

export function Introduction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current visible skill index

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = fullresume;
        link.download = "Hilmi_FullResume.pdf";
        link.click();
    };

    const handleSpecificResumeDownload = (fileName) => {
        const link = document.createElement("a");
        link.href = `src/assets/files/${fileName}`;
        link.download = fileName;
        link.click();
    };

    const skills = [
        { image: skill1, name: "Android Developer", detail: "Build a simple android app using Android Studio" },
        { image: skill3, name: "Game Developer", detail: "Build a Game with Construct" },
        { image: skill4, name: "Design", detail: "Design UI, Banner, Logo, etc with Figma and Canva" },
        { image: skill5, name: "Teaching", detail: "Teach Coding Basics" },
        { image: skill2, name: "Cloud Computing", detail: "Develop an API, Develop an Auth with Firebase" },
    ];

    const handleScroll = (direction) => {
        const maxIndex = skills.length - 3; // Show 3 cards at a time
        if (direction === "left" && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (direction === "right" && currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className="py-20">
            <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto px-6">
                {/* Image Section */}
                <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-10">
                    <img
                        src={heroimg}
                        alt="Hero"
                        className="w-64 h-64 md:w-96 md:h-96"
                    />
                </div>

                {/* Text Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold">Hello, I'm Hilmi 👋</h2>
                    <p className="mt-4 text-lg text-gray-300 font-semibold">
                        Android Developer | Game Developer | Educator
                    </p>
                    <p className="mt-4 text-md text-gray-300">
                        A fresh graduate majoring in Information Technology Education who has an interest in mobile application development with experience in building Android applications using Kotlin and Java. Strong understanding of Object Oriented Programming (OOP), Firebase, and cloud-based API development. Experienced in collaborating with cross-functional teams to develop functional, efficient, and user-friendly applications. Familiar with using Git for version control and have good communication skills in conveying ideas and technical challenges.
                    </p>
                    <button
                        onClick={handleDownloadResume}
                        className="mt-6 px-4 py-2 bg-secondarycolor text-maincolor rounded-lg hover:bg-tertiarycolor transition-all duration-200"
                    >
                        Download Resume
                    </button>
                    <p
                        onClick={() => setIsModalOpen(true)}
                        className="mt-4 text-sm text-blue-500 cursor-pointer hover:underline"
                    >
                        Need a specific resume?
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 bg-gray-800 py-10 relative">
                <h3 className="text-3xl font-bold text-center text-white mb-10">
                    Skills
                </h3>
                <div className="flex items-center justify-center relative">
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => handleScroll("left")}
                        className="absolute left-2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 z-10 flex items-center justify-center"
                    >
                        <span className="text-lg">&#8592;</span>
                    </button>

                    {/* Skills Container */}
                    <div className="overflow-hidden w-full max-w-4xl px-6">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (256 + 24)}px)`, // 256px card width + 24px spacing
                            }}
                        >
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skill-card flex-shrink-0 w-64 bg-gray-700 p-6 rounded-lg shadow-lg text-left mx-3"
                                >
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="w-20 h-20 mb-4"
                                    />
                                    <h4 className="text-xl font-semibold text-white">
                                        {skill.name}
                                    </h4>
                                    <p className="text-gray-400 text-md mt-2">{skill.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => handleScroll("right")}
                        className="absolute right-2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 z-10 flex items-center justify-center"
                    >
                        <span className="text-lg">&#8594;</span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700 max-w-sm w-full">
                        <h3 className="text-lg font-bold text-white mb-4 text-center">
                            Select a Resume
                        </h3>
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => handleSpecificResumeDownload("android-developer-resume.pdf")}
                                className="w-full mb-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-center"
                            >
                                Android Developer Resume
                            </button>
                            <button
                                onClick={() => handleSpecificResumeDownload("game-developer-resume.pdf")}
                                className="w-full mb-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-center"
                            >
                                Game Developer Resume
                            </button>
                            <button
                                onClick={() => handleSpecificResumeDownload("educator-resume.pdf")}
                                className="w-full mb-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-center"
                            >
                                Educator Resume
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-200 text-center"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}