import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { API_ENDPOINT } from "../../constantes"
import { useEffect } from "react"

export default () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [contacto, setContacto] = useState({
        nombre: "",
        telefono: ""
    })

    useEffect(() => { 
        cargarContacto() 
    }, [])

    const cargarContacto = async () => {
        const res = await fetch(API_ENDPOINT + id)
        if(!res.ok) return navigate("/")

        const json = await res.json()
        setContacto(json)
    }

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

        editarContacto(contacto)
    }

    const editarContacto = async contacto => {
        await fetch(API_ENDPOINT + id, {
            method: "PUT",
            body: JSON.stringify(contacto)
        })

        navigate("/")
    }

    return (
        <>
            <h1>Editar contacto</h1>

            <div className="centrar">
                <form className="formulario" onSubmit={onSubmit}>
                    <label>
                        <p>Nombre:</p>
                        <input type="text" name="nombre" value={contacto.nombre} onChange={onChangeInput} />
                    </label>

                    <label>
                        <p>No. Telefono</p>
                        <input type="text" name="telefono" value={contacto.telefono} onChange={onChangeInput} />
                    </label>

                    <div className="centrar">
                        <button className="boton primario">Editar Contacto</button>
                    </div>
                </form>
            </div>
        </>
    )

}