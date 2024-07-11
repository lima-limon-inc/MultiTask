import React from 'react';
import logo from './logo.svg';
import './App.css';
import Categoria from './components/Categoria';
import 'tailwindcss/tailwind.css';
import Navbar from './components/Sidebar';

function App() {


  //////////////////////////////////////
  // Backend provisorio
  interface CategoriaProps {
    nombre: string;
    descripcion?: string;
    tareas?: string[];       // TODO: Cambiar a Tarea[]
    pendientes?: string[];   // TODO: Cambiar a Tarea[]
}

  let matematica: CategoriaProps = {
    nombre: "Matematica",
    descripcion: "calculadora de derivadas: https://www.calculadora-de-derivadas.com/",
    tareas: ["guia derivadas", "guia integrales", "limites"]
  }

  let arquiSoftware: CategoriaProps = {
    nombre: "Arqui de Software",
    tareas: ["leer roy fielding", "aprender REST", "aprender QAs"]
  }

  let BaseDeDatos: CategoriaProps = {
    nombre: "Bases de Datos",
    tareas: ["normalizacion"]
  }

  let categorias = [matematica, arquiSoftware, BaseDeDatos];


  //////////////////////////////////////


  return (
    <div className="">
      <Navbar/>
      <div className="flex flex-col h-screen">
        <div className='flex flex-row flex-grow'>
          {categorias.map((categoria, index) => (
            <Categoria  nombre={categoria.nombre} 
                        descripcion={categoria.descripcion} 
                        tareas={categoria.tareas} 
                        key={index}/>
          ))}

        </div>
      </div>
    </div>
  );
}




export default App;
