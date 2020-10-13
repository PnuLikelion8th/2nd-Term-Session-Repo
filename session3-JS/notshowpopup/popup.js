function setCookie(name, value, expiredays) {
  var date = new Date();
  date.setDate(date.getDate() + expiredays);
  document.cookie =
    escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString();
}

window.addEventListener("load", function () {
  console.log(document.cookie);
  let cookieCheck = getCookie("popupYN");
  if (cookieCheck != "N") {
    document.querySelector("#popupwindow").classList.toggle("show");
  }
});
document.querySelector("#x-btn").addEventListener("click", closePopup);
function getCookie(name) {
  let cookie = document.cookie;
  if (document.cookie != "") {
    let cookie_array = cookie.split("; ");
    for (let index in cookie_array) {
      let cookie_name = cookie_array[index].split("=");
      if (cookie_name[0] == name) {
        return cookie_name[1];
      }
      // console.log(cookie_name[1])
    }
  }
  return;
}
function popup_close() {
  document.querySelector("#popupwindow").classList.toggle("show");
}

function closePopup() {
  console.log("asdasdas");
  console.log(document.getElementById("check").value);
  if (document.getElementById("check").value) {
    console.log("이렇게되면 팝업창을 오래 안보여 주는거겠지");
    setCookie("popupYN", "N", 1);
    document.querySelector("#popupwindow").classList.toggle("show");
  }
}
