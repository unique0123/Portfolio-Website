import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievmentSection from "./components/AchievmentSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(18,18,18)] ">
      <Navbar />

      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AchievmentSection />
        <AboutSection/>
        <ProjectSection />
        <EmailSection/>
        <Footer />
      </div>
    </main>
  );
}
