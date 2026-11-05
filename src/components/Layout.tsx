import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarDropdown from "@/components/ui/NavbarDropdown";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarDropdown
                logo="Vertical Lens Aviation"
                navItems={[
                  { name: "Specialties", href: "#specialties" },
                  { name: "Local Scenery", href: "#local-scenery" },
                  { name: "Flight Specs", href: "#specs" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Book Flight", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimpleReveal
                brand="Vertical Lens Aviation"
                columns={[
                  {
                    title: "Specialties",
                    items: [
                      { label: "Couples & Weddings", href: "#specialties" },
                      { label: "Coastal Scenery", href: "#local-scenery" },
                      { label: "Real Estate Property", href: "#specialties" },
                      { label: "Land & Acreage", href: "#specialties" },
                    ],
                  },
                  {
                    title: "North Myrtle Beach",
                    items: [
                      { label: "Cherry Grove Pier Aerials", href: "#local-scenery" },
                      { label: "Oceanfront Estates", href: "#specialties" },
                      { label: "Salt Marsh & Waterway", href: "#local-scenery" },
                      { label: "Grand Strand Coastline", href: "#local-scenery" },
                    ],
                  },
                  {
                    title: "Flight Info",
                    items: [
                      { label: "FAA Part 107 Certified", href: "#specs" },
                      { label: "Licensed & Insured in SC", href: "#specs" },
                      { label: "Package Pricing", href: "#pricing" },
                      { label: "Book a Flight", href: "#contact" },
                    ],
                  },
                ]}
                copyright="© 2026 Vertical Lens Aviation. North Myrtle Beach, SC. All rights reserved."
                links={[
                  { label: "FAA Compliance", href: "#specs" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
