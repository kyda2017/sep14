const form = document.querySelector("#waitlist-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email");
  message.textContent = `Thanks — ${email} is on the early-access list.`;
  form.reset();
});
