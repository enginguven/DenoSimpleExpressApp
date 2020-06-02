import { Router } from "./express.ts";
import bookDb from "./db.ts";

const bookRouter = Router();

bookRouter.get("/books", (req, res) => {
  res.setStatus(200).json({
    success: "true",
    data: bookDb.books,
  });
});

bookRouter.delete("/books/:isbn", async (req, res, next) => {
  bookDb.books = bookDb.books.filter((b) => b.isbn != Number(req.params.isbn));

  res.setStatus(200).json({
    success: "true",
    data: bookDb.books,
  });
});
bookRouter.post("/books", async (req, res, next) => {
  bookDb.books = [...bookDb.books, req.parsedBody];
  res.setStatus(200).json({
    success: "true",
    data: bookDb.books,
  });
});
bookRouter.get("/books/:isbn", (req, res) => {
  let isbn: Number = Number(req.params.isbn);
  let book = bookDb.books.filter((b) => b.isbn == isbn);
  if (book.length == 0) {
    res.setStatus(200).json({
      success: "false",
      data: "Book Not Found..!",
    });
  } else {
    res.setStatus(200).json({
      success: "true",
      data: book,
    });
  }
});

export default bookRouter;
