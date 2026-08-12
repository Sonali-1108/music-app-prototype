function sendOTP() {
  let phone = document.getElementById("phone").value;

  if (phone.length < 10) {
    alert("Enter valid phone number");
    return;
  }

  alert("OTP sent successfully! (Demo OTP: 1234)");

  document.getElementById("otpSection").style.display = "block";
}

document.getElementById("otp").addEventListener("input", function() {
  if (this.value === "1234") {
    document.getElementById("nameSection").style.display = "block";
  }
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;

  if (!name) {
    alert("Enter your name");
    return;
  }

  localStorage.setItem("username", name);

  alert("Login successful 🎉");

  // Redirect to home page
  window.location.href = "home.html";
});
