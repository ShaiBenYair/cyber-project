import pkg from "body-parser";
const { urlencoded, json } = pkg; // Destructure to access the middleware functions

import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors()); // Allow all origins

// Use the correct middleware
app.use(urlencoded({ extended: true }));
app.use(json());

const port = 3000;
const apiKey = "AIzaSyDQ9YrTnefWtnBc0Tj5m6oisFCcrd86Kp4"; // Replace with your actual API key

app.use(express.static("public")); // Serve static files like HTML, CSS, etc.

app.post("/submit", async (req, res) => {
  try {
      let search = "";
      if (req.body.searchCategory == "author") {
          const authorParts = req.body.searchQuery.split(" ");
          search = `inauthor:"${encodeURIComponent(authorParts.join("+"))}"`;
          search = search.replace(/%2B/g, "+");
      } else if (req.body.searchCategory == "isbn") {
          search = `isbn:${encodeURIComponent(req.body.searchQuery)}`;
      } else if (req.body.searchCategory == "title") {
          search = req.body.searchQuery;
      } else if (req.body.searchCategory == "genere") {
          search = `subject:"${encodeURIComponent(req.body.searchQuery)}"`;
      }

      // Fetch data from the Google Books API
      const axiosResponse = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(search)}&key=${apiKey}&maxResults=10`
      );

      if (!axiosResponse.data.items) {
          return res.status(404).json({ error: "No books found for the given query." });
      }
      const books = axiosResponse.data.items.map((item) => {
          const volumeInfo = item.volumeInfo;
          return {
              title: volumeInfo.title || "No title available",
              authors: volumeInfo.authors || ["Unknown author"],
              generes: volumeInfo.generes || "N/A",
              description: volumeInfo.description || "No description available",
              thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "No image available",
          };
      });
      console.log(books);
      res.send({ books });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.post("/register", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
