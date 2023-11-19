import { useState } from "react";
import { useParams } from "react-router-dom";

const bookDetail = {};

export default function BookDetail() {
    const item = useState(bookDetail);
    let { id } = useParams();

    return (
        <div className="p-6">
            detalhes do livro {id}
        </div>
    );
}
