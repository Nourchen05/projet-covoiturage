import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../JS/actions/user";

import "./sign.css";

function Register() {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLasttname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  return (
    <div className="sign">
      <h1 className="title"> Je m'inscris !</h1>
      <form>
        <div className="form_part">
          <div className="input_field">
            <select name="gender" onChange={(e) => setGender(e.target.value)}>
              <option>Genre</option>
              <option value="Femme">Mme.</option>
              <option value="Homme">M.</option>
              <option value="Inconnu">inconnu</option>
            </select>
          </div>
          <div className="input_field">
            <input
              type="text"
              placeholder="votre nom"
              onChange={(e) => setLasttname(e.target.value)}
            />
          </div>
          <div className="input_field">
            <input
              type="text"
              placeholder="votre prénom"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="votre mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              registerUser(
                { gender, firstname, lastname, email, password },
                history
              )
            );
          }}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Register;
