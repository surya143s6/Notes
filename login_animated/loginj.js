const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  let user = inputs[0].value;
  let pass = inputs[1].value;

  if (user === "admin" && pass === "1234") {
    alert("Login Success ✅");
  } else {
    form.classList.add("shake");
    setTimeout(() => {
      form.classList.remove("shake");
    }, 400);
  }
});
