import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <div>
      <h1>Bienvenido! </h1>
      <br />
      <p>Nombre: {user?.displayName}</p>
      <br />
      <p>Email: {user?.email}</p>
      <br />
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};
