import news from "../modules/product/controller/newsController.js";
export default (app) => {
  app.get("/news", news.findAllNews);
  app.post("/news", news.create);
  app.put("/news/:id", news.updateId);
  app.delete("/news/:id", news.deleteId);
  app.put("/news/publish/:id", news.published);
  app.get("/news/search", news.searchNews);
};
