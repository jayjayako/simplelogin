async function register() {
  try {
    var username = document.getElementById("usernametext").value;
    var password = document.getElementById("passwordtext").value;
    var lastname = document.getElementById("lastnametext").value;
    var firstname = document.getElementById("firstnametext").value;
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("lastname", lastname);
    formData.append("firstname", firstname);
    let response = await fetch("/api/register/register", {
      method: "POST",
      body: formData,
    });
    let myresult = await response.json();
    if (myresult[0].id == "invalid") {
      alert("Invalid");
    } else {
      alert("Successfully Registered");
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

function loginpage() {
  location.replace("../login");
}
