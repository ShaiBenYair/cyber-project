import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-100 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center space-x-2">
              <img src="/api/placeholder/100/40" alt="Logo" className="h-10" />
            </a>
            <nav className="hidden md:flex gap-6">
              {["Home", "My List", "List of all books", "friends", "search books"].map((item) =>
                item === "search books" ? (
                  <Link
                    key={item}
                    to="/search"
                    className="text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="hidden md:inline-flex items-center px-4 py-2 border border-indigo-300 dark:border-indigo-600 text-sm font-medium rounded-md text-indigo-700 dark:text-indigo-200 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
