
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
        
        <div className=" items-center ">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-enigma-purple/20 backdrop-blur-sm rounded-lg p-6 border border-enigma-purple/30 mb-6 items-center">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-enigma-pink mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      M.P.E.S's S.D.M College,<br />
                      Prabath Nagar<br />
                      Honnavar, 581334
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-enigma-pink mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-300">visionariesassociationn@gmail.com</p>
                    <p className="text-gray-300">support@enigma.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-enigma-pink mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+91 87228 46337</p>
                    <p className="text-gray-300">+91 734 901 7610</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.465015093172!2d74.4544878751002!3d14.284392886165305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc3b0138d0a78b%3A0x89e19cc3a469b57!2sS.D.M%20(Shri%20Dharmasthala%20Manjunatheshwara)%20College!5e0!3m2!1sen!2sin!4v1748276688026!5m2!1sen!2sin"
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
