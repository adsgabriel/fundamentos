import Layout from "@/components/Layout"

export default function Jsx() {
    const titulo = <h1>Jsx</h1>

    function subtitulo() {
        return <h2>{'muito legal'.toUpperCase()}</h2>
    }
    return (
        <Layout titulo='Entendo o JSX'>
            <div>
                {titulo}
                <h2>Jsx e um conceito Central</h2>
                {Math.random()}
                {subtitulo()}
                <p>{JSON.stringify({nome: 'João', idade: 30})}</p>
            </div>
        </Layout>
    )
}