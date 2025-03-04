import React from "react";
import BookSearch from "./BookSearch";
import SignIn from "./sign_in";
import HomePage from "./home_page";
import BookDetails from "./BookDetails"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/bookDetails/:id" element={<BookDetails />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    
  );
}

export default App;
