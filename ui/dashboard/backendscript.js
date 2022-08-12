const socket = io();

socket.on("chat-message", (msg) => {
  alert(msg);
  console.log(msg);
});

async function dashboard() {
  try {
    let response = await fetch("/api/user1/dashboard/dashboard", {
      method: "GET",
    });
    let myresult = await response.json();
    if (myresult[0].id == "invalid") {
      location.replace("../login");
    } else {
      document.getElementById("titleid").innerHTML = myresult[0].name;
    }
  } catch (error) {
    alert("Error occured hays");
  }
}

function logout() {
  fetch("/api/authentication/logout", {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  location.replace("../login");
}

setTimeout(dashboard, 500);
