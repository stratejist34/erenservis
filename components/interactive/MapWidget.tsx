'use client';

// Google Maps embed URL — Eren Servis, Bostancı Oto Sanayi Sitesi
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0!2d29.1093912!3d40.9656025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7b365ec8c55%3A0xa8fb4d7f23fb1929!2sEren%20Volkswagen%20Servis%20Bostanc%C4%B1!5e0!3m2!1str!2str';

export default function MapWidget() {
  return (
    <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-content-border shadow-sm">
      <iframe
        src={MAP_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Eren Servis Konum — Bostancı, İstanbul"
        aria-label="Eren Servis harita konumu"
      />
    </div>
  );
}
