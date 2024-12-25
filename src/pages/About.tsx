import { Building, Users, Handshake, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-secondary text-lg">
              Empowering your financial journey with innovative tools and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-surface p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-accent mr-3" />
                <h2 className="text-xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-secondary">
                We're dedicated to making financial management accessible and efficient for everyone. Our platform combines cutting-edge technology with user-friendly design to help you achieve your financial goals.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-accent mr-3" />
                <h2 className="text-xl font-semibold">Our Team</h2>
              </div>
              <p className="text-secondary">
                Our diverse team of financial experts, developers, and designers work together to create innovative solutions that simplify personal finance management and empower users to make informed decisions.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <Handshake className="w-6 h-6 text-accent mr-3" />
                <h2 className="text-xl font-semibold">Our Values</h2>
              </div>
              <p className="text-secondary">
                Trust, transparency, and user privacy are at the core of everything we do. We believe in providing secure, reliable tools that help our users navigate their financial journey with confidence.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-accent mr-3" />
                <h2 className="text-xl font-semibold">Our Approach</h2>
              </div>
              <p className="text-secondary">
                We combine advanced technology with intuitive design to create tools that make financial management straightforward and effective. Our platform is continuously evolving based on user feedback and industry best practices.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Us on Your Financial Journey</h2>
            <p className="text-secondary mb-8">
              Whether you're just starting to manage your finances or looking for advanced tools to optimize your portfolio, we're here to support you every step of the way.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;