import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
