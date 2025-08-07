import { useState } from "react";

function Home(){
    return (
        <div>
            <h3>Home do contador</h3>
            <Contador />
            <div><h4>Outro parágrafo</h4></div>
        </div>
    )
}

function Contador(){
    const[contador, setContador] = useState(1)

    function adicionarContador(){
        setContador(contador + 1)
    }

    return (
        <div>
            <h4>{contador}</h4>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home