const menu = document.querySelector("#menu");

const actions = {
  checkBalance: 'Check Balance',
  deposit: 'Deposit',
  withdraw: 'Withdraw',
  exit: 'Exit'
}

function renderMenu (nombre) {
  let menu = `
  <div>
    <h1>Welcome ${nombre}</h1>
    <div class="row">
      <div class="col">
        <a class="btn btn-success" href="#" role="button" onClick="checkBalance()">Balance</a>
      </div>
      <div class="col">
        <a class="btn btn-warning" href="#" role="button" onClick="deposit()">Deposit</a>
      </div>
      <div class="col">
        <a class="btn btn-info" href="#" role="button" onClick="withdraw()">Withdraw</a>
      </div>
      <div class="col">
        <a class="btn btn-danger" href="#" role="button" onClick="exit()">Exit</a>
      </div>
    </div>
  </div>`;

  wrapper.innerHTML = menu;
  checkBusinessRules();
};

function checkBusinessRules() {
  let actualBalance = parseFloat(selected[0].balance);
  if(actualBalance === 990) {
    let depositButton = document.getElementsByClassName('btn-warning');
    depositButton[0].classList.add('disabled');
    menu.innerHTML = `Your balance is:  $${selected[0].balance}, you cannot deposit for now`
  } else if (actualBalance === 10){
    let withdrawButton = document.getElementsByClassName('btn-info');
    withdrawButton[0].classList.add('disabled');
    menu.innerHTML = `Your balance is:  $${selected[0].balance}, you cannot withdraw for now`
  } else {
    let depositButton = document.getElementsByClassName('btn-warning');
    let withdrawButton = document.getElementsByClassName('btn-info');
    depositButton[0].classList.remove('disabled');
    withdrawButton[0].classList.remove('disabled');
    menu.innerHTML = '';
  }
};

const checkBalance = () => {
  menu.innerHTML = ""
  menu.innerHTML = `<p>Your balance is: $${selected[0].balance}</p>`
};

const deposit = () => {
  menu.innerHTML = ""
  let amount = prompt("Amount to deposit: ", "");
  let maxBalance = 990 - parseFloat(selected[0].balance);
  let tempBalance = parseFloat(selected[0].balance) + parseFloat(amount);
  if (tempBalance > 990) {
    alert('Your account cannot have more than $990, the maximum deposit available is: ' + maxBalance);
    menu.innerHTML = `Your balance is:  $${selected[0].balance}, if you want to deposit please try another amount`
  } else {
    selected[0].balance = tempBalance.toFixed(2)
    menu.innerHTML = `Your new balance is:  $${selected[0].balance}`
  }
  checkBusinessRules();
};

const withdraw = () => {
  menu.innerHTML = ""
  let amount = prompt("Amount to withdraw: ", "");
  let tempBalance = parseFloat(selected[0].balance) - parseFloat(amount);
  if (tempBalance < 10) {
    alert('Your account cannot have less than $10, please try with another amount');
    menu.innerHTML = `Your balance is:  $${selected[0].balance}, if you want to withdraw please try another amount`
  } else {
    selected[0].balance = tempBalance.toFixed(2)
    menu.innerHTML = `Your new balance is:  $${selected[0].balance}`
  }
  checkBusinessRules();
};

const exit = () => {
  location.reload();
}