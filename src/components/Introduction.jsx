import { useState } from "react";
import heroimg from "../assets/images/pphero.svg";
import fullresume from "../assets/files/CV ATS - Muhammad Hilmi Adzkia [English] V2.pdf";

export function Introduction() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadResume = () => {
        // Logic to download the main resume file
        const link = document.createElement("a");
        link.href = fullresume;
        link.download = "Hilmi_FullResume.pdf";
        link.click();
    };

    const handleSpecificResumeDownload = (fileName) => {
        // Logic to download specific resume files
        const link = document.createElement("a");
        link.href = `src/assets/files/${fileName}`; // Replace with the actual file path
        link.download = fileName;
        link.click();
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-lg font-bold mb-4">Select a Resume</h3>
                        <button
                            onClick={() => handleSpecificResumeDownload("android-developer-resume.pdf")}
                            className="w-full mb-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
                        >
                            Android Developer Resume
                        </button>
                        <button
                            onClick={() => handleSpecificResumeDownload("game-developer-resume.pdf")}
                            className="w-full mb-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
                        >
                            Game Developer Resume
                        </button>
                        <button
                            onClick={() => handleSpecificResumeDownload("educator-resume.pdf")}
                            className="w-full mb-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
                        >
                            Educator Resume
                        </button>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full px-4 py-2 bg-red-700 text-gray-200 rounded-lg hover:bg-red-950"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}