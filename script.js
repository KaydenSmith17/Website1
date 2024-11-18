// 1. Footer: Display copyright with current year and log today's date to the console
const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; Kayden Smith, ${currentYear}`;
console.log("Today's date: " + new Date().toLocaleDateString());

// 2. Portfolio Greeting: Greet based on the time of day
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();
let greetingMessage = "";
let className = "";

// Conditional greeting based on time
if (currentHour < 12) {
    greetingMessage = "Good morning!";
    className = "morning";
} else if (currentHour < 17) {
    greetingMessage = "Good afternoon!";
    className = "afternoon";
} else {
    greetingMessage = "Good evening!";
    className = "evening";
}

greetingElement.textContent = greetingMessage;
greetingElement.classList.add(className);

// Styling classes for greeting (can be defined in CSS or added dynamically via JS)
document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
        .morning {
            background-color: #ffcccb; /* Light red */
            color: #333;
            padding: 10px;
        }
        .afternoon {
            background-color: #ffeb99; /* Light yellow */
            color: #333;
            padding: 10px;
        }
        .evening {
            background-color: #003366; /* Dark blue */
            color: #fff;
            padding: 10px;
        }
    </style>
    `
);

// 3. Alert Button: Show an alert when clicked
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", () => {
    alert("Hello world!");
});

// 4. Hover Button: Change label on hover
alertButton.addEventListener("mouseover", () => {
    alertButton.textContent = "Hovered!";
});
alertButton.addEventListener("mouseout", () => {
    alertButton.textContent = "Click Me";
});

// 5. Populate List with Even and Odd
const numbersList = document.getElementById("numbers");

for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "Even" : "Odd";
    numbersList.appendChild(listItem);
}

