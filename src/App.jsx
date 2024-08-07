import "./App.scss";
import Header from "../src/components/global/header";
import MainPage from "./components/sections/mainPage";
import MyServices from "./components/sections/myServices/myServices";
import ProfessionalExperience from "./components/sections/professionalExperiences/professionalExperience";
import FormacaoAcademica from "./components/sections/formacaoAcademica";
import SobreMim from "./components/sections/aboutMe";
import MinhasCompetencias from "./components/sections/competencias";
import ContactosEMarcacoes from "./components/sections/contacts";
import FAQ from "./components/sections/faq";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <MyServices />
      <ProfessionalExperience />
      <FormacaoAcademica />
      <MinhasCompetencias />
      <SobreMim />
      <ContactosEMarcacoes />
      <FAQ/>
    </>
  );
}

export default App;
