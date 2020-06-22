export const _setToken = data => {
    if(!!data){
        localStorage.setItem('token', data.token)
    }
}

export const _logout = () => {
    console.log("in logout")
    localStorage.removeItem('token')
    window.location.href = '/login'
}

///my locastorage data post

export const _setBlogdata = (data) => {
    console.log('localstorage',data);
    if(!!data){
        localStorage.setItem('blog', data);
    }
}

export const _removeBlogData = () => {
    console.log("remove blog data")
    localStorage.removeItem('blog')
}