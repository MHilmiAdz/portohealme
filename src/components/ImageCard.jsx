import { useState } from "react";

export function ImageCard({ image, alt, details, author, title }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="relative overflow-hidden rounded-lg shadow-md border border-gray-700 bg-gray-800 cursor-pointer transition-all duration-300 group"
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
                {/* Title bottom left */}
                <div className="absolute bottom-4 left-4">
                    <span className="text-white text-sm font-bold bg-black bg-opacity-60 p-2 rounded">
                        {title}
                    </span>
                </div>
            </div>

            {/* Modal Popup */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
                    <div className="bg-gray-900 p-6 rounded-lg max-w-lg shadow-lg border border-gray-700">
                        <div className="flex justify-center items-center">
                            <img
                                src={image}
                                alt={alt}
                                className="max-w-full max-h-64 object-contain"
                            />
                        </div>
                        <p className="text-gray-400 mt-4 text-center">{details}</p>
                        {author && (
                            <div className="mt-6 border-t border-gray-700 pt-4">
                                <p className="text-sm text-gray-400 text-center">
                                    <span className="font-semibold"></span> {author}
                                </p>
                            </div>
                        )}
                        <button
                            className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-200 block mx-auto"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

// Grid to render multiple ImageCards
export function ImageCardGrid({ cards }) {
    const isNotMultipleOfThree = cards.length % 3 !== 0;
    const centerClass = isNotMultipleOfThree ? "justify-center" : "";

    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${centerClass} flex`}
        >
            {cards.map((card, idx) => (
                <ImageCard key={idx} {...card} />
            ))}
        </div>
    );
}