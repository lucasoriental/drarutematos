import Header from "../src/components/layout/header.jsx";
import ParticlesEffect from "../src/components/ui/ParticlesEffect";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import SobreMim from "./pages/aboutMe";
import MinhasCompetencias from "./pages/competencias";
import ContactosEMarcacoes from "./pages/contacts";
import FAQ from "./pages/faq";
import FormacaoAcademica from "./pages/formacaoAcademica";
import MainPage from "./pages/mainPage";
import MyServices from "./pages/myServices";
import ProfessionalExperience from "./pages/professionalExperience";
import "./styles/App.scss";

function App() {
  return (
    <div id="main">
      <ParticlesEffect />
      <ScrollToTopButton />
      <Header />
      <MainPage />
      <MyServices />
      <ProfessionalExperience />
      <FormacaoAcademica />
      <MinhasCompetencias />
      <SobreMim />
      <ContactosEMarcacoes />
      <FAQ />
    </div>
  );
}

export default App;
