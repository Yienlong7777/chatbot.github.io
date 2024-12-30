// Get the elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Simulated bot responses
const botResponses = {
  hi: "Hello! How can I assist you today?😒",
  hello: "Hi there! How can I help you?",
  "how are you": "I'm just a bot, but I'm doing well. How can I help you?",
  bye: "Goodbye! Have a great day!",
  what: "my name is yean long ",
  មានលុយអត់: "អត់មានទេ",
  ឆ្លងឆ្នាំទៅណា: "ឆ្លងឆ្នាំដេកផ្ទះ",
  មានសង្សារនៅ: "ធ្លាប់មានតែគេបោកបាត់ហើយ",
  តើអ្នកឈ្មោះអី: "ខ្ញុំឈ្មោះ យៀន ឡុង",
  រាល់ថ្ងៃអ្នករៀននៅឯណា: "ខ្ញុំរៀននៅRUPP",
  តើអ្នករៀនឆ្នាំទីប៉ុន្មានហើយ: "ខ្ញុំរៀនឆ្នាំទី៤ហើយបាទ",
  default: "Sorry, I didn't understand that. Can you please rephrase?",
};

// Function to display a message in the chat box
function displayMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  if (sender === "user") {
    messageDiv.classList.add("user-message");
  } else {
    messageDiv.classList.add("bot-message");
  }
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle user input and bot response
function handleUserMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return; // Do nothing if input is empty

  // Display user message
  displayMessage(userMessage, "user");

  // Generate bot response (simple matching logic for demonstration)
  const botResponse =
    botResponses[userMessage.toLowerCase()] || botResponses["default"];

  // Display bot response after a short delay
  setTimeout(() => {
    displayMessage(botResponse, "bot");
  }, 1000);

  // Clear input field
  userInput.value = "";
}

// Listen for the send button click event
sendBtn.addEventListener("click", handleUserMessage);

// Optionally, listen for Enter key press to submit message
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleUserMessage();
  }
});
