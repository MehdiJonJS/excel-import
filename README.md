

## Présentation

L'application permet aux utilisateurs de sélectionner un fichier Excel, de le traiter et d'envoyer les données extraites à un backend NestJS qui les stocke dans une base de données MongoDB Atlas. Les données sont normalisées et les doublons sont supprimés avant l'envoi.

## Technologies Utilisées

- **Frontend** : Angular
- **Backend** : NestJS
- **Base de Données** : MongoDB Atlas
- **Librairies** :
  - `xlsx` pour lire les fichiers Excel
  - `axios` pour effectuer des requêtes HTTP
  - `@nestjs/mongoose` pour interagir avec MongoDB
  - `@nestjs/config` pour gérer les variables d'environnement
  - `@nestjs/swagger` pour générer la documentation de l'API



## Installation

### Frontend Angular

1. **Cloner le dépôt** :

   \`\`\`bash
   git clone https://github.com/votre_nom_utilisateur/excel-import.git
   cd excel-import/excel-import-app
   \`\`\`

2. **Installer les dépendances** :

   \`\`\`bash
   npm install
   \`\`\`

3. **Démarrer l'application** :

   \`\`\`bash
   ng serve
   \`\`\`

   L'application frontend sera disponible à l'adresse [http://localhost:4200](http://localhost:4200).

### Backend NestJS

1. **Cloner le dépôt** :

   \`\`\`bash
   git clone https://github.com/votre_nom_utilisateur/excel-import.git
   cd excel-import/excel-backend
   \`\`\`

2. **Installer les dépendances** :

   \`\`\`bash
   npm install
   \`\`\`

3. **Configurer les variables d'environnement** :

   Créez un fichier `.env` à la racine du projet avec les variables suivantes :

   \`\`\`env
   MONGODB_URI=mongodb+srv://root:root@mycluster.ewfr9.mongodb.net/excel-data?retryWrites=true&w=majority&appName=MyCluster
   \`\`\`

4. **Démarrer l'application** :

   \`\`\`bash
   npm run start
   \`\`\`

   L'application backend sera disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## Configuration

### Variables d'Environnement

Pour que l'application puisse se connecter à MongoDB Atlas, vous devez définir la variable d'environnement `MONGODB_URI` dans un fichier `.env` à la racine du projet `excel-backend`.

Exemple de contenu pour `.env` :

\`\`\`env
MONGODB_URI=mongodb+srv://root:root@mycluster.ewfr9.mongodb.net/excel-data?retryWrites=true&w=majority&appName=MyCluster
\`\`\`

## Utilisation

### Frontend

1. **Sélectionner un fichier Excel** :
   - Allez sur [http://localhost:4200](http://localhost:4200).
   - Sélectionnez le fichier `input-xl.xlsx` dans l'input de fichier.
   - Cliquez sur le bouton "Importer".

2. **Vérifier les logs** :
   - Ouvrez la console du navigateur (F12 -> Console).
   - Assurez-vous que les données sont correctement récupérées et traitées.

### Backend

1. **Accéder à Swagger** :
   - Allez sur [http://localhost:3000/api](http://localhost:3000/api).

2. **Tester l'endpoint `/kraken`** :
   - Cliquez sur `POST /kraken`.
   - Cliquez sur `Try it out`.
   - Collez les données suivantes dans le champ `Request body` :

   \`\`\`json
  [
  {
    "name": "Joint",
    "updated_at": "2025-09-14",
    "prices": [2, 8.4],
    "rate": 10,
    "category": "product"
  },
  {
    "name": "Cable",
    "updated_at": "2019-08-01",
    "prices": [3.05, 7.12, 2],
    "rate": 15,
    "category": "product"
  },
  {
    "name": "Fiber2",
    "updated_at": "2015-12-11",
    "prices": [7, 7.7, 7.003],
    "rate": 8,
    "category": "product"
  },
  {
    "name": "Equipment1",
    "updated_at": "1993-12-19",
    "prices": [4],
    "rate": 16,
    "category": "equipment"
  },
  {
    "name": "Equipment2",
    "updated_at": "2001-06-05",
    "prices": [4.02456, 6],
    "rate": -10,
    "category": "equipment"
  },
  {
    "name": "Equipment3",
    "updated_at": "2012-06-12",
    "prices": [8.256, 0],
    "rate": 2,
    "category": "equipment"
  },
  {
    "name": "Equipment4",
    "updated_at": "2020-10-05",
    "prices": [5.604, 5.60],
    "rate": 7,
    "category": "equipment"
  }
]
