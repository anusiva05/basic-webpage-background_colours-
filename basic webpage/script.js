alert("Welcome to the Login Page!");
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email (e.g., anu4023@gmail.com).");
    return;
  }

  const passPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  if (!passPattern.test(password)) {
    alert("Password must include letters, numbers, and symbols (min 6 characters).");
    return;
  }

  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  alert("Login Successful! Background Changed 🎉");
  console.log("Login Successful for " + name);
});

document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
