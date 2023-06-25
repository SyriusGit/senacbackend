#Verificar a versão do NodeJS
node -v

#Gerar arquivo package.json
npm init -y

#Instalar o TypeScript
npm i -g typescript

#Transpilar o código ts
npx tsc index.ts

#Rodar o código no terminal
node nomedoarquivo.js

#Responsável por criar um arquivo de configuração Typescript
npx tsc --init

#Configurações no arquivo tsconfig.json
"target": "es6",
"module": "commomjs",
"sourceMap": true,
"outDir": "./build",
"rootDir": "./src",
"removeComments": true,
"noImplicityAny": true,

#Adicionar script no package.json
"start": "npx tsc && node ./build/index.js"