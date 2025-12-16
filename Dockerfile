# 1️⃣ Image officielle Node.js 22
FROM node:22

# 2️⃣ Dossier de travail dans le conteneur
WORKDIR /app

# 3️⃣ Copier uniquement les fichiers de dépendances d'abord (optimisation du cache Docker)
COPY package*.json ./

# 4️⃣ Installer les dépendances
RUN npm install --production

# 5️⃣ Copier le reste des fichiers de l'application
COPY server.js .
COPY index.html .
COPY images ./images

# 6️⃣ Exposer le port de l'application
EXPOSE 3000

# 7️⃣ Commande pour démarrer le serveur
CMD ["node", "server.js"]
