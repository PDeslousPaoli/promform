import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xhfbydwixbaamsgmbfld.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById("register");
let firstName, lastName, promo, attend, cake, message, fullName;

// on écoute la validation du form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
  console.log('clic clic');
  // on récupère les valeurs des inputs
  firstName = document.getElementById("first-name").value;
  lastName = document.getElementById("last-name").value;
  promo = document.getElementById("promo").value;
  attend = document.querySelector('input[name="attend"]:checked').value;
  cake = document.querySelector('input[name="cake"]:checked').value;
  message = document.getElementById("message").value;
  fullName = firstName + " " + lastName;
  console.log("name:", fullName);

  addRegistration()
});

async function addRegistration() {
  try {
    const registration = {
      first_name: firstName,
      last_name: lastName,
      name: fullName,
      promotion: promo,
      attendance: attend,
      cake: cake,
      message: message,
    };
    console.log("infos:", registration);
    const { data, error } = await supabase
      .from("registrations")
      .insert(registration);
    //redirect to new event page (trouver comment faire en vanilla)
    // await navigateTo(`/mapage`);
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  }
}