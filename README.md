- npm init -y (cria o package.json)
npm i typescript @types/node tsx tsup -D // ts, node, tsx (le ts no node), tsup (converte ts em js)
npx tsc --init (cria o tsconfig.json)
npm i fastify (fastify)

### Alterar tsconfig.json ###
``
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "es2025",
    "types": ["node"],
``
- nos dá a possibilidade de não adicionar as extensões do arquivo .js ou .ts

npm i dotenv (importa as variaveis de ambiente)
npm i zod (valida as variaveis de ambiente)

npm i @rocketseat/eslint-config -D (adiciona a formatação de texto da rocket)

npm i prisma -D (ORM - Mapeamento Objeto-Relacional, converte dados entre bancos relacionais e linguagens orientadas a objetos)
npm i @prisma/client -D (Biblioteca que consulta o banco de dados)


docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnamilegacy/postgresql


http://localhost:3333/users

{
	"name": "gabriel",
	"email": "gabriel@email.com",
	"password_hash": "teste123"
}

500 Internal Server Error
The server has encountered a situation it doesn't know how to handle.

{
	"statusCode": 500,
	"error": "Internal Server Error",
	"message": "[\n  {\n    \"expected\": \"string\",\n    \"code\": \"invalid_type\",\n    \"path\": [\n      \"password\"\n    ],\n    \"message\": \"Invalid input: expected string, received undefined\"\n  }\n]"
}
