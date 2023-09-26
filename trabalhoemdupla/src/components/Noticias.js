import './Noticias.css'

function Noticia(props) {
    return(
       <div classname="noticia">
         <h2 classname="titulo"> {props.Titulo}</h2>
         <p classname="descricao">{props.descricao}</p>
         <p classname="categoria">{props.categoria}</p>
       </div>
    )
}

export default Noticia