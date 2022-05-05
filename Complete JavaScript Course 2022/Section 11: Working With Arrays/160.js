'use strict';

// we want to use findIndex to log out users, to do that we want to remove an account from the accounts array
const accounts = [account1, account2, account3, account4];

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);
  }
});
