import db from "../../../helper/db.js";

const findAllNews = async () => {
  return await db.news.findMany({
    where: {
      published: true,
    },
  });
};

const create = async (data) => {
  return await db.news.create({
    data,
  });
};

const updateId = async (id, data) => {
  return await db.news.update({
    where: {
      id,
    },
    data,
  });
};

const deleteId = async (id) => {
  return await db.news.delete({
    where: {
      id,
    },
  });
};

const published = async (id) => {
  return await db.news.update({
    where: {
      id,
    },
    data: {
      published: true,
    },
  });
};

const searchNews = async (q) => {
  return await db.news.findMany({
    where: {
      title: {
        contains: q,
      },
    },
  });
};


export default { findAllNews, create, updateId, deleteId, published, searchNews };
