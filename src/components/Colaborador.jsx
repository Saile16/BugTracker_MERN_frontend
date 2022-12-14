import useProyectos from "../hooks/useProyectos";

const Colaborador = ({ colaborador }) => {
  const { handleModalEliminarColaborador } = useProyectos();

  const { nombre, email } = colaborador;

  return (
    <div className="border-b p-8 flex justify-between items-center">
      <div>
        <p>{nombre}</p>
        <p className="text-sm text-gray-700">{email}</p>
      </div>
      <div>
        <button
          className="bg-red-600 px-4 py-3 text-white uppercase font-bold rounded-lg"
          type="button"
          onClick={() => handleModalEliminarColaborador(colaborador)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Colaborador;
