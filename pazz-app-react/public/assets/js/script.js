// on scroll change color of navbar
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 140) {
    $(".fixed-top").css("background", "#140d38");
    $(".fixed-top").css("box-shadow", "rgb(0 0 0 / 0%) 0px 0px 0px 0px");
  } else {
    $(".fixed-top").css("box-shadow", "rgb(0 0 0 / 13%) 0px 1px 4px 2px");
    $(".fixed-top").css("background", "#1c164ea6");
  }
});

// show account modal
var modal = document.getElementById("showAccountModal");
var btn = document.getElementById("showAccountBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// copy to clip board
const copyBtn = document.getElementById("copyBtn");
const inputField = document.getElementById("addressInput");
copyBtn.onclick = function () {
  inputField.select();
  document.execCommand("Copy");
};

// Confirm Modal
$("#disclaimerModal").modal({ backdrop: "static", keyboard: false });
$(".closeModal").click(function () {
  $("#disclaimerModal").modal("toggle");
});

// Confirm Terms and service Btn
$(".number").on("click", function () {
  if ($(".number:checked").length > 1) {
    $("#confirmBtn")
      .prop("disabled", false)
      .addClass("confirmBtn")
      .removeClass("is-disabled");
  } else {
    $("#confirmBtn")
      .prop("disabled", true)
      .removeClass("confirmBtn")
      .addClass("is-disabled");
  }
});

// Tooltip display
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  placement: "top";
});
$('[data-toggle="tooltip"]').click(function () {
  $(this).tooltip("hide").attr("data-original-title", "Copied").tooltip("show");
});

// Collapse navbar
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(".navbar-nav>li>.btn-main>button").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
