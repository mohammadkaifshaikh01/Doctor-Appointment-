import { assets } from "../assets/assets";
export default function AboutPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r  text-black py-16">
        <div className="mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-500">Online appointment scheduling for patients</h1>
            <p className="text-lg md:text-xl mb-6">
              Our doctor appointment system streamlines the way you connect with healthcare professionals, making it
              easier than ever to prioritize your health.
            </p>
            <button className="bg-blue-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-300 transition duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={assets.about_image}
              alt="Doctor appointment system"
              className="rounded-lg shadow w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Contact Section */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <FeatureCard icon="💙" title="Customer Focus" description="We prioritize our users, ensuring seamless healthcare access." className="w-72 h-64 bg-blue-100 p-6 rounded-lg shadow-lg" />
            <FeatureCard icon="🚀" title="Continuous Improvement" description="We innovate and refine our platform for better service." className="w-80 h-72 bg-green-100 p-6 rounded-lg shadow-lg" />
            <FeatureCard icon="🤝" title="Customer Service" description="We are dedicated to providing excellent support and care." className="w-72 h-64 bg-yellow-100 p-6 rounded-lg shadow-lg" />
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


