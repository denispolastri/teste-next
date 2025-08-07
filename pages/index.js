import { useState } from "react";

function Home(){
    return (
        <div>
            <h3>Home teste</h3>
            <Contador />
            <div><h4>apenas um texto de exemplo</h4></div>
            <div><p>apenas um parágrafo de exemplo</p></div>
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
            <h4>botão contador</h4>
            <button onClick={adicionarContador}>Você me pressionou <b>{contador}</b> vezes</button>
        </div>
    )
}

export default Home