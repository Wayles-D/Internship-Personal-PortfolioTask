import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { Loader2 } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xqavnlaz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="bg-black text-white px-4 lg:px-20 py-10 lg:py-20 mt-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
        {/* Left Column - Contact Info */}
        <div>
          <h2 className="bebas-neue text-5xl lg:text-7xl mb-6 uppercase">LET'S CONNECT</h2>
          
          <div className="manrope text-[#C7C7C7] text-base lg:text-lg mb-8 space-y-2">
            <p>
              Say hello at <a href="mailto:robertgarcia@gmail.com" className="text-white underline hover:text-[#D3E97A] transition-colors">robertgarcia@gmail.com</a>
            </p>
            <p>
              For more info, here's my <a href="#" className="text-white underline hover:text-[#D3E97A] transition-colors">resume</a>
            </p>
          </div>

          <div className="flex gap-4 mb-10 lg:mb-0">
            <a href="#" className="text-[#D3E97A] hover:text-white transition-colors">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#D3E97A] hover:text-white transition-colors">
              <BsGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#D3E97A] hover:text-white transition-colors">
              <BsTwitterX className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#D3E97A] hover:text-white transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div>
          {status === "success" ? (
            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-center h-full flex flex-col justify-center items-center">
              <h3 className="bebas-neue text-4xl text-[#D3E97A] mb-4">MESSAGE SENT!</h3>
              <p className="manrope text-[#C7C7C7] text-lg">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-white underline hover:text-[#D3E97A] transition-colors manrope"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block manrope text-[#C7C7C7] mb-2 text-sm">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#1A1A1A] border ${errors.name ? 'border-red-500' : 'border-transparent'} rounded-lg p-4 text-white focus:ring-1 focus:ring-[#D3E97A] outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1 manrope">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block manrope text-[#C7C7C7] mb-2 text-sm">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#1A1A1A] border ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-lg p-4 text-white focus:ring-1 focus:ring-[#D3E97A] outline-none transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1 manrope">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block manrope text-[#C7C7C7] mb-2 text-sm">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-[#1A1A1A] border ${errors.subject ? 'border-red-500' : 'border-transparent'} rounded-lg p-4 text-white focus:ring-1 focus:ring-[#D3E97A] outline-none transition-colors`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1 manrope">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block manrope text-[#C7C7C7] mb-2 text-sm">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full bg-[#1A1A1A] border ${errors.message ? 'border-red-500' : 'border-transparent'} rounded-lg p-4 text-white focus:ring-1 focus:ring-[#D3E97A] outline-none resize-none transition-colors`}
                  placeholder="Hello, I'm interested in..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1 manrope">{errors.message}</p>}
              </div>

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg manrope text-sm">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="bg-[#D3E97A] text-black font-bold py-3 px-8 rounded-full hover:bg-[#c1d865] transition-colors uppercase manrope text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    SENDING...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-20 text-[#C7C7C7] manrope text-sm">
        © {new Date().getFullYear()} Robert Garcia
      </div>
    </footer>
  );
};

export default Footer;
