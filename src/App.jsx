import React, { useState, useEffect } from "react";
import { Menu, X, Truck, Award, Leaf, Phone } from "lucide-react";
import HeroImg from "./assets/hero.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-rose-50">
                Sree Saraswathy
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-rose-50 hover:text-rose-200 transition-all duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-rose-50">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          } overflow-hidden bg-slate-900/95`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "About", "Products", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-rose-50 hover:text-rose-200 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-rose-50 animate-fade-in">
                Building Dreams,
                <span className="block mt-2 text-rose-200">
                  One Brick at a Time
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-200 opacity-90">
                Premium fly ash bricks and paver blocks for sustainable
                construction
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#products"
                  className="px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Our Products
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-rose-300 text-rose-100 rounded-lg hover:bg-rose-300 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={HeroImg}
                alt="Premium Bricks"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-12 h-12 text-rose-600" />,
                title: "Quick Delivery",
                description:
                  "Fast and reliable delivery to your construction site",
              },
              {
                icon: <Award className="w-12 h-12 text-rose-600" />,
                title: "Premium Quality",
                description: "ISO certified materials with superior strength",
              },
              {
                icon: <Leaf className="w-12 h-12 text-rose-600" />,
                title: "Eco-Friendly",
                description:
                  "Sustainable production with minimal environmental impact",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-slate-100 to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Our Products
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Fly Ash Bricks",
                features: [
                  "High compressive strength",
                  "Uniform size and shape",
                  "Cost-effective",
                  "Environmental friendly",
                ],
                description:
                  "Premium quality fly ash bricks perfect for sustainable construction",
              },
              {
                title: "Paver Blocks",
                features: [
                  "Multiple designs",
                  "Weather resistant",
                  "Easy installation",
                  "Long-lasting",
                ],
                description:
                  "Durable and aesthetic paver blocks for various applications",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src="/api/placeholder/400/250"
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg mb-6 group-hover:scale-105 transition-all duration-500"
                />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                      <span className="w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-slate-100">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg mb-8 text-slate-300">
                Ready to start your construction project? Contact us for quotes
                and inquiries.
              </p>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-4" />
                <span>+91 1234567890</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <form className="space-y-6">
                {[
                  { label: "Name", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "Message", type: "textarea" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-500"
                      />
                    ) : (
                      <input
                        type={field.type}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-500"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Sree Saraswathy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
