export default function SignForm({ nombre, setNombre, fecha, setFecha }) {
  return (
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
      <p className="hint">Formato: dd/mm/aaaa</p>
    </section>
  );
}
