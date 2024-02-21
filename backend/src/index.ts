import express from "express";
import cors from "cors";
import * as RecipeAPI from "./recipe-api";

const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();

app.get("/api/recipe/search", async (req, res) => {
  const searchTerm : string = req.query.searchTerm as string;
  const page : number = parseInt(req.query.page as string);
  const results = await RecipeAPI.searchRecipes(searchTerm, page);
  return res.json(results);
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});