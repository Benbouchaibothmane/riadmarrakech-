import React, { useState } from 'react';
import { PalmtreeIcon, Users, Star, Mail, Phone, MapPin, Instagram, Facebook, X, Calendar, UserPlus, ChevronLeft, ChevronRight } from 'lucide-react';

// ... (previous imports and state management code remains the same)

function App() {
  // ... (previous state and handlers remain the same)

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Enhanced Hero Section */}
      <header className="relative">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 h-[85vh]">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80"
                alt="Riad Main"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
                alt="Riad Detail 1"
                className="w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80"
                alt="Riad Detail 2"
                className="w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1520821147572-e80d5dab21cc?auto=format&fit=crop&q=80"
                alt="Riad Detail 3"
                className="w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
                alt="Riad Detail 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-12 py-8">
          <div className="text-white flex items-center gap-3">
            <PalmtreeIcon className="h-10 w-10" />
            <span className="text-3xl font-serif">Le Marrakech Riad</span>
          </div>
          <div className="flex items-center gap-12 text-white text-lg">
            <a href="#suites" className="hover:text-gold-400 transition-colors">Suites</a>
            <a href="#team" className="hover:text-gold-400 transition-colors">Our Team</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
            <button 
              onClick={handleBookNow}
              className="bg-[#c8a97e] px-8 py-3 rounded-full hover:bg-[#b69162] transition-colors"
            >
              Book Now
            </button>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col justify-center h-[85vh] pl-12 max-w-2xl">
          <div className="bg-black bg-opacity-20 backdrop-blur-sm p-12 rounded-lg">
            <h1 className="text-7xl font-serif mb-6 text-white leading-tight">
              Experience Timeless <br />Moroccan Luxury
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed">
              Discover an oasis of tranquility in the heart of the ancient Medina, 
              where traditional Moroccan hospitality meets contemporary luxury.
            </p>
            <div className="flex gap-6">
              <button 
                onClick={handleBookNow}
                className="bg-[#c8a97e] text-white px-10 py-4 rounded-full hover:bg-[#b69162] transition-colors text-lg"
              >
                Book Your Stay
              </button>
              <a 
                href="#suites"
                className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors text-lg"
              >
                Explore Suites
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the components remain the same */}
      {/* Booking Modal */}
      {isBookingOpen && (
        // ... (booking modal code remains the same)
      )}

      {/* Other sections remain the same */}
    </div>
  );
}

export default App;