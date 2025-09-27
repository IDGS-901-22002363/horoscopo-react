export default function SignResult({ nombre, signData }) {
  return (
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
          <p>Escribe tu nombre y selecciona tu fecha.</p>
          <p>Verás aquí tu signo, imagen y descripción.</p>
        </div>
      )}
    </section>
  );
}
