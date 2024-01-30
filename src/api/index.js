import request from './request'
export const reqAllArticle = (data) => request({ 
    url: '/article/getAllArticle', 
    method: 'get',
    params: data
});
export const reqArticleById = (data) => request({
     url: '/article/getArticleById', 
     method: 'get',
     params: data
});