"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 123,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

let currentAccount;

const createUserName = function (acc) {
  acc.forEach((user, idx) => {
    user.userName = user.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserName(accounts);

const calDisplayBalance = function (movement) {
  const balance = movement.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};

const calDisplaySummary = function (movements, interestRate) {
  const income = movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  const outcome = movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  const interest = movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const displayMovements = function (movements  , sort = false) {
  containerMovements.innerHTML = "";

  const move =  sort ? movements.slice().sort((a,b)=> a-b) : movements;
  move.forEach((movement, idx) => {
    const movementType = movement > 0 ? "deposit" : "withdrawal";
    const element = `  <div class="movements__row">
            <div class="movements__type movements__type--${movementType}">
              ${idx + 1} ${movementType}
            </div>
            <div class="movements__date">24/01/2037</div>
            <div class="movements__value">${movement}€</div>
          </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", element);
  });
};

const updateUI = function (account) {
  containerApp.style.display = "grid";
  labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(" ")[0]}!`;
  displayMovements(account.movements);
  calDisplayBalance(account.movements);
  calDisplaySummary(account.movements, account.interestRate);
};

function saveInfo(sender) {
  console.log(sender.movements);
  console.log(sender);
  
  const accountIndex = accounts.findIndex(account => account.userName === sender.userName);
  accounts[accountIndex].movements = sender.movements;
  
  console.log("Account",accounts);
  const movementsArray = accounts.map((account) => account.movements);
  console.log("New Movement",movementsArray);
  localStorage.setItem("bankData", JSON.stringify(movementsArray));

  const storedMovements = JSON.parse(localStorage.getItem("bankData"));
  console.log("Stored Data",storedMovements);
}

function saveUserInfo(account) {
  sessionStorage.setItem("user", JSON.stringify(account));
}

const transferMoney = (sender, recipient, amount) => {
  if (
    amount <= 0 ||
    amount > sender.movements.reduce((acc, cur) => acc + cur, 0)
  ) {
    alert("Invalid amount or insufficient funds!");
    return;
  }
  sender.movements.push(-amount);
  recipient.movements.push(amount);
  saveUserInfo(sender);
  saveInfo(sender);
  updateUI(sender);
};



const grantLoan = (account, amount) => {
      if(amount > 0 && account.movements.some((mov)=> mov >= amount*0.1)){
        account.movements.push(amount);
        setTimeout(() => {
          updateUI(account);
        }, 1000);
        saveInfo();
      }else{
        alert("insufficient funds to grant loan!");
      }
      saveUserInfo(account);
};

const findAccount = (accounts, userName, pin) => {
  return accounts.find(
    (account) => account.pin === pin && account.userName === userName
  );
};

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);
  const account = findAccount(accounts, userName, pin);

  if (account) {
    currentAccount = account;
    saveUserInfo(currentAccount)
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    updateUI(currentAccount);
  } else {
    alert("Invalid credentials!");
  }
});

btnTransfer.addEventListener("click", (event) => {
  event.preventDefault();
  const recipient = accounts.find(
    (account) => account.userName === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  inputTransferTo.value = inputTransferAmount.value = "";
  inputTransferTo.blur();
  inputTransferAmount.blur();
  if (
    !recipient ||
    amount <= 0 ||
    currentAccount.userName === recipient.userName
  ) {
    alert("Invalid recipient or amount!");
    return;
  }
  transferMoney(currentAccount, recipient, amount);
});

btnLoan.addEventListener("click", (event) => {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount <= 0){
    alert("Invalid loan amount!");
    return;
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();

  grantLoan(currentAccount, amount);
});

btnClose.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  const account = findAccount(accounts, userName, pin);

  if (account) {
    accounts = accounts.filter((acc) => acc.userName!== userName);
    sessionStorage.removeItem("user");
    inputCloseUsername.value = inputClosePin.value = "";
    inputClosePin.blur();
    containerApp.style.display = "none";
    alert("Account closed!");
  } else {
    alert("Invalid credentials!");
  }
});


let sorting = false
btnSort.addEventListener("click", (event) => {
  event.preventDefault();
  sorting= !sorting
  console.log(sorting);
  displayMovements(currentAccount.movements, sorting);
});

// for temporary
if (localStorage.getItem("bankData")) {
  const storedMovements = JSON.parse(localStorage.getItem("bankData"));
  console.log("Get Store Moment",storedMovements);
  if (storedMovements) {
    accounts.forEach((account, index) => {
      account.movements = storedMovements[index];
    });
  }
}

if (sessionStorage.getItem("user")) {
  currentAccount = JSON.parse(sessionStorage.getItem("user"));
  console.log(currentAccount);
  updateUI(currentAccount);
  
}



