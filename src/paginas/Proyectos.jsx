import PreviewProyecto from "../components/PreviewProyecto";
import useProyectos from "../hooks/useProyectos";
import Alerta from "../components/Alerta";
import { useEffect } from "react";

const Proyectos = () => {
  const { proyectos, alerta, cargando, obtenerProyectos } = useProyectos();
  const { msg } = alerta;

  useEffect(() => {
    obtenerProyectos();
  }, []);
  if (cargando)
    return <h1 className="text-4xl text-center text-sky-600">Cargando...</h1>;
  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>
      {msg && <Alerta alerta={alerta} />}
      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyecto key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className=" text-center text-gray-600 uppercase p-5">
            No hay proyectos
          </p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
