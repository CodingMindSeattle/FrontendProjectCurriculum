// TODO: Import Link from 'react-router-dom'
// TODO: Import Button component

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>

      {/* TODO: Add a Link to home page styled as a Button */}
      <a href="/">Go Home</a>
    </div>
  );
}
