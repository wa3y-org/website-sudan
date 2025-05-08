import {
  getAllBlogArticles,
  getAllBlogTopics,
  getArticlesByPage,
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
    paginated: getArticlesByPage,
  },
};

export function useBlog() {
  return {
    topics,
    articles,
  };
}
