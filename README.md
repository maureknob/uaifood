# UaiFood

Este projeto disponibiliza uma api para criação, edição, consulta e remoção de cadastros de restaurantes. 

Esta api é desenvolvida em Node.js, utilizando um banco de dados não relacional e Graphql para as consultas.

## 1 Começando

### Construção
No diretório raiz deste projeto execute os comandos:

- node install

- node start

### Conexão
Este projeto utiliza a framework mongoose para operar o banco de dados.

- insira as credenciais do seu MongoDB no arquivo `src/server.ts`

- mongoose.connect(`"acesso ao banco de dados"`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
    
## 2 Acessando a api
O servidor é inicializado através do script `"start"` e aponta diretamente para o arquivo `src/server.ts`.

O servidor é o`graphql-yoga`, que recebe um shema e os resolvers para gerenciar as requisições.

- localhost:4000

## 3 Utilizando a api
Todas as requisições são feitas para o mesmo endpoint, ficando a cargo do arquivo `schema.graphql` lidar com o seu comportamento.

## Query / Mutation
Utilize os comandos Query e Mutation para utilizar as rotas.

```
// Cria ou atualiza um restaurante

mutation {
  createRestaurant(
	 RestaurantInput: {
    name: "Lanchonete da Marlene"
    adress: "Uberlândia"
    culinary: "japa"
    cep: "123"
  }
  )
  {
    name
  }
}
```

```
// Cadastra um item em um restaurante

mutation {
  createMenu(
    MenuInput: {
      restaurantId: "60b574a359c8701c266014b2"
      name: "pizza"
      description: "frango"
      price: 21
    }
  )
  {
    name
    adress
    menu{
      name
    }
  }
}`
```

```
// Lista restaurantes por cidade

query {
  restaurantAdress(adress: "Caxias"){
    name
    culinary
    menu {
      name
      description
      price
    }
  }
}
```

```
// Lista todos restaurantes

query {
  restaurants {
    name
    id
    culinary
    adress
  }
}
```


```
//Lista restaurante por id

query {
  restaurant(id: "60b14400b389ec7571b78150"){
    name
    cep
  }
  ```
```
//Deleta um restaurante pelo id
mutation {
  deleteRestaurant(id: "60b574a359c8701c266014b2"){
    id
  }
}
```
