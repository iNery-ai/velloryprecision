import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ProductHero from "@/components/ProductHero";
import ComparisonSection from "@/components/ComparisonSection";
import BenefitsFeatures from "@/components/BenefitsFeatures";
import HowToUse from "@/components/HowToUse";
import EditorialLuna from "@/components/EditorialLuna";
import KitAndSpecs from "@/components/KitAndSpecs";
import CustomerReviews from "@/components/CustomerReviews";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalOfferSection from "@/components/FinalOfferSection";
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
        <ComparisonSection />
        <BenefitsFeatures />
        <HowToUse />
        <EditorialLuna />
        <KitAndSpecs />
        <CustomerReviews />
        <GuaranteeSection />
        <FinalOfferSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}

