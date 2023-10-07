import React from "react";
import { Link } from "react-router-dom";
import "../Validation/validation.css";

const Validation = () => {
  return (
    <>
      <div className="div-head-validation">
        <Link className="btn-back-validation" to={"/cart"}>
          ◁
        </Link>
        <div className="div-title-validation">
          <h2 className="title-validation">Finalizar compra 🛍</h2>
        </div>
      </div>
      <form action="">
        <input
          className="input left"
          type="text"
          placeholder="Nombre y apellido"
          required
        />
        <input
          className="input right"
          type="email"
          placeholder="E-mail"
          required
        />
        <input
          className="input left"
          type="email"
          placeholder="Repetir e-mail"
          required
        />
        <input
          className="input right"
          type="number"
          placeholder="Teléfono"
          inputMode="numeric"
          required
        />
        <input
          className="input left"
          type="text"
          placeholder="Provincia y localidad"
          required
        />
        <input className="input right" type="text" placeholder="Piso/Dpto" />
        <input
          className="input left"
          type="text"
          placeholder="Calle y numeración"
          required
        />
        <input
          className="input right"
          type="text"
          placeholder="Código postal"
          required
        />
        <Link className="input input-submit" to={"/purchase"}>
          Finalizar compra
        </Link>
      </form>
    </>
  );
};

export default Validation;
