import service from './request';


//默认搜索关键词
export const getDefaultSearchKeyword = () => service.get('/search/default');

//热搜
export const getHotSearchList = () => service.get('/search/hot')

