import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const booksData = [];

export default function BookList() {

    const [items] = useState(booksData);

  return (
    <div className="p-6">
      <h1>Lista de Livros</h1>
          <NavLink to="/book-create">Cadastrar Livro</NavLink>

      <ul>
        <li>
          Nome do Livro | 
          <NavLink to="/book-edit/1">Edita Livro 1</NavLink> | 
          <NavLink to="/book-detail/1">Ver Livro 1</NavLink> | 
          <a href="#">Excluir Livro 1</a>
        </li>
        <li>
          Nome do Livro | 
          <NavLink to="/book-edit/2">Edita Livro 2</NavLink> | 
          <NavLink to="/book-detail/2">Ver Livro 2</NavLink> | 
          <a href="#">Excluir Livro 2</a>
        </li>
      </ul>
    </div>
  );
}
