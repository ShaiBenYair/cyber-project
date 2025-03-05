import React from "react";
import BookSearch from "./BookSearch";
import SignIn from "./sign_in";
import HomePage from "./home_page";
import BookDetails from "./BookDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <Router>
      <div>
        {/* Header appears on every page */}
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/bookDetails/:id" element={<BookDetails />} />
        </Routes>

        {/* Footer appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;