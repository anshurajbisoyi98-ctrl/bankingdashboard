// This file contains all the JavaScript code for the banking dashboard
// JavaScript makes the webpage interactive and allows us to respond to user actions

// Variable to store the current account balance
// We use 'let' because the balance will change when we deposit or withdraw money
// We start with an initial balance of 1000
// A variable is like a box that holds a value - in this case, it holds a number
let currentBalance = 1000;

// Variable to store the transaction counter
// This counts how many transactions (deposits, withdrawals, transfers) have been made
let transactionCount = 0;

// Variable to store the generated account number
// This will be a random number generated when the page loads
let accountNumber = "";

// Get the balance display element from the HTML page
// This is the paragraph element that shows the balance to the user
// We use getElementById to find the element with id="balance-display"
// getElementById is a DOM method that searches the webpage for an element with a specific id
// DOM stands for Document Object Model - it's how JavaScript sees and interacts with HTML
let balanceDisplay = document.getElementById("balance-display");

// Get the deposit button element from the HTML page
// This is the button that users click to deposit money
// We use getElementById to find the element with id="deposit-btn"
// This DOM method gives us access to the button so we can detect when it's clicked
let depositButton = document.getElementById("deposit-btn");

// Get the withdraw button element from the HTML page
// This is the button that users click to withdraw money
// We use getElementById to find the element with id="withdraw-btn"
// This DOM method gives us access to the button so we can detect when it's clicked
let withdrawButton = document.getElementById("withdraw-btn");

// Get the transaction list element from the HTML page
// This is the unordered list (ul) where we will add transaction history items
// We use getElementById to find the element with id="transaction-list"
// This DOM method gives us access to the list so we can add new items to it dynamically
let transactionList = document.getElementById("transaction-list");

// Function to handle deposit transactions
// This function runs when the user clicks the deposit button
// A function is a reusable block of code that performs a specific task
function handleDeposit() {
    // Ask the user to enter the amount they want to deposit
    // The prompt() function shows a dialog box and returns the user's input as a string
    // A string is text, like "500" - not yet a number we can do math with
    let depositAmount = prompt("Enter amount to deposit:");
    
    // Convert the input string to a number
    // The Number() function changes text like "500" into the actual number 500
    // This is important because we need to do math with the amount
    // Without this conversion, "500" + 1000 would give us "5001000" instead of 1500
    let amount = Number(depositAmount);
    
    // Add the deposit amount to the current balance
    // We use addition (+) to increase the balance
    // This updates the value stored in our currentBalance variable
    currentBalance = currentBalance + amount;
    
    // Update the balance display on the webpage
    // We use innerText to change what the user sees on the screen
    // innerText is a DOM property that lets us change the text content of an HTML element
    // This makes the new balance appear immediately without reloading the page
    balanceDisplay.innerText = currentBalance;
    
    // Increment the transaction counter
    // This increases the count by 1 each time a deposit is made
    transactionCount = transactionCount + 1;
    
    // Update the transaction counter display
    updateTransactionCounter();
    
    // Add this transaction to the history list
    // We call the addTransaction function and pass "Deposit" as the type and the amount
    // This will create a new list item showing this deposit in the transaction history
    addTransaction("Deposit", amount);
}

// Add event listener to the deposit button
// addEventListener tells the button to run the handleDeposit function when it is clicked
// An event listener "listens" for user actions like clicks, and responds to them
// The first parameter "click" means we are listening for click events
// The second parameter handleDeposit is the function that will run when the button is clicked
// This is how we connect user actions (clicking) to our code (the function)
depositButton.addEventListener("click", handleDeposit);

