🚀 Full-Stack Product Management App
Application CRUD de gestion de produits développée en Java Spring Boot (backend) et React.js (frontend). Ce projet est destiné à démontrer les bonnes pratiques de développement et de gestion de version avec Git pour un entretien technique.

📁 Structure du projet

crud-app/
│
├── crudbackend/         # Backend - Spring Boot (Java)
│   └── ...              # Controllers, Entities, Repositories, Services
│
├── frontend/            # Frontend - React.js
│   └── src/
│       ├── components/  # ProductList, ProductForm
        |__ pages/       #HomePage,ProductForm
│       └── App.js
│
├── README.md            # Ce fichier
└── .gitignore

⚙️ Technologies utilisées
Backend :

Java 17

Spring Boot (Data JPA, Web, Validation)

MySQL

Frontend :

React.js (avec create-react-app)

Axios

CSS modules

🔧 Installation et exécution
Backend (Spring Boot)

cd crudbackend
./mvnw spring-boot:run
Le backend tourne sur http://localhost:8080/api/products.

Frontend (React)

cd frontend
npm install
npm start
Le frontend tourne sur http://localhost:3000.

✨ Fonctionnalités
✅ Affichage de la liste des produits

➕ Ajout d’un nouveau produit

🔄 Mise à jour d’un produit existant

❌ Suppression d’un produit

✅ Validation des champs côté backend et frontend

🔁 Redirections automatiques après ajout/modification

🧪 Bonnes pratiques Git
Les commits ont été faits par étapes :

chore: initialize Spring Boot project

feat: add product entity, repository and controller

feat: setup React app with Axios

feat: implement ProductList and ProductForm components

fix: handle API error responses

style: improve UI with CSS

docs: update README and add screenshot section

📸 Captures d’écran (Frontend)
![Formulaire produit][def]
![Liste des produits][def2]



🗃️ Données de test
Un fichier schema.sql initialise la table product dans la base de données.



[def]: C:\Users\abdelwahhab\Downloads\crudfullstack\screenshots\form.png
[def2]: C:\Users\abdelwahhab\Downloads\crudfullstack\screenshots\productlist.png