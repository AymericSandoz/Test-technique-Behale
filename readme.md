# Application de fitness développé dans le cadre d'une recherche d'alternance.

## Installation

Cloner le repo :

```
git clone https://github.com/AymericSandoz/Test-technique-Behale.git
```

### Partie FrontEnd

charger la partie front end :

```
cd my-app
```

Supprimer le fichier package-lock.json

```
npm install

npm start
```

installez les packages suivants :

```
npm i -s react-fontawesome  axios  moment react-datepicker react-router-dom sass
```

### Partie Backend

charger la partie front end :

```
cd server
```

Supprimez le fichier package-lock.json ainsi que le dossier node_modules

Installer NPM puis lancer le serveur

```
npm install

npm start
```

installez les packages suivants :

```
npm i -s express mongoose nodemon dotenv cors body-parser
```

Créer un fichier .env dans dotenv qui contient l'url de connexion à la BDD. Contactez moi pour avoir cet Url.

```
cd config
```

Ajouter et remplir .env

Installer NPM puis lancer le serveur

```
npm install
nodemon index
```

# Description

Ce projet a été réalisé en 1 journée dans le cadre d'une recherche d'alternance pour la société Behale. La slack utilisé est NodeJs, React et Mongo Db.
Il s'agit d'une application de fitness permettant à l'utiliser de plannifier, compléter et/ou annuler des séances.

#### Remarques. Il reste beaucoup de points à améliorer, quelques examples :

- Responsive non mis en place
- Design et nottament choix des couleurs plus harmonieux
- Gestion des edge Case (ex : Utilisateur ne peut compléter qu'une fois une séance etc)
- Plus d'information pour l'utilisateur. Par exemple lorsqu'il complète ou annule séance.
