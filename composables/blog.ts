import {
  getAllBlogArticles,
  getAllBlogTopics,
  getBlogArticlesByTopic,
  getOneBlogArticle,
  getOneBlogTopic,
} from "./website/get";

const topics = {
  get: {
    all: getAllBlogTopics,
    byId: getOneBlogTopic,
  },
};

const articles = {
  get: {
    all: getAllBlogArticles,
    byId: getOneBlogArticle,
    byTopic: getBlogArticlesByTopic,
  },
};

export function useBlog() {
  return {
    topics,
    articles,
  };
}
