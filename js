// Greeting based on time of day
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();
let greetingMessage = "";
let className = "";

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

// Styling classes for greeting
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

// Display current year in the footer and log today's date
const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; Kayden Smith, ${currentYear}`;
console.log(`Today's date: ${new Date().toLocaleDateString()}`);

// Alert button functionality
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", () => {
    alert("Hello world!");
});

// Hover button functionality
alertButton.addEventListener("mouseover", () => {
    alertButton.textContent = "Hovered!";
});
alertButton.addEventListener("mouseout", () => {
    alertButton.textContent = "Click Me";
});

// Populate ordered list with even/odd items
const numbersList = document.getElementById("numbers");
for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "Even" : "Odd";
    numbersList.appendChild(listItem);
}

