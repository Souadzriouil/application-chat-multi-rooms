var socket = io();

var usernameInput = document.getElementById("username");
var loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  socket.emit("createUser", usernameInput.value);
});
