import React, {useState, useRef} from "react";
import People from "./imagens/pessoas1.svg"
import Seta from "./imagens/seta.svg"
import Lixeira from "./imagens/lixeira.svg"

import {Container, H1, Image, ContainerItens, InputLabel, Input, Button, User} from "./styles";

  const users = [
   
  ];
function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  function addNovoUsuario( ) {
    setUsers([... users,{id: Math.random(), name:inputName.current.value, age:inputAge.current.value}])
  }

  function deleteUser(userId){
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }
  
  return(
    <Container>
      <Image alt="pessoas-vetor" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Nome"/>

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Idade"/>

        <Button onClick={addNovoUsuario}>Cadastrar <img alt="seta" src={Seta}/></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img alt="lixeira" src={Lixeira} /></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;