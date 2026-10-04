import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  Plane, 
  Package, 
  Truck, 
  ShieldCheck, 
  Globe2, 
  Clock, 
  CheckCircle2, 
  Compass, 
  Zap, 
  Lock,
  Layers
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function HomePage() {
  const { navigate } = useRouter();

  const services = [
    {
      title: 'International Express',
      description: 'Fast international shipping for urgent documents and parcels with guaranteed transit times.',
      icon: Zap,
      badge: 'High Priority',
    },
    {
      title: 'Air Freight',
      description: 'Reliable air transportation for shipments moving across borders with scheduled flight departures.',
      icon: Plane,
      badge: 'Daily Flights',
    },
    {
      title: 'Door-to-Door Delivery',
      description: 'Complete delivery solutions from initial pickup to final destination customs & doorstep handover.',
      icon: Truck,
      badge: 'Full Custody',
    },
    {
      title: 'Shipment Tracking',
      description: 'Stay informed with real-time shipment progress and milestone alerts across every hub transfer.',
      icon: Search,
      badge: 'Live Radar',
    },
  ];

  const whyChoosePoints = [
    {
      title: 'Reliable International Network',
      description: 'Robust logistics infrastructure connecting Dhaka, Singapore, New York, and major global trade capitals with dependable departures.',
      icon: Globe2,
    },
    {
      title: 'Secure Shipment Handling',
      description: 'Strict chain-of-custody protocols, tamper-evident sealing, and barcode verification at every transit checkpoint.',
      icon: Lock,
    },
    {
      title: 'Transparent Tracking',
      description: 'Accurate milestone timestamps with real-time flight progress, estimated hub updates, and clear status breakdowns.',
      icon: Compass,
    },
    {
      title: 'Fast Global Delivery',
      description: 'Optimized flight corridors and streamlined customs brokerage for the quickest possible cross-continent delivery.',
      icon: Clock,
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* ========================================================
          HERO SECTION (Fitted to original aspect ratio on PC & Mobile)
          ======================================================== */}
      <section className="relative w-full bg-[#071A33] overflow-hidden">
        {/* Container with responsive aspect ratio:
            Mobile: aspect-[760/1428] (min-h-[100dvh])
            Desktop: aspect-[1852/849] (min-h-[560px] lg:min-h-[640px])
        */}
        <div className="relative w-full min-h-[100dvh] md:min-h-[580px] lg:min-h-[640px] xl:min-h-[720px] aspect-[760/1428] md:aspect-[1852/849] flex items-center overflow-hidden">
          {/* Background Images adhering strictly to original ratios */}
          <div className="absolute inset-0 z-0">
            {/* Desktop Hero Image (Original Ratio: 1852 x 849) */}
            <img
              src="/LMEX PC Hero.webp"
              alt="LMEX International Global Freight Logistics"
              className="hidden md:block w-full h-full object-cover md:object-fill lg:object-cover object-center"
              style={{ aspectRatio: '1852 / 849' }}
              loading="eager"
            />
            {/* Mobile Hero Image (Original Ratio: 760 x 1428) */}
            <img
              src="/LMEX mobile hero.webp"
              alt="LMEX International Global Freight Logistics Mobile"
              className="block md:hidden w-full h-full object-cover object-center"
              style={{ aspectRatio: '760 / 1428' }}
              loading="eager"
            />

            {/* Cinematic subtle contrast gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/90 via-[#071A33]/50 to-[#071A33]/70" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#071A33]/40 to-[#071A33]/80" />
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12 sm:pt-28 sm:pb-16 flex flex-col items-center justify-center h-full text-center">
            <div className="max-w-3xl lg:max-w-4xl flex flex-col items-center justify-center mx-auto">

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-6 text-center">
                Delivering <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#16A9E0]">
                  Beyond Borders
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-normal mb-6 sm:mb-10 max-w-xl text-center mx-auto">
                Fast, secure and reliable international courier solutions connecting your shipments to destinations around the world.
              </p>

              {/* Primary CTA Button (Center aligned on all devices) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/track-order')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4 rounded-full bg-[#16A9E0] hover:bg-[#0E92C4] text-[#071A33] font-extrabold text-base sm:text-base tracking-wide shadow-xl shadow-[#16A9E0]/30 hover:shadow-2xl hover:shadow-[#16A9E0]/50 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <Search className="w-5 h-5 stroke-[2.5]" />
                  <span>Track Order</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Supporting Micro Stats (Center aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/85 text-xs sm:text-xs font-medium mx-auto">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16A9E0]" />
                  <span>100% Insured Transit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#16A9E0]" />
                  <span>220+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#16A9E0]" />
                  <span>24/7 Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES SECTION: "Global Delivery, Simplified"
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A9E0]/10 border border-[#16A9E0]/20 text-[#16A9E0] text-xs font-bold uppercase tracking-wider mb-3">
              Our Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight mb-4">
              Global Delivery, Simplified
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Engineered for reliability, velocity, and complete transparency. Experience international parcel and cargo delivery built for global business.
            </p>
          </div>

          {/* Service Cards Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative bg-[#F8FAFC] hover:bg-white p-7 rounded-2xl border border-[#E2E8F0] hover:border-[#16A9E0]/50 hover:shadow-xl hover:shadow-[#071A33]/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#071A33] group-hover:bg-[#16A9E0] text-white flex items-center justify-center transition-colors duration-300 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#071A33]/60 bg-white group-hover:bg-[#16A9E0]/10 px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-lg font-bold text-[#071A33] mb-2.5 group-hover:text-[#0D2A4A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Micro action */}
                  <div className="mt-6 pt-4 border-t border-[#E2E8F0]/70 flex items-center justify-between text-xs font-semibold text-[#16A9E0]">
                    <span>Learn Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE LMEX SECTION: "Why Choose LMEX International?"
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A33]/5 border border-[#071A33]/10 text-[#071A33] text-xs font-bold uppercase tracking-wider">
                Corporate Standards
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight leading-tight">
                Why Choose LMEX International?
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                We combine regional courier precision with premier international airline alliances to guarantee that every document, parcel, and commercial cargo reaches its destination safely.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/track-order')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#071A33] hover:bg-[#0D2A4A] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <Search className="w-4 h-4 text-[#16A9E0]" />
                  <span>Check Shipment Status</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 4 Points Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChoosePoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#16A9E0]/10 text-[#16A9E0] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#071A33] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM CALL TO ACTION BANNER
          ======================================================== */}
      <section className="bg-gradient-to-r from-[#071A33] via-[#0D2A4A] to-[#071A33] py-16 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            Need to track an urgent shipment?
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 font-light">
            Enter your 16-character LMEX consignment code for verified flight status, hub transfers, and delivery progress.
          </p>
          <button
            onClick={() => navigate('/track-order')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#16A9E0] hover:bg-[#0E92C4] text-[#071A33] font-bold text-sm tracking-wide shadow-xl shadow-[#16A9E0]/30 hover:scale-[1.03] transition-all"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>Launch Tracking Portal</span>
          </button>
        </div>
      </section>
    </div>
  );
}
