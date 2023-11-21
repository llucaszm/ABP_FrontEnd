import { useState } from "react";
import { NavLink } from 'react-router-dom';

const usersData = [];

export default function UserList() {
  const [items] = useState(usersData);

  return (
    <div className="p-6">
          <h1>Lista de Usuarios</h1>
          <NavLink to="/user-create">Cadastrar Usuario</NavLink>

      <ul>
        <li>
          Nome do Usuario | 
          <NavLink to="/user-edit/1">Edita Usuario 1</NavLink> | 
          <NavLink to="/user-detail/1">Ver Usuario 1</NavLink> | 
          <a href="#">Excluir Usuario 1</a>
        </li>
        <li>
          Nome do Usuario | 
          <NavLink to="/user-edit/2">Edita Usuario 2</NavLink> | 
          <NavLink to="/user-detail/2">Ver Usuario 2</NavLink> | 
          <a href="#">Excluir Usuario 2</a>
        </li>
      </ul>
    </div>
  );
}
