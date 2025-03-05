import React from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-indigo-100 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center space-x-2">
                <img src="/api/placeholder/100/40" alt="Logo" className="h-10" />
              </a>
              <nav className="hidden md:flex gap-6">
                {["Home", "My List", "List of all books", "friends", "search books"].map((item) => (
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
              ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/login')} className="hidden md:inline-flex items-center px-4 py-2 border border-indigo-300 dark:border-indigo-600 text-sm font-medium rounded-md text-indigo-700 dark:text-indigo-200 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors">
                Login
              </button>
              <button onClick={() => navigate('/signin')} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors" >
                Sign wwwwwwww
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-indigo-100 dark:border-gray-700">
              <div className="p-4">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Content</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-300">Sidebar content here</p>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="col-span-12 md:col-span-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-indigo-100 dark:border-gray-700">
              <div className="relative">
                <img
                  src="/api/placeholder/800/400"
                  alt="Featured"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">Featured Content</h2>
                    <p className="text-sm opacity-90">Discover our latest collection</p>
                  </div>
                </div>
                <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-500/40 hover:bg-indigo-500/60 transition-colors">
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-500/40 hover:bg-indigo-500/60 transition-colors">
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i === 0 ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Book List */}
          <div className="col-span-12 md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-indigo-100 dark:border-gray-700">
              <div className="p-4">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
                  Best Books of All Time
                </h3>
                <div className="space-y-2">
                  {[...Array(10)].map((_, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
                        {index + 1}.
                      </span>
                      <span className="text-sm text-indigo-700 dark:text-indigo-200">
                        Book {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-200 dark:border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-indigo-500 dark:text-indigo-400">
                © 2024 Company, Inc
              </p>
              <nav className="flex gap-4">
                {["Home", "Features", "Pricing", "FAQs", "About"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-indigo-500 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;