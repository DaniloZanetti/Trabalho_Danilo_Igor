import './Jogos.css'

function Jogos(props) {
    return(
       <div classname="jogos">
         <h1 classname="titulo"> {props.titulo}</h1>
         <p classname="descricao">{props.descricao}</p>
        <h4 classname="preco">
        {props.preco}
        </h4>
         <p classname="categoria">{props.categoria}</p>
       </div>

        
    )
}

export default Jogos