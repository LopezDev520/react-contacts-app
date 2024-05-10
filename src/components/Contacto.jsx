import "./Contacto.css"

export default ({ nombre, telefono  }) => {

    return (
        <article className="contacto">
            <h1>{nombre}</h1>
            <p>Telefono: {telefono}</p>
        </article>
    )

}