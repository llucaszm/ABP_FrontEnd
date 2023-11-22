import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const booksData = [];

function mostraModal(){
    let popUpModal = document.getElementById('popup-modal')
    popUpModal.classList.remove('hidden')
}

function escondeModal(){
    let popUpModal = document.getElementById('popup-modal')
    popUpModal.classList.add('hidden')
}

export default function BookList() {

    const [items] = useState(booksData);

    return (
        <div className="p-6">

            <h2 className="text-4xl font-extrabold dark:text-white mb-10 flex justify-between">
                Lista de Livros

                <NavLink to="/book-create"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                    Cadastrar Livro
                </NavLink>
            </h2>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Título do Livro
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Autor
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Preço
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ação
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Guia do Mochilheiro das Galáxias
                            </th>
                            <td className="px-6 py-4">
                                Adams, Douglas
                            </td>
                            <td className="px-6 py-4">
                                Science Fiction
                            </td>
                            <td className="px-6 py-4">
                                R4 45,00
                            </td>
                            <td className="px-6 py-4">
                                <NavLink className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/book-edit/1">Editar</NavLink> |
                                <NavLink className="font-medium text-green-600 dark:text-green-500 hover:underline" to="/book-detail/1">Detalhes</NavLink> |
                                <a 
                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                href="#"
                                data-modal-target="popup-modal"
                                data-modal-toggle="popup-modal"
                                type="button"
                                onClick={mostraModal}
                                >Excluir</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


<div id="popup-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <span className="sr-only">Fechar</span>
            </button>
            <div className="p-4 md:p-5 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Tem certeza que vai excluir o livro?</h3>
                <button onClick={escondeModal} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                    Sim
                </button>
                <button onClick={escondeModal} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    Não
                </button>
            </div>
        </div>
    </div>
</div>

        </div>
    );
}
