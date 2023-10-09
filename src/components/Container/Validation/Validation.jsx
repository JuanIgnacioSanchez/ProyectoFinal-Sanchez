import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/data";

const Validation = () => {
  const { vaciarCarrito, totalCarrito, carrito } = useContext(CartContext);
  const [telefonoError, setTelefonoError] = useState("");
  const [pedido, setPedido] = useState(null);
  const [compraExitosa, setCompraExitosa] = useState(false);

  const comprar = async (data) => {
    try {
      const pedidoData = {
        cliente: data,
        productos: carrito,
        total: totalCarrito,
      };

      const docRef = await addDoc(collection(db, "Pedidos"), pedidoData);
      const pedidoId = docRef.id;
      pedidoData.id = pedidoId;
      setPedido(pedidoData);
      setCompraExitosa(true);
      vaciarCarrito();
    } catch (error) {
      console.error("Error al agregar el pedido:", error);
    }
  };

  const [formData, setFormData] = useState({
    nombreApellido: "",
    email: "",
    repetirEmail: "",
    telefono: "",
    provinciaLocalidad: "",
    pisoDpto: "",
    calleNumeracion: "",
    codigoPostal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.repetirEmail) {
      toast.error("Los correos electrónicos no coinciden", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (formData.telefono.length !== 10) {
      toast.error("El número de teléfono debe tener 10 dígitos", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      comprar(formData);
    }
  };

  return (
    <>
      {pedido && (
        <div className="container-purchase">
          <h2 className="title-purchase">
            ¡Muchas gracias por tu compra {pedido.cliente.nombreApellido}!
          </h2>
          <p className="text-purchase">
            El id de su pedido es <b>{pedido.id}</b>
          </p>
          <div className="detail-list">
            <h4 className="title-detail-purchase">Detalle de su pedido:</h4>
            <ul>
              {pedido.productos.map((product) => (
                <li key={product.id}>
                  {product.cantidad} {product.name} ${product.price}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-purchase">
            El total de su compra es de ${pedido.total}
          </p>
        </div>
      )}
      {!compraExitosa && (
        <>
          <div className="div-head-validation">
            <Link className="btn-back-validation" to={"/cart"}>
              ◁
            </Link>
            <div className="div-title-validation">
              <h2 className="title-validation">Finalizar compra 🛍</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-row-right">
              <input
                className="input"
                type="text"
                placeholder="Nombre y apellido"
                name="nombreApellido"
                value={formData.nombreApellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row-left">
              <input
                className="input"
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row-right">
              <input
                className="input"
                type="email"
                placeholder="Repetir e-mail"
                name="repetirEmail"
                value={formData.repetirEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row-left">
              <input
                className="input"
                type="number"
                placeholder="Teléfono"
                inputMode="numeric"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
              {telefonoError && (
                <label className="error-message">{telefonoError}</label>
              )}
            </div>
            <div className="input-row-right">
              <input
                className="input"
                type="text"
                placeholder="Provincia y localidad"
                name="provinciaLocalidad"
                value={formData.provinciaLocalidad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row-left">
              <input
                className="input"
                type="text"
                placeholder="Piso/Dpto"
                name="pisoDpto"
                value={formData.pisoDpto}
                onChange={handleChange}
              />
            </div>
            <div className="input-row-right">
              <input
                className="input"
                type="text"
                placeholder="Calle y numeración"
                name="calleNumeracion"
                value={formData.calleNumeracion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-row-left">
              <input
                className="input"
                type="text"
                placeholder="Código postal"
                name="codigoPostal"
                value={formData.codigoPostal}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="input input-submit"
              type="submit"
              value="Finalizar compra"
            />
          </form>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Validation;
