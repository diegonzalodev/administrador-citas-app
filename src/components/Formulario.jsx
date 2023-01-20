import { useState, useEffect } from "react";
import Paciente from "./Paciente";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  // Editar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setCorreo(paciente.correo);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validando el formulario
    if ([nombre, propietario, correo, fecha, sintomas].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    // Añadiendo los valores del formulario a un objeto
    const objetoPaciente = {
      nombre,
      propietario,
      correo,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
    } else {
      // Nuevo registro
      objetoPaciente.id = Date.now().toString();
      setPacientes([objetoPaciente, ...pacientes]);
    }

    // Reiniciamos el formulario
    setNombre("");
    setPropietario("");
    setCorreo("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-black text-3xl text-center">
        Ingreso de Pacientes
      </h2>

      <p className="my-5 text-center text-lg">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre de Mascota:
          </label>
          <input
            type="text"
            placeholder="Ej: Kirby"
            className="w-full border-2 p-2 my-2 placeholder-gray-400 rounded-md"
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre del Propietario:
          </label>
          <input
            type="text"
            placeholder="Ej: Alejandro"
            className="w-full border-2 p-2 my-2 placeholder-gray-400 rounded-md"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="correo"
            className="block font-bold text-gray-700 uppercase"
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="Ej: correo@dominio.com"
            className="w-full border-2 p-2 my-2 placeholder-gray-400 rounded-md"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fechaAlta"
            className="block font-bold text-gray-700 uppercase"
          >
            Fecha de Alta:
          </label>
          <input
            type="date"
            className="w-full border-2 p-2 my-2 placeholder-gray-400 rounded-md"
            id="fechaAlta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block font-bold text-gray-700 uppercase"
          >
            Síntomas:
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer"
          value={paciente.id ? "Guardar Cambios" : "Registrar Paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;
