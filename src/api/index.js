import request from './request'
export const reqAllArticle = ()=>request({url:'/article/getAllArticle',method:'get'});