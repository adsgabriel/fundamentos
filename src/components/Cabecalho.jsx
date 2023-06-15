export default function Cabecalho(props) {
    // props e somente read only
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}