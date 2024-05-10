import "./Index.css"

import { useEffect } from "react"
import { useState } from "react"
import { API_ENDPOINT } from "../../constantes"
import ListaContactos from "../ListaContactos"

export default () => {

    const [contactos, setContactos] = useState([])

    useEffect(() => {
        cargarContactos()
    }, [])

    const cargarContactos = async () => {
        const res = await fetch(API_ENDPOINT)
        const json = await res.json()
        setContactos(json)
    }

    return (
        <>
            <h1>Contactos:</h1>

            { contactos.length > 0 
                  ? (<ListaContactos contactos={contactos} />)
                  : (
                        <div className="centrar">
                            <p>No hay contactos</p>
                        </div>
                    )}
        </>
    )

}

