const button = document.querySelector("button");
const present = [];
const absent = [];
const nsp = [];

// on écoute la validation du form
button.addEventListener("click", function() {
  // on récupère les valeurs des inputs
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let name = firstName + lastName;
  let promo = document.getElementById("promo").value;
  let attend = document.getElementById("attend").value;
  let cake = document.getElementById("cake").value;
  let message = document.getElementById("message").value;
  let reponse = [name, promo, attend, cake, message];

  if (attend === "oui") {
    present.push(reponse);
  } else if (attend === "non") {
    absent.push(reponse);
  } else {
    nsp.push(reponse);
  }
});
