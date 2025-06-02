import newsRepository from "../repository/newsRepository.js";

const findAllNews = async () => {
  return await newsRepository.findAllNews();
};

const create = async (data) => {
  return await newsRepository.create(data);
};

const updateId = async (id, data) => {
  return await newsRepository.updateId(id, data);
};

const deleteId = async (id) => {
  return await newsRepository.deleteId(id);
};

const published = async (id) => {
  return await newsRepository.published(id);
};

const searchNews = async (q) => {
  return await newsRepository.searchNews(q);
} 

export default {findAllNews, create, updateId, deleteId, published, searchNews}