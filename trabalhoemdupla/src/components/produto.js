import './produto.css'

function Produto(props) {
    return(
       <div classname="produto">
         <h2 classname="titulo">{props.Titulo}</h2>
        <h4 classname="preco">
         {props.preco}
        </h4>
        <p classname="descricao">{props.descricao}</p>
         <p classname="categoria">{props.categoria}</p>
       </div>
    )
}

export default Produto