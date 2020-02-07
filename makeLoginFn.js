module.exports = axios => ({ username, password, consumer_key } = {
   username: process.env.OPB_USERNAME, 
   password: process.env.OPB_PASSWORD, 
   consumer_key: process.env.OPB_CONSUMER_KEY
}) => {
    return axios({
        method: 'POST',
        url: '/my/logins/direct',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `DirectLogin username="${username}",password="${password}",consumer_key="${consumer_key}"`
        }
    })
    .then(({ token }) => {
        axios
        .defaults
        .headers
        .common['Authorization'] = `DirectLogin token="${token}"`
        return { token }
    })
}