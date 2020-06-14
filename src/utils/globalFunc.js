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