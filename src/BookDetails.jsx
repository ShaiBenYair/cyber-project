import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Book, ArrowLeft } from 'lucide-react';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newNote, setNewNote] = useState('');

  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`/book/${id}`);
      setBook(response.data);
    } catch (err) {
      setError('Failed to load book details');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    try {
      await axios.post(`/book/${id}/updates`, { note: newNote });
      setNewNote('');
      await fetchBookDetails(); // Refresh the book data
    } catch (err) {
      setError('Failed to save note');
    }
  };

  if (isLoading) 
    return <div className="flex items-center justify-center h-screen bg-gray-900 text-teal-400 text-lg">Loading...</div>;

  if (error) 
    return <div className="flex items-center justify-center h-screen bg-gray-900 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 py-8 px-4">
      <Link to="/" className="inline-flex items-center text-teal-400 hover:text-teal-500 transition mb-6">
        <ArrowLeft size={20} className="mr-2" /> Back to Search
      </Link>

      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 p-6">
        <div className="md:flex">
          {/* Left Column - Image and Notes */}
          <div className="md:w-1/3 p-6 bg-gray-850 border-r border-gray-700">
            <img src={book.thumbnail} alt={book.title} className="w-full rounded-md shadow-lg" />

            <h3 className="text-xl font-semibold text-teal-400 mt-6">Your Notes</h3>
            <form onSubmit={handleAddNote} className="mt-2">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add your notes here..."
                rows="4"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-teal-500 resize-none transition"
              />
              <button 
                type="submit"
                className="mt-2 w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-lg transition"
              >
                Add Note
              </button>
            </form>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-2 mt-4">
              {book.userNotes && book.userNotes.length > 0 ? (
                book.userNotes.map((note, index) => (
                  <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-200">{note}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 italic">No notes yet. Add your first note!</p>
              )}
            </div>
          </div>

          {/* Right Column - Book Info */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-teal-400">{book.title}</h1>
            <p className="text-lg text-gray-400 mb-6">By {book.authors.join(', ')}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-700 p-3 rounded-lg">
                <span className="block text-sm text-gray-400">Published</span>
                <span className="font-medium text-gray-300">{book.publishedDate}</span>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <span className="block text-sm text-gray-400">Pages</span>
                <span className="font-medium text-gray-300">{book.pageCount}</span>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <span className="block text-sm text-gray-400">Categories</span>
                <span className="font-medium text-gray-300">{book.categories.join(', ')}</span>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <span className="block text-sm text-gray-400">Maturity Rating</span>
                <span className="font-medium text-gray-300">{book.maturityRating}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-teal-400">Description</h3>
              <p className="text-gray-400 mt-2">{book.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
