const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  author: {type: String, required: true},
  description: { type: String, required: true },
  keyword1: { type: String, required: true },
  keyword2: { type: String, required: true },
  keyword3: { type: String, required: true },
  keyword4: { type: String, required: true },
  keyword5: { type: String, required: true },
  keyword6: { type: String, required: true },
  keyword7: { type: String, required: true },
  keyword8: { type: String, required: true },
  keyword9: { type: String, required: true },
  keyword10: { type: String, required: true },
  Metatitle: { type: String, required: true },
  alt: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
