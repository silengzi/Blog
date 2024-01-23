import requests from './request'
// export const reqAllArticle = () => request({ url: '/article/getAllArticle', methods: 'get' })
export const reqAllArticle = ()=>requests({url:'/article/getAllArticle',method:'get'});