"use client";

/*
 * EmailJS Setup Instructions:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}, {{to_email}}
 * 4. Replace the serviceId, templateId, and publicKey below with your EmailJS credentials
 * 5. For production, consider using environment variables
 */

import { useState } from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Mail, Github, Linkedin, Copy, Check, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

const email = "gowthamnpradeep1@gmail.com";
const phone = "+91 9526741679";
const location = "Ernakulam, Kerala, India";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - set these in your environment variables or replace with your credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_zp1l18v';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_pt1ir55';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'VIy3sGx9n8pD4nsei';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: email, // Your email address
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      // You could add error state here
      alert('Failed to send message. Please try again or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedGroup
          preset="slide"
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Let's Connect
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 dark:text-teal-300">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate? Let's discuss opportunities and bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 sm:py-3 rounded-xl border-2 text-base sm:text-sm ${
                        errors.name ? "border-destructive bg-destructive/5" : "border-input bg-background"
                      } focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-destructive font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 sm:py-3 rounded-xl border-2 text-base sm:text-sm ${
                        errors.email ? "border-destructive bg-destructive/5" : "border-input bg-background"
                      } focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-destructive font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-4 sm:py-3 rounded-xl border-2 text-base sm:text-sm ${
                        errors.message ? "border-destructive bg-destructive/5" : "border-input bg-background"
                      } focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-300 resize-none`}
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-destructive font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-base sm:text-base transition-all duration-300 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-800 dark:text-slate-200">
                  Contact Information
                </h3>

                <div className="bg-card border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <div className="flex items-center gap-3">
                        <a
                          href={`mailto:${email}`}
                          className="font-semibold hover:text-blue-600 transition-colors"
                        >
                          {email}
                        </a>
                        <button
                          onClick={copyEmail}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          aria-label="Copy email"
                        >
                          {copied ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="font-semibold hover:text-green-600 transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold">{location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">
                  Connect With Me
                </h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 bg-card border hover:shadow-xl rounded-2xl transition-all duration-300 hover:scale-110 group"
                  >
                    <Github size={24} className="sm:w-7 sm:h-7 group-hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 bg-card border hover:shadow-xl rounded-2xl transition-all duration-300 hover:scale-110 group"
                  >
                    <Linkedin size={24} className="sm:w-7 sm:h-7 group-hover:text-blue-600 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in-0 zoom-in-95 duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for reaching out. I've received your message and will get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}