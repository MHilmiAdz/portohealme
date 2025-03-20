export function Card({ children, className = "" }) {
  return (
    <div className={`p-4 shadow-md hover:shadow-lg rounded ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}