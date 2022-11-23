import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
const ConfirmarCuenta = () => {
  const { id } = useParams();
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`;

        const { data } = await clienteAxios.get(url);
        setAlerta({
          error: false,
          msg: data.msg,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          error: true,
          msg: error.response.data.msg,
        });
      }
    };
    confirmarCuenta();
  }, []);

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu cuenta y comienza a crear tus{" "}
        <span className="text-slate-700">bugs lol</span>
      </h1>
      <div>
        {msg && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
          >
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
