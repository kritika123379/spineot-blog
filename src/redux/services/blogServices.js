import request from './request'

export const getBlogsService = (data) => {
    return request({
      url: '/blogs',
      method: 'GET',
      data
    });    
}
//1
export const setBlogsService = (data) => {
    return request({
      url: '/blogs',
      method: 'POST',
      params:data
    });
}