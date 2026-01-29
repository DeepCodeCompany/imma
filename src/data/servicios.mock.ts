export type Servicio = {
  id: string;
  titulo: string;
  resumen: string;
  queIncluye: string[];
  requisitos: string[];
};

export const SERVICIOS: Servicio[] = [
  {
    id: "trabajo-social",
    titulo: "Trabajo social",
    resumen: "Acompañamiento, orientación y canalización a servicios.",
    queIncluye: ["Primera atención", "Canalización", "Seguimiento"],
    requisitos: ["Identificación (si aplica)", "Breve descripción del caso"],
  },
  {
    id: "asesoria-juridica",
    titulo: "Asesoría jurídica",
    resumen: "Orientación legal y acompañamiento.",
    queIncluye: [
      "Orientación",
      "Revisión básica de documentos",
      "Canalización",
    ],
    requisitos: [
      "Documentos relacionados (si existen)",
      "Cronología de hechos",
    ],
  },
  {
    id: "asesoria-psicologica",
    titulo: "Asesoría psicológica",
    resumen: "Atención emocional y seguimiento profesional.",
    queIncluye: ["Evaluación inicial", "Contención", "Sesiones de seguimiento"],
    requisitos: ["Disponibilidad de horario", "Compromiso de seguimiento"],
  },
  {
    id: "economia-social",
    titulo: "Economía social",
    resumen: "Impulso a capacitación y autonomía económica.",
    queIncluye: ["Capacitación", "Vinculación", "Proyectos productivos (mock)"],
    requisitos: ["Interés en participar", "Registro básico (mock)"],
  },
];
