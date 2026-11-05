import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroVideoScroll from "@/components/sections/hero/HeroVideoScroll";
import FeaturesDetailedCards from "@/components/sections/features/FeaturesDetailedCards";
import FeaturesMediaCarousel from "@/components/sections/features/FeaturesMediaCarousel";
import MetricsFeatureCards from "@/components/sections/metrics/MetricsFeatureCards";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import PricingHighlightedCards from "@/components/sections/pricing/PricingHighlightedCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactSplitFormParallax from "@/components/sections/contact/ContactSplitFormParallax";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="hero" data-section="hero">
        <HeroVideoScroll
          textAnimation="fade-blur"
          tag="North Myrtle Beach Aerial Videography & Photography"
          title="Elevate Every Horizon in North Myrtle Beach"
          description="VerticalLensAviation.com delivers breathtaking 4K & 8K drone footage for romantic couple sessions, coastal scenery, luxury oceanfront real estate, and sprawling land parcels across North Myrtle Beach, SC."
          primaryButton={{ text: "Book Drone Session", href: "#contact" }}
          secondaryButton={{ text: "Explore Specialties", href: "#specialties" }}
          videoSrc="https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4"
          bottomText="FAA Part 107 Certified Drone Pilots • Licensed & Insured in South Carolina • 500+ Coastal Flights"
          avatarsSrc={[
            "https://randomuser.me/api/portraits/women/44.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg",
            "https://randomuser.me/api/portraits/women/68.jpg",
          ]}
          avatarsLabel="Trusted by couples, realtors & land owners across North Myrtle Beach"
        />
      </div>

      <div id="specialties" data-section="specialties">
        <FeaturesDetailedCards
          textAnimation="fade-blur"
          tag="What We Capture"
          title="Four Specialized Flight Missions"
          description="Whether you are preserving romantic memories along Cherry Grove Beach, marketing a luxury oceanfront villa, or surveying raw coastal acreage, our aerial team delivers standard-setting visual perspectives."
          items={[
            {
              title: "Couples & Beach Weddings",
              description: "Capture your love story with sweeping cinematic flyovers along North Myrtle Beach's golden sands. Perfect for engagements, oceanfront weddings, proposals, and anniversary golden-hour shoots.",
              tags: ["Couples", "Beach Weddings", "Sunset Shoots", "4K Cinema"],
              imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/carousel/golden-hour.webp",
            },
            {
              title: "North Myrtle Beach Coastal Scenery",
              description: "High-resolution aerial vistas of North Myrtle Beach's iconic coastline — featuring Cherry Grove Pier, Atlantic ocean sunrises, salt marsh estuaries, and Barefoot Landing waterways.",
              tags: ["North Myrtle Beach", "Cherry Grove Pier", "Ocean Sunrises", "Salt Marshes"],
              imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp",
            },
            {
              title: "Luxury Real Estate & Condo Flyovers",
              description: "Showcase oceanfront homes, beachfront villas, and luxury high-rise condos. We create smooth property fly-throughs, elevation profiles, and neighborhood context shots for top listings.",
              tags: ["Oceanfront Estates", "Listing Flyovers", "Roof Elevation", "MLS Ready"],
              imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp",
            },
            {
              title: "Land Parcels & Commercial Acreage",
              description: "Detailed aerial survey imagery and boundary footage for land developers, real estate investors, and acreage buyers across Horry County and coastal South Carolina.",
              tags: ["Acreage Mapping", "Boundary Aerials", "Development Plots", "Topographic Views"],
              imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/hero.jpg",
            },
          ]}
        />
      </div>

      <div id="local-scenery" data-section="local-scenery">
        <FeaturesMediaCarousel
          textAnimation="fade-blur"
          tag="North Myrtle Beach Reel"
          title="Views from Above the Grand Strand"
          description="Explore interactive highlights of our recent aerial drone flights across North Myrtle Beach and surrounding coastal waters."
          items={[
            {
              title: "Cherry Grove Pier & Shoreline",
              description: "4K sunset drone capture over the crashing waves at Cherry Grove Pier.",
              buttonIcon: ArrowUpRight,
              buttonHref: "#contact",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/hero/hero1.webp",
            },
            {
              title: "Ocean Drive Beach Villa Flyover",
              description: "Cinematic aerial walk-through of a premier luxury oceanfront coastal estate.",
              buttonIcon: ArrowUpRight,
              buttonHref: "#contact",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-2.webp",
            },
            {
              title: "Romantic Couple Beach Session",
              description: "Intimate golden hour beach drone tracking along Crescent Beach.",
              buttonIcon: ArrowUpRight,
              buttonHref: "#contact",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/carousel/island-life.webp",
            },
            {
              title: "Intracoastal Salt Marsh Parcel",
              description: "High-resolution land plot aerial mapping along the salt marsh waterway.",
              buttonIcon: ArrowUpRight,
              buttonHref: "#contact",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-2.jpg",
            },
            {
              title: "Barefoot Landing & Coastal Horizon",
              description: "Panoramic 360-degree high-altitude drone overview of North Myrtle Beach.",
              buttonIcon: ArrowUpRight,
              buttonHref: "#contact",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/destination/destination1.webp",
            },
          ]}
        />
      </div>

      <div id="specs" data-section="specs">
        <MetricsFeatureCards
          textAnimation="fade-blur"
          tag="Flight Standards"
          title="FAA Certified Aerial Production"
          description="Safety, legal compliance, and technical excellence guide every drone flight we execute in North Myrtle Beach, SC."
          metrics={[
            {
              value: "FAA 107",
              title: "Fully Certified & Licensed",
              features: [
                "FAA Part 107 Licensed Drone Remote Pilots",
                "LAANC Airspace Authorization cleared",
                "Fully Insured up to $2M Commercial Liability",
              ],
            },
            {
              value: "5.1K / 4K",
              title: "Cinematic Camera Fleet",
              features: [
                "ProRes & D-Log Color Profiles",
                "High Frame Rate 60/120 FPS Smooth Motion",
                "High-Resolution 48MP Aerial Stills",
              ],
            },
            {
              value: "48 Hours",
              title: "Rapid Digital Delivery",
              features: [
                "Color-graded high-bitrate video clips",
                "Web & MLS-ready image formats",
                "Secure cloud download portal",
              ],
            },
            {
              value: "100% Local",
              title: "North Myrtle Beach SC Based",
              features: [
                "On-location expertise & spot knowledge",
                "Beach flight permits & city compliance",
                "Flexible weather rescheduling guarantee",
              ],
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialTrustCard
          textAnimation="fade-blur"
          quote="VerticalLensAviation.com captured our engagement on North Myrtle Beach during golden hour. The drone shot sweeping over the ocean waves with Cherry Grove Pier in the background was breathtaking. Highly recommend for any couple, property listing, or land survey!"
          rating={5}
          author="— Jessica & Dave K., North Myrtle Beach Couple Session"
          avatars={[
            { name: "Jessica K.", imageSrc: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Dave K.", imageSrc: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sarah M.", imageSrc: "https://randomuser.me/api/portraits/women/68.jpg" },
            { name: "Robert T.", imageSrc: "https://randomuser.me/api/portraits/men/75.jpg" },
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingHighlightedCards
          textAnimation="fade-blur"
          tag="Flight Packages"
          title="Transparent Drone Production Rates"
          description="Tailored aerial packages for couples, real estate professionals, land developers, and coastal video shoots in North Myrtle Beach, SC."
          plans={[
            {
              tag: "Couples Session",
              price: "$450",
              description: "Ideal for beach engagements, proposals, weddings, and anniversaries along North Myrtle Beach.",
              features: [
                "60-minute sunset or sunrise flight",
                "4K color-graded cinematic video highlight",
                "15 high-res aerial stills",
                "Full personal & commercial rights",
                "48-hour digital delivery",
              ],
              primaryButton: { text: "Book Couples Session", href: "#contact" },
            },
            {
              tag: "Real Estate Listing",
              price: "$650",
              highlight: "Most Popular",
              description: "Comprehensive aerial showcase for oceanfront homes, beach villas, and luxury condos.",
              features: [
                "Full exterior property & roof flyover",
                "4K edited listing video with royalty-free music",
                "25 high-res aerial exterior photos",
                "Property boundary callouts",
                "MLS & Instagram/TikTok ready files",
              ],
              primaryButton: { text: "Book Listing Shoot", href: "#contact" },
            },
            {
              tag: "Land & Acreage Survey",
              price: "$850",
              description: "High-precision aerial mapping for land parcels, acreage, and development sites.",
              features: [
                "Complete perimeter boundary footage",
                "High-altitude elevation overview shots",
                "30 high-definition land photos",
                "Orthomosaic map & raw video files",
                "Fast turnaround for land closings",
              ],
              primaryButton: { text: "Request Land Flight", href: "#contact" },
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSimple
          textAnimation="fade-blur"
          tag="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Answers to common questions about flying drones in North Myrtle Beach, SC, weather policies, and footage delivery."
          items={[
            {
              question: "Are you licensed to fly drones in North Myrtle Beach, SC?",
              answer: "Yes! All of our drone operations are conducted by FAA Part 107 certified remote pilots. We carry comprehensive liability insurance and obtain necessary airspace clearances for flying in North Myrtle Beach and Horry County.",
            },
            {
              question: "What happens if it rains or is too windy on my scheduled flight date?",
              answer: "Safety and quality are our top priorities. If weather conditions in North Myrtle Beach (high wind, heavy rain, or fog) prevent flight, we will reschedule your flight to the next optimal weather window at no extra charge.",
            },
            {
              question: "How do we receive our drone video and photos?",
              answer: "Within 48 hours of flight completion, you will receive a secure digital download link with all color-graded 4K/8K video files and high-resolution aerial photos ready for web, print, or social media.",
            },
            {
              question: "Can you shoot couple sessions at Cherry Grove Pier or Crescent Beach?",
              answer: "Absolute specialty! We know the best beach access points, tide schedules, and lighting windows along Cherry Grove, Ocean Drive, Crescent Beach, and Windy Hill for spectacular romantic captures.",
            },
            {
              question: "Do you offer raw unedited video footage for real estate & commercial projects?",
              answer: "Yes, upon request we provide uncompressed ProRes or D-Log raw video files for video editors, marketing agencies, and commercial clients.",
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitFormParallax
          textAnimation="fade-blur"
          tag="Get In Touch"
          title="Schedule Your Aerial Session"
          description="Ready to bring your coastal vision to life? Contact VerticalLensAviation.com in North Myrtle Beach, SC today at (843) 742-4439 or email amchestnut2015@gmail.com to reserve your flight date for couples sessions, property listings, or land survey flights."
          imageSrc="https://storage.googleapis.com/webild/default/templates/marbella/contact/cta-bg.webp"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "service", type: "text", placeholder: "Specialty (Couples, Real Estate, Land, Scenery)", required: false },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project location & requested flight date in North Myrtle Beach...",
            rows: 4,
            required: true,
          }}
          buttonText="Send Flight Request"
          ctaLinks={[
            { icon: "Phone", label: "(843) 742-4439", href: "tel:8437424439" },
            { icon: "Mail", label: "amchestnut2015@gmail.com", href: "mailto:amchestnut2015@gmail.com" },
            { icon: "MapPin", label: "North Myrtle Beach, SC 29582", href: "#" },
          ]}
        />
      </div>
    </StyleProvider>
  );
}
