# Projet Node.js de base avec authentification et structure MVC

# node_sequelize_starter_kit

Un starter kit de votre backend nodeJS avec quelques configurations de base notemment l'authentification et la strucutre MVC

Ce projet est un exemple de base d'un projet Node.js avec les fonctionnalités suivantes :

* Authentification des utilisateurs
* Structure MVC
* Base de données Sequelize

Ceci vous permet de partir sur une base déjà dans votre code

## Prérequis

* Node.js 18.x ou supérieur
* Git

## Installation

Pour installer le projet, clonez le dépôt Git : 

git clone https://github.com/Just2sire/node_sequelize_starter_kit.git

Accédez au dossier du projet et installez les dépendances :

cd node-starter-kit
npm install

## Configuration

Modifiez le fichier `.env` pour définir les informations de connexion à la base de données.

SERVER_PORT=5000
DB_HOST=localhost
DB_DATABASE=node_starter_kit
DB_USERNAME=root
DB_PASSWORD=
DB_TYPE=mysql
JWT_SECRET=CeQueVousVoulezMettre

## Exécution

Pour exécuter le projet, exécutez la commande suivante :

node index
ou
nodemon index
