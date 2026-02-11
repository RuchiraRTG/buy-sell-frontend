import React from "react";
import { FaShieldHalved, FaTruckFast, FaHeadset } from "react-icons/fa6";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

// IMAGES
import ip15pro from "../Assets/Img/ip15pro.avif";
import sS24 from "../Assets/Img/s24.jpg";
import O12 from "../Assets/Img/oneplus12.png";

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-clip bg-gradient-to-br from-blue-100 via-indigo-200 to-violet-100 text-[#0b1220] py-24 md:py-32 border-b border-indigo-200/30">
        <div className="absolute inset-0 bg-indigo-50/40 pointer-events-none animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none animate-float"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none animate-float delay-300"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-xs mb-3 text-indigo-500 font-medium opacity-0 animate-fade-in-down delay-100">New arrivals • Top brands</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-1 opacity-0 animate-fade-in-up delay-200">
              The Future is in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">Your Hands</span>
            </h1>
            <p className="text-slate-600 mt-6 mb-10 leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up delay-300">
              Explore the latest smartphones with cutting-edge technology, sleek designs, and unbeatable performance. Experience innovation at its finest.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-scale-in delay-400">
              <a
                href="#featured"
                className="font-bold rounded-2xl px-8 py-4 text-white shadow-xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-sm sm:text-base backdrop-blur-sm hover:scale-105"
              >Shop Now</a>
              <button
                className="font-bold rounded-2xl px-8 py-4 border border-indigo-200/50 text-[#0b1220] bg-white/70 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base hover:scale-105"
              >Deals</button>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 text-sm mb-12 opacity-0 animate-slide-in-left delay-500">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-100/50 hover:scale-105 transition-transform duration-300"><FaShieldHalved className="text-blue-500" /> Secure Checkout</div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-violet-100/50 hover:scale-105 transition-transform duration-300"><FaTruckFast className="text-violet-500" /> Fast Delivery</div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-100/50 hover:scale-105 transition-transform duration-300"><FaHeadset className="text-blue-400" /> 24/7 Support</div>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-base sm:text-lg opacity-0 animate-slide-in-right delay-600">
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <strong className="block text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">50K+</strong>
                <p className="text-slate-600 mt-2">Happy Customers</p>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <strong className="block text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">100+</strong>
                <p className="text-slate-600 mt-2">Phone Models</p>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300">
                <strong className="block text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">24/7</strong>
                <p className="text-slate-600 mt-2">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Shop With Us */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-blue-200 via-indigo-150 to-violet-50 text-[#0b1220] relative" aria-labelledby="brands">
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <h2 id="brands" className="text-[#0b1220] text-center font-extrabold mb-12 tracking-tight text-[clamp(1.5rem,1.1rem+2vw,2rem)] leading-snug">Shop by Brand</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Apple','Samsung','Xiaomi','OnePlus'].map(label => (
              <div key={label} className="font-bold rounded-2xl px-8 py-4 bg-gradient-to-r from-white via-blue-50 to-violet-50 text-slate-700 shadow-lg border border-indigo-100/50 text-sm sm:text-base backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-24 bg-white text-[#0b1220] relative" id="featured">
        <div className="absolute inset-0 bg-blue-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <h2 className="text-center font-extrabold mb-12 tracking-tight text-[clamp(1.5rem,1.1rem+2vw,2rem)] leading-snug">Featured Phones</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6 md:gap-8">
            {[
              {img: ip15pro, title: 'iPhone 15 Pro', price: '$999', badge:'New', badgeAlt:false},
              {img: sS24, title: 'Samsung Galaxy S24', price: '$899', badge:'Hot', badgeAlt:true},
              {img: O12, title: 'OnePlus 12', price: '$799'}
            ].map(card => (
              <article key={card.title} className="group relative rounded-3xl p-6 text-center bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-violet-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {card.badge && (
                  <div
                    className={
                      `absolute top-4 left-4 px-3 py-1.5 text-xs font-extrabold tracking-wide rounded-full z-10 ` +
                      (card.badgeAlt
                        ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-[#3b1d01] shadow-lg'
                        : 'bg-gradient-to-r from-green-400 to-emerald-400 text-green-950 shadow-lg')
                    }
                  >
                    {card.badge}
                  </div>
                )}
                <div className="relative z-10">
                  <img src={card.img} alt={card.title} loading="lazy" className="w-full h-64 object-cover rounded-2xl mb-4 shadow-md" />
                  <h3 className="mt-2 mb-2 font-extrabold text-lg md:text-xl">{card.title}</h3>
                  <p className="font-extrabold text-indigo-600 mb-4 text-xl">{card.price}</p>
                  <button className="w-full text-sm font-bold rounded-2xl px-6 py-3 text-white shadow-lg bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 md:py-24 bg-violet-50 text-[#0b1220] relative">
        <div className="absolute inset-0 bg-violet-100/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)]"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between p-8 rounded-3xl shadow-2xl border border-indigo-100/50 bg-gradient-to-r from-white/90 via-blue-50/70 to-violet-50/90 backdrop-blur-md">
            <div>
              <h2 className="text-center md:text-left font-extrabold mb-3 tracking-tight text-[clamp(1.5rem,1.1rem+2vw,2rem)]">Special Offers</h2>
              <p className="text-slate-600 text-lg">Save up to <strong className="text-violet-600">30%</strong> on flagship phones this week only.</p>
            </div>
            <button className="font-bold rounded-2xl px-8 py-4 text-white shadow-xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl whitespace-nowrap">Shop Deals</button>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 md:py-24 bg-blue-50 text-[#0b1220] relative">
        <div className="absolute inset-0 bg-indigo-50/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="w-[min(1200px,92%)] mx-auto px-4 relative z-10">
          <h2 className="text-center font-extrabold mb-16 tracking-tight text-[clamp(1.5rem,1.1rem+2vw,2rem)]">Why Shop With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="group rounded-3xl p-8 bg-white/80 border border-indigo-100/50 text-center shadow-lg hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-violet-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <FaTruckFast className="mx-auto text-4xl text-blue-500 mb-4" />
                <h3 className="font-bold mb-2 text-lg">Free & Fast Shipping</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Get your order delivered lightning fast at no extra cost.</p>
              </div>
            </div>
            <div className="group rounded-3xl p-8 bg-white/80 border border-violet-100/50 text-center shadow-lg hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <FaShieldHalved className="mx-auto text-4xl text-violet-500 mb-4" />
                <h3 className="font-bold mb-2 text-lg">Secure Payments</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We use industry-leading encryption to protect your data.</p>
              </div>
            </div>
            <div className="group rounded-3xl p-8 bg-white/80 border border-blue-100/50 text-center shadow-lg hover:shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <FaHeadset className="mx-auto text-4xl text-blue-400 mb-4" />
                <h3 className="font-bold mb-2 text-lg">24/7 Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our team is always here to help you with any questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
