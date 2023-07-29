const form = document.querySelector("#select-account");
const select = document.querySelector("select");
const body = document.querySelector("body");
const wrapper = document.querySelector("#wrapper");
let selected = [];

const accounts = [
  { id: 1, name: "Alicia", balance: '990.00', pin: "0857" },
  { id: 2, name: "Aurora", balance: '90.00', pin: "9354" },
  { id: 3, name: "Eric", balance: '200.00', pin: "3905" }
];


//local functions region 
function validatePin (id, pin) {
  selected = accounts.filter((account) => {
    return account.id === +id;
  });
  if (selected[0].pin === pin) {
    // alert("Bienvenido");
    wrapper.innerHTML = "";
    renderMenu(selected[0].name);
  } else {
    alert("Your account and pin does not match, please try again");
  }
}
//end local functions region 

//events region 
document.addEventListener('DOMContentLoaded', function(evt) {
  console.log(accounts.length);
  for (let i=0; i<accounts.length;i++) {
    let option = document.createElement('option');
    option.value = accounts[i].id
    option.text = accounts[i].name; 
    select.add(option);
  }
})

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let userId = evt.target['account'].value;

  let pin = prompt("Insert your pin", "");
  if (pin != null) {
    validatePin(userId, pin);
  }
});
//end events region 
