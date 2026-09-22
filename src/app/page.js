import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import IntroSection from "@/components/IntroSection/IntroSection";
import Enterprise from "@/components/Enterprise/Enterprise";
import Market from "@/components/Market/Market";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import Resources from "@/components/Resources/Resources";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />
        <IntroSection />
        <Enterprise />
        <Market />
        <FeaturedProduct />
        <Resources />
      </main>

      <Footer />
    </div>
  );
}
