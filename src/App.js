import React from "react";
import People from "./imagens/pessoas1.svg"
import Seta from "./imagens/seta.svg"

import {Container, H1, Image, ContainerItens, InputLabel, Input, Button} from "./styles";
  const users = [
    {id:Math.random(), name: "Rodolfo", age: 28},
    {id:Math.random(), name: "Maria", age: 21},

  ]
function App() {

  return(
    <Container>
      <Image alt="pessoas-vetor" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome:</InputLabel>
        <Input  placeholder="Nome"/>

        <InputLabel>Idade:</InputLabel>
        <Input placeholder="Idade"/>

        <Button>Cadastrar <img alt="seta" src={Seta}/></Button>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;