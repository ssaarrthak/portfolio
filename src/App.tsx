import Header from "./components/Header";
import ContextBar from "./components/ContextBar";
import Hero from "./components/Hero";
import MetricsBar from "./components/MetricsBar";
import DualFocus from "./components/DualFocus";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary">
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <ContextBar />
          <Hero />
          <MetricsBar />
          <DualFocus />
          <Experience />
          <Skills />
          <Certifications />
          <ContactBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
