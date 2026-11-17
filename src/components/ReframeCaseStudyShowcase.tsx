import { useState } from 'react';
import {
  Award,
  Eye,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { HeroVideoShowcase } from './HeroVideoShowcase';

export const REFRAME_SLIDES = [
  {
    number: '01',
    title: 'Google Glass — The Original Vision',
    caption:
      'Title slide presented by Adyot Ohri & Akshit Sukhija at REVIVEX · ZERO² 2026: examining a product that tried to put the future in front of our eyes.',
    src: '/assets/reframe/slide-01.png',
  },
  {
    number: '02',
    title: 'One Quick Check. Many Distractions.',
    caption:
      'How a simple smartphone glance spirals into notification overload—pulling people out of real-world conversations and moments.',
    src: '/assets/reframe/slide-02.png',
  },
  {
    number: '03',
    title: 'We Brought the World Into the Phone',
    caption:
      'Diagnosing screen fatigue: smartphones concentrated every utility into a single glass rectangle at the cost of human presence.',
    src: '/assets/reframe/slide-03.png',
  },
  {
    number: '04',
    title: 'What If We Could Look Up Again?',
    caption:
      'Core thesis: maybe the future does not need another screen—it needs calm, heads-up intelligence that respects attention.',
    src: '/assets/reframe/slide-04.png',
  },
  {
    number: '05',
    title: '2014 Google Glass — Ahead of Its Time',
    caption:
      'Reviewing the original 2014 Explorer Edition capabilities: optical prism display, 5MP camera, bone-conduction audio, and voice commands.',
    src: '/assets/reframe/slide-05.png',
  },
  {
    number: '06',
    title: 'Why 2014 Google Glass Struggled',
    caption:
      'Four structural barriers identified in research: High Price ($1,500), Unconventional Cyborg Design, Privacy Concerns, and Unclear Everyday Use Case.',
    src: '/assets/reframe/slide-06.png',
  },
  {
    number: '07',
    title: 'Introducing RE:FRAME — Nazar Wahi. Nazariya Naya.',
    caption:
      'Modular smart-glasses hardware concept: 01 Micro-OLED Display, 02 Ultra-Wide Camera, 03 Temple Touch Pad, 04 Everyday Prescription-Ready Frame, Nose Pads, Modular Arms, and Charging Case.',
    src: '/assets/reframe/slide-07.png',
  },
  {
    number: '08',
    title: 'RE:FRAME App Ecosystem & Multi-Device Sync',
    caption:
      'Companion app modules (Capture, Manage, Customize, Sync, Control, Insights) and seamless Glasses ↔ Phone ↔ Laptop ↔ Cloud architecture.',
    src: '/assets/reframe/slide-08.png',
  },
  {
    number: '09',
    title: 'Real-World Use Cases — Look. Understand. Act.',
    caption:
      'Four everyday scenarios: 01 Live Signboard & Menu Translation, 02 Turn-by-Turn Pedestrian Navigation, 03 Retail Product Comparison, and 04 Page Summarisation.',
    src: '/assets/reframe/slide-09.png',
  },
  {
    number: '10',
    title: 'Introducing Focus Engine',
    caption:
      'Contextual notification filter: Captures All Input → Analyzes Context → Filters & Prioritizes → Delivers Only What Matters in Your View.',
    src: '/assets/reframe/slide-10.png',
  },
  {
    number: '11',
    title: 'The Revival Strategy — Five Product Pillars',
    caption:
      '01 Real Problems Real Solutions, 02 Privacy by Design, 03 Better Value, 04 AI-Powered Usefulness, and 05 A Connected Ecosystem.',
    src: '/assets/reframe/slide-11.png',
  },
  {
    number: '12',
    title: 'Product Positioning & ₹39,999 Pricing Proposal',
    caption:
      '“Intelligence Looks Good On You” — positioning RE:FRAME at ₹39,999 vs the original $1,500 (~₹1.25L+) Google Glass Explorer Edition.',
    src: '/assets/reframe/slide-12.png',
  },
  {
    number: '13',
    title: 'Target Audiences — Who Will Buy RE:FRAME?',
    caption:
      'Five core user segments: Students, Working Professionals, Content Creators, Travellers/Explorers, and Real-World Problem Solvers.',
    src: '/assets/reframe/slide-13.png',
  },
  {
    number: '14',
    title: 'Look Up and Live It — From Screen Time to Real Time',
    caption:
      'Closing brand statement anchoring the shift from heads-down screen addiction to heads-up everyday clarity.',
    src: '/assets/reframe/slide-14.png',
  },
  {
    number: '15',
    title: 'Presentation Closing — RE:FRAME',
    caption:
      'Final competition slide from the 1st Place winning REVIVEX pitch deck at ZERO² 2026.',
    src: '/assets/reframe/slide-15.png',
  },
];

export function ReframeCaseStudyShowcase() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(6); // Default to Slide 07 (Hardware anatomy)
  const activeSlide = REFRAME_SLIDES[activeSlideIndex] ?? REFRAME_SLIDES[0];

  return (
    <div className="space-y-0">
      {/* 0. Concept Video Showcase & Interactive Scene Breakdown */}
      <section
        id="concept-video-showcase"
        className="bg-[#0B0D13] py-16 px-6 border-b border-[#252B3B]"
      >
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              Concept Film Showcase · Special Video Credit: Adyot Ohri
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              RE:FRAME Product Concept Film — “Look Up and Live It”
            </h2>
            <p className="text-sm sm:text-base text-[#A6A9B8] leading-relaxed">
              Produced for our 1st Place REVIVEX pitch at ZERO² 2026, this 30-second concept video
              demonstrates how RE:FRAME pairs discreet micro-OLED hardware with the Focus Engine HUD
              for calm navigation, live sign translation, and privacy-first contextual alerts.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.04}>
            <HeroVideoShowcase variant="case-study" />
          </MotionReveal>
        </div>
      </section>

      {/* 1 & 2. Original Google Glass Context & Smart-Glasses Limitations */}
      <section className="bg-[#0B0D13] py-16 px-6 border-b border-[#252B3B]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              Sections 01 &amp; 02 · Historical Context &amp; Category Diagnosis
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              Why 2014 Google Glass Failed—and Why the Distraction Problem Got Worse
            </h2>
            <p className="text-sm sm:text-base text-[#A6A9B8] leading-relaxed">
              Google Glass launched in 2014 with an ambitious promise: put computing directly in
              front of our eyes. By January 2015, the consumer Explorer Program was halted. A decade
              later, however, smartphone screen addiction has made the original problem—looking down
              at a screen instead of engaging with the world—far more urgent.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <MotionReveal className="bg-[#131722] border border-[#252B3B] rounded-2xl overflow-hidden flex flex-col justify-between">
              <img
                src="/assets/reframe/slide-02.png"
                alt="RE:FRAME Slide 02: One quick check. Many distractions. We lost the moment."
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-6 space-y-2">
                <p className="font-mono text-xs text-[#38BDF8]">
                  01 · The Modern Distraction Trap
                </p>
                <h3 className="font-display text-2xl text-[#F4F0E8]">
                  “One Quick Check. Many Distractions. We Lost the Moment.”
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A9B8] leading-relaxed">
                  Unlocking a phone to check a single direction or message pulls users into an
                  endless feed of badges, reels, and group pings. We brought the world into the
                  phone, but lost our presence in the physical world.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal
              delay={0.05}
              className="bg-[#131722] border border-[#252B3B] rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <img
                src="/assets/reframe/slide-06.png"
                alt="RE:FRAME Slide 06: 2014 Google Glass limitations — High Price, Unconventional Design, Privacy Concerns, Unclear Use Case"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-6 space-y-2">
                <p className="font-mono text-xs text-[#D4AE5C]">
                  02 · Research Into Smart-Glasses Limitations
                </p>
                <h3 className="font-display text-2xl text-[#F4F0E8]">
                  Four Reasons 2014 Smart Glasses Rejected Everyday Users
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A9B8] leading-relaxed">
                  Our teardown of 2014 Google Glass and current wearables isolated four failure
                  points: <strong className="text-[#F4F0E8]">High Price ($1,500)</strong>,{' '}
                  <strong className="text-[#F4F0E8]">Unconventional Cyborg Design</strong>,{' '}
                  <strong className="text-[#F4F0E8]">Surveillance Privacy Backlash</strong>, and an{' '}
                  <strong className="text-[#F4F0E8]">Unclear Daily Use Case</strong> that duplicated
                  phone clutter instead of filtering it.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 3 & 4. RE:FRAME Product Vision, Hardware Concept, Modular Design & Companion App */}
      <section className="bg-[#0E1118] py-16 px-6 border-b border-[#252B3B]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              Sections 03 &amp; 04 · Product Vision, Modular Hardware &amp; Companion App
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              RE:FRAME — “Nazar Wahi. Nazariya Naya.”
            </h2>
            <p className="text-sm sm:text-base text-[#A6A9B8] leading-relaxed">
              RE:FRAME reimagines smart eyewear as familiar, prescription-ready frames paired with a
              contextual companion app—moving heavy computation off the face and onto the smartphone
              already in your pocket.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <MotionReveal className="lg:col-span-7 bg-[#131722] border border-[#252B3B] rounded-2xl overflow-hidden">
              <img
                src="/assets/reframe/slide-07.png"
                alt="RE:FRAME Modular Hardware Anatomy: Micro-OLED Display, Ultra-Wide Camera, Touch Pad, Premium Frame, Nose Pads, Modular Arms, Charging Case"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-6 space-y-4">
                <p className="font-mono text-xs text-[#38BDF8]">
                  Modular Eyewear Hardware Concept (Unbuilt Industrial Specification)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-xl p-3.5 space-y-1">
                    <p className="font-mono text-[#38BDF8]">01 · Micro-OLED Display</p>
                    <p className="text-[#F4F0E8]/90">
                      Discreet waveguide heads-up overlay visible only to the wearer for navigation,
                      translation, and priority alerts.
                    </p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-xl p-3.5 space-y-1">
                    <p className="font-mono text-[#38BDF8]">02 · Ultra-Wide Camera + LED</p>
                    <p className="text-[#F4F0E8]/90">
                      First-person visual capture for text recognition and object comparison, wired
                      to a mandatory external recording indicator.
                    </p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-xl p-3.5 space-y-1">
                    <p className="font-mono text-[#38BDF8]">03 · Temple Touch Pad</p>
                    <p className="text-[#F4F0E8]/90">
                      Subtle swipe-and-tap gesture surface along the right temple arm for silent,
                      eyes-free confirmation.
                    </p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-xl p-3.5 space-y-1">
                    <p className="font-mono text-[#38BDF8]">
                      04 · Modular Arms &amp; Charging Case
                    </p>
                    <p className="text-[#F4F0E8]/90">
                      Detachable temple arms, ergonomic nose pads, and a portable charging case for
                      all-day wearability.
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal
              delay={0.06}
              className="lg:col-span-5 bg-[#131722] border border-[#252B3B] rounded-2xl overflow-hidden space-y-0"
            >
              <img
                src="/assets/reframe/slide-08.png"
                alt="RE:FRAME Companion App Ecosystem and Multi-Device Sync"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-6 space-y-4">
                <p className="font-mono text-xs text-[#D4AE5C]">
                  Companion Application · RE:FRAME App Ecosystem
                </p>
                <h3 className="font-display text-2xl text-[#F4F0E8]">
                  Six Core Modules + Multi-Device Sync
                </h3>
                <ul className="space-y-2 text-xs text-[#A6A9B8] leading-relaxed">
                  <li>
                    <strong className="text-[#F4F0E8]">Capture &amp; Manage:</strong> Organise
                    first-person snapshots, voice memos, and translated notes automatically on the
                    phone.
                  </li>
                  <li>
                    <strong className="text-[#F4F0E8]">Customize &amp; Control:</strong> Configure
                    Focus Engine rules (Work, Personal, Location, Apps) and hardware privacy
                    switches.
                  </li>
                  <li>
                    <strong className="text-[#F4F0E8]">Sync &amp; Insights:</strong> Seamless
                    continuity across{' '}
                    <span className="text-[#38BDF8]">RE:FRAME ↔ Phone ↔ Laptop ↔ Cloud</span>.
                  </li>
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 5, 6 & 7. Focus Engine, Glasses-Phone-Cloud Architecture & 4 Everyday Use Cases */}
      <section className="bg-[#0B0D13] py-16 px-6 border-b border-[#252B3B]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              Sections 05, 06 &amp; 07 · Focus Engine, Cloud Sync &amp; Real-World Use Cases
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              Filtering Digital Noise &amp; Solving Real-World Moments
            </h2>
            <p className="text-sm sm:text-base text-[#A6A9B8] leading-relaxed">
              Instead of mirroring every WhatsApp message or social alert onto your retina, the
              Focus Engine acts as an intelligent gatekeeper—allowing only high-priority,
              context-matched cues into your field of view.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <MotionReveal className="bg-[#131722] border border-[#38BDF8]/40 rounded-2xl overflow-hidden flex flex-col justify-between">
              <img
                src="/assets/reframe/slide-10.png"
                alt="Introducing Focus Engine — Filters the noise, Understands context, Prioritizes in real time, Learns your habits"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-6 space-y-4">
                <p className="font-mono text-xs text-[#38BDF8]">
                  05 · Focus Engine Notification Prioritisation Pipeline
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-[11px]">
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-lg p-3">
                    <p className="text-[#38BDF8]">Step 01</p>
                    <p className="text-[#F4F0E8] mt-1 font-sans font-medium">Captures All Input</p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-lg p-3">
                    <p className="text-[#38BDF8]">Step 02</p>
                    <p className="text-[#F4F0E8] mt-1 font-sans font-medium">Analyzes Context</p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-lg p-3">
                    <p className="text-[#38BDF8]">Step 03</p>
                    <p className="text-[#F4F0E8] mt-1 font-sans font-medium">
                      Filters &amp; Prioritizes
                    </p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#38BDF8]/50 rounded-lg p-3">
                    <p className="text-[#7AD992]">Step 04</p>
                    <p className="text-[#F4F0E8] mt-1 font-sans font-medium">
                      Delivers in Your View
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal
              delay={0.05}
              className="bg-[#131722] border border-[#252B3B] rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <img
                src="/assets/reframe/slide-09.png"
                alt="RE:FRAME Four Core Use Cases: 01 Translate, 02 Navigate, 03 Compare, 04 Summarize"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-6 space-y-4">
                <p className="font-mono text-xs text-[#D4AE5C]">
                  07 · “Look. Understand. Act.” — Four Core Use Cases
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-lg p-3">
                    <p className="font-mono text-[#38BDF8]">01 · Translate</p>
                    <p className="text-[#A6A9B8] mt-1">
                      Instant visual translation of foreign signs, menus, and transit boards.
                    </p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-lg p-3">
                    <p className="font-mono text-[#38BDF8]">02 · Navigate</p>
                    <p className="text-[#A6A9B8] mt-1">
                      Calm directional arrows (“200 m Turn right”) without staring down at a map.
                    </p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-lg p-3">
                    <p className="font-mono text-[#38BDF8]">03 · Compare</p>
                    <p className="text-[#A6A9B8] mt-1">
                      Hands-free product spec and nutrition comparison while shopping in-store.
                    </p>
                  </div>
                  <div className="bg-[#0B0D13] border border-[#252B3B] rounded-lg p-3">
                    <p className="font-mono text-[#38BDF8]">04 · Summarize</p>
                    <p className="text-[#A6A9B8] mt-1">
                      Quickly condense dense printed pages, whiteboards, or meeting handouts.
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 8. Privacy, Revival Strategy, ₹39,999 Pricing Proposal & Target Audiences */}
      <section className="bg-[#0E1118] py-16 px-6 border-b border-[#252B3B]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wider">
              Section 08 · Privacy by Design, Revival Strategy, Pricing &amp; Target Audiences
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              The 5-Pillar Revival Strategy &amp; ₹39,999 Market Positioning
            </h2>
            <p className="text-sm sm:text-base text-[#A6A9B8] leading-relaxed">
              To make smart eyewear commercially viable in India and globally, RE:FRAME pairs strict
              privacy controls with accessible flagship pricing (`₹39,999`) and five clearly defined
              adopter segments.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <MotionReveal className="bg-[#131722] border border-[#252B3B] rounded-2xl overflow-hidden flex flex-col justify-between">
              <img
                src="/assets/reframe/slide-11.png"
                alt="RE:FRAME Revival Strategy: 5 Pillars"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-5 space-y-2">
                <p className="font-mono text-xs text-[#38BDF8]">The 5 Revival Pillars</p>
                <ul className="space-y-1 text-xs text-[#F4F0E8]/90">
                  <li>01 · Real Problems, Real Solutions</li>
                  <li>02 · Privacy by Design (Visible LED + Hardware Shutter)</li>
                  <li>03 · Better Value Through Phone-Tethered Compute</li>
                  <li>04 · AI-Powered Contextual Usefulness</li>
                  <li>05 · A Connected Multi-Device Ecosystem</li>
                </ul>
              </div>
            </MotionReveal>

            <MotionReveal
              delay={0.04}
              className="bg-[#131722] border border-[#D4AE5C]/50 rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <img
                src="/assets/reframe/slide-12.png"
                alt="RE:FRAME Pricing Proposal — ₹39,999"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-[#D4AE5C]">Pricing Proposal</p>
                  <span className="font-mono text-sm font-semibold text-[#7AD992]">₹39,999</span>
                </div>
                <p className="text-xs text-[#A6A9B8] leading-relaxed">
                  Positioned as an attainable premium companion device—dramatically below the
                  original $1,500 (~₹1.25L+) Google Glass Explorer price by offloading heavy AI and
                  cellular radios to the user’s existing smartphone.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal
              delay={0.08}
              className="bg-[#131722] border border-[#252B3B] rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <img
                src="/assets/reframe/slide-13.png"
                alt="Who Will Buy RE:FRAME? Students, Professionals, Creators, Explorers, Real-World Problem Solvers"
                loading="lazy"
                className="w-full h-auto object-cover border-b border-[#252B3B]"
              />
              <div className="p-5 space-y-2">
                <p className="font-mono text-xs text-[#38BDF8]">Five Target Audiences</p>
                <ul className="space-y-1 text-xs text-[#F4F0E8]/90">
                  <li>• Students (lecture &amp; textbook summarisation)</li>
                  <li>• Professionals (calm meeting &amp; schedule cues)</li>
                  <li>• Creators (hands-free first-person capture)</li>
                  <li>• Explorers (live sign translation &amp; walking navigation)</li>
                  <li>• Real-World Problem Solvers (field checklists)</li>
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 9. Complete 15-Slide Visual Presentation Gallery (#slide-deck-gallery) */}
      <section
        id="slide-deck-gallery"
        className="bg-[#0B0D13] py-16 px-6 border-b border-[#252B3B]"
      >
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#252B3B] pb-5">
            <div className="space-y-2">
              <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
                Section 09 · Complete Competition Presentation Deck (15 Slides)
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
                Inspect the Full RE:FRAME Pitch Deck
              </h2>
              <p className="text-sm text-[#A6A9B8]">
                Browse all 15 high-resolution slides from the REVIVEX · ZERO² 2026 winning
                presentation interactively below.
              </p>
            </div>
            <span className="font-mono text-xs text-[#E6D3A7]">
              Showing Slide {activeSlide.number} of 15
            </span>
          </div>

          {/* Active Slide Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 bg-[#131722] border border-[#38BDF8]/40 rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-[#252B3B] flex items-center justify-between text-xs font-mono">
                <span className="text-[#38BDF8]">
                  Slide {activeSlide.number} of 15 · {activeSlide.title}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlideIndex((prev) =>
                        prev > 0 ? prev - 1 : REFRAME_SLIDES.length - 1
                      )
                    }
                    className="px-2.5 py-1 rounded bg-[#0B0D13] border border-[#252B3B] hover:border-[#38BDF8] text-[#F4F0E8] cursor-pointer"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlideIndex((prev) =>
                        prev < REFRAME_SLIDES.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="px-2.5 py-1 rounded bg-[#0B0D13] border border-[#252B3B] hover:border-[#38BDF8] text-[#F4F0E8] cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
              <img
                src={activeSlide.src}
                alt={`RE:FRAME Presentation Slide ${activeSlide.number}: ${activeSlide.title}`}
                className="w-full h-auto object-contain bg-[#080A0F]"
              />
              <div className="p-4 border-t border-[#252B3B] text-xs text-[#A6A9B8] leading-relaxed">
                <strong className="text-[#F4F0E8]">Slide {activeSlide.number}: </strong>
                {activeSlide.caption}
              </div>
            </div>

            {/* 15-Slide Thumbnail Grid Selector */}
            <div className="lg:col-span-4 bg-[#131722] border border-[#252B3B] rounded-2xl p-4 space-y-3">
              <p className="font-mono text-xs text-[#E6D3A7]">
                Select Any Slide (01–15)
              </p>
              <div className="grid grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
                {REFRAME_SLIDES.map((slide, idx) => {
                  const isSelected = idx === activeSlideIndex;
                  return (
                    <button
                      key={slide.number}
                      type="button"
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`group text-left rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#38BDF8] ring-1 ring-[#38BDF8]'
                          : 'border-[#252B3B] hover:border-[#D4AE5C]/60 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.src}
                        alt={`Slide ${slide.number}`}
                        loading="lazy"
                        className="w-full h-14 object-cover"
                      />
                      <div className="px-2 py-1 bg-[#0B0D13] font-mono text-[10px] text-[#F4F0E8] flex items-center justify-between">
                        <span>#{slide.number}</span>
                        {isSelected && <Eye className="w-2.5 h-2.5 text-[#38BDF8]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Award, Teamwork & Video Attribution Notice (#award-and-team) */}
      <section
        id="award-and-team"
        className="bg-[#131722] py-16 px-6 border-b border-[#252B3B]"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D4AE5C]">
              <Award className="w-4 h-4 text-[#D4AE5C]" />
              <span>Section 10 · 1st Place · REVIVEX · ZERO² 2026 · IITM Janakpuri</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              Award Recognition, Collaborative Attribution &amp; Special Video Credit
            </h2>
            <p className="text-sm sm:text-base text-[#A6A9B8] leading-relaxed">
              RE:FRAME secured <strong className="text-[#F4F0E8]">1st Position in REVIVEX</strong>{' '}
              at <strong className="text-[#F4F0E8]">ZERO² — The Innovators’ Convention</strong>{' '}
              (September 21–22, 2026), organised by InternWare — The Internship Cell of IITM,
              Janakpuri, New Delhi.
            </p>
          </MotionReveal>

          {/* Genuine Award & Team Photographs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <MotionReveal className="bg-[#0B0D13] border border-[#252B3B] rounded-2xl overflow-hidden flex flex-col justify-between">
              <div className="bg-[#080A0F] flex items-center justify-center p-4 border-b border-[#252B3B]">
                <img
                  src="/assets/aistudio/Winning_Photo_5d3b58d1.png"
                  alt="Akshit Sukhija and teammate Adyot Ohri receiving the 1st Place REVIVEX certificate at ZERO² 2026"
                  loading="lazy"
                  className="max-h-[420px] w-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-6 space-y-2">
                <p className="font-mono text-xs text-[#38BDF8]">
                  Genuine Event Photograph · Stage Presentation &amp; Award Handover
                </p>
                <h3 className="font-display text-2xl text-[#F4F0E8]">
                  Winning Team at ZERO² 2026 — IITM Janakpuri
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A9B8] leading-relaxed">
                  Co-presenters <strong className="text-[#F4F0E8]">Akshit Sukhija</strong> and{' '}
                  <strong className="text-[#F4F0E8]">Adyot Ohri</strong> receiving the 1st Position
                  certificate for RE:FRAME during the REVIVEX competition ceremony.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal
              delay={0.05}
              className="bg-[#0B0D13] border border-[#D4AE5C]/50 rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="bg-[#080A0F] flex items-center justify-center p-4 border-b border-[#252B3B]">
                <img
                  src="/assets/aistudio/Award_Photo_a60e7a36.png"
                  alt="1st Position REVIVEX Trophy and Certificate of Achievement awarded at ZERO² 2026"
                  loading="lazy"
                  className="max-h-[420px] w-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-6 space-y-2">
                <p className="font-mono text-xs text-[#D4AE5C]">
                  Verified Proof · Trophy &amp; Certificate of Achievement
                </p>
                <h3 className="font-display text-2xl text-[#F4F0E8]">
                  1st Position in REVIVEX · ZERO² (September 21–22, 2026)
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A9B8] leading-relaxed">
                  Official Certificate of Achievement and Token of Achievement plaque recognizing
                  1st Position in REVIVEX for outstanding performance, creativity, and product
                  innovation.
                </p>
              </div>
            </MotionReveal>
          </div>

          {/* Explicit Attribution & Concept Prototype Scope Notice */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#0B0D13] border border-[#252B3B] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8]">
                <Users className="w-4 h-4" />
                <span>Collaborative Work Attribution &amp; Primary Contribution</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-[#F4F0E8]/90 leading-relaxed">
                <p>
                  <strong className="text-[#F4F0E8]">Akshit Sukhija (Primary Contribution):</strong>{' '}
                  Led the product research, 2014 Google Glass limitation diagnosis, competitive
                  wearables analysis, RE:FRAME product vision, modular hardware and companion-app
                  ecosystem architecture, Focus Engine prioritisation logic, 5-pillar revival
                  strategy, ₹39,999 pricing model, and pitch narrative structure.
                </p>
                <p>
                  <strong className="text-[#F4F0E8]">Adyot Ohri (Teammate &amp; Co-Presenter):</strong>{' '}
                  Collaborated on the REVIVEX competition pitch, co-presented the deck on stage at
                  ZERO² 2026, and produced the concept video edit featured on the homepage and in
                  this case study.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#131722] border border-[#D4AE5C]/60 font-mono text-xs text-[#E6D3A7]">
                <Sparkles className="w-4 h-4 text-[#D4AE5C]" />
                <span>Special Video Credit: Adyot Ohri</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B0D13] border border-[#E08A1E]/50 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#E08A1E]">
                <ShieldAlert className="w-4 h-4" />
                <span>Concept Video &amp; Unbuilt Hardware Notice</span>
              </div>
              <p className="text-xs text-[#F4F0E8] leading-relaxed">
                The RE:FRAME concept video (
                <span className="font-mono text-[#E6D3A7]">Special Video Credit: Adyot Ohri</span>)
                visualises how heads-up notifications, live street navigation, and real-time sign
                translation feel in everyday life.
              </p>
              <p className="text-xs text-[#A6A9B8] leading-relaxed">
                RE:FRAME is an independent, unbuilt product strategy and industrial/UX concept
                created for the REVIVEX competition. The concept video incorporates visual reference
                cuts to communicate the proposed heads-up user experience and is never represented
                as commercial hardware manufacturing footage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
