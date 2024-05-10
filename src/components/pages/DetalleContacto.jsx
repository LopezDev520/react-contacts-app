import "./DetalleContacto.css"

import { useParams } from "react-router-dom"
import { API_ENDPOINT } from "../../constantes"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Contacto from "../Contacto"
import { Link } from "react-router-dom"

export default () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [contacto, setContacto] = useState({})

    useEffect(() => {
        cargarContacto()
    }, [])

    const cargarContacto = async () => {
        const res = await fetch(API_ENDPOINT + id)
        if(!res.ok) return navigate("/")

        const json = await res.json()
        setContacto(json)
    }

    const borrarContacto = async () => {
        await fetch(API_ENDPOINT + id, { method: "DELETE" })
        navigate("/")
    }

    return (
        <>
            <h1>Detalle Contacto - {id}</h1>

            <Contacto {...contacto} />

            <div className="acciones">
                <button className="boton peligroso" onClick={borrarContacto}>Borrar Contacto</button>
                <Link to={`/contacto/${id}/editar`}>
                    <button className="boton advertencia">Editar</button>
                </Link>
            </div>
        </>
    )

}