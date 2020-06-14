import decode from 'jwt-decode';

export const _readToken = token => {
    const tokenData = decode(token)
    return tokenData;
}

export const _getUser = () => {
    const token = localStorage.getItem('token');
    if(!!token){
        const {user} = _readToken(token);
        return user;
    }
}

export const _authCheck = () => {
    const token = localStorage.getItem('token');
    return !!token ? true : false
}