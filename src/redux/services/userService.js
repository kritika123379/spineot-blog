import request from './request'

export const registrationService = (data) => {
  return request({
    url: '/register',
    method: 'POST',
    data
  });
}


export const loginService = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  });
}



