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
        background="fluid"
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
            ]}
            brandName="Amplix "
            button={{ text: "Get Leads", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{ variant: "gradient-bars" }}
            title="Pay-Per-Lead Marketing That Actually Scales"
            description="Stop wasting budget on vanity metrics. Get high-intent, qualified leads delivered to your sales team daily. We guarantee performance, you focus on closing."
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022640.jpg", alt: "User" },
              { src: "http://img.b2bpic.net/free-photo/business-concept-portrait-handsome-business-man-holding-hands-with-confident-face-white-background_1258-103959.jpg", alt: "User" },
              { src: "http://img.b2bpic.net/free-photo/portrait-enthusiastic-delighted-adult-dark-skinned-woman-with-curly-haircut_176420-31214.jpg", alt: "User" },
              { src: "http://img.b2bpic.net/free-photo/confident-handsome-middle-aged-entrepreneur_1262-4871.jpg", alt: "User" },
              { src: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg", alt: "User" },
            ]}
            avatarText="Trusted by 500+ growing contracting businesses "
            buttons={[
              { text: "See Results", href: "#metrics" },
              { text: "Start Today", href: "#contact" },
            ]}
            buttonClassName="text-white"
            buttonTextClassName="text-white"
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
              { id: "m1", value: "15,000+", title: "Leads Generated", description: "High-intent leads delivered monthly", icon: CheckCircle },
              { id: "m2", value: "4.2x", title: "Average ROI", description: "Leads that turn into revenue  ", icon: TrendingUp },
              { id: "m3", value: "98%", title: "Lead Quality", description: "Verified through multi-step vetting", icon: ShieldCheck },
            ]}
            title="Proven Performance"
            description="We don’t charge retainers for “marketing.”
We get paid when qualified leads actually come in. Simple.

Our system is built to generate consistent inbound leads for service businesses using paid ads, funnels, follow-up systems, and conversion optimization."
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentySix
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "Lead Qualification", description: "Every lead is screened against your specific buyer persona criteria.", imageSrc: "http://img.b2bpic.net/free-photo/busy-multicultural-diverse-employees-analysing-annual-financial-statistics-sitting-desk-front-laptop-holding-documents-searching-business-solutions-team-businesspeople-working-company_482257-13550.jpg", buttonIcon: UserCheck },
              { title: "Strategy Mapping", description: "Custom funnel architecture designed to minimize friction for your users.", imageSrc: "http://img.b2bpic.net/free-photo/business-executives-reviewing-marketing-trends_482257-121143.jpg", buttonIcon: Map },
              { title: "Automated Nurture", description: "Seamless email and SMS drip campaigns keep leads warm until handover.", imageSrc: "http://img.b2bpic.net/free-photo/diet-healthy-eating-natural-food_53876-121381.jpg", buttonIcon: Zap },
              { title: "CRM Integration", description: "Direct syncing to your sales stack for real-time lead notification.", imageSrc: "http://img.b2bpic.net/free-photo/business-people-binary-code-sharing-technology-concept_53876-13712.jpg", buttonIcon: Database },
            ]}
            title="Why Amplix?"
            description="We don't just send traffic; We give you leads that convert without long term contracts and monthly retainers"
          />
        </div>

        <div id="about" data-section="about">
          <TextSplitAbout
            useInvertedBackground={false}
            title="Your Growth Engine"
            description={[
              "We are a team of data-obsessed marketers dedicated to the pay-per-lead model. We take on the risk so you can focus on building your product.", "Our philosophy is simple: if you don't grow, we don't succeed. That's why we obsess over quality control, channel diversity, and ROI at every single step."]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSix
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Jane Smith", handle: "@janesmith", testimonial: "LeadGenius changed everything. Our sales team went from hunting leads to just closing them.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-caucasian-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-isolated-gray_171337-630.jpg" },
              { id: "2", name: "Mark Johnson", handle: "@markj", testimonial: "The lead quality is light years ahead of any other provider we have used.", imageSrc: "http://img.b2bpic.net/free-photo/skyscraper-view-city-leader-window-frame_1134-1034.jpg" },
              { id: "3", name: "Sarah Lee", handle: "@sarahlee", testimonial: "Finally, a partner that understands true ROI. We are hitting our targets consistently.", imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1600.jpg" },
              { id: "4", name: "David Brown", handle: "@dbrown", testimonial: "Exceptional communication and even better results. Highly recommended agency.", imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1676.jpg" },
              { id: "5", name: "Emma Wilson", handle: "@ewilson", testimonial: "Consistent, reliable, and scalable. Exactly what our startup needed.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5391.jpg" },
            ]}
            title="Voices of Success"
            description="Hear from companies who transformed their sales pipeline with our service."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "How is lead quality determined?", content: "We use a multi-step verification process including phone validation and intent scoring." },
              { id: "2", title: "Can I target specific regions?", content: "Absolutely. We build geo-fenced campaigns tailored to your service area." },
              { id: "3", title: "Is there a long-term contract?", content: "We work on monthly cycles with no long-term commitment required." },
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
            title="Ready to Scale Your Sales?"
            description="Let's discuss your revenue targets and how we can help you hit them. No sales fluff, just results."
            buttons={[{ text: "Schedule Consultation", href: "#" }]}
            buttonClassName="text-white"
            buttonTextClassName="text-white"
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