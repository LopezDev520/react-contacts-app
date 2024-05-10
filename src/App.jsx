import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"

import Index from "./components/pages/Index"
import AgregarContacto from "./components/pages/AgregarContacto"
import DetalleContacto from "./components/pages/DetalleContacto"
import EditarContacto from "./components/pages/EditarContacto"

function App() {

    return (
        <BrowserRouter>
            <NavBar />

            <main>
                <Routes>
                    <Route index element={<Index />} />
                    <Route path="/agregarContacto" element={<AgregarContacto />} />
                    <Route path="/contacto/:id" element={<DetalleContacto />} />
                    <Route path="/contacto/:id/editar" element={<EditarContacto />} />
                </Routes>
            </main>
        </BrowserRouter>
    )

}

export default App