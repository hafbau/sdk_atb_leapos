const sdk = require('./index');

(async function() {
  const token = await sdk.login({
    consumer_key: '7bf934e479b041f2911e019eaa35839b',
    username: 'd833731bfb92ee40d5b2da9',
    password: '8035f21d4f8fb7O+'
  })
  console.log('token', token)
})()
