import FormularioProyecto from "../components/FormularioProyecto";

const Proyectos = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Create Project</h1>

      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
    </>
  );
};

export default Proyectos;
