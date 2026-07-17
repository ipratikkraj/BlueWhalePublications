import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#1a1c1b] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-6 uppercase">
              Get In Touch
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about publishing? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-[#302f2c] p-8 md:p-12 rounded-lg border border-[#3f4816]/30">
                <h2 className="text-3xl font-black text-[#d9fb06] mb-6 uppercase">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#d9fb06] mb-6 uppercase leading-tight">
                  Contact Information
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Whether you're a prospective author, current client, or just curious about our services, 
                  we'd love to hear from you. Reach out through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all">
                  <div className="w-12 h-12 bg-[#d9fb06] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1a1c1b]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold mb-1">Email</h3>
                    <p className="text-[#888680] break-all text-sm sm:text-base">publicationsbluewhale@gmail.com</p>
                    {/* <p className="text-[#888680]">submissions@bluewhalepublications.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all">
                  <div className="w-12 h-12 bg-[#d9fb06] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1a1c1b]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold mb-1">Phone</h3>
                    <p className="text-[#888680] break-all">+91 8252395376</p>
                    <p className="text-[#888680] text-sm">Mon-Sat: 9am - 9pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all">
                  <div className="w-12 h-12 bg-[#d9fb06] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1a1c1b]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold mb-1">Office</h3>
                    <p className="text-[#888680] break-words">U Block, Sector 24</p>
                    <p className="text-[#888680]">Gurugram, Haryana 122002</p>
                    <p className="text-[#888680]">India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#3f4816] to-[#1a1c1b] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#d9fb06] mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/80">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-[#d9fb06]">9:00 AM - 9:00 PM</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#d9fb06]">10:00 AM - 2:00 PM</span>
                  </div> */}
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-[#888680]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
