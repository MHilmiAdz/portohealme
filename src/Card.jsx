import { useState } from "react";

export function Card({ title, description, details, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card with spacing and hover effect */}
      <div
        className="p-6 shadow-md rounded-lg border border-gray-700 
                   bg-gray-800 transition-all duration-300 cursor-pointer 
                   hover:scale-105 hover:bg-gray-700 hover:shadow-xl"
        onClick={() => setIsOpen(true)}
      >
        <CardContent>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </div>

      {/* Modal Popup with Image */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-gray-900 p-6 rounded-lg max-w-lg shadow-lg border border-gray-700">
            {/* Project Image (only in modal) */}
            <img src={image} alt={title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 mt-4">{details}</p>
            <button
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-200"
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
  return <div className="mt-2">{children}</div>;
}

// Component to Render the Cards with Centering
export function CardGrid({ cards }) {
  const isNotMultipleOfThree = cards.length % 3 !== 0;
  const centerClass = isNotMultipleOfThree ? "justify-center" : "";

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${centerClass} flex`}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
