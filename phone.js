const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pass = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

function emaill() {
  if (email.value.includes("@") != true) {
    console.log("not valid email");
    return false;
  } else {
    return true;
  }
}
const numbers = "0123456789";
const alphabets = "abcdefghijklmnopqrstuvwxyz";

function phonenum() {
  if (phone.value.length != 8) {
    console.log("not 8");
    return false;
  } else {
    return true;
  }
}

function passw() {
  if (pass.value.length < 8) {
    console.log("bogino bnaa");
    return false;
  } else {
    return true;
  }
}

submitBtn.addEventListener("click", function () {
  const validEmail = emaill();
  const validNum = phonenum();
  const validPass = passw();

  if (validEmail == true && validNum == true && validPass == true) {
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("phoneNum", phone.value);
    window.localStorage.setItem("password", pass.value);
    window.location.href = "/to.html";
  }
});
