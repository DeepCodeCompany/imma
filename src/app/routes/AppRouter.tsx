import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "../../components/layout/SiteLayout";

import HomePage from "../../pages/HomePage";
import QuienesSomosPage from "../../pages/QuienesSomosPage";
import ServiciosPage from "../../pages/ServiciosPage";
import ServicioDetailPage from "../../pages/ServicioDetailPage";
import CasasPage from "../../pages/CasasPage";
import ConsejosPage from "../../pages/ConsejosPage";
import ConsejoDetailPage from "../../pages/ConsejoDetailPage";
import ProgramasPage from "../../pages/ProgramasPage";
import EventosPage from "../../pages/EventosPage";

// ✅ Nuevas pantallas de Transparencia
import TransparenciaIndexPage from "../../pages/TransparenciaIndexPage";
import TransparenciaMesPage from "../../pages/TransparenciaMesPage";

import NotFoundPage from "../../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />

        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/servicios/:id" element={<ServicioDetailPage />} />

        <Route path="/casas" element={<CasasPage />} />

        <Route path="/consejos" element={<ConsejosPage />} />
        <Route path="/consejos/:id" element={<ConsejoDetailPage />} />

        <Route path="/programas" element={<ProgramasPage />} />
        <Route path="/eventos" element={<EventosPage />} />

        {/* ✅ Transparencia (nuevo flujo) */}
        <Route path="/transparencia" element={<TransparenciaIndexPage />} />
        <Route
          path="/transparencia/:year/:month"
          element={<TransparenciaMesPage />}
        />
      </Route>

      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
