import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HowToUse from "@/components/HowToUse";
import KitAndSpecs from "@/components/KitAndSpecs";
import CustomerReviews from "@/components/CustomerReviews";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <ProductHero />
        <BeforeAfterSection />
        <HowToUse />
        <KitAndSpecs />
        <CustomerReviews />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
