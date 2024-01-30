import request from './request'
export const reqAllArticle = (data) => request({ 
    url: '/article/getAllArticle', 
    method: 'get',
    params: data
});
export const reqArticleById = (data) => request({
     url: '`/article/getArticleById?userName=${data.userName}&id=${data.id}`', 
     method: 'get',
     params: data
});