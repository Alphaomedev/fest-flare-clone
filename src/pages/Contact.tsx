
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Submit logic would go here
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about ENIGMA* Fest? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-enigma-purple/20 backdrop-blur-sm rounded-lg p-6 border border-enigma-purple/30"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-enigma-purple/30 border-enigma-purple/40 placeholder-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="bg-enigma-purple/30 border-enigma-purple/40 placeholder-gray-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  className="bg-enigma-purple/30 border-enigma-purple/40 placeholder-gray-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-enigma-purple/30 border-enigma-purple/40 placeholder-gray-500 min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-gradient-to-r from-enigma-pink to-enigma-teal text-white w-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-enigma-purple/20 backdrop-blur-sm rounded-lg p-6 border border-enigma-purple/30 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-enigma-pink mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      SDM College Campus,<br />
                      College Road, Main Street,<br />
                      City, State 123456
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-enigma-pink mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-300">info@enigma.edu</p>
                    <p className="text-gray-300">support@enigma.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-enigma-pink mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 12345 67890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-enigma-purple/20 backdrop-blur-sm rounded-lg p-6 border border-enigma-purple/30">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-enigma-pink transition-colors"
                >
                  <Instagram size={24} className="mr-4" />
                  <span>@enigma_fest</span>
                </a>
                
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-enigma-pink transition-colors"
                >
                  <Facebook size={24} className="mr-4" />
                  <span>ENIGMA* Festival</span>
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-enigma-pink transition-colors"
                >
                  <Twitter size={24} className="mr-4" />
                  <span>@enigma_fest</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Google Map */}
        <div className="mt-12 rounded-lg overflow-hidden h-[400px] border border-enigma-purple/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0088120589837!2d77.5407116!3d12.9702626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEzLjAiTiA3N8KwMzInMjYuNiJF!5e0!3m2!1sen!2sin!4v1599661200000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="College Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
