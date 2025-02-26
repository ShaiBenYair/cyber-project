import pkg from "body-parser";
const { urlencoded, json } = pkg;
import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

const port = 3000;
const apiKey = "AIzaSyDQ9YrTnefWtnBc0Tj5m6oisFCcrd86Kp4";

app.use(express.static("public"));

app.post("/submit", async (req, res) => {
  try {
    const page = parseInt(req.body.page) || 0;
    const startIndex = page * 10;
    let search = "";

    switch (req.body.searchCategory) {
      case "author":
        const authorParts = req.body.searchQuery.split(" ");
        search = `inauthor:"${encodeURIComponent(authorParts.join("+"))}"`;
        search = search.replace(/%2B/g, "+");
        break;
      case "isbn":
        search = `isbn:${encodeURIComponent(req.body.searchQuery)}`;
        break;
      case "genre":
        search = `subject:"${encodeURIComponent(req.body.searchQuery)}"`;
        break;
      default:
        search = req.body.searchQuery;
    }

    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(search)}&key=${apiKey}&startIndex=${startIndex}&maxResults=10`
    );

    const books = (response.data.items || []).map((item) => ({
      title: item.volumeInfo?.title || "No title available",
      authors: item.volumeInfo?.authors || ["Unknown author"],
      categories: item.volumeInfo?.categories || ["N/A"],
      description: item.volumeInfo?.description?.substring(0, 200) + "..." || "No description available",
      thumbnail: item.volumeInfo?.imageLinks?.thumbnail || "https://via.placeholder.com/128x196?text=No+Image",
    }));

    res.send({
      books,
      totalItems: response.data.totalItems || 0
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});