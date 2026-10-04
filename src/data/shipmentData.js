/**
 * LMEX International — Standard Shipment Data Structure
 * Supports assigned demo consignment + 50 diverse realistic global dummy parcels.
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
 * 50 Diverse realistic global dummy parcels.
 * Always originated in Bangladeshi hubs, routed through Dhaka Hub, then air/sea to global cities.
 */
export const DUMMY_SHIPMENTS_POOL = [
  {
    "id": "DUMMY-1",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Chittagong via Dhaka Hub toward London, United Kingdom.",
    "origin": "Chittagong, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Dubai Hub",
    "destination": "London, United Kingdom",
    "destinationAddress": "48 Baker Street, Marylebone, London W1U 7BU, W1U 7BU, United Kingdom",
    "destinationPostalCode": "W1U 7BU",
    "destinationCountryCode": "GB",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 10:00 UTC",
    "weight": "1.50 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Chittagong, BD",
        "code": "CGP",
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
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Chittagong Export Terminal, Chittagong, Bangladesh",
        "description": "Consignment accepted at Chittagong Export Terminal and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-0-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-0-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Dubai Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-0-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Dubai Hub",
        "location": "Dubai Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Sylhet via Dhaka Hub toward Tokyo, Japan.",
    "origin": "Sylhet, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Singapore Hub",
    "destination": "Tokyo, Japan",
    "destinationAddress": "3-5-1 Ginza, Chuo-ku, Tokyo 104-0061, 104-0061, Japan",
    "destinationPostalCode": "104-0061",
    "destinationCountryCode": "JP",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 11:07 UTC",
    "weight": "2.23 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Sylhet, BD",
        "code": "ZYL",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Sylhet Regional Courier Depot, Sylhet, Bangladesh",
        "description": "Consignment accepted at Sylhet Regional Courier Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-1-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-1-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Priority Air Express (Boeing 747-8F / Flight EK583)). In active transit toward Singapore Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-1-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Singapore Hub",
        "location": "Singapore Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-1-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Tokyo",
        "location": "3-5-1 Ginza, Chuo-ku, Tokyo 104-0061, 104-0061, Japan",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-3",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Gazipur via Dhaka Hub toward Toronto, Canada.",
    "origin": "Gazipur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Frankfurt Hub",
    "destination": "Toronto, Canada",
    "destinationAddress": "180 Bay Street, Suite 1400, Toronto, ON M5J 2V8, M5J 2V8, Canada",
    "destinationPostalCode": "M5J 2V8",
    "destinationCountryCode": "CA",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 12:14 UTC",
    "weight": "2.96 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Gazipur, BD",
        "code": "GZP",
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
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Toronto, Canada",
        "code": "YYZ",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-2-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Gazipur Industrial Logistics Hub, Gazipur, Bangladesh",
        "description": "Consignment accepted at Gazipur Industrial Logistics Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-2-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-2-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Express Interline Air (Airbus A330-200F / Flight SQ449)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-2-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-2-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Toronto",
        "location": "180 Bay Street, Suite 1400, Toronto, ON M5J 2V8, M5J 2V8, Canada",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-4",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Narayanganj via Dhaka Hub toward Sydney, Australia.",
    "origin": "Narayanganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Singapore Hub",
    "destination": "Sydney, Australia",
    "destinationAddress": "220 George Street, Sydney NSW 2000, NSW 2000, Australia",
    "destinationPostalCode": "NSW 2000",
    "destinationCountryCode": "AU",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 13:21 UTC",
    "weight": "3.69 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Narayanganj, BD",
        "code": "NGJ",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Sydney, Australia",
        "code": "SYD",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-3-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Narayanganj Commercial Hub, Narayanganj, Bangladesh",
        "description": "Consignment accepted at Narayanganj Commercial Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-3-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-3-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Global Cargo Corridor (Boeing 777-200F / Flight TK713)). In active transit toward Singapore Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-3-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Singapore Hub",
        "location": "Singapore Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-3-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Sydney",
        "location": "220 George Street, Sydney NSW 2000, NSW 2000, Australia",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-5",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Rajshahi via Dhaka Hub toward Dubai, United Arab Emirates.",
    "origin": "Rajshahi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Doha Hub",
    "destination": "Dubai, United Arab Emirates",
    "destinationAddress": "Al Quoz Industrial Area 3, Street 18B, Dubai, PO Box 4522, United Arab Emirates",
    "destinationPostalCode": "PO Box 4522",
    "destinationCountryCode": "AE",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 14:28 UTC",
    "weight": "4.42 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Rajshahi, BD",
        "code": "RJH",
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
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Dubai, United Arab Emirates",
        "code": "DWC",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-4-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Rajshahi Courier Facility, Rajshahi, Bangladesh",
        "description": "Consignment accepted at Rajshahi Courier Facility and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-4-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-4-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Scheduled Air Courier (Boeing 767-300F / Flight CX668)). In active transit toward Doha Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-4-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Doha Hub",
        "location": "Doha Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-4-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Dubai",
        "location": "Al Quoz Industrial Area 3, Street 18B, Dubai, PO Box 4522, United Arab Emirates",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-6",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Khulna via Dhaka Hub toward Berlin, Germany.",
    "origin": "Khulna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Istanbul Hub",
    "destination": "Berlin, Germany",
    "destinationAddress": "Friedrichstraße 43-45, 10117 Berlin, 10117, Germany",
    "destinationPostalCode": "10117",
    "destinationCountryCode": "DE",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 15:35 UTC",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Khulna Division Logistics Center, Khulna, Bangladesh",
        "description": "Consignment accepted at Khulna Division Logistics Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-5-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-5-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Continental Air Logistics (Airbus A350F / Flight BA142)). In active transit toward Istanbul Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-5-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Istanbul Hub",
        "location": "Istanbul Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Cox's Bazar via Dhaka Hub toward Paris, France.",
    "origin": "Cox's Bazar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Doha Hub",
    "destination": "Paris, France",
    "destinationAddress": "25 Rue du Faubourg Saint-Honoré, 75008 Paris, 75008, France",
    "destinationPostalCode": "75008",
    "destinationCountryCode": "FR",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 16:42 UTC",
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Cox's Bazar Coastal Cargo Station, Cox's Bazar, Bangladesh",
        "description": "Consignment accepted at Cox's Bazar Coastal Cargo Station and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-6-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-6-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (High-Priority Airfreight (Boeing 777F / Flight SV805)). In active transit toward Doha Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-6-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Doha Hub",
        "location": "Doha Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-6-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Paris",
        "location": "25 Rue du Faubourg Saint-Honoré, 75008 Paris, 75008, France",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-8",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Bogura via Dhaka Hub toward Rome, Italy.",
    "origin": "Bogura, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Istanbul Hub",
    "destination": "Rome, Italy",
    "destinationAddress": "Via del Corso 240, 00186 Roma RM, 00186, Italy",
    "destinationPostalCode": "00186",
    "destinationCountryCode": "IT",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 17:49 UTC",
    "weight": "6.61 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Bogura, BD",
        "code": "BOG",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Rome, Italy",
        "code": "FCO",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-7-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Bogura Regional Dispatch Hub, Bogura, Bangladesh",
        "description": "Consignment accepted at Bogura Regional Dispatch Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-7-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-7-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Istanbul Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-7-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Istanbul Hub",
        "location": "Istanbul Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-7-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Rome",
        "location": "Via del Corso 240, 00186 Roma RM, 00186, Italy",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-9",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Cumilla via Dhaka Hub toward Seoul, South Korea.",
    "origin": "Cumilla, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Bangkok Hub",
    "destination": "Seoul, South Korea",
    "destinationAddress": "123 Teheran-ro, Gangnam-gu, Seoul 06133, 06133, South Korea",
    "destinationPostalCode": "06133",
    "destinationCountryCode": "KR",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 18:56 UTC",
    "weight": "7.34 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Cumilla, BD",
        "code": "CML",
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
        "name": "Bangkok Hub",
        "code": "BKK-HUB",
        "state": "upcoming",
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Seoul, South Korea",
        "code": "ICN",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-8-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Cumilla Express Center, Cumilla, Bangladesh",
        "description": "Consignment accepted at Cumilla Express Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-8-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-8-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Priority Air Express (Boeing 747-8F / Flight EK583)). In active transit toward Bangkok Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-8-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Bangkok Hub",
        "location": "Bangkok Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-8-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Seoul",
        "location": "123 Teheran-ro, Gangnam-gu, Seoul 06133, 06133, South Korea",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-10",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Mymensingh via Dhaka Hub toward Madrid, Spain.",
    "origin": "Mymensingh, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Frankfurt Hub",
    "destination": "Madrid, Spain",
    "destinationAddress": "Calle de Alcalá 42, 28014 Madrid, 28014, Spain",
    "destinationPostalCode": "28014",
    "destinationCountryCode": "ES",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 19:03 UTC",
    "weight": "8.07 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Mymensingh, BD",
        "code": "MYM",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Madrid, Spain",
        "code": "MAD",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-9-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Mymensingh Regional Depot, Mymensingh, Bangladesh",
        "description": "Consignment accepted at Mymensingh Regional Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-9-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-9-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Express Interline Air (Airbus A330-200F / Flight SQ449)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-9-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-9-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Madrid",
        "location": "Calle de Alcalá 42, 28014 Madrid, 28014, Spain",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-11",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Barishal via Dhaka Hub toward Amsterdam, Netherlands.",
    "origin": "Barishal, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Maritime Corridor",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Port of Singapore Hub",
    "destination": "Amsterdam, Netherlands",
    "destinationAddress": "Keizersgracht 421, 1016 EK Amsterdam, 1016 EK, Netherlands",
    "destinationPostalCode": "1016 EK",
    "destinationCountryCode": "NL",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 20:10 UTC",
    "weight": "8.80 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Barishal, BD",
        "code": "BZL",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Barishal South Gateway, Barishal, Bangladesh",
        "description": "Consignment accepted at Barishal South Gateway and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-10-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-10-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Dispatched via Maritime Freight",
        "location": "Chittagong Port International Maritime Terminal",
        "description": "Container sealed and loaded onto Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E). Moving along trans-oceanic shipping lane.",
        "status": "Current",
        "iconType": "ship"
      },
      {
        "id": "ev-10-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Port of Singapore Hub",
        "location": "Port of Singapore Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Rangpur via Dhaka Hub toward Zurich, Switzerland.",
    "origin": "Rangpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Frankfurt Hub",
    "destination": "Zurich, Switzerland",
    "destinationAddress": "Bahnhofstrasse 55, 8001 Zürich, 8001, Switzerland",
    "destinationPostalCode": "8001",
    "destinationCountryCode": "CH",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 21:17 UTC",
    "weight": "9.53 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Rangpur, BD",
        "code": "RNP",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Rangpur North Transit Facility, Rangpur, Bangladesh",
        "description": "Consignment accepted at Rangpur North Transit Facility and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-11-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-11-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Scheduled Air Courier (Boeing 767-300F / Flight CX668)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-11-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-11-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Zurich",
        "location": "Bahnhofstrasse 55, 8001 Zürich, 8001, Switzerland",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-13",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Savar via Dhaka Hub toward Singapore, Singapore.",
    "origin": "Savar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Kuala Lumpur Hub",
    "destination": "Singapore, Singapore",
    "destinationAddress": "10 Marina Boulevard, MBFC Tower 2, Singapore 018983, 018983, Singapore",
    "destinationPostalCode": "018983",
    "destinationCountryCode": "SG",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 10:24 UTC",
    "weight": "10.26 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Savar, BD",
        "code": "SVR",
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
        "name": "Kuala Lumpur Hub",
        "code": "KUL-HUB",
        "state": "upcoming",
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Singapore, Singapore",
        "code": "SIN",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-12-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Savar EPZ Logistics Hub, Savar, Bangladesh",
        "description": "Consignment accepted at Savar EPZ Logistics Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-12-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-12-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Continental Air Logistics (Airbus A350F / Flight BA142)). In active transit toward Kuala Lumpur Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-12-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Kuala Lumpur Hub",
        "location": "Kuala Lumpur Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-12-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Singapore",
        "location": "10 Marina Boulevard, MBFC Tower 2, Singapore 018983, 018983, Singapore",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-14",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Tongi via Dhaka Hub toward Melbourne, Australia.",
    "origin": "Tongi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Singapore Hub",
    "destination": "Melbourne, Australia",
    "destinationAddress": "350 Collins Street, Melbourne VIC 3000, VIC 3000, Australia",
    "destinationPostalCode": "VIC 3000",
    "destinationCountryCode": "AU",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 11:31 UTC",
    "weight": "10.99 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Tongi, BD",
        "code": "TNG",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Melbourne, Australia",
        "code": "MEL",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-13-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Tongi Freight Sorting Yard, Tongi, Bangladesh",
        "description": "Consignment accepted at Tongi Freight Sorting Yard and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-13-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-13-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (High-Priority Airfreight (Boeing 777F / Flight SV805)). In active transit toward Singapore Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-13-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Singapore Hub",
        "location": "Singapore Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-13-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Melbourne",
        "location": "350 Collins Street, Melbourne VIC 3000, VIC 3000, Australia",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-15",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Brahmanbaria via Dhaka Hub toward Vancouver, Canada.",
    "origin": "Brahmanbaria, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Tokyo Hub",
    "destination": "Vancouver, Canada",
    "destinationAddress": "800 Robson Street, Vancouver, BC V6Z 3B7, BC V6Z 3B7, Canada",
    "destinationPostalCode": "BC V6Z 3B7",
    "destinationCountryCode": "CA",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 12:38 UTC",
    "weight": "11.72 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Brahmanbaria, BD",
        "code": "BRB",
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
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Vancouver, Canada",
        "code": "YVR",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-14-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Brahmanbaria Courier Station, Brahmanbaria, Bangladesh",
        "description": "Consignment accepted at Brahmanbaria Courier Station and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-14-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-14-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Tokyo Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-14-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Tokyo Hub",
        "location": "Tokyo Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-14-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Vancouver",
        "location": "800 Robson Street, Vancouver, BC V6Z 3B7, BC V6Z 3B7, Canada",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-16",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Dinajpur via Dhaka Hub toward Dublin, Ireland.",
    "origin": "Dinajpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "London Hub",
    "destination": "Dublin, Ireland",
    "destinationAddress": "1 Grand Canal Square, Grand Canal Harbour, Dublin 2, D02 P820, Ireland",
    "destinationPostalCode": "D02 P820",
    "destinationCountryCode": "IE",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 13:45 UTC",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Dinajpur Border Transit Hub, Dinajpur, Bangladesh",
        "description": "Consignment accepted at Dinajpur Border Transit Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-15-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-15-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Priority Air Express (Boeing 747-8F / Flight EK583)). In active transit toward London Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-15-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at London Hub",
        "location": "London Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Kushtia via Dhaka Hub toward Los Angeles, USA.",
    "origin": "Kushtia, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Tokyo Hub",
    "destination": "Los Angeles, USA",
    "destinationAddress": "950 South Hope Street, Los Angeles, CA 90015, CA 90015, USA",
    "destinationPostalCode": "CA 90015",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 14:52 UTC",
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Kushtia Express Depot, Kushtia, Bangladesh",
        "description": "Consignment accepted at Kushtia Express Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-16-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-16-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Express Interline Air (Airbus A330-200F / Flight SQ449)). In active transit toward Tokyo Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-16-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Tokyo Hub",
        "location": "Tokyo Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-16-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Los Angeles",
        "location": "950 South Hope Street, Los Angeles, CA 90015, CA 90015, USA",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-18",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Tangail via Dhaka Hub toward Chicago, USA.",
    "origin": "Tangail, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Frankfurt Hub",
    "destination": "Chicago, USA",
    "destinationAddress": "233 S Wacker Dr, Suite 4100, Chicago, IL 60606, IL 60606, USA",
    "destinationPostalCode": "IL 60606",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 15:59 UTC",
    "weight": "13.91 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Tangail, BD",
        "code": "TGL",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Chicago, USA",
        "code": "ORD",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-17-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Tangail Highway Dispatch Hub, Tangail, Bangladesh",
        "description": "Consignment accepted at Tangail Highway Dispatch Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-17-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-17-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Global Cargo Corridor (Boeing 777-200F / Flight TK713)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-17-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-17-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Chicago",
        "location": "233 S Wacker Dr, Suite 4100, Chicago, IL 60606, IL 60606, USA",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-19",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Jessore via Dhaka Hub toward Stockholm, Sweden.",
    "origin": "Jessore, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Amsterdam Hub",
    "destination": "Stockholm, Sweden",
    "destinationAddress": "Drottninggatan 88, 111 36 Stockholm, 111 36, Sweden",
    "destinationPostalCode": "111 36",
    "destinationCountryCode": "SE",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 16:06 UTC",
    "weight": "14.64 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Jessore, BD",
        "code": "JSR",
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
        "name": "Amsterdam Hub",
        "code": "AMS-HUB",
        "state": "upcoming",
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Stockholm, Sweden",
        "code": "ARN",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-18-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Jessore Air & Cargo Depot, Jessore, Bangladesh",
        "description": "Consignment accepted at Jessore Air & Cargo Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-18-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-18-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Scheduled Air Courier (Boeing 767-300F / Flight CX668)). In active transit toward Amsterdam Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-18-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Amsterdam Hub",
        "location": "Amsterdam Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-18-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Stockholm",
        "location": "Drottninggatan 88, 111 36 Stockholm, 111 36, Sweden",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-20",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Feni via Dhaka Hub toward Oslo, Norway.",
    "origin": "Feni, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Amsterdam Hub",
    "destination": "Oslo, Norway",
    "destinationAddress": "Karl Johans gate 22, 0159 Oslo, 0159, Norway",
    "destinationPostalCode": "0159",
    "destinationCountryCode": "NO",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 17:13 UTC",
    "weight": "15.37 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Feni, BD",
        "code": "FNI",
        "state": "completed",
        "date": "Oct 02"
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
        "name": "Amsterdam Hub",
        "code": "AMS-HUB",
        "state": "upcoming",
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Oslo, Norway",
        "code": "OSL",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-19-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Feni Logistics Outpost, Feni, Bangladesh",
        "description": "Consignment accepted at Feni Logistics Outpost and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-19-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-19-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Continental Air Logistics (Airbus A350F / Flight BA142)). In active transit toward Amsterdam Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-19-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Amsterdam Hub",
        "location": "Amsterdam Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-19-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Oslo",
        "location": "Karl Johans gate 22, 0159 Oslo, 0159, Norway",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-21",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Sirajganj via Dhaka Hub toward Copenhagen, Denmark.",
    "origin": "Sirajganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Frankfurt Hub",
    "destination": "Copenhagen, Denmark",
    "destinationAddress": "Strøget, Østergade 34, 1100 København, 1100, Denmark",
    "destinationPostalCode": "1100",
    "destinationCountryCode": "DK",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 18:20 UTC",
    "weight": "16.10 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Sirajganj, BD",
        "code": "SRJ",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Sirajganj Cargo Bridge Depot, Sirajganj, Bangladesh",
        "description": "Consignment accepted at Sirajganj Cargo Bridge Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-20-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-20-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (High-Priority Airfreight (Boeing 777F / Flight SV805)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-20-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Jamalpur via Dhaka Hub toward Vienna, Austria.",
    "origin": "Jamalpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Istanbul Hub",
    "destination": "Vienna, Austria",
    "destinationAddress": "Kärntner Straße 18, 1010 Wien, 1010, Austria",
    "destinationPostalCode": "1010",
    "destinationCountryCode": "AT",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 19:27 UTC",
    "weight": "16.83 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Jamalpur, BD",
        "code": "JML",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Jamalpur Express Center, Jamalpur, Bangladesh",
        "description": "Consignment accepted at Jamalpur Express Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-21-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-21-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Istanbul Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-21-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Istanbul Hub",
        "location": "Istanbul Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-21-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Vienna",
        "location": "Kärntner Straße 18, 1010 Wien, 1010, Austria",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-23",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Pabna via Dhaka Hub toward Brussels, Belgium.",
    "origin": "Pabna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Maritime Corridor",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Port of Hamburg Hub",
    "destination": "Brussels, Belgium",
    "destinationAddress": "Avenue Louise 250, 1050 Bruxelles, 1050, Belgium",
    "destinationPostalCode": "1050",
    "destinationCountryCode": "BE",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 20:34 UTC",
    "weight": "17.56 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Pabna, BD",
        "code": "PBN",
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
        "name": "Port of Hamburg Hub",
        "code": "HAM-SEA",
        "state": "upcoming",
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Brussels, Belgium",
        "code": "ANR",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-22-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Pabna Regional Hub, Pabna, Bangladesh",
        "description": "Consignment accepted at Pabna Regional Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-22-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-22-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Dispatched via Maritime Freight",
        "location": "Chittagong Port International Maritime Terminal",
        "description": "Container sealed and loaded onto Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E). Moving along trans-oceanic shipping lane.",
        "status": "Current",
        "iconType": "ship"
      },
      {
        "id": "ev-22-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Port of Hamburg Hub",
        "location": "Port of Hamburg Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-22-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Brussels",
        "location": "Avenue Louise 250, 1050 Bruxelles, 1050, Belgium",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-24",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Noakhali via Dhaka Hub toward Kuala Lumpur, Malaysia.",
    "origin": "Noakhali, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Bangkok Hub",
    "destination": "Kuala Lumpur, Malaysia",
    "destinationAddress": "Jalan Ampang, KLCC Precinct, 50450 Kuala Lumpur, 50450, Malaysia",
    "destinationPostalCode": "50450",
    "destinationCountryCode": "MY",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 21:41 UTC",
    "weight": "18.29 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Noakhali, BD",
        "code": "NKH",
        "state": "completed",
        "date": "Oct 02"
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
        "name": "Bangkok Hub",
        "code": "BKK-HUB",
        "state": "upcoming",
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Kuala Lumpur, Malaysia",
        "code": "KUL",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-23-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Noakhali Dispatch Center, Noakhali, Bangladesh",
        "description": "Consignment accepted at Noakhali Dispatch Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-23-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-23-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Express Interline Air (Airbus A330-200F / Flight SQ449)). In active transit toward Bangkok Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-23-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Bangkok Hub",
        "location": "Bangkok Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-23-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Kuala Lumpur",
        "location": "Jalan Ampang, KLCC Precinct, 50450 Kuala Lumpur, 50450, Malaysia",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-25",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Manikganj via Dhaka Hub toward Bangkok, Thailand.",
    "origin": "Manikganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Singapore Hub",
    "destination": "Bangkok, Thailand",
    "destinationAddress": "999/9 Rama I Road, Pathum Wan, Bangkok 10330, 10330, Thailand",
    "destinationPostalCode": "10330",
    "destinationCountryCode": "TH",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 10:48 UTC",
    "weight": "19.02 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Manikganj, BD",
        "code": "MNK",
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
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Bangkok, Thailand",
        "code": "BKK",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-24-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Manikganj Transit Depot, Manikganj, Bangladesh",
        "description": "Consignment accepted at Manikganj Transit Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-24-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-24-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Global Cargo Corridor (Boeing 777-200F / Flight TK713)). In active transit toward Singapore Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-24-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Singapore Hub",
        "location": "Singapore Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-24-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Bangkok",
        "location": "999/9 Rama I Road, Pathum Wan, Bangkok 10330, 10330, Thailand",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-26",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Chittagong via Dhaka Hub toward Istanbul, Turkey.",
    "origin": "Chittagong, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Doha Hub",
    "destination": "Istanbul, Turkey",
    "destinationAddress": "Büyükdere Caddesi No: 185, Levent, 34394 Istanbul, 34394, Turkey",
    "destinationPostalCode": "34394",
    "destinationCountryCode": "TR",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 11:55 UTC",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Chittagong Export Terminal, Chittagong, Bangladesh",
        "description": "Consignment accepted at Chittagong Export Terminal and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-25-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-25-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Scheduled Air Courier (Boeing 767-300F / Flight CX668)). In active transit toward Doha Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-25-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Doha Hub",
        "location": "Doha Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Sylhet via Dhaka Hub toward São Paulo, Brazil.",
    "origin": "Sylhet, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Maritime Corridor",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Port of Singapore Hub",
    "destination": "São Paulo, Brazil",
    "destinationAddress": "Avenida Paulista 1374, Bela Vista, São Paulo - SP, 01310-100, Brazil",
    "destinationPostalCode": "01310-100",
    "destinationCountryCode": "BR",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 12:02 UTC",
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Sylhet Regional Courier Depot, Sylhet, Bangladesh",
        "description": "Consignment accepted at Sylhet Regional Courier Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-26-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-26-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Dispatched via Maritime Freight",
        "location": "Chittagong Port International Maritime Terminal",
        "description": "Container sealed and loaded onto Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E). Moving along trans-oceanic shipping lane.",
        "status": "Current",
        "iconType": "ship"
      },
      {
        "id": "ev-26-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Port of Singapore Hub",
        "location": "Port of Singapore Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-26-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in São Paulo",
        "location": "Avenida Paulista 1374, Bela Vista, São Paulo - SP, 01310-100, Brazil",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-28",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Gazipur via Dhaka Hub toward Johannesburg, South Africa.",
    "origin": "Gazipur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Dubai Hub",
    "destination": "Johannesburg, South Africa",
    "destinationAddress": "15 Alice Lane, Sandton, Johannesburg 2196, 2196, South Africa",
    "destinationPostalCode": "2196",
    "destinationCountryCode": "ZA",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 13:09 UTC",
    "weight": "21.21 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Gazipur, BD",
        "code": "GZP",
        "state": "completed",
        "date": "Oct 02"
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
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Johannesburg, South Africa",
        "code": "JNB",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-27-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Gazipur Industrial Logistics Hub, Gazipur, Bangladesh",
        "description": "Consignment accepted at Gazipur Industrial Logistics Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-27-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-27-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (High-Priority Airfreight (Boeing 777F / Flight SV805)). In active transit toward Dubai Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-27-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Dubai Hub",
        "location": "Dubai Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-27-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Johannesburg",
        "location": "15 Alice Lane, Sandton, Johannesburg 2196, 2196, South Africa",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-29",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Narayanganj via Dhaka Hub toward Riyadh, Saudi Arabia.",
    "origin": "Narayanganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Dubai Hub",
    "destination": "Riyadh, Saudi Arabia",
    "destinationAddress": "King Fahd Road, Al Olaya, Riyadh 12213, 12213, Saudi Arabia",
    "destinationPostalCode": "12213",
    "destinationCountryCode": "SA",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 14:16 UTC",
    "weight": "21.94 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Narayanganj, BD",
        "code": "NGJ",
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
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Riyadh, Saudi Arabia",
        "code": "RUH",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-28-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Narayanganj Commercial Hub, Narayanganj, Bangladesh",
        "description": "Consignment accepted at Narayanganj Commercial Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-28-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-28-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Dubai Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-28-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Dubai Hub",
        "location": "Dubai Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-28-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Riyadh",
        "location": "King Fahd Road, Al Olaya, Riyadh 12213, 12213, Saudi Arabia",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-30",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Rajshahi via Dhaka Hub toward Auckland, New Zealand.",
    "origin": "Rajshahi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Sydney Hub",
    "destination": "Auckland, New Zealand",
    "destinationAddress": "88 Quay Street, Auckland CBD, Auckland 1010, 1010, New Zealand",
    "destinationPostalCode": "1010",
    "destinationCountryCode": "NZ",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 15:23 UTC",
    "weight": "22.67 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Rajshahi, BD",
        "code": "RJH",
        "state": "completed",
        "date": "Oct 02"
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
        "name": "Sydney Hub",
        "code": "SYD-HUB",
        "state": "upcoming",
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Auckland, New Zealand",
        "code": "AKL",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-29-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Rajshahi Courier Facility, Rajshahi, Bangladesh",
        "description": "Consignment accepted at Rajshahi Courier Facility and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-29-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-29-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Priority Air Express (Boeing 747-8F / Flight EK583)). In active transit toward Sydney Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-29-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Sydney Hub",
        "location": "Sydney Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-29-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Auckland",
        "location": "88 Quay Street, Auckland CBD, Auckland 1010, 1010, New Zealand",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-31",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Khulna via Dhaka Hub toward Helsinki, Finland.",
    "origin": "Khulna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Frankfurt Hub",
    "destination": "Helsinki, Finland",
    "destinationAddress": "Aleksanterinkatu 52, 00100 Helsinki, 00100, Finland",
    "destinationPostalCode": "00100",
    "destinationCountryCode": "FI",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 16:30 UTC",
    "weight": "23.40 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Khulna, BD",
        "code": "KHL",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Khulna Division Logistics Center, Khulna, Bangladesh",
        "description": "Consignment accepted at Khulna Division Logistics Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-30-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-30-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Express Interline Air (Airbus A330-200F / Flight SQ449)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-30-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Cox's Bazar via Dhaka Hub toward Warsaw, Poland.",
    "origin": "Cox's Bazar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Frankfurt Hub",
    "destination": "Warsaw, Poland",
    "destinationAddress": "Marszałkowska 104, 00-017 Warszawa, 00-017, Poland",
    "destinationPostalCode": "00-017",
    "destinationCountryCode": "PL",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 17:37 UTC",
    "weight": "24.13 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Cox's Bazar, BD",
        "code": "CXB",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Cox's Bazar Coastal Cargo Station, Cox's Bazar, Bangladesh",
        "description": "Consignment accepted at Cox's Bazar Coastal Cargo Station and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-31-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-31-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Global Cargo Corridor (Boeing 777-200F / Flight TK713)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-31-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-31-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Warsaw",
        "location": "Marszałkowska 104, 00-017 Warszawa, 00-017, Poland",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-33",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Bogura via Dhaka Hub toward Lisbon, Portugal.",
    "origin": "Bogura, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Madrid Hub",
    "destination": "Lisbon, Portugal",
    "destinationAddress": "Avenida da Liberdade 190, 1250-147 Lisboa, 1250-147, Portugal",
    "destinationPostalCode": "1250-147",
    "destinationCountryCode": "PT",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 18:44 UTC",
    "weight": "24.86 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Bogura, BD",
        "code": "BOG",
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
        "name": "Madrid Hub",
        "code": "MAD-HUB",
        "state": "upcoming",
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Lisbon, Portugal",
        "code": "LIS",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-32-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Bogura Regional Dispatch Hub, Bogura, Bangladesh",
        "description": "Consignment accepted at Bogura Regional Dispatch Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-32-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-32-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Scheduled Air Courier (Boeing 767-300F / Flight CX668)). In active transit toward Madrid Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-32-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Madrid Hub",
        "location": "Madrid Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-32-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Lisbon",
        "location": "Avenida da Liberdade 190, 1250-147 Lisboa, 1250-147, Portugal",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-34",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Cumilla via Dhaka Hub toward Doha, Qatar.",
    "origin": "Cumilla, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Dubai Hub",
    "destination": "Doha, Qatar",
    "destinationAddress": "West Bay, Diplomatic Area, Tower 4, Doha, PO Box 22001, Qatar",
    "destinationPostalCode": "PO Box 22001",
    "destinationCountryCode": "QA",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 19:51 UTC",
    "weight": "1.59 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Cumilla, BD",
        "code": "CML",
        "state": "completed",
        "date": "Oct 02"
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
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Doha, Qatar",
        "code": "DOH",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-33-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Cumilla Express Center, Cumilla, Bangladesh",
        "description": "Consignment accepted at Cumilla Express Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-33-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-33-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Continental Air Logistics (Airbus A350F / Flight BA142)). In active transit toward Dubai Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-33-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Dubai Hub",
        "location": "Dubai Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-33-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Doha",
        "location": "West Bay, Diplomatic Area, Tower 4, Doha, PO Box 22001, Qatar",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-35",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Mymensingh via Dhaka Hub toward Kuwait City, Kuwait.",
    "origin": "Mymensingh, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Dubai Hub",
    "destination": "Kuwait City, Kuwait",
    "destinationAddress": "Al Shuhada St, Al Asimah Complex, Kuwait City, 13008, Kuwait",
    "destinationPostalCode": "13008",
    "destinationCountryCode": "KW",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 20:58 UTC",
    "weight": "2.32 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Mymensingh, BD",
        "code": "MYM",
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
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Kuwait City, Kuwait",
        "code": "KWI",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-34-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Mymensingh Regional Depot, Mymensingh, Bangladesh",
        "description": "Consignment accepted at Mymensingh Regional Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-34-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-34-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (High-Priority Airfreight (Boeing 777F / Flight SV805)). In active transit toward Dubai Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-34-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Dubai Hub",
        "location": "Dubai Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-34-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Kuwait City",
        "location": "Al Shuhada St, Al Asimah Complex, Kuwait City, 13008, Kuwait",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-36",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Barishal via Dhaka Hub toward Muscat, Oman.",
    "origin": "Barishal, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Dubai Hub",
    "destination": "Muscat, Oman",
    "destinationAddress": "Sultan Qaboos Street, Al Khuwair, Muscat, PC 111, Oman",
    "destinationPostalCode": "PC 111",
    "destinationCountryCode": "OM",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 21:05 UTC",
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
        "name": "Dubai Hub",
        "code": "DXB-HUB",
        "state": "upcoming",
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Barishal South Gateway, Barishal, Bangladesh",
        "description": "Consignment accepted at Barishal South Gateway and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-35-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-35-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Dubai Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-35-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Dubai Hub",
        "location": "Dubai Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Rangpur via Dhaka Hub toward Manama, Bahrain.",
    "origin": "Rangpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Priority Air Express (Boeing 747-8F / Flight EK583)",
    "nextHub": "Doha Hub",
    "destination": "Manama, Bahrain",
    "destinationAddress": "Government Avenue, Financial Harbour, Manama 315, Manama 315, Bahrain",
    "destinationPostalCode": "Manama 315",
    "destinationCountryCode": "BH",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 10:12 UTC",
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Rangpur North Transit Facility, Rangpur, Bangladesh",
        "description": "Consignment accepted at Rangpur North Transit Facility and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-36-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-36-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Priority Air Express (Boeing 747-8F / Flight EK583)). In active transit toward Doha Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-36-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Doha Hub",
        "location": "Doha Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-36-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Manama",
        "location": "Government Avenue, Financial Harbour, Manama 315, Manama 315, Bahrain",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-38",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Savar via Dhaka Hub toward Milan, Italy.",
    "origin": "Savar, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Frankfurt Hub",
    "destination": "Milan, Italy",
    "destinationAddress": "Corso Vittorio Emanuele II, 45, 20122 Milano, 20122, Italy",
    "destinationPostalCode": "20122",
    "destinationCountryCode": "IT",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 11:19 UTC",
    "weight": "4.51 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Savar, BD",
        "code": "SVR",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Milan, Italy",
        "code": "MXP",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-37-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Savar EPZ Logistics Hub, Savar, Bangladesh",
        "description": "Consignment accepted at Savar EPZ Logistics Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-37-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-37-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Express Interline Air (Airbus A330-200F / Flight SQ449)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-37-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-37-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Milan",
        "location": "Corso Vittorio Emanuele II, 45, 20122 Milano, 20122, Italy",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-39",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Tongi via Dhaka Hub toward Barcelona, Spain.",
    "origin": "Tongi, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Maritime Corridor",
    "currentMode": "Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E)",
    "nextHub": "Port of Valencia Hub",
    "destination": "Barcelona, Spain",
    "destinationAddress": "Passeig de Gràcia 78, 08008 Barcelona, 08008, Spain",
    "destinationPostalCode": "08008",
    "destinationCountryCode": "ES",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 12:26 UTC",
    "weight": "5.24 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Tongi, BD",
        "code": "TNG",
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
        "name": "Port of Valencia Hub",
        "code": "VLC-SEA",
        "state": "upcoming",
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Barcelona, Spain",
        "code": "BCN-SEA",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-38-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Tongi Freight Sorting Yard, Tongi, Bangladesh",
        "description": "Consignment accepted at Tongi Freight Sorting Yard and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-38-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-38-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Dispatched via Maritime Freight",
        "location": "Chittagong Port International Maritime Terminal",
        "description": "Container sealed and loaded onto Express Sea Corridor (Vessel: CMA CGM Padma / Voy 409E). Moving along trans-oceanic shipping lane.",
        "status": "Current",
        "iconType": "ship"
      },
      {
        "id": "ev-38-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Port of Valencia Hub",
        "location": "Port of Valencia Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-38-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Barcelona",
        "location": "Passeig de Gràcia 78, 08008 Barcelona, 08008, Spain",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-40",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Brahmanbaria via Dhaka Hub toward Munich, Germany.",
    "origin": "Brahmanbaria, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Frankfurt Hub",
    "destination": "Munich, Germany",
    "destinationAddress": "Maximilianstraße 32, 80539 München, 80539, Germany",
    "destinationPostalCode": "80539",
    "destinationCountryCode": "DE",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 13:33 UTC",
    "weight": "5.97 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Brahmanbaria, BD",
        "code": "BRB",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Munich, Germany",
        "code": "MUC",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-39-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Brahmanbaria Courier Station, Brahmanbaria, Bangladesh",
        "description": "Consignment accepted at Brahmanbaria Courier Station and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-39-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-39-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Scheduled Air Courier (Boeing 767-300F / Flight CX668)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-39-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-39-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Munich",
        "location": "Maximilianstraße 32, 80539 München, 80539, Germany",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-41",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Dinajpur via Dhaka Hub toward Manchester, United Kingdom.",
    "origin": "Dinajpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "London Hub",
    "destination": "Manchester, United Kingdom",
    "destinationAddress": "Deansgate 125, Manchester M3 2BY, M3 2BY, United Kingdom",
    "destinationPostalCode": "M3 2BY",
    "destinationCountryCode": "GB",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 14:40 UTC",
    "weight": "6.70 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Dinajpur, BD",
        "code": "DNJ",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Dinajpur Border Transit Hub, Dinajpur, Bangladesh",
        "description": "Consignment accepted at Dinajpur Border Transit Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-40-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-40-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Continental Air Logistics (Airbus A350F / Flight BA142)). In active transit toward London Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-40-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at London Hub",
        "location": "London Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Kushtia via Dhaka Hub toward Birmingham, United Kingdom.",
    "origin": "Kushtia, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "London Hub",
    "destination": "Birmingham, United Kingdom",
    "destinationAddress": "Colmore Row 45, Birmingham B3 2BN, B3 2BN, United Kingdom",
    "destinationPostalCode": "B3 2BN",
    "destinationCountryCode": "GB",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 15:47 UTC",
    "weight": "7.43 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Kushtia, BD",
        "code": "KST",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Kushtia Express Depot, Kushtia, Bangladesh",
        "description": "Consignment accepted at Kushtia Express Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-41-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-41-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (High-Priority Airfreight (Boeing 777F / Flight SV805)). In active transit toward London Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-41-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at London Hub",
        "location": "London Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-41-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Birmingham",
        "location": "Colmore Row 45, Birmingham B3 2BN, B3 2BN, United Kingdom",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-43",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Tangail via Dhaka Hub toward Montreal, Canada.",
    "origin": "Tangail, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Frankfurt Hub",
    "destination": "Montreal, Canada",
    "destinationAddress": "1000 Rue de la Gauchetière O, Montréal, QC H3B 4W5, QC H3B 4W5, Canada",
    "destinationPostalCode": "QC H3B 4W5",
    "destinationCountryCode": "CA",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 16:54 UTC",
    "weight": "8.16 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Tangail, BD",
        "code": "TGL",
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
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Montreal, Canada",
        "code": "YUL",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-42-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Tangail Highway Dispatch Hub, Tangail, Bangladesh",
        "description": "Consignment accepted at Tangail Highway Dispatch Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-42-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-42-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-42-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-42-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Montreal",
        "location": "1000 Rue de la Gauchetière O, Montréal, QC H3B 4W5, QC H3B 4W5, Canada",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-44",
    "carrier": "LMEX International",
    "serviceType": "Trans-Oceanic Express Container Freight",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Jessore via Dhaka Hub toward Houston, USA.",
    "origin": "Jessore, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Maritime Corridor",
    "currentMode": "Trans-Oceanic Freight (Vessel: Evergreen Meghna / Voy 8812)",
    "nextHub": "Port of Colombo Hub",
    "destination": "Houston, USA",
    "destinationAddress": "1000 Louisiana Street, Suite 2200, Houston, TX 77002, TX 77002, USA",
    "destinationPostalCode": "TX 77002",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 17:01 UTC",
    "weight": "8.89 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Jessore, BD",
        "code": "JSR",
        "state": "completed",
        "date": "Oct 02"
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
        "name": "Port of Colombo Hub",
        "code": "CMB-SEA",
        "state": "upcoming",
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Houston, USA",
        "code": "HOU-SEA",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-43-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Jessore Air & Cargo Depot, Jessore, Bangladesh",
        "description": "Consignment accepted at Jessore Air & Cargo Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-43-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-43-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Dispatched via Maritime Freight",
        "location": "Chittagong Port International Maritime Terminal",
        "description": "Container sealed and loaded onto Trans-Oceanic Freight (Vessel: Evergreen Meghna / Voy 8812). Moving along trans-oceanic shipping lane.",
        "status": "Current",
        "iconType": "ship"
      },
      {
        "id": "ev-43-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Port of Colombo Hub",
        "location": "Port of Colombo Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-43-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Houston",
        "location": "1000 Louisiana Street, Suite 2200, Houston, TX 77002, TX 77002, USA",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-45",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Feni via Dhaka Hub toward Miami, USA.",
    "origin": "Feni, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Express Interline Air (Airbus A330-200F / Flight SQ449)",
    "nextHub": "Madrid Hub",
    "destination": "Miami, USA",
    "destinationAddress": "1111 Brickell Avenue, Miami, FL 33131, FL 33131, USA",
    "destinationPostalCode": "FL 33131",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 10, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 18:08 UTC",
    "weight": "9.62 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Feni, BD",
        "code": "FNI",
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
        "name": "Madrid Hub",
        "code": "MAD-HUB",
        "state": "upcoming",
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Miami, USA",
        "code": "MIA",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-44-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Feni Logistics Outpost, Feni, Bangladesh",
        "description": "Consignment accepted at Feni Logistics Outpost and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-44-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-44-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Express Interline Air (Airbus A330-200F / Flight SQ449)). In active transit toward Madrid Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-44-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Madrid Hub",
        "location": "Madrid Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-44-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Miami",
        "location": "1111 Brickell Avenue, Miami, FL 33131, FL 33131, USA",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-46",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Sirajganj via Dhaka Hub toward Seattle, USA.",
    "origin": "Sirajganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Global Cargo Corridor (Boeing 777-200F / Flight TK713)",
    "nextHub": "Tokyo Hub",
    "destination": "Seattle, USA",
    "destinationAddress": "1201 Third Avenue, Seattle, WA 98101, WA 98101, USA",
    "destinationPostalCode": "WA 98101",
    "destinationCountryCode": "US",
    "estimatedDeliveryDate": "October 11, 2026",
    "estimatedNextUpdate": "Within 24 hours",
    "lastUpdated": "4 October 2026, 19:15 UTC",
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
        "date": "Est. 2 Days"
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
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Sirajganj Cargo Bridge Depot, Sirajganj, Bangladesh",
        "description": "Consignment accepted at Sirajganj Cargo Bridge Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-45-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-45-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Global Cargo Corridor (Boeing 777-200F / Flight TK713)). In active transit toward Tokyo Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-45-4",
        "date": "Upcoming",
        "day": "Est. within 2 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Tokyo Hub",
        "location": "Tokyo Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
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
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
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
    "statusDescription": "Your shipment is currently in transit from Jamalpur via Dhaka Hub toward Taipei, Taiwan.",
    "origin": "Jamalpur, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Scheduled Air Courier (Boeing 767-300F / Flight CX668)",
    "nextHub": "Hong Kong Hub",
    "destination": "Taipei, Taiwan",
    "destinationAddress": "Xinyi Road, Section 5, No. 7, Taipei 110, Taipei 110, Taiwan",
    "destinationPostalCode": "Taipei 110",
    "destinationCountryCode": "TW",
    "estimatedDeliveryDate": "October 12, 2026",
    "estimatedNextUpdate": "Within 3 days",
    "lastUpdated": "4 October 2026, 20:22 UTC",
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
        "date": "Est. 3 Days"
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
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Jamalpur Express Center, Jamalpur, Bangladesh",
        "description": "Consignment accepted at Jamalpur Express Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-46-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-46-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Scheduled Air Courier (Boeing 767-300F / Flight CX668)). In active transit toward Hong Kong Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-46-4",
        "date": "Upcoming",
        "day": "Est. within 3 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Hong Kong Hub",
        "location": "Hong Kong Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-46-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Taipei",
        "location": "Xinyi Road, Section 5, No. 7, Taipei 110, Taipei 110, Taiwan",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-48",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Pabna via Dhaka Hub toward Osaka, Japan.",
    "origin": "Pabna, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Continental Air Logistics (Airbus A350F / Flight BA142)",
    "nextHub": "Tokyo Hub",
    "destination": "Osaka, Japan",
    "destinationAddress": "1-1 Chuo-ku, Honmachi, Osaka 541-0041, 541-0041, Japan",
    "destinationPostalCode": "541-0041",
    "destinationCountryCode": "JP",
    "estimatedDeliveryDate": "October 13, 2026",
    "estimatedNextUpdate": "Within 4 days",
    "lastUpdated": "4 October 2026, 21:29 UTC",
    "weight": "11.81 kg",
    "pieces": 3,
    "route": [
      {
        "id": "origin",
        "name": "Pabna, BD",
        "code": "PBN",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 4 Days"
      },
      {
        "id": "dest",
        "name": "Osaka, Japan",
        "code": "KIX",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-47-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Pabna Regional Hub, Pabna, Bangladesh",
        "description": "Consignment accepted at Pabna Regional Hub and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-47-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-47-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Continental Air Logistics (Airbus A350F / Flight BA142)). In active transit toward Tokyo Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-47-4",
        "date": "Upcoming",
        "day": "Est. within 4 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Tokyo Hub",
        "location": "Tokyo Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-47-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Osaka",
        "location": "1-1 Chuo-ku, Honmachi, Osaka 541-0041, 541-0041, Japan",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-49",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Noakhali via Dhaka Hub toward Prague, Czech Republic.",
    "origin": "Noakhali, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "High-Priority Airfreight (Boeing 777F / Flight SV805)",
    "nextHub": "Frankfurt Hub",
    "destination": "Prague, Czech Republic",
    "destinationAddress": "Václavské náměstí 19, 110 00 Nové Město, Prague, 110 00, Czech Republic",
    "destinationPostalCode": "110 00",
    "destinationCountryCode": "CZ",
    "estimatedDeliveryDate": "October 8, 2026",
    "estimatedNextUpdate": "Within 5 days",
    "lastUpdated": "4 October 2026, 10:36 UTC",
    "weight": "12.54 kg",
    "pieces": 1,
    "route": [
      {
        "id": "origin",
        "name": "Noakhali, BD",
        "code": "NKH",
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
        "date": "Est. 5 Days"
      },
      {
        "id": "dest",
        "name": "Prague, Czech Republic",
        "code": "PRG",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-48-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Noakhali Dispatch Center, Noakhali, Bangladesh",
        "description": "Consignment accepted at Noakhali Dispatch Center and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-48-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-48-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (High-Priority Airfreight (Boeing 777F / Flight SV805)). In active transit toward Frankfurt Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-48-4",
        "date": "Upcoming",
        "day": "Est. within 5 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Frankfurt Hub",
        "location": "Frankfurt Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-48-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Prague",
        "location": "Václavské náměstí 19, 110 00 Nové Město, Prague, 110 00, Czech Republic",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
        "iconType": "map-pin"
      }
    ]
  },
  {
    "id": "DUMMY-50",
    "carrier": "LMEX International",
    "serviceType": "Global Express Priority Air Cargo",
    "statusCode": "IN_TRANSIT",
    "statusLabel": "IN TRANSIT",
    "statusDescription": "Your shipment is currently in transit from Manikganj via Dhaka Hub toward Athens, Greece.",
    "origin": "Manikganj, Bangladesh",
    "originCountryCode": "BD",
    "currentLocation": "In Transit — Priority Air Corridor",
    "currentMode": "Air Freight (Boeing 777F / Flight QR639)",
    "nextHub": "Istanbul Hub",
    "destination": "Athens, Greece",
    "destinationAddress": "Syntagma Square 5, 105 63 Athens, 105 63, Greece",
    "destinationPostalCode": "105 63",
    "destinationCountryCode": "GR",
    "estimatedDeliveryDate": "October 9, 2026",
    "estimatedNextUpdate": "Within 6 days",
    "lastUpdated": "4 October 2026, 11:43 UTC",
    "weight": "13.27 kg",
    "pieces": 2,
    "route": [
      {
        "id": "origin",
        "name": "Manikganj, BD",
        "code": "MNK",
        "state": "completed",
        "date": "Oct 02"
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
        "date": "Est. 6 Days"
      },
      {
        "id": "dest",
        "name": "Athens, Greece",
        "code": "ATH",
        "state": "upcoming",
        "date": "Final Dest"
      }
    ],
    "timeline": [
      {
        "id": "ev-49-1",
        "date": "1 October 2026",
        "day": "Thursday",
        "time": "10:15 AM",
        "title": "Shipment Received & Registered",
        "location": "Manikganj Transit Depot, Manikganj, Bangladesh",
        "description": "Consignment accepted at Manikganj Transit Depot and dispatched on regional logistics shuttle.",
        "status": "Completed",
        "iconType": "package-check"
      },
      {
        "id": "ev-49-2",
        "date": "3 October 2026",
        "day": "Saturday",
        "time": "03:40 PM",
        "title": "Processed at Dhaka Central Hub",
        "location": "Dhaka Central International Gateway, Bangladesh",
        "description": "Consignment screened, barcode verified, customs manifest stamped, and secured for export.",
        "status": "Completed",
        "iconType": "warehouse"
      },
      {
        "id": "ev-49-3",
        "date": "4 October 2026",
        "day": "Sunday",
        "time": "08:15 AM",
        "title": "Departed by Air Express",
        "location": "Hazrat Shahjalal International Airport (DAC)",
        "description": "Consignment loaded onto scheduled cargo flight (Air Freight (Boeing 777F / Flight QR639)). In active transit toward Istanbul Hub.",
        "status": "Current",
        "iconType": "plane-departure"
      },
      {
        "id": "ev-49-4",
        "date": "Upcoming",
        "day": "Est. within 6 days",
        "time": "Pending Gateway Arrival",
        "title": "Arrival at Istanbul Hub",
        "location": "Istanbul Hub",
        "description": "Consignment scheduled for automated hub scan, customs processing, and onward connection.",
        "status": "Upcoming",
        "iconType": "building-2"
      },
      {
        "id": "ev-49-5",
        "date": "Upcoming",
        "day": "Final Destination",
        "time": "Doorstep Consignee Delivery",
        "title": "Delivery in Athens",
        "location": "Syntagma Square 5, 105 63 Athens, 105 63, Greece",
        "description": "Final milestone: doorstep delivery and proof of delivery capture at destination address.",
        "status": "Upcoming",
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

/**
 * Fetch shipment details:
 * 1. If assigned tracking number 26LMEXCINT25698714 -> returns the Queens NY parcel.
 * 2. If any other tracking number (changed 1 or 2 digits, etc.) -> selects one of 50 realistic global dummy parcels.
 */
export function getShipmentByTrackingNumber(trackingNumber) {
  if (!trackingNumber) return null;
  const cleanId = trackingNumber.trim().toUpperCase();

  // 1. Exact match for the assigned Queens NY parcel
  if (cleanId === DEMO_TRACKING_NUMBER) {
    return { ...SHIPMENT_DATABASE[DEMO_TRACKING_NUMBER] };
  }

  // 2. Select from the 50 global dummies based on the tracking number hash
  const index = hashString(cleanId) % DUMMY_SHIPMENTS_POOL.length;
  const baseDummy = DUMMY_SHIPMENTS_POOL[index];

  // Dynamically assign the queried tracking number to the selected parcel
  return {
    ...baseDummy,
    trackingNumber: cleanId,
  };
}
