function myFunction() {
  var x = document.querySelector(".menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

function toggle() {
  var x = document.querySelector('.description');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle2() {
  var x = document.querySelector('.description2');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle3() {
  var x = document.querySelector('.description3');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggle4() {
  var x = document.querySelector('.description4');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function send() {
  var textinput = document.querySelector(".mail-field");
  if (textinput.value.indexOf("@") == -1) {
    alert("Email måste innehålla @");
  }
}