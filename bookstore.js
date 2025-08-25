const mongoose = require("mongoose");
const Book = require("./models/Book");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bookstoreDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(" Error:", err));

// CRUD functions
async function addBook(title, author, price) {
  const book = new Book({ title, author, price });
  await book.save();
  console.log(" Book Added:", book);
}

async function listBooks() {
  const books = await Book.find();
  console.log(" All Books:", books);
}

async function findBookByTitle(title) {
  const book = await Book.findOne({ title });
  console.log(book ? " Found:" : " Not Found", book);
}

async function updateBookPrice(title, newPrice) {
  const book = await Book.findOneAndUpdate(
    { title },
    { price: newPrice },
    { new: true }
  );
  console.log(" Updated Book:", book);
}

// Example calls
// addBook("Atomic Habits", "James Clear", 450);
// listBooks(); 
//  findBookByTitle("Atomic Habits");
 updateBookPrice("Atomic Habits", 500);
