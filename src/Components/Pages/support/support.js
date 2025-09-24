import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaHeadset, FaClock, FaUsers, FaShieldAlt, FaPaperPlane } from "react-icons/fa";
import Navbar from "../../NavBar/Navbar";
import "./support.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Thank you, your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-clip bg-gradient-to-br from-blue-100 via-indigo-100 to-violet-100 text-[#0b1220] py-20 md:py-25 border-b border-indigo-200/30">
        <div className="absolute inset-0 bg-indigo-50/40 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none animate-float"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none animate-float delay-300"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-xs mb-3 text-indigo-500 font-medium opacity-0 animate-fade-in-down delay-100">24/7 Support • Always Here</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-1 opacity-0 animate-fade-in-up delay-200">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">Touch</span>
            </h1>
            <p className="text-slate-600 mt-6 mb-10 leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-300">
              Have questions? Need support? Our dedicated team is here to help you with anything you need. Reach out and let's start a conversation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 text-sm mb-12 opacity-0 animate-slide-in-left delay-500">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-100/50 hover:scale-105 transition-transform duration-300">
                <FaHeadset className="text-blue-500" /> Live Chat
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-violet-100/50 hover:scale-105 transition-transform duration-300">
                <FaClock className="text-violet-500" /> Quick Response
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-100/50 hover:scale-105 transition-transform duration-300">
                <FaUsers className="text-blue-400" /> Expert Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-24 bg-white text-[#0b1220] relative">
        <div className="absolute inset-0 bg-blue-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="group rounded-3xl p-8 bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-violet-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center mx-auto mb-4">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold mb-2">Send us a Message</h2>
                  <p className="text-slate-600">We'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-indigo-200/50 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-indigo-200/50 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-indigo-200/50 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Tell us more about how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-indigo-200/50 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none hover:shadow-md"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full font-bold rounded-xl px-6 py-4 text-white shadow-lg bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="group rounded-3xl p-8 bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-violet-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-extrabold mb-6 text-center">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50/80 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">Visit Us</p>
                        <p className="text-slate-600 text-sm">123 PhoneHub Street, Tech City, USA 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-violet-50/50 hover:bg-violet-50/80 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                        <FaPhone className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">Call Us</p>
                        <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-50/50 hover:bg-purple-50/80 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                        <FaEnvelope className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">Email Us</p>
                        <p className="text-slate-600 text-sm">support@phonehub.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="group rounded-3xl p-8 bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-violet-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-3">
                      <FaClock className="text-white" />
                    </div>
                    <h3 className="text-xl font-extrabold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="font-bold text-slate-700">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-bold text-slate-700">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-bold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="group rounded-3xl p-8 bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-violet-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-extrabold mb-6 text-center">Follow Us</h3>
                  <div className="flex justify-center gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-violet-50 text-[#0b1220] relative">
        <div className="absolute inset-0 bg-violet-100/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)]"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <h2 className="text-center font-extrabold mb-16 tracking-tight text-[clamp(1.5rem,1.1rem+2vw,2rem)]">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does shipping take?",
                answer: "We offer free 2-day shipping on all orders over $50. Standard shipping takes 3-5 business days within the US."
              },
              {
                question: "What's your return policy?",
                answer: "We accept returns within 30 days of purchase. Items must be in original condition with all accessories and packaging."
              },
              {
                question: "Do you offer warranty on phones?",
                answer: "Yes! All phones come with manufacturer warranty plus our additional 1-year protection plan for complete peace of mind."
              },
              {
                question: "How can I track my order?",
                answer: "Once your order ships, you'll receive a tracking number via email and SMS to monitor your package's progress in real-time."
              }
            ].map((faq, index) => (
              <div key={index} className="group rounded-3xl p-6 bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-violet-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-3 text-violet-600">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-blue-50 text-[#0b1220] relative">
        <div className="absolute inset-0 bg-indigo-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <h2 className="text-center font-extrabold mb-16 tracking-tight text-[clamp(1.5rem,1.1rem+2vw,2rem)]">Why Choose Our Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="group rounded-3xl p-8 bg-white/80 border border-indigo-100/50 text-center shadow-lg hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-violet-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <FaHeadset className="mx-auto text-4xl text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 text-lg">24/7 Live Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Get instant help anytime, anywhere. Our support team never sleeps.</p>
              </div>
            </div>
            <div className="group rounded-3xl p-8 bg-white/80 border border-violet-100/50 text-center shadow-lg hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <FaUsers className="mx-auto text-4xl text-violet-500 mb-4" />
                <h3 className="font-bold mb-2 text-lg">Expert Team</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our certified technicians know phones inside and out.</p>
              </div>
            </div>
            <div className="group rounded-3xl p-8 bg-white/80 border border-blue-100/50 text-center shadow-lg hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <FaShieldAlt className="mx-auto text-4xl text-blue-400 mb-4" />
                <h3 className="font-bold mb-2 text-lg">Guaranteed Solutions</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We don't stop until your problem is completely resolved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-slate-600 py-8 border-t border-gray-200 text-center relative">
        <div className="absolute inset-0 bg-slate-100/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.03),transparent_60%)]"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <p className="mb-4 text-slate-700">© {new Date().getFullYear()} PhoneHub. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="/privacy" className="text-slate-600 hover:text-violet-600 transition-colors duration-300 hover:underline decoration-violet-600">Privacy</a>
            <a href="/terms" className="text-slate-600 hover:text-violet-600 transition-colors duration-300 hover:underline decoration-violet-600">Terms</a>
            <a href="/support" className="text-slate-600 hover:text-violet-600 transition-colors duration-300 hover:underline decoration-violet-600">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContactUs;
