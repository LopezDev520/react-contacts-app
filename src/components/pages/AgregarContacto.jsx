import "./AgregarContacto.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_ENDPOINT } from "../../constantes"

export default () => {

    const navigate = useNavigate()
    const [contacto, setContacto] = useState({
        nombre: "",
        telefono: ""
    })

    const onChangeInput = e => {
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        console.log(contacto)

        if(!contacto.nombre || !contacto.telefono) return

        postContacto(contacto)
    }

    const postContacto = async contacto => {
        await fetch(API_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(contacto)
        })

        navigate("/")
    }

    return (
        <>
            <h1>Agregar nuevo contacto</h1>

            <div className="centrar">
                <form className="formulario" onSubmit={onSubmit}>
                    <label>
                        <p>Nombre:</p>
                        <input type="text" name="nombre" onChange={onChangeInput} />
                    </label>

                    <label>
                        <p>No. Telefono</p>
                        <input type="text" name="telefono" onChange={onChangeInput} />
                    </label>

                    <div className="centrar">
                        <button className="boton primario">Agregar Contacto</button>
                    </div>
                </form>
            </div>
        </>
    )

}