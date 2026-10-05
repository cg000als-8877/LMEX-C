/**
 * LMEX International — Standard Shipment Data Structure
 * Supports assigned demo consignment + 50 diverse realistic global dummy parcels.
 * Features 5 distinct logistics stages:
 * - AT DHAKA HUB (Processing)
 * - IN TRANSIT (Air / Sea)
 * - AT TRANSIT HUB (Singapore, Dubai, Frankfurt, etc.)
 * - OUT FOR DELIVERY (Local courier dispatch)
 * - DELIVERED (Completed with POD)
 */

export const DEMO_TRACKING_NUMBER = "26LMEXCINT25698714";

export const SHIPMENT_DATABASE = {
  "26LMEXCINT25698714": {
    trackingNumber: "26LMEXCINT25698714",
    carrier: "LMEX International",
    serviceType: "Global Express Priority Air",
    statusCode: "TRANSIT_HUB",
    statusLabel: "AT SINGAPORE HUB",
    statusDescription: "Your shipment has arrived at the Singapore Hub and is being processed for onward transit to New York.",
    origin: "Chittagong",
    originCountryCode: "BD",
    currentLocation: "Singapore Changi Hub",
    currentMode: "Air Freight (Boeing 777 Cargo)",
    nextHub: "New York JFK",
    destination: "New York, USA",
    destinationAddress: "10511 75th Street 1st floor Ozone park Queens NY-11417",
    destinationPostalCode: "NY-11417",
    destinationCountryCode: "US",
    estimatedDeliveryDate: "October 8, 2026",
    estimatedNextUpdate: "Within 24 hours",
    lastUpdated: "5 October 2026, 00:00 UTC",
    weight: "4.85 kg",
    pieces: 1,

    // Route visualization nodes
    route: [
      {
        id: "ctg",
        name: "Chittagong",
        code: "CGP",
        state: "completed",
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
        state: "completed",
        date: "Oct 04",
        isAir: true,
      },
      {
        id: "sg_hub",
        name: "Singapore Hub",
        code: "SIN-HUB",
        state: "current",
        date: "Oct 05",
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
    // utcTimestamp = ISO 8601 UTC string so UI can render in viewer's local timezone
    timeline: [
      {
        id: "event-1",
        date: "1 October 2026",
        day: "Thursday",
        time: "10:30 AM",
        utcTimestamp: "2026-10-01T04:30:00Z",
        title: "Shipment Received",
        location: "Chittagong, Bangladesh",
        description: "Shipment received by LMEX International Chittagong Hub and entered into the courier network.",
        status: "Completed",
        iconType: "package-check",
      },
      {
        id: "event-2",
        date: "3 October 2026",
        day: "Saturday",
        time: "04:15 PM",
        utcTimestamp: "2026-10-03T10:15:00Z",
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
        utcTimestamp: "2026-10-04T02:20:00Z",
        title: "Departed by Air",
        location: "Dhaka, Bangladesh",
        description: "Shipment departed by air from Hazrat Shahjalal International Airport toward Singapore Hub.",
        status: "Completed",
        iconType: "plane-departure",
      },
      {
        id: "event-4",
        date: "5 October 2026",
        day: "Monday",
        time: "06:00 AM",
        utcTimestamp: "2026-10-05T00:00:00Z",
        title: "Arrived at Singapore Hub",
        location: "Singapore Changi Hub",
        description: "Shipment received at Singapore Changi Hub. Customs inspection and interline transfer processing underway for onward flight to New York.",
        status: "Current",
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
 * 50 Diverse realistic global dummy parcels.
 * Across 5 realistic live logistics statuses:
 * - AT DHAKA HUB (Processing at Dhaka Gateway)
 * - IN TRANSIT (Air & Sea freight)
 * - AT TRANSIT HUB (Dubai, Singapore, Frankfurt, etc.)
 * - OUT FOR DELIVERY (Local courier dispatch in destination city)
 * - DELIVERED (Doorstep delivery completed)
 */
export const DUMMY_SHIPMENTS_POOL = [
  {
    "id": "DUMMY-1",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Chittagong and currently being processed at Dhaka Central Gateway.",
    "origin": "Chittagong, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Dubai Hub",
    "destination": "London, United Kingdom",
    "destinationAddress": "48 Baker Street, Marylebone, London W1U 7BU, W1U 7BU, United Kingdom",
    "destinationPostalCode": "W1U 7BU",
    "destinationCountryCode": "GB",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "1.50 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Chittagong, BD",
        "code": "CGP",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "London, United Kingdom",
        "code": "LHR",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-0-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Chittagong Export Terminal, Chittagong",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-0-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-0-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Air Freight (Boeing 777F / Flight QR639).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-0-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Dubai Hub",
        "location": "Dubai Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-0-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in London",
        "location": "48 Baker Street, Marylebone, London W1U 7BU, W1U 7BU, United Kingdom",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-2",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Singapore Hub.",
    "origin": "Sylhet, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Singapore Hub",
    "destination": "Tokyo, Japan",
    "destinationAddress": "3-5-1 Ginza, Chuo-ku, Tokyo 104-0061, 104-0061, Japan",
    "destinationPostalCode": "104-0061",
    "destinationCountryCode": "JP",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "2.23 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Sylhet, BD",
        "code": "ZYL",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Singapore Hub",
        "code": "SIN-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Tokyo, Japan",
        "code": "HND",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-1-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Sylhet Regional Courier Depot, Sylhet",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-1-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-1-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on Priority Air Express (Boeing 747-8F / Flight EK583) bound for Singapore Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-1-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Singapore Hub",
        "location": "Singapore Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-1-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Tokyo",
        "location": "3-5-1 Ginza, Chuo-ku, Tokyo 104-0061, 104-0061, Japan",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-3",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Frankfurt Hub and is undergoing interline connection scan.",
    "origin": "Gazipur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Frankfurt Hub International Terminal",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Toronto Destination Center",
    "destination": "Toronto, Canada",
    "destinationAddress": "180 Bay Street, Suite 1400, Toronto, ON M5J 2V8, M5J 2V8, Canada",
    "destinationPostalCode": "M5J 2V8",
    "destinationCountryCode": "CA",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "2.96 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Gazipur, BD",
        "code": "GZP",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Toronto, Canada",
        "code": "YYZ",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-2-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Gazipur Industrial Logistics Hub, Gazipur",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-2-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-2-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-2-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-2-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Toronto",
        "location": "180 Bay Street, Suite 1400, Toronto, ON M5J 2V8, M5J 2V8, Canada",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-4",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Sydney.",
    "origin": "Narayanganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Sydney",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Sydney Destination Center",
    "destination": "Sydney, Australia",
    "destinationAddress": "220 George Street, Sydney NSW 2000, NSW 2000, Australia",
    "destinationPostalCode": "NSW 2000",
    "destinationCountryCode": "AU",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "3.69 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Narayanganj, BD",
        "code": "NGJ",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Singapore Hub",
        "code": "SIN-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Sydney, Australia",
        "code": "SYD",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-3-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Narayanganj Commercial Hub, Narayanganj",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-3-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-3-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Singapore Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-3-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Sydney Hub",
        "location": "Sydney, Australia",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-3-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Sydney",
        "location": "220 George Street, Sydney NSW 2000, NSW 2000, Australia",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-5",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Dubai, United Arab Emirates.",
    "origin": "Rajshahi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Dubai, United Arab Emirates",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Dubai, United Arab Emirates",
    "destinationAddress": "Al Quoz Industrial Area 3, Street 18B, Dubai, PO Box 4522, United Arab Emirates",
    "destinationPostalCode": "PO Box 4522",
    "destinationCountryCode": "AE",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "4.42 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Rajshahi, BD",
        "code": "RJH",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Doha Hub",
        "code": "DOH-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Dubai, United Arab Emirates",
        "code": "DWC",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-4-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Rajshahi Courier Facility, Rajshahi",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-4-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-4-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Doha Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-4-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Dubai Distribution Center",
        "location": "Dubai, United Arab Emirates",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-4-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "Al Quoz Industrial Area 3, Street 18B, Dubai, PO Box 4522, United Arab Emirates",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-6",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Khulna and currently being processed at Dhaka Central Gateway.",
    "origin": "Khulna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Istanbul Hub",
    "destination": "Berlin, Germany",
    "destinationAddress": "Friedrichstraße 43-45, 10117 Berlin, 10117, Germany",
    "destinationPostalCode": "10117",
    "destinationCountryCode": "DE",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "5.15 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Khulna, BD",
        "code": "KHL",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Istanbul Hub",
        "code": "IST-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Berlin, Germany",
        "code": "BER",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-5-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Khulna Division Logistics Center, Khulna",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-5-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-5-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Continental Air Logistics (Airbus A350F / Flight BA142).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-5-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Istanbul Hub",
        "location": "Istanbul Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-5-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Berlin",
        "location": "Friedrichstraße 43-45, 10117 Berlin, 10117, Germany",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-7",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Doha Hub.",
    "origin": "Cox's Bazar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Doha Hub",
    "destination": "Paris, France",
    "destinationAddress": "25 Rue du Faubourg Saint-Honoré, 75008 Paris, 75008, France",
    "destinationPostalCode": "75008",
    "destinationCountryCode": "FR",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "5.88 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Cox's Bazar, BD",
        "code": "CXB",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Doha Hub",
        "code": "DOH-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Paris, France",
        "code": "CDG",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-6-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Cox's Bazar Coastal Cargo Station, Cox's Bazar",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-6-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-6-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on High-Priority Airfreight (Boeing 777F / Flight SV805) bound for Doha Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-6-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Doha Hub",
        "location": "Doha Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-6-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Paris",
        "location": "25 Rue du Faubourg Saint-Honoré, 75008 Paris, 75008, France",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-8",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Istanbul Hub and is undergoing interline connection scan.",
    "origin": "Bogura, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Istanbul Hub International Terminal",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Rome Destination Center",
    "destination": "Rome, Italy",
    "destinationAddress": "Via del Corso 240, 00186 Roma RM, 00186, Italy",
    "destinationPostalCode": "00186",
    "destinationCountryCode": "IT",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "6.61 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Bogura, BD",
        "code": "BOG",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Istanbul Hub",
        "code": "IST-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Rome, Italy",
        "code": "FCO",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-7-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Bogura Regional Dispatch Hub, Bogura",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-7-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-7-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-7-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Istanbul Hub",
        "location": "Istanbul Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-7-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Rome",
        "location": "Via del Corso 240, 00186 Roma RM, 00186, Italy",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-9",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Seoul.",
    "origin": "Cumilla, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Seoul",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Seoul Destination Center",
    "destination": "Seoul, South Korea",
    "destinationAddress": "123 Teheran-ro, Gangnam-gu, Seoul 06133, 06133, South Korea",
    "destinationPostalCode": "06133",
    "destinationCountryCode": "KR",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "7.34 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Cumilla, BD",
        "code": "CML",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Bangkok Hub",
        "code": "BKK-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Seoul, South Korea",
        "code": "ICN",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-8-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Cumilla Express Center, Cumilla",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-8-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-8-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Bangkok Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-8-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Seoul Hub",
        "location": "Seoul, South Korea",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-8-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Seoul",
        "location": "123 Teheran-ro, Gangnam-gu, Seoul 06133, 06133, South Korea",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-10",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Madrid, Spain.",
    "origin": "Mymensingh, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Madrid, Spain",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Madrid, Spain",
    "destinationAddress": "Calle de Alcalá 42, 28014 Madrid, 28014, Spain",
    "destinationPostalCode": "28014",
    "destinationCountryCode": "ES",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "8.07 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Mymensingh, BD",
        "code": "MYM",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Madrid, Spain",
        "code": "MAD",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-9-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Mymensingh Regional Depot, Mymensingh",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-9-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-9-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Frankfurt Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-9-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Madrid Distribution Center",
        "location": "Madrid, Spain",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-9-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "Calle de Alcalá 42, 28014 Madrid, 28014, Spain",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-11",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Barishal and currently being processed at Dhaka Central Gateway.",
    "origin": "Barishal, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Port of Singapore Hub",
    "destination": "Amsterdam, Netherlands",
    "destinationAddress": "Keizersgracht 421, 1016 EK Amsterdam, 1016 EK, Netherlands",
    "destinationPostalCode": "1016 EK",
    "destinationCountryCode": "NL",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "8.80 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Barishal, BD",
        "code": "BZL",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Sea",
        "code": "SEA",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": false
      },
      {
        "id": "transit_hub",
        "name": "Port of Singapore Hub",
        "code": "SIN-SEA",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Amsterdam, Netherlands",
        "code": "RTM",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-10-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Barishal South Gateway, Barishal",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-10-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-10-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Maritime Dispatch",
        "location": "Chittagong Port Terminal",
        "description": "Scheduled for export handover to Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E).",
        "status": "Upcoming",
        "iconType": "ship"
      },
      {
        "id": "ev-10-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Port of Singapore Hub",
        "location": "Port of Singapore Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-10-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Amsterdam",
        "location": "Keizersgracht 421, 1016 EK Amsterdam, 1016 EK, Netherlands",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-12",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Frankfurt Hub.",
    "origin": "Rangpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Frankfurt Hub",
    "destination": "Zurich, Switzerland",
    "destinationAddress": "Bahnhofstrasse 55, 8001 Zürich, 8001, Switzerland",
    "destinationPostalCode": "8001",
    "destinationCountryCode": "CH",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "9.53 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Rangpur, BD",
        "code": "RNP",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Zurich, Switzerland",
        "code": "ZRH",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-11-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Rangpur North Transit Facility, Rangpur",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-11-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-11-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on Scheduled Air Courier (Boeing 767-300F / Flight CX668) bound for Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-11-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-11-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Zurich",
        "location": "Bahnhofstrasse 55, 8001 Zürich, 8001, Switzerland",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-13",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Kuala Lumpur Hub and is undergoing interline connection scan.",
    "origin": "Savar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Kuala Lumpur Hub International Terminal",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Singapore Destination Center",
    "destination": "Singapore, Singapore",
    "destinationAddress": "10 Marina Boulevard, MBFC Tower 2, Singapore 018983, 018983, Singapore",
    "destinationPostalCode": "018983",
    "destinationCountryCode": "SG",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "10.26 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Savar, BD",
        "code": "SVR",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Kuala Lumpur Hub",
        "code": "KUL-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Singapore, Singapore",
        "code": "SIN",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-12-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Savar EPZ Logistics Hub, Savar",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-12-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-12-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-12-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Kuala Lumpur Hub",
        "location": "Kuala Lumpur Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-12-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Singapore",
        "location": "10 Marina Boulevard, MBFC Tower 2, Singapore 018983, 018983, Singapore",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-14",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Melbourne.",
    "origin": "Tongi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Melbourne",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Melbourne Destination Center",
    "destination": "Melbourne, Australia",
    "destinationAddress": "350 Collins Street, Melbourne VIC 3000, VIC 3000, Australia",
    "destinationPostalCode": "VIC 3000",
    "destinationCountryCode": "AU",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "10.99 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Tongi, BD",
        "code": "TNG",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Singapore Hub",
        "code": "SIN-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Melbourne, Australia",
        "code": "MEL",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-13-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Tongi Freight Sorting Yard, Tongi",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-13-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-13-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Singapore Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-13-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Melbourne Hub",
        "location": "Melbourne, Australia",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-13-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Melbourne",
        "location": "350 Collins Street, Melbourne VIC 3000, VIC 3000, Australia",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-15",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Vancouver, Canada.",
    "origin": "Brahmanbaria, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Vancouver, Canada",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Vancouver, Canada",
    "destinationAddress": "800 Robson Street, Vancouver, BC V6Z 3B7, BC V6Z 3B7, Canada",
    "destinationPostalCode": "BC V6Z 3B7",
    "destinationCountryCode": "CA",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "11.72 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Brahmanbaria, BD",
        "code": "BRB",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Tokyo Hub",
        "code": "NRT-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Vancouver, Canada",
        "code": "YVR",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-14-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Brahmanbaria Courier Station, Brahmanbaria",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-14-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-14-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Tokyo Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-14-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Vancouver Distribution Center",
        "location": "Vancouver, Canada",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-14-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "800 Robson Street, Vancouver, BC V6Z 3B7, BC V6Z 3B7, Canada",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-16",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Dinajpur and currently being processed at Dhaka Central Gateway.",
    "origin": "Dinajpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "London Hub",
    "destination": "Dublin, Ireland",
    "destinationAddress": "1 Grand Canal Square, Grand Canal Harbour, Dublin 2, D02 P820, Ireland",
    "destinationPostalCode": "D02 P820",
    "destinationCountryCode": "IE",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "12.45 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Dinajpur, BD",
        "code": "DNJ",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "London Hub",
        "code": "LHR-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Dublin, Ireland",
        "code": "DUB",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-15-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Dinajpur Border Transit Hub, Dinajpur",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-15-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-15-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Priority Air Express (Boeing 747-8F / Flight EK583).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-15-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: London Hub",
        "location": "London Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-15-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Dublin",
        "location": "1 Grand Canal Square, Grand Canal Harbour, Dublin 2, D02 P820, Ireland",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-17",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Tokyo Hub.",
    "origin": "Kushtia, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Tokyo Hub",
    "destination": "Los Angeles, USA",
    "destinationAddress": "950 South Hope Street, Los Angeles, CA 90015, CA 90015, USA",
    "destinationPostalCode": "CA 90015",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "13.18 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Kushtia, BD",
        "code": "KST",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Tokyo Hub",
        "code": "NRT-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Los Angeles, USA",
        "code": "LAX",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-16-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Kushtia Express Depot, Kushtia",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-16-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-16-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on Express Interline Air (Airbus A330-200F / Flight SQ449) bound for Tokyo Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-16-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Tokyo Hub",
        "location": "Tokyo Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-16-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Los Angeles",
        "location": "950 South Hope Street, Los Angeles, CA 90015, CA 90015, USA",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-18",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Frankfurt Hub and is undergoing interline connection scan.",
    "origin": "Tangail, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Frankfurt Hub International Terminal",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Chicago Destination Center",
    "destination": "Chicago, USA",
    "destinationAddress": "233 S Wacker Dr, Suite 4100, Chicago, IL 60606, IL 60606, USA",
    "destinationPostalCode": "IL 60606",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "13.91 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Tangail, BD",
        "code": "TGL",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Chicago, USA",
        "code": "ORD",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-17-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Tangail Highway Dispatch Hub, Tangail",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-17-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-17-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-17-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-17-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Chicago",
        "location": "233 S Wacker Dr, Suite 4100, Chicago, IL 60606, IL 60606, USA",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-19",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Stockholm.",
    "origin": "Jessore, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Stockholm",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Stockholm Destination Center",
    "destination": "Stockholm, Sweden",
    "destinationAddress": "Drottninggatan 88, 111 36 Stockholm, 111 36, Sweden",
    "destinationPostalCode": "111 36",
    "destinationCountryCode": "SE",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "14.64 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Jessore, BD",
        "code": "JSR",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Amsterdam Hub",
        "code": "AMS-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Stockholm, Sweden",
        "code": "ARN",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-18-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Jessore Air & Cargo Depot, Jessore",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-18-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-18-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Amsterdam Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-18-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Stockholm Hub",
        "location": "Stockholm, Sweden",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-18-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Stockholm",
        "location": "Drottninggatan 88, 111 36 Stockholm, 111 36, Sweden",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-20",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Oslo, Norway.",
    "origin": "Feni, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Oslo, Norway",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Oslo, Norway",
    "destinationAddress": "Karl Johans gate 22, 0159 Oslo, 0159, Norway",
    "destinationPostalCode": "0159",
    "destinationCountryCode": "NO",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "15.37 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Feni, BD",
        "code": "FNI",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Amsterdam Hub",
        "code": "AMS-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Oslo, Norway",
        "code": "OSL",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-19-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Feni Logistics Outpost, Feni",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-19-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-19-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Amsterdam Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-19-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Oslo Distribution Center",
        "location": "Oslo, Norway",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-19-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "Karl Johans gate 22, 0159 Oslo, 0159, Norway",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-21",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Sirajganj and currently being processed at Dhaka Central Gateway.",
    "origin": "Sirajganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Frankfurt Hub",
    "destination": "Copenhagen, Denmark",
    "destinationAddress": "Strøget, Østergade 34, 1100 København, 1100, Denmark",
    "destinationPostalCode": "1100",
    "destinationCountryCode": "DK",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "16.10 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Sirajganj, BD",
        "code": "SRJ",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Copenhagen, Denmark",
        "code": "CPH",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-20-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Sirajganj Cargo Bridge Depot, Sirajganj",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-20-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-20-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to High-Priority Airfreight (Boeing 777F / Flight SV805).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-20-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-20-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Copenhagen",
        "location": "Strøget, Østergade 34, 1100 København, 1100, Denmark",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-22",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Istanbul Hub.",
    "origin": "Jamalpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Istanbul Hub",
    "destination": "Vienna, Austria",
    "destinationAddress": "Kärntner Straße 18, 1010 Wien, 1010, Austria",
    "destinationPostalCode": "1010",
    "destinationCountryCode": "AT",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "16.83 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Jamalpur, BD",
        "code": "JML",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Istanbul Hub",
        "code": "IST-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Vienna, Austria",
        "code": "VIE",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-21-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Jamalpur Express Center, Jamalpur",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-21-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-21-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on Air Freight (Boeing 777F / Flight QR639) bound for Istanbul Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-21-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Istanbul Hub",
        "location": "Istanbul Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-21-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Vienna",
        "location": "Kärntner Straße 18, 1010 Wien, 1010, Austria",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-23",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Port of Hamburg Hub and is undergoing interline connection scan.",
    "origin": "Pabna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Port of Hamburg Hub International Terminal",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Brussels Destination Center",
    "destination": "Brussels, Belgium",
    "destinationAddress": "Avenue Louise 250, 1050 Bruxelles, 1050, Belgium",
    "destinationPostalCode": "1050",
    "destinationCountryCode": "BE",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "17.56 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Pabna, BD",
        "code": "PBN",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Sea",
        "code": "SEA",
        "state": "completed",
        "date": "Oct 03",
        "isAir": false
      },
      {
        "id": "transit_hub",
        "name": "Port of Hamburg Hub",
        "code": "HAM-SEA",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Brussels, Belgium",
        "code": "ANR",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-22-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Pabna Regional Hub, Pabna",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-22-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-22-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Singapore Sea Channel",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "ship"
      },
      {
        "id": "ev-22-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Port of Hamburg Hub",
        "location": "Port of Hamburg Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-22-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Brussels",
        "location": "Avenue Louise 250, 1050 Bruxelles, 1050, Belgium",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-24",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Kuala Lumpur.",
    "origin": "Noakhali, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Kuala Lumpur",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Kuala Lumpur Destination Center",
    "destination": "Kuala Lumpur, Malaysia",
    "destinationAddress": "Jalan Ampang, KLCC Precinct, 50450 Kuala Lumpur, 50450, Malaysia",
    "destinationPostalCode": "50450",
    "destinationCountryCode": "MY",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "18.29 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Noakhali, BD",
        "code": "NKH",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Bangkok Hub",
        "code": "BKK-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Kuala Lumpur, Malaysia",
        "code": "KUL",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-23-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Noakhali Dispatch Center, Noakhali",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-23-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-23-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Bangkok Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-23-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Kuala Lumpur Hub",
        "location": "Kuala Lumpur, Malaysia",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-23-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Kuala Lumpur",
        "location": "Jalan Ampang, KLCC Precinct, 50450 Kuala Lumpur, 50450, Malaysia",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-25",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Bangkok, Thailand.",
    "origin": "Manikganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Bangkok, Thailand",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Bangkok, Thailand",
    "destinationAddress": "999/9 Rama I Road, Pathum Wan, Bangkok 10330, 10330, Thailand",
    "destinationPostalCode": "10330",
    "destinationCountryCode": "TH",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "19.02 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Manikganj, BD",
        "code": "MNK",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Singapore Hub",
        "code": "SIN-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Bangkok, Thailand",
        "code": "BKK",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-24-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Manikganj Transit Depot, Manikganj",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-24-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-24-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Singapore Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-24-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Bangkok Distribution Center",
        "location": "Bangkok, Thailand",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-24-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "999/9 Rama I Road, Pathum Wan, Bangkok 10330, 10330, Thailand",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-26",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Chittagong and currently being processed at Dhaka Central Gateway.",
    "origin": "Chittagong, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Doha Hub",
    "destination": "Istanbul, Turkey",
    "destinationAddress": "Büyükdere Caddesi No: 185, Levent, 34394 Istanbul, 34394, Turkey",
    "destinationPostalCode": "34394",
    "destinationCountryCode": "TR",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "19.75 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Chittagong, BD",
        "code": "CGP",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Doha Hub",
        "code": "DOH-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Istanbul, Turkey",
        "code": "IST",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-25-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Chittagong Export Terminal, Chittagong",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-25-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-25-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Scheduled Air Courier (Boeing 767-300F / Flight CX668).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-25-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Doha Hub",
        "location": "Doha Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-25-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Istanbul",
        "location": "Büyükdere Caddesi No: 185, Levent, 34394 Istanbul, 34394, Turkey",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-27",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Port of Singapore Hub.",
    "origin": "Sylhet, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Maritime Lane",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Port of Singapore Hub",
    "destination": "São Paulo, Brazil",
    "destinationAddress": "Avenida Paulista 1374, Bela Vista, São Paulo - SP, 01310-100, Brazil",
    "destinationPostalCode": "01310-100",
    "destinationCountryCode": "BR",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "20.48 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Sylhet, BD",
        "code": "ZYL",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Sea",
        "code": "SEA",
        "state": "current",
        "date": "Oct 04",
        "isAir": false
      },
      {
        "id": "transit_hub",
        "name": "Port of Singapore Hub",
        "code": "SIN-SEA",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "São Paulo, Brazil",
        "code": "SSZ",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-26-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Sylhet Regional Courier Depot, Sylhet",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-26-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-26-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Vessel Departed Chittagong",
        "location": "Chittagong Port",
        "description": "In active transit on Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E) bound for Port of Singapore Hub.",
        "status": "Current",
        "iconType": "ship"
      },
      {
        "id": "ev-26-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Port of Singapore Hub",
        "location": "Port of Singapore Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-26-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in São Paulo",
        "location": "Avenida Paulista 1374, Bela Vista, São Paulo - SP, 01310-100, Brazil",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-28",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Dubai Hub and is undergoing interline connection scan.",
    "origin": "Gazipur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dubai Hub International Terminal",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Johannesburg Destination Center",
    "destination": "Johannesburg, South Africa",
    "destinationAddress": "15 Alice Lane, Sandton, Johannesburg 2196, 2196, South Africa",
    "destinationPostalCode": "2196",
    "destinationCountryCode": "ZA",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "21.21 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Gazipur, BD",
        "code": "GZP",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Johannesburg, South Africa",
        "code": "JNB",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-27-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Gazipur Industrial Logistics Hub, Gazipur",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-27-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-27-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-27-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Dubai Hub",
        "location": "Dubai Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-27-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Johannesburg",
        "location": "15 Alice Lane, Sandton, Johannesburg 2196, 2196, South Africa",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-29",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Riyadh.",
    "origin": "Narayanganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Riyadh",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Riyadh Destination Center",
    "destination": "Riyadh, Saudi Arabia",
    "destinationAddress": "King Fahd Road, Al Olaya, Riyadh 12213, 12213, Saudi Arabia",
    "destinationPostalCode": "12213",
    "destinationCountryCode": "SA",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "21.94 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Narayanganj, BD",
        "code": "NGJ",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Riyadh, Saudi Arabia",
        "code": "RUH",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-28-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Narayanganj Commercial Hub, Narayanganj",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-28-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-28-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Dubai Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-28-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Riyadh Hub",
        "location": "Riyadh, Saudi Arabia",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-28-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Riyadh",
        "location": "King Fahd Road, Al Olaya, Riyadh 12213, 12213, Saudi Arabia",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-30",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Auckland, New Zealand.",
    "origin": "Rajshahi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Auckland, New Zealand",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Auckland, New Zealand",
    "destinationAddress": "88 Quay Street, Auckland CBD, Auckland 1010, 1010, New Zealand",
    "destinationPostalCode": "1010",
    "destinationCountryCode": "NZ",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "22.67 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Rajshahi, BD",
        "code": "RJH",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Sydney Hub",
        "code": "SYD-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Auckland, New Zealand",
        "code": "AKL",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-29-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Rajshahi Courier Facility, Rajshahi",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-29-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-29-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Sydney Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-29-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Auckland Distribution Center",
        "location": "Auckland, New Zealand",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-29-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "88 Quay Street, Auckland CBD, Auckland 1010, 1010, New Zealand",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-31",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Khulna and currently being processed at Dhaka Central Gateway.",
    "origin": "Khulna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Frankfurt Hub",
    "destination": "Helsinki, Finland",
    "destinationAddress": "Aleksanterinkatu 52, 00100 Helsinki, 00100, Finland",
    "destinationPostalCode": "00100",
    "destinationCountryCode": "FI",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "23.40 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Khulna, BD",
        "code": "KHL",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Helsinki, Finland",
        "code": "HEL",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-30-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Khulna Division Logistics Center, Khulna",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-30-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-30-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Express Interline Air (Airbus A330-200F / Flight SQ449).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-30-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-30-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Helsinki",
        "location": "Aleksanterinkatu 52, 00100 Helsinki, 00100, Finland",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-32",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Frankfurt Hub.",
    "origin": "Cox's Bazar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Frankfurt Hub",
    "destination": "Warsaw, Poland",
    "destinationAddress": "Marszałkowska 104, 00-017 Warszawa, 00-017, Poland",
    "destinationPostalCode": "00-017",
    "destinationCountryCode": "PL",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "24.13 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Cox's Bazar, BD",
        "code": "CXB",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Warsaw, Poland",
        "code": "WAW",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-31-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Cox's Bazar Coastal Cargo Station, Cox's Bazar",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-31-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-31-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on Global Cargo Corridor (Boeing 777-200F / Flight TK713) bound for Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-31-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-31-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Warsaw",
        "location": "Marszałkowska 104, 00-017 Warszawa, 00-017, Poland",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-33",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Madrid Hub and is undergoing interline connection scan.",
    "origin": "Bogura, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Madrid Hub International Terminal",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Lisbon Destination Center",
    "destination": "Lisbon, Portugal",
    "destinationAddress": "Avenida da Liberdade 190, 1250-147 Lisboa, 1250-147, Portugal",
    "destinationPostalCode": "1250-147",
    "destinationCountryCode": "PT",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "24.86 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Bogura, BD",
        "code": "BOG",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Madrid Hub",
        "code": "MAD-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Lisbon, Portugal",
        "code": "LIS",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-32-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Bogura Regional Dispatch Hub, Bogura",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-32-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-32-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-32-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Madrid Hub",
        "location": "Madrid Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-32-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Lisbon",
        "location": "Avenida da Liberdade 190, 1250-147 Lisboa, 1250-147, Portugal",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-34",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Doha.",
    "origin": "Cumilla, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Doha",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Doha Destination Center",
    "destination": "Doha, Qatar",
    "destinationAddress": "West Bay, Diplomatic Area, Tower 4, Doha, PO Box 22001, Qatar",
    "destinationPostalCode": "PO Box 22001",
    "destinationCountryCode": "QA",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "1.59 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Cumilla, BD",
        "code": "CML",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Doha, Qatar",
        "code": "DOH",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-33-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Cumilla Express Center, Cumilla",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-33-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-33-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Dubai Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-33-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Doha Hub",
        "location": "Doha, Qatar",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-33-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Doha",
        "location": "West Bay, Diplomatic Area, Tower 4, Doha, PO Box 22001, Qatar",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-35",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Kuwait City, Kuwait.",
    "origin": "Mymensingh, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Kuwait City, Kuwait",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Kuwait City, Kuwait",
    "destinationAddress": "Al Shuhada St, Al Asimah Complex, Kuwait City, 13008, Kuwait",
    "destinationPostalCode": "13008",
    "destinationCountryCode": "KW",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "2.32 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Mymensingh, BD",
        "code": "MYM",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Kuwait City, Kuwait",
        "code": "KWI",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-34-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Mymensingh Regional Depot, Mymensingh",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-34-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-34-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Dubai Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-34-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Kuwait City Distribution Center",
        "location": "Kuwait City, Kuwait",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-34-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "Al Shuhada St, Al Asimah Complex, Kuwait City, 13008, Kuwait",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-36",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Barishal and currently being processed at Dhaka Central Gateway.",
    "origin": "Barishal, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Dubai Hub",
    "destination": "Muscat, Oman",
    "destinationAddress": "Sultan Qaboos Street, Al Khuwair, Muscat, PC 111, Oman",
    "destinationPostalCode": "PC 111",
    "destinationCountryCode": "OM",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "3.05 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Barishal, BD",
        "code": "BZL",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Muscat, Oman",
        "code": "MCT",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-35-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Barishal South Gateway, Barishal",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-35-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-35-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Air Freight (Boeing 777F / Flight QR639).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-35-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Dubai Hub",
        "location": "Dubai Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-35-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Muscat",
        "location": "Sultan Qaboos Street, Al Khuwair, Muscat, PC 111, Oman",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-37",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Doha Hub.",
    "origin": "Rangpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Doha Hub",
    "destination": "Manama, Bahrain",
    "destinationAddress": "Government Avenue, Financial Harbour, Manama 315, Manama 315, Bahrain",
    "destinationPostalCode": "Manama 315",
    "destinationCountryCode": "BH",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "3.78 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Rangpur, BD",
        "code": "RNP",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Doha Hub",
        "code": "DOH-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Manama, Bahrain",
        "code": "BAH",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-36-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Rangpur North Transit Facility, Rangpur",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-36-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-36-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on Priority Air Express (Boeing 747-8F / Flight EK583) bound for Doha Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-36-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Doha Hub",
        "location": "Doha Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-36-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Manama",
        "location": "Government Avenue, Financial Harbour, Manama 315, Manama 315, Bahrain",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-38",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Frankfurt Hub and is undergoing interline connection scan.",
    "origin": "Savar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Frankfurt Hub International Terminal",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Milan Destination Center",
    "destination": "Milan, Italy",
    "destinationAddress": "Corso Vittorio Emanuele II, 45, 20122 Milano, 20122, Italy",
    "destinationPostalCode": "20122",
    "destinationCountryCode": "IT",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "4.51 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Savar, BD",
        "code": "SVR",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Milan, Italy",
        "code": "MXP",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-37-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Savar EPZ Logistics Hub, Savar",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-37-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-37-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-37-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-37-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Milan",
        "location": "Corso Vittorio Emanuele II, 45, 20122 Milano, 20122, Italy",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-39",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Barcelona.",
    "origin": "Tongi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Barcelona",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Barcelona Destination Center",
    "destination": "Barcelona, Spain",
    "destinationAddress": "Passeig de Gràcia 78, 08008 Barcelona, 08008, Spain",
    "destinationPostalCode": "08008",
    "destinationCountryCode": "ES",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "5.24 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Tongi, BD",
        "code": "TNG",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Sea",
        "code": "SEA",
        "state": "completed",
        "date": "Oct 02",
        "isAir": false
      },
      {
        "id": "transit_hub",
        "name": "Port of Valencia Hub",
        "code": "VLC-SEA",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Barcelona, Spain",
        "code": "BCN-SEA",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-38-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Tongi Freight Sorting Yard, Tongi",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-38-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-38-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Port of Valencia Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-38-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Barcelona Hub",
        "location": "Barcelona, Spain",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-38-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Barcelona",
        "location": "Passeig de Gràcia 78, 08008 Barcelona, 08008, Spain",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-40",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Munich, Germany.",
    "origin": "Brahmanbaria, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Munich, Germany",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Munich, Germany",
    "destinationAddress": "Maximilianstraße 32, 80539 München, 80539, Germany",
    "destinationPostalCode": "80539",
    "destinationCountryCode": "DE",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "5.97 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Brahmanbaria, BD",
        "code": "BRB",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Munich, Germany",
        "code": "MUC",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-39-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Brahmanbaria Courier Station, Brahmanbaria",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-39-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-39-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Frankfurt Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-39-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Munich Distribution Center",
        "location": "Munich, Germany",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-39-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "Maximilianstraße 32, 80539 München, 80539, Germany",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-41",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Dinajpur and currently being processed at Dhaka Central Gateway.",
    "origin": "Dinajpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "London Hub",
    "destination": "Manchester, United Kingdom",
    "destinationAddress": "Deansgate 125, Manchester M3 2BY, M3 2BY, United Kingdom",
    "destinationPostalCode": "M3 2BY",
    "destinationCountryCode": "GB",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "6.70 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Dinajpur, BD",
        "code": "DNJ",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "London Hub",
        "code": "LHR-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Manchester, United Kingdom",
        "code": "MAN",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-40-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Dinajpur Border Transit Hub, Dinajpur",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-40-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-40-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Continental Air Logistics (Airbus A350F / Flight BA142).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-40-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: London Hub",
        "location": "London Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-40-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Manchester",
        "location": "Deansgate 125, Manchester M3 2BY, M3 2BY, United Kingdom",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-42",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward London Hub.",
    "origin": "Kushtia, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "London Hub",
    "destination": "Birmingham, United Kingdom",
    "destinationAddress": "Colmore Row 45, Birmingham B3 2BN, B3 2BN, United Kingdom",
    "destinationPostalCode": "B3 2BN",
    "destinationCountryCode": "GB",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "7.43 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Kushtia, BD",
        "code": "KST",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "London Hub",
        "code": "LHR-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Birmingham, United Kingdom",
        "code": "BHX",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-41-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Kushtia Express Depot, Kushtia",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-41-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-41-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on High-Priority Airfreight (Boeing 777F / Flight SV805) bound for London Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-41-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: London Hub",
        "location": "London Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-41-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Birmingham",
        "location": "Colmore Row 45, Birmingham B3 2BN, B3 2BN, United Kingdom",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-43",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Frankfurt Hub and is undergoing interline connection scan.",
    "origin": "Tangail, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Frankfurt Hub International Terminal",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Montreal Destination Center",
    "destination": "Montreal, Canada",
    "destinationAddress": "1000 Rue de la Gauchetière O, Montréal, QC H3B 4W5, QC H3B 4W5, Canada",
    "destinationPostalCode": "QC H3B 4W5",
    "destinationCountryCode": "CA",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "8.16 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Tangail, BD",
        "code": "TGL",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Montreal, Canada",
        "code": "YUL",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-42-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Tangail Highway Dispatch Hub, Tangail",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-42-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-42-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-42-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-42-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Montreal",
        "location": "1000 Rue de la Gauchetière O, Montréal, QC H3B 4W5, QC H3B 4W5, Canada",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-44",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Houston.",
    "origin": "Jessore, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Houston",
    "currentMode": "Trans-Oceanic Freight (Vessel: Evergreen Meghna / Voy 8812)",
    "nextHub": "Houston Destination Center",
    "destination": "Houston, USA",
    "destinationAddress": "1000 Louisiana Street, Suite 2200, Houston, TX 77002, TX 77002, USA",
    "destinationPostalCode": "TX 77002",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "8.89 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Jessore, BD",
        "code": "JSR",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Sea",
        "code": "SEA",
        "state": "completed",
        "date": "Oct 02",
        "isAir": false
      },
      {
        "id": "transit_hub",
        "name": "Port of Colombo Hub",
        "code": "CMB-SEA",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Houston, USA",
        "code": "HOU-SEA",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-43-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Jessore Air & Cargo Depot, Jessore",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-43-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-43-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Port of Colombo Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-43-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Houston Hub",
        "location": "Houston, USA",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-43-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Houston",
        "location": "1000 Louisiana Street, Suite 2200, Houston, TX 77002, TX 77002, USA",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-45",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Miami, USA.",
    "origin": "Feni, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Miami, USA",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Miami, USA",
    "destinationAddress": "1111 Brickell Avenue, Miami, FL 33131, FL 33131, USA",
    "destinationPostalCode": "FL 33131",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "9.62 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Feni, BD",
        "code": "FNI",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Madrid Hub",
        "code": "MAD-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Miami, USA",
        "code": "MIA",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-44-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Feni Logistics Outpost, Feni",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-44-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-44-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Madrid Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-44-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Miami Distribution Center",
        "location": "Miami, USA",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-44-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "1111 Brickell Avenue, Miami, FL 33131, FL 33131, USA",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-46",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "AT_DHAKA_HUB",
    "statusLabel": "AT DHAKA HUB",
    "statusDescription": "Shipment received from Sirajganj and currently being processed at Dhaka Central Gateway.",
    "origin": "Sirajganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Dhaka Central International Gateway, Bangladesh",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Tokyo Hub",
    "destination": "Seattle, USA",
    "destinationAddress": "1201 Third Avenue, Seattle, WA 98101, WA 98101, USA",
    "destinationPostalCode": "WA 98101",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 8 hours (Flight Loading)",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "10.35 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Sirajganj, BD",
        "code": "SRJ",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "upcoming",
        "date": "Pending Flight",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Tokyo Hub",
        "code": "NRT-HUB",
        "state": "upcoming",
        "date": "Est. 3 Days"
      },
      {
        "id": "dest",
        "name": "Seattle, USA",
        "code": "SEA",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-45-1",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "11:20 AM",
        "title": "Shipment Received & Registered",
        "location": "Sirajganj Cargo Bridge Depot, Sirajganj",
        "description": "Accepted at local terminal and routed toward Dhaka Central Hub.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-45-2",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "09:30 AM",
        "title": "Arrived at Dhaka Central Gateway",
        "location": "Dhaka International Hub, Bangladesh",
        "description": "Consignment arrived at sorting hub. Barcode scanned, export clearance verification in progress.",
        "status": "Current",
        "iconType": "warehouse"
      },
      {
        "id": "ev-45-3",
        "date": "Upcoming",
        "day": "Scheduled Today",
        "time": "Flight Manifest Allocation",
        "title": "Airway Departure",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "Scheduled for export handover to Global Cargo Corridor (Boeing 777-200F / Flight TK713).",
        "status": "Upcoming",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-45-4",
        "date": "Upcoming",
        "day": "In Schedule",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Tokyo Hub",
        "location": "Tokyo Hub",
        "description": "Automated container transfer and flight corridor connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-45-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Seattle",
        "location": "1201 Third Avenue, Seattle, WA 98101, WA 98101, USA",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-47",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Consignment departed Dhaka and is actively in transit toward Hong Kong Hub.",
    "origin": "Jamalpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Flight Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Hong Kong Hub",
    "destination": "Taipei, Taiwan",
    "destinationAddress": "Xinyi Road, Section 5, No. 7, Taipei 110, Taipei 110, Taiwan",
    "destinationPostalCode": "Taipei 110",
    "destinationCountryCode": "TW",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "11.08 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Jamalpur, BD",
        "code": "JML",
        "state": "completed",
        "date": "Oct 01"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "current",
        "date": "Oct 04",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Hong Kong Hub",
        "code": "HKG-HUB",
        "state": "upcoming",
        "date": "Est. Today"
      },
      {
        "id": "dest",
        "name": "Taipei, Taiwan",
        "code": "TPE",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-46-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "09:40 AM",
        "title": "Shipment Picked Up",
        "location": "Jamalpur Express Center, Jamalpur",
        "description": "Accepted and sealed at regional logistics center.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-46-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "04:15 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway",
        "description": "Export customs approved, palletized, and sealed for international haul.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-46-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Cargo Air",
        "location": "Hazrat Shahjalal Int'l Airport (DAC)",
        "description": "In active transit on Scheduled Air Courier (Boeing 767-300F / Flight CX668) bound for Hong Kong Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-46-4",
        "date": "Upcoming",
        "day": "Est. 2 days",
        "time": "Pending Arrival",
        "title": "Transit Arrival: Hong Kong Hub",
        "location": "Hong Kong Hub",
        "description": "Transit customs release and feeder flight/vessel connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-46-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Delivery",
        "title": "Delivery in Taipei",
        "location": "Xinyi Road, Section 5, No. 7, Taipei 110, Taipei 110, Taiwan",
        "description": "Final delivery handover to consignee.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-48",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "TRANSIT_HUB",
    "statusLabel": "AT TRANSIT HUB",
    "statusDescription": "Shipment has arrived at Tokyo Hub and is undergoing interline connection scan.",
    "origin": "Pabna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Tokyo Hub International Terminal",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Osaka Destination Center",
    "destination": "Osaka, Japan",
    "destinationAddress": "1-1 Chuo-ku, Honmachi, Osaka 541-0041, 541-0041, Japan",
    "destinationPostalCode": "541-0041",
    "destinationCountryCode": "JP",
    "estimatedDeliveryDate": "October 7, 2026",
    "estimatedNextUpdate": "Within 12 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "11.81 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Pabna, BD",
        "code": "PBN",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 03",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Tokyo Hub",
        "code": "NRT-HUB",
        "state": "current",
        "date": "Oct 04"
      },
      {
        "id": "dest",
        "name": "Osaka, Japan",
        "code": "KIX",
        "state": "upcoming",
        "date": "Est. 24 Hrs"
      }
    ],
    "timeline": [
      {
        "id": "ev-47-1",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "10:30 AM",
        "title": "Consignment Dispatched",
        "location": "Pabna Regional Hub, Pabna",
        "description": "Secured parcel collection completed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-47-2",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "02:00 PM",
        "title": "Export Cleared at Dhaka Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export documentation signed, containerized.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-47-3",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "11:50 PM",
        "title": "International Flight Completed",
        "location": "Airspace Corridor",
        "description": "Flight landed safely at international transit gateway.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-47-4",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "07:30 AM",
        "title": "Arrived at Tokyo Hub",
        "location": "Tokyo Hub",
        "description": "Transit sorting barcode scan completed. Awaiting final leg transfer.",
        "status": "Current",
        "iconType": "building-2"
      },
      {
        "id": "ev-47-5",
        "date": "Upcoming",
        "day": "Est. Tomorrow",
        "time": "Final Milestone",
        "title": "Delivery in Osaka",
        "location": "1-1 Chuo-ku, Honmachi, Osaka 541-0041, 541-0041, Japan",
        "description": "Final delivery handover to recipient.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-49",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "OUT_FOR_DELIVERY",
    "statusLabel": "OUT FOR DELIVERY",
    "statusDescription": "Shipment is on the local LMEX delivery van and out for delivery in Prague.",
    "origin": "Noakhali, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "On Delivery Vehicle — Prague",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Prague Destination Center",
    "destination": "Prague, Czech Republic",
    "destinationAddress": "Václavské náměstí 19, 110 00 Nové Město, Prague, 110 00, Czech Republic",
    "destinationPostalCode": "110 00",
    "destinationCountryCode": "CZ",
    "estimatedDeliveryDate": "Today, by 06:00 PM",
    "estimatedNextUpdate": "Delivery within 2–4 hours",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "12.54 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Noakhali, BD",
        "code": "NKH",
        "state": "completed",
        "date": "Sep 28"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 30"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 02",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Frankfurt Hub",
        "code": "FRA-HUB",
        "state": "completed",
        "date": "Oct 03"
      },
      {
        "id": "dest",
        "name": "Prague, Czech Republic",
        "code": "PRG",
        "state": "current",
        "date": "Today"
      }
    ],
    "timeline": [
      {
        "id": "ev-48-1",
        "date": "28 September 2026",
        "day": "Monday",
        "time": "11:00 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Noakhali Dispatch Center, Noakhali",
        "description": "Registered into priority courier dispatch.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-48-2",
        "date": "30 September 2026",
        "day": "Wednesday",
        "time": "05:10 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Export cargo flight manifested.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-48-3",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "08:45 AM",
        "title": "International Flight Transit",
        "location": "Frankfurt Hub",
        "description": "Intermediate hub processing completed.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-48-4",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "06:15 PM",
        "title": "Arrived at Prague Hub",
        "location": "Prague, Czech Republic",
        "description": "Import customs clearance approved and destination scan completed.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-48-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:30 AM",
        "title": "Out for Delivery in Prague",
        "location": "Václavské náměstí 19, 110 00 Nové Město, Prague, 110 00, Czech Republic",
        "description": "Courier driver dispatched with package. Estimated delivery today by 6:00 PM.",
        "status": "Current",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-50",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "DELIVERED",
    "statusLabel": "DELIVERED",
    "statusDescription": "Shipment was successfully delivered to consignee in Athens, Greece.",
    "origin": "Manikganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "Delivered — Athens, Greece",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Delivered (POD Signed)",
    "destination": "Athens, Greece",
    "destinationAddress": "Syntagma Square 5, 105 63 Athens, 105 63, Greece",
    "destinationPostalCode": "105 63",
    "destinationCountryCode": "GR",
    "estimatedDeliveryDate": "Delivered",
    "estimatedNextUpdate": "Delivery Completed",
    "lastUpdated": "4 October 2026, 12:45 UTC",
    "weight": "13.27 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Manikganj, BD",
        "code": "MNK",
        "state": "completed",
        "date": "Sep 27"
      },
      {
        "id": "dhaka_hub",
        "name": "Dhaka Hub",
        "code": "DAC-INT",
        "state": "completed",
        "date": "Sep 29"
      },
      {
        "id": "in_transit",
        "name": "In Transit / Air",
        "code": "AIR",
        "state": "completed",
        "date": "Oct 01",
        "isAir": true
      },
      {
        "id": "transit_hub",
        "name": "Istanbul Hub",
        "code": "IST-HUB",
        "state": "completed",
        "date": "Oct 02"
      },
      {
        "id": "dest",
        "name": "Athens, Greece",
        "code": "ATH",
        "state": "completed",
        "date": "Delivered"
      }
    ],
    "timeline": [
      {
        "id": "ev-49-1",
        "date": "27 September 2026",
        "day": "Sunday",
        "time": "09:15 AM",
        "title": "Consignment Handed to LMEX",
        "location": "Manikganj Transit Depot, Manikganj",
        "description": "Package registered and sealed.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-49-2",
        "date": "29 September 2026",
        "day": "Tuesday",
        "time": "03:45 PM",
        "title": "Dhaka International Departure",
        "location": "Dhaka Central Gateway, Bangladesh",
        "description": "Cleared export customs and loaded on cargo flight.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-49-3",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "07:20 AM",
        "title": "Transit Corridor Scan",
        "location": "Istanbul Hub",
        "description": "Transferred onto scheduled destination flight corridor.",
        "status": "Completed",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-49-4",
        "date": "2 October 2026",
        "day": "Friday",
        "time": "04:30 PM",
        "title": "Arrived at Athens Distribution Center",
        "location": "Athens, Greece",
        "description": "Import customs clearance granted without exception.",
        "status": "Completed",
        "iconType": "building-2"
      },
      {
        "id": "ev-49-5",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "11:15 AM",
        "title": "Delivered to Recipient",
        "location": "Syntagma Square 5, 105 63 Athens, 105 63, Greece",
        "description": "Package delivered and signed by consignee. Proof of Delivery (POD) verified.",
        "status": "Completed",
        "iconType": "map-pin"
      }
    ]
  }
];

/**
 * Deterministic hash function so changing 1 or 2 digits consistently yields
 * a specific parcel from the 50 dummies, preserving natural persistence.
 */
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

// Example tracking number shown in the UI placeholder — must NOT return results
const EXAMPLE_TRACKING_NUMBER = "26LMEXCINT24653287";

/**
 * Fetch shipment details:
 * - Returns data only for tracking numbers that exist in SHIPMENT_DATABASE.
 * - Returns null for unknown tracking numbers (including the UI example placeholder).
 */
export function getShipmentByTrackingNumber(trackingNumber) {
  if (!trackingNumber) return null;
  const cleanId = trackingNumber.trim().toUpperCase();

  // Block the example/placeholder tracking number shown in the UI
  if (cleanId === EXAMPLE_TRACKING_NUMBER) {
    return null;
  }

  // Exact match in the shipment database
  if (SHIPMENT_DATABASE[cleanId]) {
    return { ...SHIPMENT_DATABASE[cleanId] };
  }

  // No match found — return null so the UI shows "not found"
  return null;
}
