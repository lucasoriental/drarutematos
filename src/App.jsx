import "./styles/App.scss";
import Header from "./components/layout/header";
import MainPage from "./pages/mainPage";
import MyServices from "./pages/myServices";
import ProfessionalExperience from "./pages/professionalExperience";
import FormacaoAcademica from "./pages/formacaoAcademica";
import SobreMim from "./pages/aboutMe";
import MinhasCompetencias from "./pages/competencias";
import ContactosEMarcacoes from "./pages/contacts";
import Faq from "./pages/faq";
import ParticlesEffect from "./components/ui/ParticlesEffect";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import Parcerias from "./pages/parcerias";
import Footer from "./components/layout/footer";

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
      <Parcerias />
      <ContactosEMarcacoes />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
