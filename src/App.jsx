import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Navbar from "./components/Layout/Navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔹 Pagini Publice
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AbonamentePage from "./pages/AbonamentePage";
import CursuriPage from "./pages/CursuriPage";
import CalculatorProfitabilitatePage from "./pages/CalculatorProfitabilitatePage";
import GeneratorQRPage from "./pages/GeneratorQRPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import FAQsPage from "./pages/FAQsPage";

// 🔒 Pagini Private (autentificare obligatorie)
import DashboardPage from "./pages/DashboardPage";
import AdminDashboard from "./pages/AdminDashboard";
import AgentDashboard from "./pages/AgentDashboard";
import ImporturiPage from "./pages/ImporturiPage";

// 🚦 Componente de rutare private pe roluri
import PrivateRoute from "./components/Auth/PrivateRoute";
import AdminRoute from "./components/Auth/AdminRoute";
import AgentRoute from "./components/Auth/AgentRoute";
import ProRoute from "./components/Auth/ProRoute";

// ⚠️ Pagina fallback – 404 Not Found
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Context global pentru autentificare */}
      <AuthProvider>
        <BrowserRouter>
          {/* Meniul de navigare */}
          <Navbar />

          <Routes>
            {/* ✅ Rute Publice */}
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/abonamente" element={<AbonamentePage />} />
            <Route path="/cursuri" element={<CursuriPage />} />
            <Route path="/calculator-profitabilitate" element={<CalculatorProfitabilitatePage />} />
            <Route path="/generator-qr" element={<GeneratorQRPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQsPage />} />

            {/* 🔒 Rute Private - utilizator logat */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>

            {/* 🚀 Rută restricționată – abonament PRO activ */}
            <Route element={<ProRoute />}>
              <Route path="/importuri" element={<ImporturiPage />} />
            </Route>

            {/* 🛡️ Rută restricționată doar Admin */}
            <Route element={<AdminRoute />}>
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
            </Route>

            {/* 📦 Rută restricționată doar Agent */}
            <Route element={<AgentRoute />}>
              <Route path="/dashboard/agent" element={<AgentDashboard />} />
            </Route>

            {/* ⚠️ Ruta 404 Not Found pentru rutele invalide */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* ✅ Container notificări globale – react-toastify */}
          <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
