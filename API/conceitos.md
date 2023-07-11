## **Conceitos**
# API (Application Programming Interface - Interface de Programação de Aplicativos)
```
- Um conjunto de especificações que definem de que forma as aplicações irão se comunicar;
- Regras e protocolos para que diferentes softwares interajam entre si;
- Interface para que um sistema se comunique com outro sistema;
- Equiparável ao garçom de um restaurante onde o cliente é o usuário e a cozinha é o servidor.
```
# REST (Representational State Transfer - Transferência Representacional de Estado)
```
- Restrição de arquitetura;
- Conjunto de regras e convenções que permite que 2 sistemas se comuniquem pela internet;
- A arquitetura rest separa o backend do frontend.
```
# RESTFUL
```
- Utiliza métodos HTTP;
- Utiliza a nuvem;
- Capacidade de aplicar os princípios da REST.
```
# Maturidade de modelo RESTful
```
Nível 0
    -A API precisa utilizar o protocolo HTTP para a comunicação.
Nível 1
    -A API deve possuir mapeamento de recursos bem definidos.
    Representando substantivos que fazem a correta 
    utilização das URIs para os respectivos recursos
Nível 2
    -A API deve utilizar o protocolo HTTP de forma semântica com seus verbos com o uso GET, POST, PUT & DELETE, de acordo com a requisição.
Nível 3
    -A API deve mostrar o seu estado atual de relacionamento com os demais recursos da API.
```
# JSON (JavaScript Object Notation - Notação de Objeto de Javascript)
```
- Padrão de dados;
- Estruturar dados em formato de texto;
- Tranferir informações entre servidor (banco e dados) e o cliente (user)
- Exemplo:
```
{
  "id": 12345,
  "nome": "João Silva",
  "idade": 30,
  "email": "joao.silva@example.com",
  "endereço": {
    "rua": "Rua Principal",
    "número": 123,
    "cidade": "São Paulo",
    "estado": "SP"
  },
  "telefones": [
    {
      "tipo": "celular",
      "numero": "987654321"
    },
    {
      "tipo": "residencial",
      "numero": "123456789"
    }
  ]
}
```
# Requisição HTTP
```
 - O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso.
 - GET, PUSH, DELETE, PUT, PATCH (usado para modificar um único elemento, diferentemente do put)
```
# Headers HTTP
- Os headers HTTP (cabeçalhos HTTP) são componentes das requisições e respostas HTTP que fornecem informações adicionais sobre a solicitação ou a resposta. Eles consistem em pares chave-valor e são usados para transmitir informações importantes relacionadas à comunicação entre o cliente e o servidor.
```
# HTTP Codes
- 100 - 199: Dados Informativos;
- 200 - 299: Sucesso;
- 300 - 399: Dados de Redirecionamento;
- 400 - 499: Erros do Cliente;
- 500 - 599: Erros de Servidor.
```
# FrameWork
- Biblioteca;
- Reúne vários projetos provendo uma funcionalidade genérica.
```
# ExpressJS
- O Express é um framework para construção de aplicativos web em Node.js. Ele simplifica a criação de servidores e APIs, oferecendo uma camada de abstração sobre o módulo http nativo do Node.js;
- Fornece requesitos mínimos para a construção de servidores web.