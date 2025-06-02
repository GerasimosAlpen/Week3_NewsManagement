import newsService from "../service/newsService.js";
import Joi from "joi";

export default {
  async findAllNews(req, res) {
    const news = await newsService.findAllNews();
    res.status(200).json(news);
  },

  async create(req, res) {
    const scheme = Joi.object({
      title: Joi.string().min(5).required(),
      content: Joi.string().min(10).required(),
      writer: Joi.string().min(3).required(),
    });

    try {
      await scheme.validateAsync(req.body);
      const news = await newsService.create(req.body);

      res.status(200).json({ message: "News create succesfully" });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async updateId(req, res) {
    const scheme = Joi.object({
      title: Joi.string().min(5).required(),
      content: Joi.string().min(10).required(),
      writer: Joi.string().min(3).required(),
    });

    try {
      await scheme.validateAsync(req.body);

      const updatedNews = await newsService.updateId(parseInt(req.params.id), req.body);
      res.status(200).json({ message: "News updated", data: updatedNews });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async deleteId(req, res) {
    try {
      const news = await newsService.deleteId(parseInt(req.params.id));

      res.status(200).json({ message: "News deleted succesfuly" });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async published(req, res) {
    try {
      const updatedNews = await newsService.published(parseInt(req.params.id));

      res.status(200).json({ message: "News published", data: updatedNews });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async searchNews(req, res) {
    const scheme = Joi.object({
      q: Joi.string().min(2).required(),
    });

    try {
      await scheme.validateAsync(req.query);
      const { q } = req.query;
      const searched = await newsService.searchNews(q);
      res.status(200).json({ message: "Search success", data: searched });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
