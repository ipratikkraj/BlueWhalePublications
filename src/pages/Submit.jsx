import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export default function Submit() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bookTitle: '',
    genre: '',
    wordCount: '',
    synopsis: '',
    previouslyPublished: 'no',
    hearAboutUs: '',
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Please select a file smaller than 10MB',
          variant: 'destructive',
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Manuscript Submitted!',
        description: 'We\'ll review your submission and get back to you within 2-3 weeks.',
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        bookTitle: '',
        genre: '',
        wordCount: '',
        synopsis: '',
        previouslyPublished: 'no',
        hearAboutUs: '',
      });
      setFile(null);
      setIsSubmitting(false);
    }, 2000);
  };

  const genres = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Thriller',
    'Biography',
    'Self-Help',
    'History',
    'Poetry',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-[#1a1c1b] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-6 uppercase">
              Submit Your Manuscript
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Ready to publish your book? Fill out the form below and upload your manuscript. 
              We'll review it carefully and get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-[#302f2c] p-8 md:p-12 rounded-lg border border-[#3f4816]/30">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#d9fb06] mb-6 uppercase">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Book Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#d9fb06] mb-6 uppercase">
                  Book Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Book Title *
                    </label>
                    <input
                      type="text"
                      name="bookTitle"
                      value={formData.bookTitle}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-semibold">
                        Genre *
                      </label>
                      <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                      >
                        <option value="">Select a genre</option>
                        {genres.map((genre) => (
                          <option key={genre} value={genre}>
                            {genre}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-semibold">
                        Word Count *
                      </label>
                      <input
                        type="number"
                        name="wordCount"
                        value={formData.wordCount}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 75000"
                        className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Synopsis *
                    </label>
                    <textarea
                      name="synopsis"
                      value={formData.synopsis}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Provide a brief synopsis of your book (300-500 words)"
                      className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-semibold">
                      Has this been previously published? *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="previouslyPublished"
                          value="yes"
                          checked={formData.previouslyPublished === 'yes'}
                          onChange={handleChange}
                          className="w-4 h-4 accent-[#d9fb06]"
                        />
                        <span className="text-white/80">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="previouslyPublished"
                          value="no"
                          checked={formData.previouslyPublished === 'no'}
                          onChange={handleChange}
                          className="w-4 h-4 accent-[#d9fb06]"
                        />
                        <span className="text-white/80">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#d9fb06] mb-6 uppercase">
                  Upload Manuscript
                </h2>
                <div className="border-2 border-dashed border-[#3f4816]/50 rounded-lg p-8 text-center hover:border-[#d9fb06] transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-[#d9fb06] mx-auto mb-4" />
                    {file ? (
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-[#d9fb06]" />
                        <span className="text-white font-semibold">{file.name}</span>
                      </div>
                    ) : (
                      <>
                        <p className="text-white/80 mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-[#888680] text-sm">
                          PDF, DOC, or DOCX (Max 10MB)
                        </p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <label className="block text-white/80 mb-2 text-sm font-semibold">
                  How did you hear about us?
                </label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  className="w-full bg-[#1a1c1b] text-white px-4 py-3 rounded-lg border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Manuscript'}
                </button>
              </div>

              <div className="mt-6 flex items-start space-x-2 text-[#888680] text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  We typically review submissions within 2-3 weeks. You'll receive an email 
                  confirmation once we've received your manuscript.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
