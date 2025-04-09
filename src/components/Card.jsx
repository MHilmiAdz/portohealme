import { useState } from "react";

export function Card({ title, description, details, image, author }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Center the text and card content vertically */}
      <div
        className="p-6 shadow-md rounded-lg border border-gray-700 
                   bg-gray-800 transition-all duration-300 cursor-pointer 
                   hover:scale-105 hover:bg-gray-700 hover:shadow-xl 
                   flex flex-col justify-between h-full"
        onClick={() => setIsOpen(true)}
      >
        <CardContent>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </div>

      {/* Modal Popup with Image and Optional Author */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-gray-900 p-6 rounded-lg max-w-lg shadow-lg border border-gray-700">
            {/* Centered Project Image */}
            <div className="flex justify-center items-center">
              <img
                src={image}
                alt={title}
                className="max-w-full max-h-64 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white pt-5 text-center">{title}</h3>
            <p className="text-gray-400 mt-4 text-center">{details}</p>

            {/* Conditional Author Section */}
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

export function CardContent({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {children}
    </div>
  );
}

// Component to Render the Cards with Centering
export function CardGrid({ cards }) {
  const isNotMultipleOfThree = cards.length % 3 !== 0;
  const centerClass = isNotMultipleOfThree ? "justify-center" : "";

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${centerClass} flex`}
    >
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}