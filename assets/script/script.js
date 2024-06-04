"use strict"
const johnSelectorBtn = document.querySelector("#john-selector");
const janeSelectorBtn = document.querySelector("#jane-selector");
const chatHeader = document.querySelector(".chat-header");
const chatMessages = document.querySelector(".chat-messages");
const chatInputForm = document.querySelector(".chat-input-form");
const chatInput = document.querySelector(".chat-input");
const clearChatBtn = document.querySelector(".clear-chat-button");

const chatMessageElement = (message) => `
<div class="message ${message.sender === "jonh" ? "blue-bg" : "gray-bg"}">
<div class="message-sender">${message.sender}</div>
<div class="message-text">${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>
`;

let messageSender = "John";

const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerHTML = `${messageSender} chating...`;
  chatInput.placeholder = `Type here, ${messageSender}`;

 if (name === 'John') {
    johnSelectorBtn.classList.add('active-person')
    janeSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Jane') {
    janeSelectorBtn.classList.add('active-person')
    johnSelectorBtn.classList.remove('active-person')
  }
};

johnSelectorBtn.onclick = () => updateMessageSender('John')
janeSelectorBtn.onclick = () => updateMessageSender('Jane')

const sendMessage = (e) => {
  e.preventDefault();

  const timestamp = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  };
};
