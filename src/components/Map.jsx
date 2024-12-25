import { contactInfo } from "../data/data";

export const Map = () => (
    <section className="h-96 relative">
      <div className="absolute inset-0 bg-gray-900/20">
        <iframe
          src={contactInfo.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter brightness-90"
          title="Radical Skate School Location"
        ></iframe>
      </div>
    </section>
  );