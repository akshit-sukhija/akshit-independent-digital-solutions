import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronDown,
  ChevronUp,
  Eye,
  FileCheck2,
  FileText,
  Layers,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { ProjectMetrics } from '../components/ProjectMetrics';
import { ProjectPipelineDiagram } from '../components/ArchitectureDiagram';
import { ProjectVisual } from '../components/ProjectVisual';
import { CtaSection } from '../components/CtaSection';
import { PROJECTS } from '../data/studioData';
import { getProjectBySlug } from '../utils/studioLogic';

const REFRAME_SLIDES = [
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

function ReframeCaseStudyShowcase() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(6); // Default to Slide 07 (Hardware anatomy)
  const activeSlide = REFRAME_SLIDES[activeSlideIndex] ?? REFRAME_SLIDES[0];

  return (
    <div className="space-y-0">
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
                    continuity across <span className="text-[#38BDF8]">RE:FRAME ↔ Phone ↔ Laptop ↔ Cloud</span>.
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

      {/* 9. Complete 15-Slide Visual Presentation Gallery */}
      <section className="bg-[#0B0D13] py-16 px-6 border-b border-[#252B3B]">
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
                Browse all 15 slides from the REVIVEX · ZERO² 2026 winning presentation or open the
                original PDF deck directly.
              </p>
            </div>
            <a
              href="/assets/aistudio/REFRAME_Smart_Glasses_Product_Concept_97e4e1df.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-[#0B0D13] bg-[#38BDF8] hover:bg-[#7DD3FC] font-medium transition-colors shrink-0 self-start md:self-auto"
            >
              <FileText className="w-4 h-4" />
              <span>Open Full Presentation PDF (15 Slides)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
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

      {/* 10. Award, Teamwork & Video Rights Notice (#award-and-team) */}
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
              Award Recognition, Team Attribution &amp; Special Video Credit
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

          {/* Explicit Attribution & Video Rights Notice */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#0B0D13] border border-[#252B3B] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8]">
                <Users className="w-4 h-4" />
                <span>Team Roles &amp; Primary Contribution</span>
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
                  ZERO² 2026, and produced the concept video edit used during the live pitch.
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
                <span>Concept Video Usage Rights &amp; Prototype Notice</span>
              </div>
              <p className="text-xs text-[#F4F0E8] leading-relaxed">
                During the live classroom/competition pitch, a short concept video (
                <span className="font-mono text-[#E6D3A7]">Special Video Credit: Adyot Ohri</span>)
                was shown to illustrate how heads-up notifications feel in motion.
              </p>
              <p className="text-xs text-[#A6A9B8] leading-relaxed">
                Because that video compilation incorporates third-party Google Glass-branded
                reference footage whose public redistribution rights are unconfirmed, the video file
                is intentionally not embedded publicly on this website—and it is never represented
                as footage of a physical RE:FRAME hardware prototype.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [showTechnicalSpec, setShowTechnicalSpec] = useState(false);

  if (!project) {
    return (
      <div className="min-h-[70vh] bg-[#11100E] px-6 py-24">
        <PageMeta
          title="Case Study Not Found"
          description="The requested project case study could not be found."
        />
        <div className="max-w-[800px] mx-auto bg-[#1A1814] border border-[#3A3429] rounded-lg p-8 space-y-6">
          <p className="font-mono text-xs text-[#E08A1E]">Case Study Lookup · 404</p>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F2EBDD]">
            Case Study Not Found
          </h1>
          <p className="text-sm text-[#A9A092] leading-relaxed">
            The project URL <code className="text-[#E8D5A8]">{slug}</code> does not match any of
            the dedicated case studies in this portfolio.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#11100E] bg-[#C9A24B] rounded"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Selected Work</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex >= 0 && currentIndex < PROJECTS.length - 1
      ? PROJECTS[currentIndex + 1]
      : undefined;

  return (
    <div>
      <ReadingProgressBar />
      <PageMeta
        title={`${project.title} — Case Study`}
        description={`${project.title}: ${project.plainSubtitle}`}
      />

      {/* Header + Source Evidence Inspector Bar */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-12 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A9A092] hover:text-[#F2EBDD] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>

          <MotionReveal className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
              {project.recognitionBadge && (
                <>
                  <span className="inline-flex items-center gap-1.5 text-[#38BDF8] font-medium">
                    <Award className="w-3.5 h-3.5 text-[#D4AE5C]" />
                    {project.recognitionBadge}
                  </span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <span className="text-[#C9A24B] font-medium">
                {project.collaborators.toLowerCase().includes('solo')
                  ? 'Solo Work'
                  : 'Collaborative Work'}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E8D5A8]">Role: {project.documentedRole}</span>
            </div>

            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 4rem)' }}
            >
              {project.indexNumber}. {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#E8D5A8] leading-relaxed">
              {project.plainSubtitle}
            </p>

            {project.specialCredit && (
              <p className="font-mono text-xs text-[#38BDF8] pt-1">
                {project.specialCredit} · Co-presented with Adyot Ohri at ZERO² 2026
              </p>
            )}
          </MotionReveal>

          {/* Structured Case Study Summary: My Contribution, Methodology, Outcomes & Proof Links */}
          <MotionReveal
            delay={0.06}
            className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <div className="md:col-span-4 space-y-1.5">
              <p className="font-mono text-xs text-[#C9A24B] inline-flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>My Contribution &amp; Collaborators</span>
              </p>
              <p className="text-sm font-semibold text-[#F2EBDD]">{project.documentedRole}</p>
              <p className="text-xs text-[#A9A092] leading-relaxed">{project.collaborators}</p>
              <p className="text-xs text-[#E8D5A8]/90 leading-relaxed pt-1">
                {project.attributionNote}
              </p>
            </div>

            <div className="md:col-span-5 space-y-2">
              <p className="font-mono text-xs text-[#C9A24B]">
                Methodology &amp; Verified Outcomes
              </p>
              <p className="text-xs text-[#F2EBDD] leading-relaxed">
                <strong className="text-[#E8D5A8] font-normal">Approach: </strong>
                {project.approachSummary}
              </p>
              <p className="text-xs text-[#A9A092] leading-relaxed pt-1">
                <strong className="text-[#7AD992] font-normal">Outcome: </strong>
                {project.resultSummary}
              </p>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between gap-3 md:border-l md:border-[#3A3429] md:pl-6">
              <p className="font-mono text-xs text-[#C9A24B]">Available Proof Links</p>
              <div className="space-y-2">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
                  >
                    <span>Open Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.drivePdfUrl && (
                  <a
                    href={project.drivePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-mono text-[#0B0D13] bg-[#38BDF8] hover:bg-[#7DD3FC] font-medium rounded transition-colors"
                  >
                    <span>Open Presentation PDF</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-mono text-[#F2EBDD] bg-[#11100E] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors"
                  >
                    <span>View GitHub Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.drivePdfPlaceholder && (
                  <div className="px-3 py-2 rounded bg-[#11100E] border border-[#3A3429]/80 text-[11px] font-mono text-[#A9A092] leading-relaxed">
                    {project.drivePdfPlaceholder}
                  </div>
                )}
              </div>
            </div>
          </MotionReveal>

          {/* Genuine Visual Showcase / Live Interface Screenshot (when available) */}
          {project.screenshotUrl && (
            <MotionReveal
              delay={0.08}
              className="bg-[#1A1814] border border-[#3A3429] rounded-xl overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-[#3A3429] flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-[#C9A24B]">
                  {project.slug === 'reframe'
                    ? 'RE:FRAME Product Concept Hero Visual · Smart Glasses & Focus Engine Companion App'
                    : 'Live Application Interface Preview'}
                </span>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#7AD992] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Visit {project.liveDemoUrl}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.slug === 'reframe' && (
                  <a
                    href="#award-and-team"
                    className="font-mono text-xs text-[#38BDF8] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Jump to 1st Place Award &amp; Team Photos ↓</span>
                  </a>
                )}
              </div>
              <img
                src={project.screenshotUrl}
                alt={`${project.title} visual showcase`}
                referrerPolicy="no-referrer"
                className="w-full max-h-[580px] object-cover object-top"
              />
              {project.screenshotCaption && (
                <p className="px-5 py-3 font-mono text-xs text-[#A9A092] border-t border-[#3A3429]">
                  {project.screenshotCaption}
                </p>
              )}
            </MotionReveal>
          )}
        </div>
      </section>

      {/* Dedicated 11-Section Visual Showcase for RE:FRAME */}
      {project.slug === 'reframe' && <ReframeCaseStudyShowcase />}

      {/* Section 1: Product-Thinking Case Study Flow */}
      <section className="bg-[#0E0F14] py-16 px-6 border-b border-[#2C2F42]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          {/* Quantitative Data Visualisation (Rendered Only for Projects with Verified Numeric Evidence) */}
          <ProjectMetrics projectSlug={project.slug} />

          <MotionReveal className="space-y-2 max-w-3xl">
            <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wide">
              Product-Thinking Narrative
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              From Problem Discovery &amp; Alternatives to Final Architecture
            </h2>
            <p className="text-sm text-[#A6A9B8]">
              How this project progressed from initial problem framing and user research to
              evaluating alternatives, making the key architectural decision, and shipping the
              verified deliverable.
            </p>
          </MotionReveal>

          {/* Top Row: Problem -> Research -> User Needs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MotionReveal className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3">
              <p className="font-mono text-xs text-[#D4AE5C]">01 · Problem</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What Was Going Wrong</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">{project.problemSummary}</p>
              <p className="text-xs text-[#A6A9B8] leading-relaxed pt-2 border-t border-[#2C2F42]">
                {project.businessContext}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.04}
              className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#8B75FF]">02 · Research Context</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What We Observed</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">
                {project.productThinking.researchContext}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.08}
              className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#7AD992]">03 · User Needs</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What Users Actually Needed</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">
                {project.productThinking.userNeeds}
              </p>
            </MotionReveal>
          </div>

          {/* Second Row: Alternatives -> Decision -> Prototype & Evidence */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MotionReveal className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3">
              <p className="font-mono text-xs text-[#E6D3A7]">04 · Alternatives Considered</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">
                Why Simpler Options Fell Short
              </h3>
              <p className="text-sm text-[#A6A9B8] leading-relaxed">
                {project.productThinking.alternativesConsidered}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.04}
              className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#D4AE5C]">05 · Product &amp; System Decision</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">The Chosen Architecture</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">
                {project.productThinking.productDecision}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.08}
              className="bg-[#161822] border border-[#D4AE5C]/70 rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#D4AE5C]">
                06 · Prototype → Implementation &amp; Evidence
              </p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What Was Delivered</h3>
              <p className="text-xs text-[#E6D3A7] leading-relaxed">
                {project.productThinking.prototypeEvolution}
              </p>
              <ul className="space-y-1 text-xs text-[#F4F0E8] pt-2 border-t border-[#2C2F42]">
                {project.deliverables.map((del) => (
                  <li key={del}>· {del}</li>
                ))}
              </ul>
            </MotionReveal>
          </div>

          {/* Section 3: Bespoke ProjectVisual Architecture + Interactive Step Flowchart */}
          <MotionReveal>
            <ProjectVisual slug={project.slug} mode="full" />
          </MotionReveal>

          <MotionReveal>
            <ProjectPipelineDiagram
              projectTitle={project.title}
              plainHowItWorksSummary={project.plainHowItWorksSummary}
              architectureSummary={project.architectureSummary}
              nodes={project.architectureNodes}
            />
          </MotionReveal>
        </div>
      </section>

      {/* Section 4: Plain-English Features + Step-by-Step Walkthrough */}
      <section className="bg-[#1A1814] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Plain-English Benefits with Expandable Technical Note */}
          <MotionReveal className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Key Capabilities</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                What the System Does
              </h2>
              <p className="text-xs text-[#A9A092] mt-1">
                Written in plain English, with technical notes underneath each point.
              </p>
            </div>

            <div className="space-y-4">
              {project.plainFeatures.map((feat) => (
                <div
                  key={feat.plain}
                  className="bg-[#11100E] border border-[#3A3429] rounded-lg p-4 space-y-2"
                >
                  <p className="text-sm font-medium text-[#F2EBDD] leading-relaxed">
                    {feat.plain}
                  </p>
                  <p className="font-mono text-[11px] text-[#A9A092] pt-2 border-t border-[#3A3429]/70 leading-relaxed">
                    <span className="text-[#C9A24B]">Technical detail: </span>
                    {feat.technical}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Step-by-Step How Information Moves */}
          <MotionReveal delay={0.06} className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Step-by-Step Walkthrough</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                How Information Moves Through {project.title}
              </h2>
            </div>

            <div className="space-y-4">
              {project.workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#11100E] border border-[#3A3429] rounded-lg p-5 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C9A24B]">Step {step.step}</span>
                    <h3 className="text-base font-semibold text-[#F2EBDD]">{step.title}</h3>
                  </div>
                  <p className="text-sm text-[#A9A092] leading-relaxed">{step.detail}</p>
                  {step.technicalDetail && (
                    <p className="font-mono text-[11px] text-[#E8D5A8]/80 pt-1">
                      Under the hood: {step.technicalDetail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Section 5: Tools Used (Plain-English Explanations + Expandable Deep Technical Spec) */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Tools &amp; Technology</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                Tools &amp; Frameworks Applied
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowTechnicalSpec((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#E8D5A8] bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>
                {showTechnicalSpec
                  ? 'Hide Deep Specs & Architecture Decisions'
                  : 'Inspect Architecture Specs & Technical Decisions'}
              </span>
              {showTechnicalSpec ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Plain-English Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.plainToolsSummary.map((item) => (
              <div
                key={item.tool}
                className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-5 space-y-2"
              >
                <p className="font-mono text-xs text-[#C9A24B]">{item.tool}</p>
                <p className="text-sm text-[#F2EBDD] leading-relaxed">{item.whatItDoes}</p>
              </div>
            ))}
          </div>

          {/* Expandable Technical Depth for Developers & Technical Reviewers */}
          {showTechnicalSpec && (
            <div className="space-y-8 pt-4 border-t border-[#3A3429]">
              {project.evidenceArtifacts.map((artifact) => (
                <div
                  key={artifact.title}
                  className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3A3429] pb-3">
                    <h3 className="text-base font-semibold text-[#F2EBDD]">{artifact.title}</h3>
                    {artifact.datasetOrHardwareCondition && (
                      <span className="font-mono text-xs text-[#E08A1E]">
                        {artifact.datasetOrHardwareCondition}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#A9A092]">{artifact.caption}</p>
                  <pre className="bg-[#11100E] border border-[#3A3429] rounded p-4 overflow-x-auto font-mono text-xs text-[#E8D5A8] leading-relaxed">
                    <code>{artifact.codeOrSpec}</code>
                  </pre>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.technicalDecisions.map((item) => (
                  <div
                    key={item.decision}
                    className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-2.5"
                  >
                    <h3 className="text-base font-semibold text-[#F2EBDD]">{item.decision}</h3>
                    <p className="text-sm text-[#A9A092] leading-relaxed">
                      <strong className="text-[#E8D5A8] font-normal">Why: </strong>
                      {item.rationale}
                    </p>
                    <p className="text-xs text-[#A9A092] pt-2 border-t border-[#3A3429]">
                      <strong className="text-[#F2EBDD] font-normal">Trade-off: </strong>
                      {item.tradeoff}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 11: Project Limitations & Final Learnings (Ivory Contrast Panel) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-16 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <MotionReveal className="space-y-4">
            <p className="font-mono text-xs text-[#7A5B14]">
              {project.slug === 'reframe'
                ? 'Section 11 · Project Limitations & Unbuilt Concept Scope'
                : 'Honest Limitations & Scope'}
            </p>
            <h2 className="font-display text-3xl text-[#11100E]">
              What You Should Know About This Project
            </h2>
            <ul className="space-y-3 text-sm text-[#232019] leading-relaxed">
              {project.limitationsAndScope.map((lim) => (
                <li
                  key={lim}
                  className="bg-white/80 border border-[#3A3429]/20 rounded p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-[#7A5B14] font-semibold">—</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.06} className="space-y-4">
            <p className="font-mono text-xs text-[#7A5B14]">
              Final Learnings &amp; Client Takeaways
            </p>
            <h2 className="font-display text-3xl text-[#11100E]">
              How This Applies to Studio Client Work
            </h2>
            <ul className="space-y-3 text-sm text-[#232019] leading-relaxed">
              {project.keyLessons.map((lesson) => (
                <li
                  key={lesson}
                  className="bg-white/80 border border-[#3A3429]/20 rounded p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-[#7A5B14] font-semibold">→</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="bg-[#11100E] py-12 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded-lg p-4 flex items-center gap-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#C9A24B] shrink-0" />
              <div>
                <p className="font-mono text-xs text-[#A9A092]">Previous Project</p>
                <p className="text-sm font-semibold text-[#F2EBDD]">
                  {prevProject.indexNumber}. {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/work/${nextProject.slug}`}
              className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded-lg p-4 flex items-center justify-between gap-3 transition-colors sm:ml-auto"
            >
              <div className="text-right">
                <p className="font-mono text-xs text-[#A9A092]">Next Project</p>
                <p className="text-sm font-semibold text-[#F2EBDD]">
                  {nextProject.indexNumber}. {nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#C9A24B] shrink-0" />
            </Link>
          )}
        </div>
      </section>

      <CtaSection
        variant="dark"
        headline={`Planning a product narrative, campaign, or custom tool like ${project.title}?`}
        supportingCopy="Share your brief, product concept, or workflow challenge. I will review your material and outline a clear studio scope."
      />
    </div>
  );
}
