"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { CheckCircle, ShieldCheck, TrendingUp, UserCheck, Map, Zap, Database } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Results", id: "metrics" },
              { name: "Process", id: "features" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Pricing", id: "pricing" },
            ]}
            brandName="Amplix "
            button={{ text: "Get Leads", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{ variant: "plain" }}
            title="Pay-Per-Lead Marketing That Actually Scales"
            description="Stop wasting budget on vanity metrics. Get high-intent, qualified leads delivered to your contracting business daily. We guarantee performance, you focus on closing."
            avatars={[
              { src: "https://images.unsplash.com/photo-1560250097-0b93528c31e6?q=80&w=300&h=300", alt: "Contractor" },
              { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300", alt: "Business Owner" },
              { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300", alt: "Contractor" },
              { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300", alt: "Partner" },
              { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&h=300", alt: "Executive" },
            ]}
            avatarText="Trusted by 500+ growing contracting businesses"
            buttons={[
              { text: "See Results", href: "#metrics" },
              { text: "Start Today", href: "#contact" },
            ]}
            buttonAnimation="slide-up"
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardOne
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            metrics={[
              { id: "m1", value: "15,000+", title: "Leads Generated", description: "High-intent project inquiries monthly", icon: CheckCircle },
              { id: "m2", value: "4.2x", title: "Average ROI", description: "Turning ad spend into real revenue", icon: TrendingUp },
              { id: "m3", value: "98%", title: "Lead Quality", description: "Verified through multi-step vetting", icon: ShieldCheck },
            ]}
            title="Proven Performance"
            description="Our numbers speak for themselves. We optimize every funnel to maximize your conversion rate for high-value contracts."
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentySix
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "Lead Qualification", description: "Every lead is screened against your specific service criteria and location.", imageSrc: "https://images.unsplash.com/photo-1581092160607-ee22521dd763?q=80&w=800&h=600", buttonIcon: UserCheck },
              { title: "Strategy Mapping", description: "Custom funnel architecture designed to minimize friction for homeowners and businesses.", imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=600", buttonIcon: Map },
              { title: "Automated Nurture", description: "Seamless SMS and email drip campaigns keep project leads warm until handover.", imageSrc: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&h=600", buttonIcon: Zap },
              { title: "CRM Integration", description: "Direct syncing to your existing sales stack for real-time lead notification.", imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=600", buttonIcon: Database },
            ]}
            title="Why Partner With Us?"
            description="We don't just send traffic; we curate high-value conversations for contracting firms."
          />
        </div>

        <div id="about" data-section="about">
          <TextSplitAbout
            useInvertedBackground={false}
            title="Your Growth Engine"
            description={[
              "We are a team of data-obsessed marketers dedicated to the pay-per-lead model for contracting businesses. We take on the risk so you can focus on building your brand.", "Our philosophy is simple: if you don't grow, we don't succeed. We obsess over quality control, channel diversity, and ROI at every single step."]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSix
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Jane Smith", handle: "@janesmith", testimonial: "The project lead quality is light years ahead of any other provider we have used.", imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300" },
              { id: "2", name: "Mark Johnson", handle: "@markj", testimonial: "Our sales team went from hunting leads to just closing contracts daily.", imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c31e6?q=80&w=300&h=300" },
              { id: "3", name: "Sarah Lee", handle: "@sarahlee", testimonial: "Finally, a partner that understands true ROI. We are hitting our targets consistently.", imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300" },
              { id: "4", name: "David Brown", handle: "@dbrown", testimonial: "Exceptional communication and high-intent leads that actually turn into signed projects.", imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300" },
              { id: "5", name: "Emma Wilson", handle: "@ewilson", testimonial: "Consistent, reliable, and scalable. Exactly what our contracting startup needed.", imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&h=300" },
            ]}
            title="Voices of Success"
            description="Hear from contracting firms who transformed their sales pipelines."
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardEight
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            plans={[
              { id: "basic", badge: "Start", price: "$1,999/mo", subtitle: "Perfect for local testing", features: ["50 Verified Leads", "Dashboard Access", "Email Support"], buttons: [{ text: "Select Plan", href: "#contact" }] },
              { id: "pro", badge: "Growth", price: "$4,499/mo", subtitle: "Scale your territory", features: ["150 Verified Leads", "Account Manager", "CRM Auto-Sync"], buttons: [{ text: "Select Plan", href: "#contact" }] },
              { id: "enterprise", badge: "Scale", price: "Custom", subtitle: "Regional dominance", features: ["500+ Verified Leads", "Strategy Audit", "24/7 Priority Support"], buttons: [{ text: "Contact Us", href: "#contact" }] },
            ]}
            title="Transparent Pay-Per-Lead"
            description="Choose the lead volume that fits your team's capacity."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "How is lead quality verified?", content: "We use a multi-step verification process including phone validation and intent scoring." },
              { id: "2", title: "Can I target specific regions?", content: "Absolutely. We build geo-fenced campaigns tailored precisely to your service area." },
              { id: "3", title: "Is there a long-term contract?", content: "We work on flexible monthly cycles with no long-term commitment required." },
            ]}
            title="Common Questions"
            description="Everything you need to know about starting your campaign."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Get Started"
            title="Ready to Scale Your Contracting Business?"
            description="Let's discuss your revenue targets and how we can help you hit them. No fluff, just results."
            buttons={[{ text: "Schedule Consultation", href: "#" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoText="LeadGenius"
            leftLink={{ text: "Privacy Policy", href: "#" }}
            rightLink={{ text: "Terms of Service", href: "#" }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
