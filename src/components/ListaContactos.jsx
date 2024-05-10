import { Link } from "react-router-dom"

import Contacto from "./Contacto"

export default ({ contactos }) => {

    return (
        <section className="contactos">
            { contactos.map(c => (
                <Link to={`/contacto/${c.id}`}>
                    <Contacto key={c.id} {...c} />
                </Link>
            )) }
        </section>
    )

}