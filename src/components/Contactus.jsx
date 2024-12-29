import { MapPin, MailIcon, Phone, Instagram } from "lucide-react";
import { contactInfo } from "../data/data";

export const Contact = () => (
  <section className="py-20 bg-gray-800 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center font">
        Get In Touch
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
          <div className="space-y-4">
            <div className="flex items-center text-yellow-500">
              <MapPin className="w-6 h-6 mr-4 text-yellow-500" />
              <p>{contactInfo.address}</p>
            </div>
            <div className="flex items-center text-yellow-500">
              <MailIcon className="w-6 h-6 mr-4 text-yellow-500" />
              <p>{contactInfo.email}</p>
            </div>
            <div className="flex items-center text-yellow-500">
              <Phone className="w-6 h-6 mr-4 text-yellow-500" />
              <p>{contactInfo.phone}</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              className="flex text-yellow-500"
            >
              <Instagram className="w-6 h-6 mr-4 cursor-pointer" />
              <span>{contactInfo.instagram}</span>
            </a>
          </div>
        </div>
        <div>
          <form
            className="space-y-4"
            target="_blank"
            action="https://formsubmit.co/jhontho55@gmail.com"
            method="POST"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full p-3 bg-gray-900 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-3 bg-gray-900 rounded-lg"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="4"
              required
              className="w-full p-3 bg-gray-900 rounded-lg"
            ></textarea>{" "}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-600 text-black py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
