import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 pb-3">
      {pacientes.length ? (
        <>
          <h2 className="mt-10 md:mt-0 font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg my-5 text-center">
            Administra tus
            <span className="text-indigo-600 font-bold">
              {" "}
              Pacientes y Citas
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="mt-10 md:mt-0 font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg my-5 text-center">
            Comienza agregando pacientes
            <span className="text-indigo-600 font-bold">
              {" "}
              y aparecerán en esta sección
            </span>
          </p>
        </>
      )}

      {/* Recorremos el arreglo de pacientes y los mostramos */}
      {pacientes.map((paciente) => (
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
    </div>
  );
}

export default ListadoPacientes;
