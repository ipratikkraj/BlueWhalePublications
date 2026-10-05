import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Sparkles } from 'lucide-react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subjectText = formData.subject ? `[Website Message] ${formData.subject}` : 'Website Message - Bluewhale Publications';
    
    const bodyText = 
      `INQUIRY DETAILS:\n` +
      `----------------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `MESSAGE:\n` +
      `----------------------------------------\n` +
      `${formData.message}`;

    const mailtoUrl = `mailto:publicationsbluewhale@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    // Open mail app to compose email
    window.location.href = mailtoUrl;

    toast({
      title: 'Opening Mail Composer...',
      description: "Your message template has been created. Click send in your mail app to deliver your message.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#EEF5FF] text-[#0B2E73] pt-24">
      {/* Hero Section */}
      <section className="relative pt-6 pb-10 md:py-20 bg-gradient-to-b from-[#0B2E73] to-[#123B8F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0756D9] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#DCE9FF] text-xs md:text-sm font-extrabold uppercase tracking-widest bg-[#0756D9]/30 px-4 py-1.5 rounded-full mb-3 md:mb-4 inline-block">
              WE ARE HERE FOR YOU
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">
              Get In Touch
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-[#DCE9FF] leading-relaxed max-w-2xl mx-auto">
              Have questions about manuscript submission, editing, or publishing packages? We're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-[#DCE9FF]">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B2E73] mb-4 sm:mb-6 uppercase tracking-tight">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#0B2E73] mb-2 text-xs font-bold uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#EEF5FF] text-[#0B2E73] px-4 py-3.5 rounded-xl border border-[#DCE9FF] focus:border-[#0756D9] focus:bg-white focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0B2E73] mb-2 text-xs font-bold uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@example.com"
                      className="w-full bg-[#EEF5FF] text-[#0B2E73] px-4 py-3.5 rounded-xl border border-[#DCE9FF] focus:border-[#0756D9] focus:bg-white focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0B2E73] mb-2 text-xs font-bold uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Manuscript Submission / General Enquiry"
                      className="w-full bg-[#EEF5FF] text-[#0B2E73] px-4 py-3.5 rounded-xl border border-[#DCE9FF] focus:border-[#0756D9] focus:bg-white focus:outline-none transition-colors text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0B2E73] mb-2 text-xs font-bold uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your book draft or project..."
                      className="w-full bg-[#EEF5FF] text-[#0B2E73] px-4 py-3.5 rounded-xl border border-[#DCE9FF] focus:border-[#0756D9] focus:bg-white focus:outline-none transition-colors resize-none text-sm font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0756D9] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#123B8F] transition-all shadow-lg hover:shadow-[#0756D9]/40 disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <span className="text-[#0756D9] text-xs font-bold uppercase tracking-widest bg-[#DCE9FF] px-3.5 py-1 rounded-md mb-3 inline-block">
                  DIRECT REACH
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2E73] mb-4 uppercase tracking-tight">
                  Contact Information
                </h2>
                <p className="text-[#123B8F]/80 leading-relaxed text-base">
                  Whether you're a prospective author, current writer, or literary partner, we'd love to connect. Reach out through any of our support channels below.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:publicationsbluewhale@gmail.com"
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-[#DCE9FF] shadow-sm hover:shadow-md hover:border-[#0756D9]/50 transition-all group block"
                >
                  <div className="w-12 h-12 bg-[#0756D9] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-[#0756D9]/30 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#0B2E73] font-bold text-base mb-1 group-hover:text-[#0756D9] transition-colors">Email Support</h3>
                    <p className="text-[#0756D9] font-medium break-all text-sm group-hover:underline">publicationsbluewhale@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918252395376"
                  className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-[#DCE9FF] shadow-sm hover:shadow-md hover:border-[#0756D9]/50 transition-all group block"
                >
                  <div className="w-12 h-12 bg-[#0756D9] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-[#0756D9]/30 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#0B2E73] font-bold text-base mb-1 group-hover:text-[#0756D9] transition-colors">Phone / WhatsApp</h3>
                    <p className="text-[#0756D9] font-bold text-sm group-hover:underline">+91 8252395376</p>
                    <p className="text-[#123B8F]/70 text-xs mt-0.5">Mon-Sat: 9:00 AM - 9:00 PM IST</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-[#DCE9FF] shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#0756D9] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-[#0756D9]/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#0B2E73] font-bold text-base mb-1">Office Address</h3>
                    <p className="text-[#123B8F]/80 text-sm font-medium">
                      U Block, Sector 24, Gurugram, Haryana 122002, India
                    </p>
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
