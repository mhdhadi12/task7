export const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
          <p>
            Built with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-5 h-5 text-red-500 mx-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>{" "}
            by Hadi
          </p>
        </div>
      </footer>
      ;
    </div>
  );
};
