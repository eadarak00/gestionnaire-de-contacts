/**
 * Modèle Regex pour la validation du numéro de téléphone (9 chiffres).
 * @type {RegExp}
 */
const phoneRegex = /^\d{9}$/;

/**
 * Modèle Regex pour la validation de l'email (format de base d'un email).
 * @type {RegExp}
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Identifiant unique pour les contacts.
 * @type {number}
 */
let id = 0;

/**
 * Valide un champ de formulaire en fonction du regex fourni ou vérifie si le champ n'est pas vide.
 * Ajoute les classes et styles de validation appropriés.
 * 
 * @param {HTMLInputElement} input - Le champ à valider.
 * @param {RegExp|null} [regex=null] - Le modèle regex à utiliser pour la validation du champ.
 * @returns {boolean} - Retourne true si le champ est valide, sinon false.
 */
function validateField(input, regex = null) {
    // Vérifie si le champ "Nom Complet" est vide
    if (input === document.querySelector('#fullName') && input.value.trim() === '') {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.borderColor = 'red';
        return false;
    }

    // Valide avec le regex si fourni
    if (regex && !regex.test(input.value)) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.borderColor = 'red';
        return false;
    }

    // Si le champ est valide
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.style.borderColor = 'green';
    return true;
}

/**
 * Crée un objet contact à partir des données du formulaire.
 * 
 * @param {HTMLFormElement} form - Le formulaire contenant les données du contact.
 * @returns {Object} - L'objet contact avec id, fullName, telephone et email.
 */
function createContactObject(form) {
    return {
        id: id,
        fullName: form.querySelector('#fullName').value,
        telephone: form.querySelector('#telephone').value,
        email: form.querySelector('#email').value
    };
}

/**
 * Sauvegarde l'objet contact dans le localStorage.
 * 
 * @param {Object} contact - L'objet contact à sauvegarder.
 */
function saveContact(contact) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

/**
 * Réinitialise le formulaire et retire les styles de validation.
 * 
 * @param {HTMLFormElement} form - Le formulaire à réinitialiser.
 */
function resetForm(form) {
    form.reset();
    form.classList.remove('was-validated');
    form.querySelectorAll('.is-valid').forEach(input => input.classList.remove('is-valid'));
}

/**
 * Gère la soumission du formulaire, valide les champs, crée un contact, le sauvegarde et réinitialise le formulaire.
 * 
 * @param {Event} event - L'objet de l'événement de soumission.
 * @param {HTMLFormElement} form - Le formulaire à gérer lors de la soumission.
 */
function handleFormSubmit(event, form) {
    const isPhoneValid = validateField(form.querySelector('#telephone'), phoneRegex);
    const isEmailValid = validateField(form.querySelector('#email'), emailRegex);
    const isNameValid = validateField(form.querySelector('#fullName'));

    if (isPhoneValid && isNameValid && (form.querySelector('#email').value === '' || isEmailValid)) {
        event.preventDefault();  // Empêche l'envoi par défaut du formulaire
        const contact = createContactObject(form);
        saveContact(contact);
        id += 1;
        resetForm(form);
        alert('Contact enregistré avec succès !');
    } else {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
}

// Associe le gestionnaire de soumission aux formulaires ayant la classe "needs-validation"
document.querySelectorAll('.validation').forEach(form => {
    form.addEventListener('submit', (event) => handleFormSubmit(event, form));
});