// Function to handle withdraw transactions
// This function runs when the user clicks the withdraw button
// A function is a reusable block of code that performs a specific task
function handleWithdraw() {
    // Ask the user to enter the amount they want to withdraw
    // The prompt() function shows a dialog box and returns the user's input as a string
    // A string is text, like "200" - not yet a number we can do math with
    let withdrawAmount = prompt("Enter amount to withdraw:");
    
    // Convert the input string to a number
    // The Number() function changes text like "200" into the actual number 200
    // This is important because we need to do math with the amount
    // Without this conversion, we couldn't compare or subtract properly
    let amount = Number(withdrawAmount);
    
    // Check if the withdraw amount is more than the current balance
    // We use an if-else statement to make a decision based on a condition
    // The condition (amount > currentBalance) checks if we have enough money
    // If the amount is too large, we show an error and stop
    if (amount > currentBalance) {
        // Show an error message to the user
        // The alert() function displays a popup message
        // This tells the user they don't have enough money to withdraw
        alert("Insufficient balance!");
        // Return stops the function here, so no money is withdrawn
        // This prevents the code below from running
        return;
    } else {
        // If we have enough money, subtract the amount from the current balance
        // We use subtraction (-) to decrease the balance
        // This updates the value stored in our currentBalance variable
        currentBalance = currentBalance - amount;
        
        // Update the balance display on the webpage
        // We use innerText to change what the user sees on the screen
        // innerText is a DOM property that lets us change the text content of an HTML element
        // This makes the new balance appear immediately without reloading the page
        balanceDisplay.innerText = currentBalance;
        
        // Increment the transaction counter
        // This increases the count by 1 each time a withdrawal is made
        transactionCount = transactionCount + 1;
        
        // Update the transaction counter display
        updateTransactionCounter();
        
        // Add this transaction to the history list
        // We call the addTransaction function and pass "Withdraw" as the type and the amount
        // This will create a new list item showing this withdrawal in the transaction history
        addTransaction("Withdraw", amount);
    }
}

// Add event listener to the withdraw button
// addEventListener tells the button to run the handleWithdraw function when it is clicked
// An event listener "listens" for user actions like clicks, and responds to them
// The first parameter "click" means we are listening for click events
// The second parameter handleWithdraw is the function that will run when the button is clicked
// This is how we connect user actions (clicking) to our code (the function)
withdrawButton.addEventListener("click", handleWithdraw);

// Function to add a transaction to the history list
// This function takes two parameters: type (like "Deposit" or "Withdraw") and amount (the money amount)
// Parameters are values we pass into a function so it can use them
// It creates a new list item and adds it to the transaction history
function addTransaction(type, amount) {
    // Create a new list item element
    // document.createElement is a DOM method that makes a new HTML element
    // We pass "li" to create a list item that will go inside our ul (unordered list)
    // This creates the element in memory, but it's not visible on the page yet
    let newTransaction = document.createElement("li");
    
    // Set the text content of the list item
    // We use string concatenation with the + operator to combine the type, a colon, a space, and the amount
    // String concatenation means joining text together
    // For example: "Deposit" + ": " + 500 becomes "Deposit: 500"
    // innerText is a DOM property that sets what text appears inside the element
    newTransaction.innerText = type + ": " + amount;
    
    // Add the new list item to the transaction list
    // appendChild is a DOM method that adds a new element as a child of another element
    // This takes our new list item and puts it inside the transactionList element
    // Now the transaction appears on the webpage in the history section
    // This is how we dynamically add content to the page without reloading
    transactionList.appendChild(newTransaction);
}


// ========================================
// NEW FEATURES - MY ACCOUNT, TRANSFER, LOGOUT, DARK MODE
// ========================================

// Function to show the My Account section
// This function runs when user clicks "My Account" in the navbar
function showMyAccount() {
    // Get the My Account section element from the page
    let accountSection = document.getElementById("my-account-section");
    // getElementById finds the element with id="my-account-section"
    
    // Show the section by changing display style to "block"
    // display: none means hidden, display: block means visible
    accountSection.style.display = "block";
    // .style.display is a DOM property that controls if an element is visible
    
    // Get the username from localStorage
    // localStorage.getItem retrieves saved data using a key
    let savedUsername = localStorage.getItem("username");
    
    // Update the username display in the account section
    let usernameDisplay = document.getElementById("account-username");
    usernameDisplay.innerText = savedUsername;
    // innerText changes the text content of the element
    
    // Update the profile photo with the username
    // We use UI Avatars API to generate a profile picture with user's initials
    let profileImage = document.getElementById("profile-image");
    profileImage.src = "https://ui-avatars.com/api/?name=" + savedUsername + "&size=150&background=FF6600&color=fff";
    // This creates a profile picture with the username's initials
    // size=150 means 150x150 pixels
    // background=FF6600 is orange color
    // color=fff is white text
    
    // Update the account number display
    let accountNumberDisplay = document.getElementById("account-number");
    accountNumberDisplay.innerText = accountNumber;
    
    // Update the balance display in the account section
    let accountBalanceDisplay = document.getElementById("account-balance-display");
    accountBalanceDisplay.innerText = currentBalance;
}

