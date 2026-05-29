const socket = io();

function sendMessage() {

    const username =
    document.getElementById("username").value;

    const input =
    document.getElementById("messageInput");

    const message =
    input.value.trim();

    if (username === "" || message === "") {

        alert("Enter username and message");

        return;
    }

    socket.emit(
        "chat message",
        {
            user: username,
            text: message
        }
    );

    input.value = "";
}

socket.on("chat message", (data) => {

    const messages =
    document.getElementById("messages");

    const div =
    document.createElement("div");

    div.classList.add("message");

    div.innerHTML = `
        <strong>${data.user}</strong><br>
        ${data.text}
    `;

    messages.appendChild(div);

    messages.scrollTop =
    messages.scrollHeight;
});

document
.getElementById("messageInput")
.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        sendMessage();

    }

});