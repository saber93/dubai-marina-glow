import {
    Wrench,
    Gauge,
    PaintBucket,
    Sparkles,
    Radio,
    Snowflake,
    Trees,
    Sofa,
    Brush,
    Layers,
    Settings,
    Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Image imports
import electricalImg from "@/assets/serv/electrical.avif";
import engineDiagnosticsImg from "@/assets/serv/engine_diagnostics_refits.avif";
import engineRoomImg from "@/assets/serv/engine_room.avif";
import generatorImg from "@/assets/serv/generator_service.avif";
import electronicsImg from "@/assets/serv/electronics_navigation_audio.avif";
import acImg from "@/assets/serv/A_C_refrigeration_systems.avif";
import antiFoulingImg from "@/assets/serv/anti_fouling.avif";
import fiberglassImg from "@/assets/serv/fiberglass.avif";
import polishingImg from "@/assets/serv/polishing.avif";
import touchUpImg from "@/assets/serv/touch_up_repair.avif";
import upholsteryImg from "@/assets/serv/upholstery_interior.avif";
import teakImg from "@/assets/serv/teak_wood.avif";
import paintingImg from "@/assets/serv/painting.avif";

export interface Service {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    longDescription: string;
    image: string;
}

export const services: Service[] = [
    {
        id: "mechanical-electrical-repairs",
        icon: Wrench,
        title: "Mechanical & Electrical Repairs",
        description:
            "Complete diagnostics and repairs for mechanical systems, wiring, panels, pumps, and onboard electrical components.",
        image: electricalImg,
        longDescription: `When something onboard stops working, it’s rarely “just one thing.” Mechanical and electrical systems on luxury yachts are tightly connected—power distribution, pumps, steering, thrusters, lighting, chargers, sensors, and control modules all depend on stable connections and correct load handling. Our team performs structured troubleshooting to find the real root cause (not just the symptom), then restores safe and reliable operation with marine-grade parts and clean workmanship.

**What we handle**
- Pumps, hydraulics, steering, bilge systems, valves, and mechanical assemblies
- Electrical faults, breakers, relays, panels, chargers, inverters, and battery issues
- Wiring repairs, corrosion mitigation, terminal replacements, and cable management

**How we work**
We start with a detailed fault diagnosis, electrical testing where needed, and a clear scope of work. Repairs follow best practices for marine environments (heat, humidity, vibration, and salt exposure). After repair, we test under real operating conditions to confirm stability and prevent recurring issues.

If you’re seeing blown fuses, intermittent power, unusual noises, burning smells, voltage drops, pump cycling, or unexplained alarms—this service is the right place to start.`,
    },
    {
        id: "engine-diagnostics-refits",
        icon: Gauge,
        title: "Engine Diagnostics & Refits",
        description:
            "Advanced engine diagnostics, performance optimization, refits, and full engine-room upgrades.",
        image: engineDiagnosticsImg,
        longDescription: `Your yacht’s engine performance depends on accurate diagnostics—not guesswork. We use systematic checks to identify issues affecting power, fuel efficiency, temperature stability, vibration, and long-term reliability. Whether you need a targeted fix, a performance improvement, or a full refit plan, we approach it with the same precision: measure, verify, repair, and validate.

**Ideal for**
- Persistent alarms, overheating, smoke, vibration, or rough idle
- Power loss, higher fuel consumption, or inconsistent RPM behavior
- Pre-purchase inspections, seasonal readiness, or reliability upgrades

**What’s included**
- Full engine health evaluation and fault tracing
- Inspection of cooling, fuel, lubrication, belts, mounts, and key auxiliaries
- Refitting scope planning (components, timeline, and staged upgrade options)

**Refit mindset**
A proper refit improves access, safety, and serviceability—not only appearance. We can reorganize systems, tidy routing, replace worn components, and bring the engine room back to a clean, professional standard so future maintenance becomes easier and more predictable.`,
    },
    {
        id: "engine-service",
        icon: Settings,
        title: "Engine Service",
        description:
            "Routine engine maintenance, oil and filter changes, inspections, and reliability servicing for all yacht types.",
        image: engineRoomImg,
        longDescription: `Routine servicing is the simplest way to protect your yacht’s value and avoid downtime during peak season. Salt air, heat, and long idle periods can accelerate wear—especially in filters, fluids, cooling circuits, and belts. Our engine service focuses on preventative care and reliability, ensuring your engines start cleanly, run smoothly, and stay within correct operating temperatures.

**Typical service includes**
- Oil and filter changes (engine + related systems as needed)
- Fuel system checks and filter replacement
- Cooling system inspection (seawater strainer, hoses, clamps, leaks)
- Belts, mounts, and general condition inspection
- Safety checks for leaks, corrosion points, and abnormal sounds

**What you get**
You receive a cleaner engine bay, smoother operation, and fewer surprises—plus a clear report of any wear items we recommend addressing next. If you’re preparing for a trip, a charter, or seasonal relaunch, this service provides the confidence that your engines are ready.

Best practice: schedule servicing based on engine hours, usage patterns, and seasonal storage conditions.`,
    },
    {
        id: "generator-service",
        icon: Zap,
        title: "Generator Service",
        description:
            "Generator maintenance and repairs including filters, belts, electrical checks, load testing, and performance tuning.",
        image: generatorImg,
        longDescription: `Your generator is the backbone of onboard comfort—powering air conditioning, refrigeration, lighting, entertainment, and charging systems. In Dubai’s heat, a generator that isn’t maintained properly can struggle under load, run inefficiently, or shut down at the worst time. We service and repair marine generators to keep voltage stable, starts consistent, and runtime dependable.

**Service focus**
- Filters, belts, fluids, hoses, and cooling inspections
- Electrical checks, connections, and safety validation
- Performance checks and troubleshooting for alarms or shutdowns

**Common signs you need service**
- Hard starting, surging RPM, unusual vibrations, or smoke
- Power fluctuations, breaker trips, or repeated alarms
- Overheating, coolant loss, or inconsistent output under load

**Our approach**
We don’t stop at “it runs.” We verify stable output and reliable behavior under realistic operating conditions. This reduces nuisance failures, improves comfort onboard, and protects sensitive electronics that can be damaged by unstable power.`,
    },
    {
        id: "electronics-navigation-audio",
        icon: Radio,
        title: "Electronics, Navigation & Audio",
        description:
            "Marine electronics installation and upgrades: navigation systems, radar, comms, audio, and clean wiring integration.",
        image: electronicsImg,
        longDescription: `Modern yachts rely on integrated electronics—navigation displays, radar, autopilot, VHF/communications, sound systems, and networked accessories. A professional installation is about more than mounting screens: it’s about clean power delivery, interference control, waterproofing, tidy cable runs, and a reliable user experience at sea.

**We support**
- Navigation and helm upgrades (MFDs, sensors, integration)
- Communications and safety systems (VHF, AIS, antenna routing)
- Marine audio upgrades (speakers, amps, zones, clean tuning)

**Installation quality matters**
Poor wiring, weak connections, and messy routing lead to intermittent faults, noise in audio, GPS dropouts, and recurring troubleshooting costs. We install with marine best practices: correct cable sizing, proper terminations, secure routing, and clean labeling.

**Outcome**
You get a helm that feels premium and behaves predictably—fast boot, stable connections, clean signal, and a polished finish that matches a luxury vessel standard.`,
    },
    {
        id: "ac-refrigeration-systems",
        icon: Snowflake,
        title: "A/C & Refrigeration Systems",
        description:
            "Marine climate control installation, maintenance, and repair for optimal onboard comfort in all conditions.",
        image: acImg,
        longDescription: `Comfort onboard depends on a healthy marine HVAC and refrigeration system—especially in Dubai’s climate. Marine A/C and refrigeration work in harsh conditions: salt exposure, constant vibration, high ambient temperatures, and tight compartments. We diagnose and repair issues safely, then verify performance so cabins cool properly and refrigeration remains stable.

**What we handle**
- Marine A/C troubleshooting, servicing, and component replacement
- Refrigeration checks for galley and onboard cold storage systems
- Airflow, drainage, leaks, and cooling performance issues

**Common problems we solve**
- Weak cooling, icing, water leaks, odd smells, or noisy operation
- Units tripping, failing to start, or overheating
- Poor airflow due to blocked vents, dirty coils, or duct issues

**Our standard**
We prioritize clean workmanship, correct pressures, reliable electrical connections, proper insulation, and tidy routing. The goal is a system that cools efficiently, runs quietly, and holds stable temperatures without constant resets or alarms.`,
    },
    {
        id: "hull-painting-antifouling",
        icon: PaintBucket,
        title: "Hull Painting & Antifouling",
        description:
            "Professional hull painting, surface preparation, protective coatings, and antifouling applications for lasting protection.",
        image: antiFoulingImg,
        longDescription: `Your hull’s finish is more than aesthetics—it’s protection. Proper surface preparation, correct coating systems, and clean application directly impact durability, speed, and long-term maintenance costs. We provide professional hull painting and antifouling services suited for luxury yachts operating in UAE waters.

**Hull painting**
We focus on preparation and finish quality: masking, sanding, fairing where needed, priming, and clean topcoat application. The result is a smooth, glossy finish that elevates appearance and supports resale value.

**Antifouling**
Antifouling protects against marine growth that increases drag, fuel consumption, and stress on propulsion systems. We apply the right protective system for your yacht’s usage profile and keep edges, waterline details, and hardware transitions clean.

**What you’ll notice**
- A visibly refreshed hull with a premium finish
- Reduced marine growth buildup
- Better performance efficiency and easier cleaning

This service is ideal before the season, after extended storage, or whenever the existing coating shows wear, blistering, or uneven aging.`,
    },
    {
        id: "fiberglass-composite-repairs",
        icon: Layers,
        title: "Fiberglass / Composite Repairs",
        description:
            "Structural and cosmetic fiberglass repairs, lamination, fairing, strengthening, and long-lasting finish restoration.",
        image: fiberglassImg,
        longDescription: `Fiberglass and composite structures require correct repair methods to restore strength, shape, and finish. Quick cosmetic patches often fail later—cracking, printing through paint, or allowing water intrusion. Our repair work prioritizes structural integrity first, then delivers a clean surface ready for finishing.

**We repair**
- Cracks, chips, impact damage, and delamination
- Gelcoat/fiberglass defects, stress marks, and worn edges
- Local reinforcements and fairing for a smooth final profile

**Process**
We assess the damage, prepare the area properly, rebuild with the correct laminate approach, and fair the surface to match original lines. Final finishing can be blended seamlessly with surrounding areas for a near-invisible result.

**Why it matters**
Correct composite repairs protect your yacht’s safety, prevent future moisture damage, and maintain a luxury appearance. This service is recommended after docking incidents, fender damage, stress cracking, or any visible surface deformation.`,
    },
    {
        id: "yacht-polishing-detailing",
        icon: Sparkles,
        title: "Yacht Polishing & Detailing",
        description:
            "Professional polishing, compounding, and detailing to restore gloss, protect gelcoat, and enhance overall appearance.",
        image: polishingImg,
        longDescription: `A premium yacht should look premium. Over time, sun exposure, salt, and washing marks dull gelcoat and paint—reducing shine and making surfaces harder to keep clean. Our polishing and detailing service restores gloss, improves reflections, and adds a protective finish that helps maintain the look longer.

**What we do**
- Decontamination and surface preparation
- Compounding and polishing to remove oxidation and haze
- Finishing polish for deep gloss and clarity
- Protective sealing where appropriate

**Best for**
- Dull or chalky surfaces, water spots, swirl marks
- Pre-event preparation, pre-sale presentation, or seasonal refresh
- Owners who want easy-to-maintain shine with a luxury look

**Results**
You’ll see cleaner reflections, richer color depth, and a noticeably “fresh” appearance. It’s the highest-impact upgrade for visual appeal without changing anything structurally—and it complements painting and touch-up repairs perfectly.`,
    },
    {
        id: "touch-up-gelcoat-repair",
        icon: Brush,
        title: "Touch-Up & Gelcoat Repair",
        description:
            "Precision color-matched touch-ups and gelcoat repairs for chips, scratches, scuffs, and minor surface damage.",
        image: touchUpImg,
        longDescription: `Small marks can make an otherwise perfect yacht look tired—especially on glossy hulls and high-visibility areas. Our touch-up and gelcoat repair service targets chips, scratches, scuffs, and minor abrasions with careful color matching and controlled blending, restoring a clean premium finish without overdoing the repair area.

**Typical repairs**
- Fender scuffs, docking scratches, small chips
- Hairline gelcoat cracks and surface abrasions
- Localized blemishes on hull sides, edges, and corners

**How we ensure quality**
We prep the surface properly, match the tone and gloss, build the repair in layers when needed, and finish with sanding/polishing for a smooth blend. The goal is a repair that looks natural in daylight—not obvious under different angles.

This service is perfect for maintaining a “like-new” look between larger paint cycles, and it helps protect the surface from water intrusion and further cracking.`,
    },
    {
        id: "upholstery-soft-furnishings",
        icon: Sofa,
        title: "Upholstery & Soft Furnishings",
        description:
            "Marine-grade upholstery repairs and upgrades for seats, cushions, sunpads, and interior soft furnishings.",
        image: upholsteryImg,
        longDescription: `Luxury comfort comes down to details: stitching, fit, foam structure, and marine-grade materials that withstand sun, salt, and frequent use. We repair and upgrade yacht upholstery and soft furnishings to refresh your interior and exterior lounging areas while maintaining a high-end finish.

**Services include**
- Seat, cushion, and sunpad repairs or replacements
- Stitching repair, foam reshaping, and fit adjustment
- Material upgrades using marine-appropriate fabrics/vinyls/leathers

**Why marine upholstery is different**
Marine environments punish materials—UV, humidity, and salt accelerate cracking, fading, and mold. We focus on durability and finishing quality so your upholstery looks premium and lasts longer.

**When to consider**
- Visible cracks, fading, loose seams, or discomfort
- Pre-charter refresh or interior upgrade
- Water damage or wear from heavy seasonal use

A well-executed upholstery upgrade instantly elevates perceived value and enhances the onboard experience for owners and guests.`,
    },
    {
        id: "teak-deck-restoration",
        icon: Trees,
        title: "Teak Deck Restoration",
        description:
            "Teak deck sanding, cleaning, caulking, and refinishing to restore the deck’s beauty and durability.",
        image: teakImg,
        longDescription: `Teak decks are a signature of luxury—but they require proper care to stay beautiful and safe. Harsh sun, salt, and frequent washing can dry teak, open seams, and weaken caulking. Our teak restoration service returns the deck to a clean, uniform look with improved grip and long-term durability.

**What we do**
- Deep cleaning and preparation
- Controlled sanding to restore flatness and remove weathering
- Seam inspection and caulking repair where needed
- Finishing to achieve an elegant, consistent appearance

**Why professional restoration matters**
Over-sanding reduces teak life, and poor caulking work can trap moisture and lead to bigger repairs. We restore with a precision approach that protects the deck’s structure while improving appearance.

**Best time**
Before peak season, before resale or survey, or anytime you notice uneven color, raised grain, failing seams, or slippery areas. Proper teak care adds comfort, safety, and a strong “yacht-grade” impression the moment guests step aboard.`,
    },
    {
        id: "interior-restoration-deck-refinishing",
        icon: Sparkles,
        title: "Interior Restoration & Deck Refinishing",
        description:
            "Luxury interior restoration, carpentry refinishing, and deck upgrades to bring your yacht back to pristine condition.",
        image: paintingImg,
        longDescription: `Your yacht’s interior should feel calm, clean, and premium—like a luxury hotel on water. Over time, surfaces pick up scratches, fading, loose trims, and wear around high-traffic zones. We restore and refinish interiors and deck areas with a craftsmanship-first mindset, focusing on details that elevate the entire experience.

**Interior restoration**
- Wood panel refinishing and trim repairs
- Hardware alignment, fit/finish improvements, surface restoration
- Refreshing worn areas while preserving the yacht’s original character

**Deck refinishing**
- Refinishing high-traffic deck zones, steps, and detail areas
- Coordinating with teak restoration and touch-up repairs for a unified look

**Outcome**
A restored interior and refined deck improves comfort, resale value, and the “first impression” factor—especially for owners who want their yacht to present beautifully in Dubai Marina, during events, or for guests.

This service is pair perfectly with upholstery upgrades, polishing, and electronics modernization for a complete refresh.`,
    },
];

export const getServiceById = (id: string) => {
    return services.find((s) => s.id === id);
};
