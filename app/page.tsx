import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LatestReleaseSection from "@/components/LatestReleaseSection";
import StreamingSection from "@/components/StreamingSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <LatestReleaseSection />
      <StreamingSection />
      <SocialMediaSection />
      <Footer />
    </main>
  );
}
