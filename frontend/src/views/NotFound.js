import React from 'react';
import notFound from "../assets/images/404 not found.jpg"

const NotFound = () => {
  return (
    <>
      <img
        className="d-block w-100 mt-3"
        src={notFound}
        style={{ width: "100%", maxWidth: "360px", margin: "auto" }}
        
      />
      <h3>Página no encontrada. <a href="/home">Ir al inicio</a></h3>
    </>
  )
}

export default NotFound
