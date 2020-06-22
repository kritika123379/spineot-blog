import request from './request'

export const getServices = (data) => {
    return request({
      url: '/services',
      method: 'GET',
      data
    });    
}
//1
export const setServices = (data) => {
    return request({
      url: '/services',
      method: 'POST',
      data
    });
}