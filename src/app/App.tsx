import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Diferenciais } from "./components/Diferenciais";
import { Equipamentos } from "./components/Equipamentos";
import { Tecnologia } from "./components/Tecnologia";
import { Aplicacoes } from "./components/Aplicacoes";
import { Videos } from "./components/Videos";
import { Depoimentos } from "./components/Depoimentos";
import { SobreNos } from "./components/SobreNos";
import { Localizacao } from "./components/Localizacao";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <Hero />
      <Diferenciais />
      <Equipamentos />
      <Tecnologia />
      <Aplicacoes />
      <Videos />
      <Depoimentos />
      <SobreNos />
      <Localizacao />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
