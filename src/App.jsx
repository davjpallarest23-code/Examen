import Docentes from './Pages/Docentes.jsx'
import Inicio from './Pages/Inicio.jsx'
import MisClases from './Pages/MisClases.jsx'
import { Routes, Route } from 'react-router'
import Nav from './Components/Nav.jsx'
//import "./components/Nav.css";

function App() {

  return (
    <div className="app-layout">
      <Nav />
      <div className="app-main">
        <header className="app-header" />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/docentes" element={<Docentes />} />
            <Route path="/misclases" element={<MisClases />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App

