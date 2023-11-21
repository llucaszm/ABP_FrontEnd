import { useState } from "react";
import { useParams } from "react-router-dom";

const bookDetail = {};

export default function BookForm() {
    const item = useState(bookDetail);
    let { id } = useParams();

    return (
        <div className="p-6">
            formulario do livro {id}
        </div>
    );
}
