/**
 * LMEX International — Standard Shipment Data Structure
 * Ready for future backend/API/Shopify integration.
 */

export const DEMO_TRACKING_NUMBER = "26LMEXCINT25698714";

export const SHIPMENT_DATABASE = {
  "26LMEXCINT25698714": {
    trackingNumber: "26LMEXCINT25698714",
    carrier: "LMEX International",
    serviceType: "Global Express Priority Air",
    statusCode: "IN_TRANSIT",
    statusLabel: "IN TRANSIT",
    statusDescription: "Your shipment is currently in transit and moving toward Singapore.",
    origin: "Bangladesh",
    originCountryCode: "BD",
    currentLocation: "In Transit — Air",
    currentMode: "Air Freight (Boeing 777 Cargo)",
    nextHub: "Singapore Hub",
    destination: "New York, USA",
    destinationAddress: "10511 75th Street 1st floor Ozone park Queens NY-11417",
    destinationPostalCode: "NY-11417",
    destinationCountryCode: "US",
    estimatedDeliveryDate: "October 8, 2026",
    estimatedNextUpdate: "Within 2 days",
    lastUpdated: "4 October 2026, 09:40 UTC",
    weight: "4.85 kg",
    pieces: 1,

    // Route visualization nodes
    route: [
      {
        id: "bd",
        name: "Bangladesh",
        code: "DAC",
        state: "completed", // completed | current | upcoming
        date: "Oct 01",
      },
      {
        id: "dhaka_hub",
        name: "Dhaka Hub",
        code: "DAC-INT",
        state: "completed",
        date: "Oct 03",
      },
      {
        id: "in_transit",
        name: "In Transit / Air",
        code: "AIR",
        state: "current",
        date: "Oct 04",
        isAir: true,
      },
      {
        id: "sg_hub",
        name: "Singapore Hub",
        code: "SIN-HUB",
        state: "upcoming",
        date: "Est. 2 Days",
      },
      {
        id: "nyc",
        name: "New York, USA",
        code: "JFK",
        state: "upcoming",
        date: "Final Dest",
      },
    ],

    // Comprehensive timeline events
    timeline: [
      {
        id: "event-1",
        date: "1 October 2026",
        day: "Thursday",
        time: "10:30 AM",
        title: "Shipment Received",
        location: "Bangladesh",
        description: "Shipment received by LMEX International and entered into the courier network.",
        status: "Completed",
        iconType: "package-check",
      },
      {
        id: "event-2",
        date: "3 October 2026",
        day: "Saturday",
        time: "04:15 PM",
        title: "Arrived at Dhaka Hub",
        location: "Dhaka, Bangladesh",
        description: "Shipment processed at the Dhaka international hub and prepared for air transportation.",
        status: "Completed",
        iconType: "warehouse",
      },
      {
        id: "event-3",
        date: "4 October 2026",
        day: "Sunday",
        time: "08:20 AM",
        title: "Departed by Air",
        location: "Dhaka, Bangladesh",
        description: "Shipment has departed by air and is currently in transit toward the Singapore Hub.",
        status: "Current",
        iconType: "plane-departure",
      },
      {
        id: "event-4",
        date: "Upcoming",
        day: "Est. within 2 days",
        time: "Pending Flight Schedule",
        title: "Singapore Hub",
        location: "Singapore",
        description: "Shipment is expected to reach the Singapore Hub within approximately 2 days.",
        status: "Upcoming",
        iconType: "building-2",
      },
      {
        id: "event-5",
        date: "Upcoming",
        day: "Final Destination",
        time: "Customs Clearance & Doorstep Delivery",
        title: "Delivered to New York",
        location: "10511 75th Street 1st floor Ozone park Queens NY-11417",
        description: "Final destination of the shipment: 10511 75th Street 1st floor Ozone park Queens NY-11417, USA.",
        status: "Upcoming",
        iconType: "map-pin",
      },
    ],
  },
};

/**
 * Fetch shipment details (mockable for REST/GraphQL API)
 */
export function getShipmentByTrackingNumber(trackingNumber) {
  if (!trackingNumber) return null;
  const cleanId = trackingNumber.trim().toUpperCase();
  return SHIPMENT_DATABASE[cleanId] || null;
}
