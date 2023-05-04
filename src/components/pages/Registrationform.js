import "./style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


const RegistrationForm = () => {
    let navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="form">
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirmpassword" />
        <Link className="btn btn-success" to="/">
            Register
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
