const contacts = document.querySelectorAll(".contact");
const chatScreens = document.querySelectorAll(".chat-screen");
const noChat = document.getElementById("no-chat");

contacts.forEach(contact => {
    contact.addEventListener("click", () => {
        const target = contact.getAttribute("href").replace("#", "");

        noChat.style.display = "none";

        chatScreens.forEach(screen => {
            screen.style.display = "none";
        });

        document.getElementById(target).style.display = "flex";
    });
});

// SEARCH BAR

const searchInput = document.getElementById("searchInput");
const contactList = document.querySelectorAll(".contact");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase().trim();

        contactList.forEach(contact => {
            const name = contact.innerText.toLowerCase();

            if (name.includes(filter)) {
                contact.style.display = "flex";   // show
            } else {
                contact.style.display = "none";   // hide
            }
        });
    });
}

// EMOJI PICKER
document.querySelectorAll(".emojiBtn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let emojiBox = btn.parentElement.querySelector(".emoji-box");
        emojiBox.style.display =
            emojiBox.style.display === "block" ? "none" : "block";
    });
});

// Add emoji to input
document.querySelectorAll(".emoji-box span").forEach(emoji => {
    emoji.addEventListener("click", (e) => {
        const footer = e.target.closest(".chat-footer");
        const input = footer.querySelector(".msgInput");
        input.value += e.target.textContent;
    });
});


// SEND BUTTON
document.querySelectorAll(".sendBtn").forEach(sendBtn => {
    sendBtn.addEventListener("click", () => sendMessage(sendBtn));
});

// ENTER KEY MESSAGE SEND
document.querySelectorAll(".msgInput").forEach(input => {
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const btn = input.parentElement.querySelector(".sendBtn");
            sendMessage(btn);
        }
    });
});

// SEND MESSAGE FUNCTION
function sendMessage(button) {
    const footer = button.parentElement;
    const input = footer.querySelector(".msgInput");
    const text = input.value.trim();

    if (text === "") return;

    const chatBody = footer.parentElement.querySelector(".chat-body");

    // Create message bubble
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "sent");

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    messageDiv.innerHTML = `<p>${text}<br><span>${time}</span></p>`;

    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    input.value = "";
}

// THREE DOTS MENU
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function menuAction(action) {
    alert(action);

    if (action === "Clear Chat") {
        const chatBody = document.querySelector(".chat-body.active");
        if (chatBody) chatBody.innerHTML = "";
    }

    document.getElementById("dropdownMenu").style.display = "none";
}

document.addEventListener("click", function (event) {
    const menu = document.getElementById("dropdownMenu");
    const btn = document.querySelector(".menu-btn");

    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.style.display = "none";
    }
});


// SIDEBAR MENU BUTTON (☰)
document.querySelectorAll(".menuBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("open");
    });
});

// CAMERA BUTTON EXAMPLE
function openCamera() {
    alert("Camera feature coming soon!");
}

// CALL BUTTON
function startCall() {
    alert("Calling...");
}
