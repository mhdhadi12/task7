export const Header = () => {
  return (
    <div>
      <header className="flex justify-end items-center p-6 container mx-auto">
        <nav className="space-x-6 font-bold">
          <a href="/" className="text-gray-800">
            Home
          </a>
          <a href="/activity" className="text-gray-800">
            Activity
          </a>
          <a href="/contact" className="text-gray-800">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
