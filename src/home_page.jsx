import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50 dark:bg-gray-900">
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
                      className={`h-2 w-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}
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
    </div>
  );
};

export default HomePage;
