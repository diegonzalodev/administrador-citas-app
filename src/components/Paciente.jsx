function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { id, nombre, propietario, correo, fecha, sintomas } = paciente;

  const handleDelete = () => {
    const respuesta = confirm("¿Deseas eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="bg-white shadow-md mx-4 mb-5 px-5 pt-8 pb-6 rounded-md">
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> {nombre}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Propietario:
        <span className="font-normal normal-case"> {propietario}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Email:
        <span className="font-normal normal-case"> {correo}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Fecha de Alta:
        <span className="font-normal normal-case"> {fecha}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Síntomas:
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>

      <div className="mt-5 flex flex-wrap grow-1 gap-3">
        <button
          className="bg-indigo-600 py-2 px-10 hover:bg-indigo-700 text-white uppercase font-bold"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 py-2 px-10 hover:bg-red-700 text-white uppercase font-bold"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