// Function to hide the My Account section
// This function runs when user clicks "Close" button in My Account section
function hideMyAccount() {
    // Get the My Account section element from the page
    let accountSection = document.getElementById("my-account-section");
    
    // Hide the section by changing display style to "none"
    accountSection.style.display = "none";
    // display: none makes the element invisible
}

// Function to show contact popup
// This function runs when user clicks "Contact" in the navbar
function showContactPopup() {
    // Show an alert with contact information
    // alert() displays a popup message
    alert("📞 Contact Mirai Bank\n\nCustomer Service: 1800-123-4567\nEmail: support@miraibank.com\n\nAvailable 24/7 for your assistance!");
    // \n creates a new line in the message
    // This shows a simple popup with phone number and email
}

// Function to log out the user
// This function runs when user clicks "Logout" in the navbar
function logoutUser() {
    // Remove the username from localStorage
    // This deletes the saved username so user has to login again
    localStorage.removeItem("username");
    // removeItem deletes data from localStorage using the key
    
    // Redirect to the login page
    window.location.href = "index.html";
    // window.location.href changes the current page
    // This takes the user back to the login page
}

// Function to update date and time display
// This function updates the date and time shown in the top right corner
function updateDateTime() {
    // Get the current date and time
    let now = new Date();
    // new Date() creates a date object with current date and time
    
    // Get the date string (like "Fri Feb 20 2026")
    let dateString = now.toDateString();
    
    // Get the time string (like "14:30:45")
    let timeString = now.toLocaleTimeString();
    // toLocaleTimeString() formats the time based on user's location
    
    // Combine date and time
    let dateTimeString = dateString + " | " + timeString;
    
    // Update the display on the page
    let dateTimeDisplay = document.getElementById("datetime-display");
    dateTimeDisplay.innerText = dateTimeString;
    // innerText changes the text content of the element
}

// Function to update the transaction counter display
// This function updates the text showing total number of transactions
function updateTransactionCounter() {
    // Get the transaction counter element
    let counterDisplay = document.getElementById("transaction-counter");
    
    // Update the text to show the current count
    counterDisplay.innerText = "Total Transactions: " + transactionCount;
    // We use string concatenation with + to combine text and number
}

// Function to generate a random account number
// This creates a fake account number for display purposes
function generateAccountNumber() {
    // Generate a random number between 1000000000 and 9999999999
    // Math.random() gives a random decimal between 0 and 1
    // We multiply by 9000000000 to get a range
    // We add 1000000000 to shift the range up
    // Math.floor() removes the decimal part to get a whole number
    let randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    
    // Convert the number to a string and return it
    return randomNumber.toString();
    // toString() converts a number to text
}

// Function to initialize the dashboard when page loads
// This function runs automatically when the dashboard page opens
function initializeDashboard() {
    // Check if user is logged in by looking for username in localStorage
    let savedUsername = localStorage.getItem("username");
    // getItem retrieves saved data from localStorage
    
    // If no username is found, redirect to login page
    if (savedUsername === null || savedUsername === "") {
        // User is not logged in, send them to login page
        window.location.href = "index.html";
        return;
        // return stops the function here
    }
    
    // If user is logged in, show personalized welcome message
    let welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.innerText = "Welcome back, " + savedUsername + "!";
    // We use string concatenation to add the username to the message
    
    // Generate and store account number
    accountNumber = generateAccountNumber();
    
    // Update date and time display immediately
    updateDateTime();
    
    // Update date and time every second (1000 milliseconds = 1 second)
    // setInterval runs a function repeatedly at specified intervals
    setInterval(updateDateTime, 1000);
    // This makes the clock update every second so time is always current
}

// Run the initialization function when the page loads
// This ensures the dashboard is set up correctly when user arrives
initializeDashboard();
