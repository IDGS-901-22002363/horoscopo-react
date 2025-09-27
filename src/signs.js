
export const SIGNS = [
  { key: "aries",      name: "Aries",      start: [3, 21], end: [4, 19],
    desc: "Enérgico, directo y valiente. Inicia proyectos, odia la espera." },
  { key: "tauro",      name: "Tauro",      start: [4, 20], end: [5, 20],
    desc: "Constante y práctico. Ama la estabilidad, lo sensorial y el comfort." },
  { key: "geminis",    name: "Géminis",    start: [5, 21], end: [6, 20],
    desc: "Curioso, conversador y adaptable. Le encantan las ideas nuevas." },
  { key: "cancer",     name: "Cáncer",     start: [6, 21], end: [7, 22],
    desc: "Protectora/or, sensible y hogareño. Intuitivo con su entorno." },
  { key: "leo",        name: "Leo",        start: [7, 23], end: [8, 22],
    desc: "Creativo, carismático y líder natural. Brilla con su presencia." },
  { key: "virgo",      name: "Virgo",      start: [8, 23], end: [9, 22],
    desc: "Analítico y organizado. Ama mejorar procesos y detalles." },
  { key: "libra",      name: "Libra",      start: [9, 23], end: [10, 22],
    desc: "Diplomático y estético. Busca armonía, equilibrio y justicia." },
  { key: "escorpio",   name: "Escorpio",   start: [10, 23], end: [11, 21],
    desc: "Intenso, profundo y leal. Gran voluntad y transformación." },
  { key: "sagitario",  name: "Sagitario",  start: [11, 22], end: [12, 21],
    desc: "Optimista y aventurero. Filosofa y explora nuevos horizontes." },
  { key: "capricornio",name: "Capricornio",start: [12, 22], end: [1, 19],
    desc: "Disciplinado, ambicioso y paciente. Juega a largo plazo." },
  { key: "acuario",    name: "Acuario",    start: [1, 20], end: [2, 18],
    desc: "Original y humanitario. Piensa en futuro y rompe moldes." },
  { key: "piscis",     name: "Piscis",     start: [2, 19], end: [3, 20],
    desc: "Empático, artístico y soñador. Imaginación y sensibilidad." },
];

// Determina si (m,d) está dentro del rango start..end (considera rangos que cruzan de dic→ene)
function inRange(m, d, [sm, sd], [em, ed]) {
  const afterStart = m > sm || (m === sm && d >= sd);
  const beforeEnd  = m < em || (m === em && d <= ed);

  // rango normal en el mismo año
  if (sm < em || (sm === em && sd <= ed)) return afterStart && beforeEnd;

  // rango que cruza el año (ej. Capricornio)
  return afterStart || beforeEnd;
}

// Recibe Date, devuelve la "key" del signo
export function getZodiacKey(date) {
  const m = date.getMonth() + 1; // 1..12
  const d = date.getDate();      // 1..31
  const found = SIGNS.find(s => inRange(m, d, s.start, s.end));
  return found ? found.key : null;
}
