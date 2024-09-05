# Gestionnaire de Contacts

Ce projet est une application web pour gérer des contacts. Les utilisateurs peuvent ajouter, afficher, et modifier des contacts. Les contacts sont stockés localement dans le `localStorage` du navigateur.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)

## Fonctionnalités

- Ajouter un contact avec les champs : Nom Complet, Téléphone (9 chiffres), Email.
- Valider les champs du formulaire en temps réel.
- Afficher les contacts dans un tableau.
- Modifier les contacts existants via un modal.
- Les contacts sont sauvegardés dans le `localStorage` pour une persistance des données.

## Technologies Utilisées

- **HTML5** : Structure de la page.
- **CSS3** : Styles et mise en page.
- **Bootstrap** : Framework CSS pour des composants réactifs et un design moderne.
- **Font Awesome** : Icônes pour améliorer l'interface utilisateur.
- **JavaScript** : Validation des formulaires, gestion des contacts, interactions avec le DOM.

## Prérequis

Aucun prérequis particulier n'est nécessaire pour exécuter ce projet. Il suffit d'avoir un navigateur web moderne.


## Installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/eadarak00/gestionnaire-contacts.git
   ```

2. **Accédez au répertoire du projet** :
   ```bash
   cd gestionnaire-contacts
   ```

3. **Ouvrez le fichier `index.html` dans un navigateur pour voir l'application en action**.

## Utilisation

1. **Ajouter un contact** :
   - Accédez à la page "Ajouter un contact".
   - Remplissez le formulaire avec le Nom Complet, le Téléphone et l'Email.
   - Cliquez sur le bouton "Ajouter" pour enregistrer le contact.

2. **Voir les contacts** :
   - Accédez à la page "Lister Contacts".
   - Vous verrez une liste de tous les contacts enregistrés.

3. **Modifier un contact** :
   - Cliquez sur le bouton de modification d'un contact dans la liste.
   - Modifiez les informations du contact dans le modal et enregistrez les modifications.

## Structure du Projet

```
.
├── index.html
├── pages
│   ├── Ajouter_contact.html
│   └── lister_contacts.html
├── styles
│   ├── navbar.css
│   ├── footer.css
│   ├── contacts.css
│   └── ajout.css
├── js
│   ├── contacts.js
│   └── validation.js
└── img
    └── Contact.svg
```

- `index.html` : Page d'accueil.
- `Ajouter_contact.html` : Page pour ajouter un nouveau contact.
- `lister_contacts.html` : Page pour afficher la liste des contacts.
- `styles/` : Répertoire contenant les fichiers CSS.
- `js/` : Répertoire contenant les fichiers JavaScript.
- `img/` : Répertoire contenant les images.


## Auteurs

- **El Hadji Abdou Drame** - *Développeur principal* - [Votre profil GitHub](https://github.com/eadarak00)
- **El Hadji Abdou Drame** - *Profil linkedIn* - [Votre profil GitHub](https://www.linkedin.com/in/elhadji-abdou-drame/)