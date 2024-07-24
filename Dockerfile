# Dockerfile

# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o container
COPY package*.json ./
COPY src ./src
COPY entrypoint.sh /usr/src/app/entrypoint.sh

# Instale as dependências
RUN npm install

# Torne o entrypoint.sh executável
RUN chmod +x /usr/src/app/entrypoint.sh

# Defina o entrypoint
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

# Exponha a porta que a aplicação usa
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["npm", "run", "dev"]
