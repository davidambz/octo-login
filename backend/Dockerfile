# Etapa 1: build da aplicação
FROM node:24.3.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gera os tipos do Prisma
RUN npx prisma generate

# Compila o projeto TypeScript
RUN npm run build

# Etapa 2: imagem final
FROM node:24.3.0-alpine

WORKDIR /app

# Copia apenas os artefatos necessários
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./

ENV NODE_ENV=production

CMD ["node", "dist/main"]
