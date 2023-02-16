import React from "react";
import '../hoja-de-estilos/Contador.css'

function Contador({ numClics }) {
  return (
    <div className="contador">
      { numClics }
    </div>
  );
}

export { Contador };
