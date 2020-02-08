const sdk = require('./index');

(async function() {
  try {
    const token = await sdk.login({
      consumer_key: '7bf934e479b041f2911e019eaa35839b',
      username: 'd833731bfb92ee40d5b2da9',
      password: '8035f21d4f8fb7O+'
    })
    
    console.log('token', token)
    const atmData = {
      "id": "atm-id-123",
      "bank_id": "d833731bfb92ee40d5b2da9aa66cef9",
      "name": "Atm by the Lake",
      "address": {
        "line_1": "No 1 the Road",
        "line_2": "The Place",
        "line_3": "The Hill",
        "city": "Berlin",
        "county": "",
        "state": "Brandenburg",
        "postcode": "13359",
        "country_code": "DE"
      },
      "location": {
        "latitude": 11.45,
        "longitude": 11.45
      },
      "meta": {
        "license": {
          "id": "5",
          "name": "TESOBE"
        }
      },
      "monday": {
        "opening_time": "10:00",
        "closing_time": "18:00"
      },
      "tuesday": {
        "opening_time": "10:00",
        "closing_time": "18:00"
      },
      "wednesday": {
        "opening_time": "10:00",
        "closing_time": "18:00"
      },
      "thursday": {
        "opening_time": "10:00",
        "closing_time": "18:00"
      },
      "friday": {
        "opening_time": "10:00",
        "closing_time": "18:00"
      },
      "saturday": {
        "opening_time": "10:00",
        "closing_time": "18:00"
      },
      "sunday": {
        "opening_time": "10:00",
        "closing_time": "18:00"
      },
      "is_accessible": "true",
      "located_at": "Full service store",
      "more_info": "short walk to the lake from here",
      "has_deposit_capability": "true"
    }
    await sdk.createAtm({ body: atmData })

    const atms = await sdk.getAtms();

    console.log('atms', atms)
  } catch (err) {
    console.log('err :', err);
  }
})()
