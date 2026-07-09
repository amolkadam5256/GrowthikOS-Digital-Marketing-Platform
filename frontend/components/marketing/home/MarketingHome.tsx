import { AnnouncementBar } from "./sections/AnnouncementBar";
import { SiteHeader } from "./sections/SiteHeader";
import { Hero } from "./sections/Hero";
import { AiAssistantSection } from "./sections/AiAssistantSection";
import { PlatformCategories } from "./sections/PlatformCategories";
import { AiMarketplace } from "./sections/AiMarketplace";
import { LiveDashboardDemo } from "./sections/LiveDashboardDemo";
import { CoreProductGrid } from "./sections/CoreProductGrid";
import { WorkflowBuilder } from "./sections/WorkflowBuilder";
import { AiAgentsGrid } from "./sections/AiAgentsGrid";
import { IntegrationsSection } from "./sections/IntegrationsSection";
import { IndustrySolutions } from "./sections/IndustrySolutions";
import { RoleBasedSolutions } from "./sections/RoleBasedSolutions";
import { ReportingSection } from "./sections/ReportingSection";
import { AnalyticsSection } from "./sections/AnalyticsSection";
import { EnterpriseSection } from "./sections/EnterpriseSection";
import { LearningCenter } from "./sections/LearningCenter";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { PricingSection } from "./sections/PricingSection";
import { Footer } from "./sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

export function MarketingHome() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink selection:bg-primary-500/30 selection:text-brand-ink">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />
      
      {/* 2. Sticky Navigation */}
      <SiteHeader />
      
      <main>
        {/* 3 & 5. Hero Section & Unified Dashboard Preview */}
        <Hero />
        
        {/* 4. AI Assistant */}
        <AiAssistantSection />
        
        {/* 6. Platform Categories */}
        <FadeIn><PlatformCategories /></FadeIn>
        
        {/* 7. AI Marketplace */}
        <FadeIn><AiMarketplace /></FadeIn>
        
        {/* 8. Live Dashboard Demo */}
        <FadeIn><LiveDashboardDemo /></FadeIn>
        
        {/* 9. Core Product Grid */}
        <CoreProductGrid />
        
        {/* 10. Workflow Builder */}
        <FadeIn><WorkflowBuilder /></FadeIn>
        
        {/* 11. AI Agents */}
        <FadeIn><AiAgentsGrid /></FadeIn>
        
        {/* 12. Integrations */}
        <FadeIn><IntegrationsSection /></FadeIn>
        
        {/* 13. Industry Solutions */}
        <FadeIn><IndustrySolutions /></FadeIn>
        
        {/* 14. Role-Based Solutions */}
        <FadeIn><RoleBasedSolutions /></FadeIn>
        
        {/* 15. Reporting Section */}
        <FadeIn><ReportingSection /></FadeIn>
        
        {/* 16. Analytics */}
        <FadeIn><AnalyticsSection /></FadeIn>
        
        {/* 17. Enterprise */}
        <FadeIn><EnterpriseSection /></FadeIn>
        
        {/* 18. Learning Center */}
        <FadeIn><LearningCenter /></FadeIn>
        
        {/* 19. Testimonials */}
        <FadeIn><TestimonialsSection /></FadeIn>
        
        {/* 20. Pricing */}
        <FadeIn><PricingSection /></FadeIn>
      </main>
      
      {/* 21. Footer */}
      <FadeIn><Footer /></FadeIn>
    </div>
  );
}