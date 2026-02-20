let currentBalance = 1000;
let transactionCount = 0;
let accountNumber = "";

let balanceDisplay = document.getElementById("balance-display");
let depositButton = document.getElementById("deposit-btn");
let withdrawButton = document.getElementById("withdraw-btn");
let transactionList = document.getElementById("transaction-list");

function handleDeposit() {
    let depositAmount = prompt("Enter amount to deposit:");
    let amount = Number(depositAmount);
    
    currentBalance = currentBalance + amount;
    balanceDisplay.innerText = currentBalance;
    
    transactionCount = transactionCount + 1;
    updateTransactionCounter();
    
    addTransaction("Deposit", amount);
}

depositButton.addEventListener("click", handleDeposit);

function handleWithdraw() {
    let withdrawAmount = prompt("Enter amount to withdraw:");
    let amount = Number(withdrawAmount);
    
    if (amount > currentBalance) {
        alert("Insufficient balance!");
        return;
    } else {
        currentBalance = currentBalance - amount;
        balanceDisplay.innerText = currentBalance;
        
        transactionCount = transactionCount + 1;
        updateTransactionCounter();
        
        addTransaction("Withdraw", amount
