export function Button({ children, ...props }) {
    return (
      <button {...props} className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
        {children}
      </button>
    );
  }
  