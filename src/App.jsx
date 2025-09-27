import { useState, useMemo } from "react";
import { SIGNS, getZodiacKey } from "./signs";
import "./App.css";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState(""); // yyyy-mm-dd (input type="date")

  const signData = useMemo(() => {
    if (!fecha) return null;
    const key = getZodiacKey(new Date(fecha));
    return SIGNS.find((s) => s.key === key) || null;
  }, [fecha]);

  return (
    <div className="page">
      <h1>Horóscopo React</h1>

      <div className="grid">
        {/* Panel izquierdo: Formulario */}
        <section className="panel">
          <label className="lbl">Nombre</label>
          <input
            className="inp"
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label className="lbl">Fecha de nacimiento</label>
          <input
            className="inp"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <p className="hint">Formato: dd/mm/aaaa (el control usa tu región)</p>
        </section>

        {/* Panel derecho: Resultado */}
        <section className="panel">
          {signData ? (
            <>
              <h2 className="tituloSigno">
                Tu signo es: <span>{signData.name}</span>
              </h2>

              <div className="imgWrap">
                <img src={`/signos/${signData.key}.png`} alt={signData.name} />
              </div>

              <div className="desc">
                <h3>{nombre ? `${nombre}:` : "Descripción:"}</h3>
                <p>{signData.desc}</p>
              </div>
            </>
          ) : (
            <div className="placeholder">
              <p>Escribe tu nombre y selecciona tu fecha de nacimiento.</p>
              <p>Verás aquí tu signo, su imagen y una breve descripción.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
