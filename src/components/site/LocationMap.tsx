/**
 * LocationMap — Interactive Leaflet map with OpenStreetMap tiles.
 *
 * To update the location when the exact office address is available:
 *   1. Update `OFFICE_LOCATION.lat` and `OFFICE_LOCATION.lng`
 *   2. Update `OFFICE_LOCATION.label` for the floating badge
 *   3. Update `OFFICE_LOCATION.zoom` if needed (14-16 is ideal for a street address)
 */

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

// ─── CONFIG — change this when the exact office address is known ──────────────
const OFFICE_LOCATION = {
  lat: 26.4640,      // 24/37 Gopal Bhavan, Birhana Road, Kanpur 208001
  lng: 80.3484,
  zoom: 17,
  label: "Birhana Road, Kanpur",
  markerTitle: "Laxmi Essential Oils",
};
// ─────────────────────────────────────────────────────────────────────────────

export function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    let isMounted = true;

    (async () => {
      const L = (await import("leaflet")).default;

      // Import Leaflet CSS dynamically
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (!containerRef.current || mapRef.current || !isMounted) return;

      // Fix default marker icon path issue with bundlers
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(containerRef.current, {
        center: [OFFICE_LOCATION.lat, OFFICE_LOCATION.lng],
        zoom: OFFICE_LOCATION.zoom,
        zoomControl: true,
        scrollWheelZoom: false, // better UX on content pages
        attributionControl: true,
      });

      // OpenStreetMap tiles — no API key required
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Custom branded marker using a div icon
      const markerIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            width: 36px; height: 36px;
            background: #1a4731;
            border: 3px solid #fff;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 4px 14px rgba(0,0,0,0.25);
            display: flex; align-items: center; justify-content: center;
          ">
            <div style="
              width: 10px; height: 10px;
              background: #fff;
              border-radius: 50%;
              transform: rotate(45deg);
            "></div>
          </div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -40],
      });

      const marker = L.marker([OFFICE_LOCATION.lat, OFFICE_LOCATION.lng], {
        icon: markerIcon,
        title: OFFICE_LOCATION.markerTitle,
      }).addTo(map);

      marker.bindPopup(
        `<div style="font-family:system-ui,sans-serif; padding:4px 2px; min-width:180px">
           <div style="font-weight:700; font-size:14px; color:#1a4731; margin-bottom:4px">
             ${OFFICE_LOCATION.markerTitle}
           </div>
           <div style="font-size:12px; color:#555; line-height:1.5">24/37, Gopal Bhavan,<br/>Birhana Road, Kanpur 208001</div>
         </div>`,
        { closeButton: false, offset: [0, -10] }
      );

      mapRef.current = map;
    })();

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        borderRadius: "16px",
        border: "3.5px solid #1a4731",
        boxShadow: "0 4px 24px rgba(26,71,49,0.12)",
        aspectRatio: "21/8",
        minHeight: "260px",
      }}
    >
      {/* Floating location badge */}
      <div
        className="absolute top-4 left-4 z-[1000] flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold text-white shadow-md"
        style={{ background: "#1a4731" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 shrink-0 opacity-90"
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.043-4.375 3.043-6.83C19.33 6.747 16.15 4 12 4S4.67 6.747 4.67 12.512c0 2.455 1.1 4.75 3.043 6.83a19.58 19.58 0 002.684 2.282 16.975 16.975 0 001.143.742zM12 15a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
        {OFFICE_LOCATION.label}
      </div>

      {/* Map container */}
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ minHeight: "260px" }}
        aria-label="Interactive map showing Kanpur, Uttar Pradesh"
      />
    </div>
  );
}
