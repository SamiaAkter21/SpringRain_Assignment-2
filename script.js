// Got to top button start

let topButton = document.getElementById("Topbtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Got to top button end //



// Menu showing start
function menuFunction() {
  var x = document.getElementById("menuu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Menu showing end //

// Contact Form

function contactFunction() {
  var x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.querySelector('#msg').textContent = "Close the form";
  } else {
    x.style.display = "none";
    document.querySelector('#msg').textContent = "Want to Contact?"
  }
}

// Contact Form End //