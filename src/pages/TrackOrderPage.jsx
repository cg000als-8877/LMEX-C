import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Package, 
  Plane, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Building2, 
  AlertCircle, 
  RefreshCw, 
  ShieldCheck, 
  ArrowRight, 
  ArrowDown,
  Navigation,
  Globe,
  Share2,
  Printer,
  ChevronRight,
  PlaneTakeoff,
  Ship,
  Warehouse
} from 'lucide-react';
import { 
  DEMO_TRACKING_NUMBER, 
  getShipmentByTrackingNumber 
} from '../data/shipmentData';

export default function TrackOrderPage() {
  const [trackingInput, setTrackingInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0); // 0, 1, 2
  const [shipmentData, setShipmentData] = useState(null);

  const resultRef = useRef(null);
  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  // Clean up timers on unmount
  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  // Check if a tracking query was initiated from the Home page
  useEffect(() => {
    const pending = sessionStorage.getItem('pendingTrackingNumber');
    if (pending) {
      setTrackingInput(pending);
      sessionStorage.removeItem('pendingTrackingNumber');
      if (pending.trim().length >= 4) {
        startTrackingFlow(pending);
      }
    }
  }, []);

  const loadingMessages = [
    'Locating your shipment...',
    'Connecting to shipment network...',
    'Retrieving latest shipment status...',
  ];

  const startTrackingFlow = (trackingCode) => {
    const cleanCode = trackingCode.trim().toUpperCase();
    setErrorMessage('');

    if (!cleanCode || cleanCode.length < 4) {
      setShipmentData(null);
      setErrorMessage('Please enter a valid tracking number.');
      return;
    }

    clearAllTimers();

    // Trigger randomized 3 to 8 seconds realistic radar lookup
    setIsLoading(true);
    setShipmentData(null);
    setLoadingPhase(0);

    // Random duration between 3000ms (3.0s) and 8000ms (8.0s)
    const totalDuration = Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;
    const phase1Delay = Math.round(totalDuration * 0.35);
    const phase2Delay = Math.round(totalDuration * 0.70);

    const phase1Timer = setTimeout(() => {
      setLoadingPhase(1);
    }, phase1Delay);

    const phase2Timer = setTimeout(() => {
      setLoadingPhase(2);
    }, phase2Delay);

    const finishTimer = setTimeout(() => {
      const data = getShipmentByTrackingNumber(cleanCode);
      setShipmentData(data);
      setIsLoading(false);

      // Smooth scroll to result
      const scrollTimer = setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      timersRef.current.push(scrollTimer);
    }, totalDuration);

    timersRef.current = [phase1Timer, phase2Timer, finishTimer];
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!trackingInput.trim()) {
      setErrorMessage('Please enter a tracking number.');
      return;
    }
    startTrackingFlow(trackingInput);
  };

  const handleReset = () => {
    clearAllTimers();
    setShipmentData(null);
    setIsLoading(false);
    setErrorMessage('');
    setTrackingInput('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getStatusBadge = (code) => {
    switch (code) {
      case 'DELIVERED':
        return {
          bg: 'bg-emerald-500 text-white shadow-emerald-500/20',
          dot: 'bg-white',
          pulse: false,
        };
      case 'OUT_FOR_DELIVERY':
        return {
          bg: 'bg-amber-400 text-[#071A33] shadow-amber-400/20',
          dot: 'bg-[#071A33]',
          pulse: true,
        };
      case 'AT_DHAKA_HUB':
        return {
          bg: 'bg-blue-600 text-white shadow-blue-600/20',
          dot: 'bg-white',
          pulse: true,
        };
      case 'TRANSIT_HUB':
        return {
          bg: 'bg-indigo-600 text-white shadow-indigo-600/20',
          dot: 'bg-white',
          pulse: true,
        };
      default:
        return {
          bg: 'bg-[#16A9E0] text-[#071A33] shadow-[#16A9E0]/20',
          dot: 'bg-[#071A33]',
          pulse: true,
        };
    }
  };

  return (
    <div className="flex-1 bg-[#F8FAFC] pb-24">
      {/* Top Banner Header */}
      <section className="bg-gradient-to-b from-[#071A33] to-[#0D2A4A] text-white pt-32 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16A9E0_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-[#16A9E0] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            Global Consignment Radar
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Track Your Shipment
          </h1>
          <p className="text-sm sm:text-base text-white/75 max-w-lg mx-auto leading-relaxed font-light">
            Enter your tracking number to see the latest shipment status, hub checkpoints, and flight transit progress.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* ========================================================
            TRACKING INPUT CARD
            ======================================================== */}
        <div className="bg-white rounded-2xl shadow-xl shadow-[#071A33]/5 border border-[#E2E8F0] p-6 sm:p-8 mb-10">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label 
                  htmlFor="trackingNumberInput" 
                  className="block text-xs font-bold uppercase tracking-wider text-[#071A33]"
                >
                  Tracking Number
                </label>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#64748B]">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  id="trackingNumberInput"
                  type="text"
                  value={trackingInput}
                  onChange={(e) => {
                    setTrackingInput(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  disabled={isLoading}
                  placeholder="Enter your tracking number"
                  className="w-full pl-12 pr-4 py-4 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-xl text-sm sm:text-base font-semibold tracking-wider text-[#071A33] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#16A9E0] focus:ring-4 focus:ring-[#16A9E0]/15 transition-all uppercase"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mt-2 text-xs text-[#64748B]">
                <p>
                  Example: <span className="font-semibold tracking-wider text-[#071A33]">26LMEXCINT24653287</span>
                </p>
                <p className="text-[11px] text-[#94A3B8]">
                  Standard 16-character LMEX Airway Bill format
                </p>
              </div>
            </div>

            {/* Error Message Box */}
            {errorMessage && (
              <div 
                role="alert"
                className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 transition-all"
              >
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-red-900">
                    Tracking number not found.
                  </h4>
                  <p className="text-xs text-red-700 mt-0.5">
                    Please check the number and try again.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                  isLoading
                    ? 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
                    : 'bg-[#16A9E0] hover:bg-[#0E92C4] text-[#071A33] shadow-[#16A9E0]/25 hover:shadow-lg hover:scale-[1.005] active:scale-[0.995]'
                }`}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#071A33]" />
                    <span>Searching Global Tracking Network...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 stroke-[2.5]" />
                    <span>Track Shipment</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ========================================================
            5-SECOND LOGISTICS LOADING STATE
            ======================================================== */}
        {isLoading && (
          <div className="bg-white rounded-2xl border border-[#16A9E0]/40 shadow-xl p-8 sm:p-12 mb-10 text-center relative overflow-hidden">
            {/* Top Shimmer Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 shimmer-bar" />

            <div className="max-w-md mx-auto space-y-6">
              {/* Radar Icon / Package Animation */}
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#16A9E0]/15 animate-radar-pulse" />
                <div className="w-16 h-16 rounded-full bg-[#071A33] text-[#16A9E0] flex items-center justify-center shadow-lg relative z-10">
                  {loadingPhase === 0 && <Package className="w-8 h-8 animate-bounce" />}
                  {loadingPhase === 1 && <Plane className="w-8 h-8 animate-plane-float" />}
                  {loadingPhase === 2 && <RefreshCw className="w-8 h-8 animate-spin" />}
                </div>
              </div>

              {/* Stepwise Message */}
              <div>
                <h3 className="text-xl font-bold text-[#071A33] tracking-tight">
                  {loadingMessages[loadingPhase]}
                </h3>
                <p className="text-xs text-[#64748B] mt-1.5 font-medium tracking-wide">
                  Consignment: {trackingInput.trim().toUpperCase() || DEMO_TRACKING_NUMBER}
                </p>
              </div>

              {/* Progress Steps Indicators */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className={`h-1.5 rounded-full transition-all duration-500 ${loadingPhase >= 0 ? 'bg-[#16A9E0]' : 'bg-[#E2E8F0]'}`} />
                <div className={`h-1.5 rounded-full transition-all duration-500 ${loadingPhase >= 1 ? 'bg-[#16A9E0]' : 'bg-[#E2E8F0]'}`} />
                <div className={`h-1.5 rounded-full transition-all duration-500 ${loadingPhase >= 2 ? 'bg-[#16A9E0]' : 'bg-[#E2E8F0]'}`} />
              </div>

              <p className="text-xs text-[#94A3B8] italic">
                Verifying barcode telemetry across automated international logistics hubs...
              </p>
            </div>
          </div>
        )}

        {/* ========================================================
            TRACKING RESULT DISPLAY
            ======================================================== */}
        {shipmentData && (
          <div ref={resultRef} className="space-y-8 animate-fadeIn">
            {/* Top Status Header Card */}
            <div className="bg-white rounded-2xl border-2 border-[#16A9E0]/40 p-6 sm:p-8 shadow-lg relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-3">
                    {(() => {
                      const badge = getStatusBadge(shipmentData.statusCode);
                      return (
                        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 ${badge.bg} shadow-sm`}>
                          {badge.pulse ? (
                            <span className={`w-2 h-2 rounded-full ${badge.dot} animate-ping`} />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          )}
                          {shipmentData.statusLabel}
                        </span>
                      );
                    })()}
                    <span className="text-xs font-medium tracking-wide text-[#64748B] whitespace-nowrap">
                      AWB: <strong className="text-[#071A33] font-bold">{shipmentData.trackingNumber}</strong>
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A33] mt-2 tracking-tight">
                    {shipmentData.origin} → {shipmentData.destination}
                  </h2>
                  <p className="text-sm text-[#0D2A4A] mt-1 font-medium">
                    {shipmentData.statusDescription}
                  </p>
                </div>

                {/* Reset / Track Another Button */}
                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-xs font-semibold text-[#071A33] transition-all shadow-sm cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Track Another Shipment</span>
                  </button>
                </div>
              </div>

              {/* Status Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                    Current Location
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#071A33]">
                    <Plane className="w-4 h-4 text-[#16A9E0] animate-plane-float" />
                    <span>{shipmentData.currentLocation}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                    Next Hub
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#071A33]">
                    <Building2 className="w-4 h-4 text-[#16A9E0]" />
                    <span>{shipmentData.nextHub}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
                    Final Destination
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#071A33]">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{shipmentData.destination}</span>
                  </div>
                  {shipmentData.destinationAddress && (
                    <p className="text-[11px] text-[#64748B] leading-snug mt-1 font-medium">
                      {shipmentData.destinationAddress}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ========================================================
                VISUAL ROUTE (Horizontal on Desktop, Vertical on Mobile)
                ======================================================== */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-[#071A33]">
                    Visual Route Trajectory
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Airway corridor progression from dispatch to final delivery
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 text-[#10B981] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Completed
                  </span>
                  <span className="flex items-center gap-1.5 text-[#16A9E0] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#16A9E0] animate-ping" /> Current (Air)
                  </span>
                  <span className="flex items-center gap-1.5 text-[#94A3B8] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" /> Upcoming
                  </span>
                </div>
              </div>

              {/* Desktop Horizontal Route */}
              <div className="hidden md:block py-4">
                <div className="relative flex items-center justify-between">
                  {/* Background connecting track */}
                  <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-[#E2E8F0] z-0" />
                  
                  {/* Completed segment track */}
                  {(() => {
                    const currentIdx = shipmentData.route.findIndex(p => p.state === 'current');
                    const allDone = shipmentData.route.every(p => p.state === 'completed');
                    const pct = allDone ? 100 : currentIdx >= 0 ? (currentIdx / (shipmentData.route.length - 1)) * 100 : 0;
                    return (
                      <div 
                        style={{ width: `${pct}%` }} 
                        className="absolute top-1/2 left-6 -translate-y-1/2 h-1 bg-gradient-to-r from-[#10B981] to-[#16A9E0] z-0 transition-all duration-700" 
                      />
                    );
                  })()}

                  {/* Route Points */}
                  {shipmentData.route.map((point, index) => {
                    const isCompleted = point.state === 'completed';
                    const isCurrent = point.state === 'current';
                    const isUpcoming = point.state === 'upcoming';

                    return (
                      <div key={point.id} className="relative z-10 flex flex-col items-center text-center w-36">
                        {/* Node icon circle */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                            isCompleted
                              ? 'bg-[#10B981] text-white shadow-md'
                              : isCurrent
                              ? 'bg-[#071A33] text-[#16A9E0] ring-4 ring-[#16A9E0]/40 shadow-xl scale-110'
                              : 'bg-white border-2 border-[#CBD5E1] text-[#94A3B8]'
                          }`}
                        >
                          {isCompleted && <CheckCircle2 className="w-6 h-6" />}
                          {isCurrent && (
                            point.isAir ? (
                              <Plane className="w-6 h-6 animate-plane-float" />
                            ) : point.code === 'SEA' ? (
                              <Ship className="w-6 h-6" />
                            ) : point.id === 'dhaka_hub' ? (
                              <Warehouse className="w-6 h-6" />
                            ) : point.id === 'transit_hub' ? (
                              <Building2 className="w-6 h-6" />
                            ) : (
                              <MapPin className="w-6 h-6 text-[#16A9E0]" />
                            )
                          )}
                          {isUpcoming && <span className="w-3 h-3 rounded-full bg-[#CBD5E1]" />}
                        </div>

                        {/* Node Label */}
                        <div className="mt-3">
                          <p className={`text-xs font-bold leading-tight ${isCurrent ? 'text-[#071A33] text-sm' : 'text-[#334155]'}`}>
                            {point.name}
                          </p>
                          <span className={`text-[10px] block mt-0.5 ${isCurrent ? 'text-[#16A9E0] font-bold uppercase tracking-wider' : 'text-[#64748B]'}`}>
                            {point.date}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Vertical Route */}
              <div className="md:hidden space-y-6">
                {shipmentData.route.map((point, index) => {
                  const isCompleted = point.state === 'completed';
                  const isCurrent = point.state === 'current';
                  const isUpcoming = point.state === 'upcoming';
                  const isLast = index === shipmentData.route.length - 1;

                  return (
                    <div key={point.id} className="relative flex items-start gap-4">
                      {/* Vertical line connecting to next */}
                      {!isLast && (
                        <div 
                          className={`absolute left-5 top-10 bottom-0 w-0.5 ${
                            isCompleted ? 'bg-[#10B981]' : isCurrent ? 'bg-gradient-to-b from-[#16A9E0] to-[#E2E8F0]' : 'bg-[#E2E8F0]'
                          }`} 
                        />
                      )}

                      {/* Icon circle */}
                      <div
                        className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center relative z-10 ${
                          isCompleted
                            ? 'bg-[#10B981] text-white shadow-sm'
                            : isCurrent
                            ? 'bg-[#071A33] text-[#16A9E0] ring-4 ring-[#16A9E0]/30 shadow-md scale-105'
                            : 'bg-white border-2 border-[#CBD5E1] text-[#94A3B8]'
                        }`}
                      >
                        {isCompleted && <CheckCircle2 className="w-5 h-5" />}
                        {isCurrent && (
                          point.isAir ? (
                            <Plane className="w-5 h-5 animate-plane-float" />
                          ) : point.code === 'SEA' ? (
                            <Ship className="w-5 h-5" />
                          ) : point.id === 'dhaka_hub' ? (
                            <Warehouse className="w-5 h-5" />
                          ) : point.id === 'transit_hub' ? (
                            <Building2 className="w-5 h-5" />
                          ) : (
                            <MapPin className="w-5 h-5 text-[#16A9E0]" />
                          )
                        )}
                        {isUpcoming && <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />}
                      </div>

                      {/* Text info */}
                      <div className="pt-1.5 flex-1">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-bold ${isCurrent ? 'text-[#071A33] font-extrabold' : 'text-[#1E293B]'}`}>
                            {point.name}
                          </p>
                          <span className={`text-[11px] font-semibold tracking-wide ${isCurrent ? 'text-[#16A9E0] font-bold' : 'text-[#64748B]'}`}>
                            {point.date}
                          </span>
                        </div>
                        {isCurrent && (
                          <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#16A9E0]/15 text-[#071A33] text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16A9E0] animate-pulse" />
                            {point.isAir ? 'Active Flight Transit' : point.code === 'SEA' ? 'Active Maritime Transit' : 'Active Milestone'}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================
                DETAILED SHIPMENT TIMELINE & EVENT AUDIT
                ======================================================== */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
              <div className="border-b border-[#E2E8F0] pb-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-[#071A33]">
                    Official Shipment Activity Timeline
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Time-stamped audit logs certified by LMEX International handling agents
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Manifest</span>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {shipmentData.timeline.map((event, index) => {
                  const isCompleted = event.status === 'Completed';
                  const isCurrent = event.status === 'Current';
                  const isUpcoming = event.status === 'Upcoming';
                  const isLast = index === shipmentData.timeline.length - 1;

                  return (
                    <div key={event.id} className="relative flex items-start gap-4 sm:gap-6">
                      {/* Connecting vertical stroke */}
                      {!isLast && (
                        <div
                          className={`absolute left-5 sm:left-6 top-10 sm:top-12 bottom-0 w-0.5 -mb-8 ${
                            isCompleted
                              ? 'bg-[#10B981]'
                              : isCurrent
                              ? 'bg-gradient-to-b from-[#16A9E0] to-[#E2E8F0]'
                              : 'bg-[#E2E8F0]'
                          }`}
                        />
                      )}

                      {/* Event Status Dot / Icon */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shrink-0 flex items-center justify-center relative z-10 transition-transform ${
                          isCompleted
                            ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-600'
                            : isCurrent
                            ? 'bg-[#071A33] border-2 border-[#16A9E0] text-[#16A9E0] shadow-lg shadow-[#16A9E0]/20'
                            : 'bg-white border-2 border-[#CBD5E1] text-[#94A3B8]'
                        }`}
                      >
                        {isCompleted && <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                        {isCurrent && <PlaneTakeoff className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />}
                        {isUpcoming && <Clock className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </div>

                      {/* Event Details Card */}
                      <div className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] p-4 sm:p-5 rounded-xl hover:bg-white hover:border-[#CBD5E1] transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <div className="flex items-center gap-2.5">
                            <h4 className={`text-base font-bold ${isCurrent ? 'text-[#071A33]' : 'text-[#1E293B]'}`}>
                              {event.title}
                            </h4>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 ${
                                isCompleted
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : isCurrent
                                  ? 'bg-[#16A9E0] text-[#071A33]'
                                  : 'bg-[#E2E8F0] text-[#64748B]'
                              }`}
                            >
                              {event.status}
                            </span>
                          </div>

                          <div className="text-xs font-semibold tracking-wide text-[#64748B]">
                            <span>{event.date}</span>
                            {event.day && <span className="ml-1 text-[#94A3B8]">({event.day})</span>}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-[#0D2A4A] font-medium mb-2">
                          <MapPin className="w-3.5 h-3.5 text-[#16A9E0]" />
                          <span>Location: {event.location}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-6 rounded-2xl bg-[#071A33] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">
                  Need priority assistance with this shipment?
                </h4>
                <p className="text-xs text-white/70">
                  Quote tracking code <strong className="font-bold tracking-wider text-[#16A9E0]">{shipmentData.trackingNumber || DEMO_TRACKING_NUMBER}</strong> to our 24/7 flight operations center.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-[#16A9E0] hover:bg-[#0E92C4] text-[#071A33] text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Track Another Shipment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
