const fs = require('fs').promises;
const sdk = require('./index');

(async function() {
  try {
    const token = await sdk.login()
    
    console.log('token', token)

    const accounts = await sdk.getPrivateAccountsAtOneBank({
      params: {
        bank_id: 'd833731bfb92ee40d5b2da9aa66cef9'
      }
    });
    fs.writeFile('data/getPrivateAccountsAtOneBank.json', JSON.stringify(accounts, null, 2))
    console.log('accounts', accounts.length)

    const slicedAccounts = accounts.slice(0, 3);
    const accountsWithTransactions = await Promise.all(slicedAccounts.map(async (acct, i) => {
      const transactionsObj = await sdk.getTransactionsForBankAccount({
        params: {
          account_id: acct.id,
          view_id: 'owner',
          bank_id: 'd833731bfb92ee40d5b2da9aa66cef9'
        }
      });
      console.log("getting transactions for account", i + 1);
      return {
        ...acct,
        ...transactionsObj
      }
    }))
    fs.writeFile(`data/accountsWithtransactions.json`, JSON.stringify(accountsWithTransactions, null, 2))
    console.log('transactions :', accountsWithTransactions.length);
  } catch (err) {
    console.log('err :', err);
  }
})()
