# WakeLab

WakeLab est une application web qui permet de découvrir et de partager des activités pédagogiques.

## Technologies

- HTML
- Tailwind CSS
- JavaScript
- Axios
- API REST

## Backend

Le backend est développé avec Next.js et utilise SQLite pour stocker les activités.

Repository : [WakeLab Backend](https://github.com/99Soufiane99/WakeLab-backend)

## Fonctionnalités

- Afficher les activités.
- Ajouter une activité.
- Enregistrer le nom de l'utilisateur.
- Rechercher et filtrer les activités.

## Installation

1. Cloner le projet.
2. Installer les dépendances :

```bash
npm install
```

3. Démarrer le serveur API :

```bash
npm run dev
```

4. Ouvrir `index.html` avec Live Server.

## API

L'application utilise l'API WakeLab :

```text
http://localhost:3000/api/activites
```