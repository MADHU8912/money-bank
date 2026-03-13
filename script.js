let balance = 0;

function createAccount(){
let name = document.getElementById("name").value;
alert("Account Created for " + name);
}

function depositMoney(){
let amount = Number(document.getElementById("deposit").value);
balance += amount;
document.getElementById("balance").innerText = balance;
}

function withdrawMoney(){
let amount = Number(document.getElementById("withdraw").value);

if(amount > balance){
alert("Insufficient Balance");
}else{
balance -= amount;
}

document.getElementById("balance").innerText = balance;
} 
