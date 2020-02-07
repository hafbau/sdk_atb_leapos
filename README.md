2020 Open Banking Hackathon ATB/LEAPOS Javascript SDK
===

# Hackathon use ONLY!
# No Tests Written, No Error Handling, No input validations!

This SDK exposes JS functions for all endpoints in the docs [here(you may need to login to access the docs)](https://leapos.ca/home/docs)

It currently only supports the `Berlin` flavour of the API standards.

## Installation

Using NPM

  - SSH
  ```bash
  npm install git+ssh://git@github.com/hafbau/sdk_atb_leapos.git
  ```

  - HTTPS
  ```bash
  npm install git+https://git@github.com/hafbau/sdk_atb_leapos.git
  ```


## Getting Started

```js
const sdk = require('sdk_atb_leapos');

const { token } = await sdk.login({
  username: '<username> e.g. yobanky',
  password: '<password> e.g. twopackstoobig',
  consumer_key: '<your consumer key>'
});

const accounts = await sdk.getBankAccounts({
  params: { BANK_ID: 'theBankId' }
});
```

## Methods Signature

*login*
Takes a credential object (optional if you have the right env variables defined). Returns an object with `token`.

- _With environment variables defined_:

```js
require('dotenv').config()
const sdk = require('sdk_atb_leapos');
// default login credentials will be loaded from process.env
const { token } = await sdk.login();
```

Your `.env` file should include these keys with appropriate values:

```
OPB_USERNAME= 
OPB_PASSWORD=
OPB_CONSUMER_KEY=
```

*remaining methods*

  - All methods take an object as input. The keys in the object are `params`, `body`, `query` and `token`.
  - `token` is a string, the other three are all objects.
  - depending on the method being called, all four keys are optional.

## Method reference

_See methodsList.json_ for methods mapping to endpoints. Then go to the [API docs to learn more.](https://leapos.ca/home/docs)


## Contributing

- Write tests, please!
- Issues and PRs encouraged.

## License
MIT
