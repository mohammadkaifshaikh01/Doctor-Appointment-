import { assets } from "../assets/assets";

export default function ContactPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className=" text-black py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-600">Revolutionizing Healthcare Access</h1>
            <p className="text-lg md:text-xl mb-6">
            24/7 appointment booking, instant notifications, feedback tools, and telemedicine platforms for higher patient engagement.
            </p>
            <button className="bg-blue-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-100 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={assets.contact_image}
              alt="Doctor appointment system"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-10">
        <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">DocPulse Offers All Possible Medical Solution & Even More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon="📅" title="Easy Scheduling" description="Book appointments with just a few clicks, anytime, anywhere." />
            <FeatureCard icon="⏰" title="Time-Saving" description="Reduce wait times and manage your healthcare efficiently." />
            <FeatureCard icon="👥" title="Wide Network" description="Access a broad network of healthcare professionals." />
            <FeatureCard icon="💬" title="Instant Communication" description="Stay connected with your healthcare providers through our platform." />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <ContactItem icon="📞" text="+1 (123) 456-7890" />
            <ContactItem icon="✉️" text="info@doctorapp.com" />
          </div>
        </div>
      </section>

          {/* Contact Form */}
          <div className="mt-24 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}



function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-700 text-lg">
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </div>
  );
}