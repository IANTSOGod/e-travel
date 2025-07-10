# Étape 1 : Build l'application
FROM node:20 AS builder

WORKDIR /app

# Copie uniquement les fichiers de dépendances pour profiter du cache
COPY package.json package-lock.json* ./

# Installe les dépendances sans node_modules hôte
RUN npm install

# Copie le reste du code source (après install pour profiter du cache)
COPY . .

# Build Next.js en mode production
RUN npm run build


# Étape 2 : Image finale propre
FROM node:20

WORKDIR /app

# Copie uniquement le dossier `.next`, les fichiers statiques et dépendances
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

# Expose le port par défaut
EXPOSE 3000

# Lance l'app Next.js
CMD ["npm", "start"]
