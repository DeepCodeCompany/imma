export type Consejo = {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string[];
  categoria: "Bienestar" | "Derechos" | "Prevención" | "Economía";
  fecha: string;
};

export const CONSEJOS: Consejo[] = [
  {
    id: "autocuidado-emocional",
    titulo: "Autocuidado emocional: 5 prácticas simples",
    resumen:
      "Hábitos cotidianos para cuidar tu bienestar emocional y reducir estrés.",
    contenido: [
      "1) Identifica tus señales de estrés (sueño, apetito, irritabilidad).",
      "2) Practica pausas breves: respiración 4-4-6 durante 2 minutos.",
      "3) Escribe 3 cosas que sí controlas hoy.",
      "4) Pide apoyo: hablar con alguien de confianza es válido.",
      "5) Si lo necesitas, busca orientación profesional.",
    ],
    categoria: "Bienestar",
    fecha: "Ene 2026",
  },
  {
    id: "orientacion-legal-basica",
    titulo: "Orientación legal básica: por dónde empezar",
    resumen: "Una guía simple para identificar tu situación y buscar apoyo.",
    contenido: [
      "1) Reúne información clave: fechas, hechos, mensajes, documentos.",
      "2) Anota dudas concretas para tu asesoría.",
      "3) Busca acompañamiento y evita enfrentar procesos sola.",
      "4) Pregunta por medidas de protección si aplica.",
    ],
    categoria: "Derechos",
    fecha: "Ene 2026",
  },
  {
    id: "prevencion-red-apoyo",
    titulo: "Red de apoyo: cómo construirla",
    resumen: "Consejos para crear una red de apoyo segura y efectiva.",
    contenido: [
      "1) Identifica 2–3 personas confiables.",
      "2) Define una palabra clave para emergencias.",
      "3) Ten a la mano contactos y ubicaciones seguras.",
      "4) Comparte tu plan con alguien de confianza.",
    ],
    categoria: "Prevención",
    fecha: "Ene 2026",
  },
];
