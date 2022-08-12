async function login() {
  try {
    var username = document.getElementById("usernametext").value;
    var password = document.getElementById("passwordtext").value;
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    let response = await fetch("/api/authentication/login", {
      method: "POST",
      body: formData,
    });
    let myresult = await response.json();
    if (myresult[0].id == "invalid") {
      alert("Invalid");
    } else {
      location.replace("../dashboard");
    }
  } catch (error) {
    alert("An error has occured");
  }
}

async function checkuser() {
  try {
    let response = await fetch("/api/authentication/checkuser", {
      method: "GET",
    });
    let myresult = await response.json();
    if (myresult[0].id == "loggedin") {
      location.replace("../dashboard");
    }
  } catch (error) {
    alert("Error occured hays");
  }
}
setTimeout(checkuser, 500);

function register() {
  location.replace("../register");
}
