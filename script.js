let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = null;

function generateAccountNumber(){
return Math.floor(1000000000 + Math.random()*9000000000);
}

function register(){

let name = document.getElementById("regName").value;
let pass = document.getElementById("regPass").value;

let account = {
name:name,
password:pass,
acc:generateAccountNumber(),
balance:0,
history:[]
};

users.push(account);

localStorage.setItem("users",JSON.stringify(users));

alert("Account Created. Account No: "+account.acc);

}

function login(){

let name = document.getElementById("loginName").value;
let pass = document.getElementById("loginPass").value;

let user = users.find(u=>u.name===name && u.password===pass);

if(user){

currentUser=user;

document.querySelector(".container").style.display="none";
document.getElementById("bankPanel").style.display="block";

document.getElementById("accNumber").innerText=user.acc;
updateUI();

}else{
alert("Invalid Login");
}

}

function updateUI(){

document.getElementById("balance").innerText=currentUser.balance;

let history=document.getElementById("history");
history.innerHTML="";

currentUser.history.forEach(h=>{
let li=document.createElement("li");
li.innerText=h;
history.appendChild(li);
});

}

function deposit(){

let amount=Number(document.getElementById("deposit").value);

currentUser.balance+=amount;

currentUser.history.push("Deposited ₹"+amount);

saveData();

updateUI();

}

function withdraw(){

let amount=Number(document.getElementById("withdraw").value);

if(amount>currentUser.balance){

alert("Insufficient Balance");

return;

}

currentUser.balance-=amount;

currentUser.history.push("Withdraw ₹"+amount);

saveData();

updateUI();

}

function saveData(){

localStorage.setItem("users",JSON.stringify(users));

}

function logout(){

location.reload();

}

function showUsers(){

let list=document.getElementById("users");

list.innerHTML="";

users.forEach(u=>{

let li=document.createElement("li");

li.innerText=u.name+" | Acc:"+u.acc+" | Balance:"+u.balance;

list.appendChild(li);

});

}
