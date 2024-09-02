// Regex pour la validation
const phoneRegex = /^\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let id = 0;

// Fonction pour valider un champ de formulaire
function validateField(input, regex = null) {
    // Vérifie si le champ "Nom Complet" est vide
    if (input === document.querySelector('#fullName') && input.value.trim() === '') {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.borderColor = 'red';
        return false;
    }

    // Vérifie si le champ correspond à la regex (si fournie)
    if (regex && !regex.test(input.value)) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.borderColor = 'red';
        return false;
    }

    // Si tout est valide
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    input.style.borderColor = 'green';
    return true;
}


// Fonction pour créer un objet contact à partir des valeurs du formulaire
function createContactObject(form) {
    return {
        id : id,
        fullName: form.querySelector('#fullName').value,
        telephone: form.querySelector('#telephone').value,
        email: form.querySelector('#email').value
    };
}

// Fonction pour sauvegarder l'objet contact dans le localStorage
function saveContact(contact) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Fonction pour réinitialiser le formulaire après enregistrement
function resetForm(form) {
    form.reset();
    form.classList.remove('was-validated');
    form.querySelectorAll('.is-valid').forEach(input => input.classList.remove('is-valid'));
}

// Fonction principale pour gérer la soumission du formulaire
function handleFormSubmit(event, form) {
    const isPhoneValid = validateField(form.querySelector('#telephone'), phoneRegex);
    const isEmailValid = validateField(form.querySelector('#email'), emailRegex);
    const isNameValid = validateField(form.querySelector('#fullName'));

    if (isPhoneValid && isNameValid && (form.querySelector('#email').value === '' || isEmailValid)) {
        event.preventDefault();  // Empêche l'envoi du formulaire par défaut
        const contact = createContactObject(form);
        saveContact(contact);
        id+=1;
        resetForm(form);
        alert('Contact enregistré avec succès !');
    } else {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
}

// Récupérer tous les formulaires avec la classe "needs-validation"
document.querySelectorAll('.validation').forEach(form => {
    form.addEventListener('submit', (event) => handleFormSubmit(event, form));
});
