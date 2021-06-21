# teste-ernetwork

# Sobre o projeto
Essa aplicação é um CRUD como teste.

# Tecnologias utilizadas
## Back end
- Node.js
- Express
- Sequelize
- mysql

## Front end
- Reactjs

# Como executar o projeto

Pré-requisitos: npm, postman e mysql instalados 

```bash
# crie uma base de dados no mysql com o nome de sua preferência

# clone o repositório
git clone https://github.com/pcoliveira98/teste-ernetwork

# entre na pasta backend e substitua o nome do arquivo ".env.example" para apenas ".env"

# entre nesse mesmo arquivo ".env" e configure as variáveis de ambiente de acordo com sua preferência

# execute o comando para a instalar as dependências do projeto
npm install

# execute o comando para criar as tabelas no seu banco de dados
npx sequelize db:migrate

# execute o projeto
npm run dev

# entre na pasta frontend e execute o camando
npm install

# e por fim rode o comando para rodar o frontend
npm start
```


# Autor

Paulo César Cintra de Oliveira

https://www.linkedin.com/in/paulo-c%C3%A9sar-cintra-de-oliveira-b31787156/

