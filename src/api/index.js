import request from './request'
export const reqAllArticle = ()=>request({url:'/article/getAllArticle',method:'get'});
export const reqArticleById = (id)=>request({url:'/article/getArticleById/' + id,method:'get'});