import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { PlusCircle, MinusCircle } from "lucide-react";

const Register = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    events: [] as string[],
    teammates: {} as Record<string, string[]>,
    agreeToTerms: false
  });
  
  const events = [
    { id: "hackathon", name: "Hackathon: Tech for Tomorrow", fee: "₹250/team", isTeamEvent: true, maxTeamSize: 4 },
    { id: "photography", name: "Photography Contest", fee: "₹50", isTeamEvent: false },
    { id: "quiz", name: "Quiz Competition", fee: "₹30/team", isTeamEvent: true, maxTeamSize: 2 },
    { id: "canva", name: "Canva Design Challenge", fee: "₹50/team", isTeamEvent: true, maxTeamSize: 2 },
    { id: "games", name: "Game Stalls", fee: "Pay per game", isTeamEvent: false },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean, eventId: string) => {
    const updatedEvents = checked
      ? [...formData.events, eventId]
      : formData.events.filter(id => id !== eventId);
    
    // Initialize teammates array for team events when checked
    const updatedTeammates = { ...formData.teammates };
    
    if (checked) {
      const event = events.find(e => e.id === eventId);
      if (event?.isTeamEvent) {
        updatedTeammates[eventId] = [""];
      }
    } else {
      // Remove teammates data if event is unchecked
      delete updatedTeammates[eventId];
    }
    
    setFormData((prev) => ({
      ...prev,
      events: updatedEvents,
      teammates: updatedTeammates
    }));
  };
  
  const handleTeammateChange = (eventId: string, index: number, value: string) => {
    const updatedTeammates = { ...formData.teammates };
    
    if (!updatedTeammates[eventId]) {
      updatedTeammates[eventId] = [];
    }
    
    updatedTeammates[eventId][index] = value;
    
    setFormData(prev => ({
      ...prev,
      teammates: updatedTeammates
    }));
  };
  
  const addTeammate = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    const updatedTeammates = { ...formData.teammates };
    
    if (!updatedTeammates[eventId]) {
      updatedTeammates[eventId] = [""];
    } else if (updatedTeammates[eventId].length < (event.maxTeamSize - 1)) {
      updatedTeammates[eventId].push("");
    } else {
      toast({
        title: "Maximum team size reached",
        description: `Maximum team size for ${event.name} is ${event.maxTeamSize} (including you)`,
        variant: "destructive"
      });
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      teammates: updatedTeammates
    }));
  };
  
  const removeTeammate = (eventId: string, index: number) => {
    const updatedTeammates = { ...formData.teammates };
    
    if (updatedTeammates[eventId] && updatedTeammates[eventId].length > 1) {
      updatedTeammates[eventId].splice(index, 1);
      
      setFormData(prev => ({
        ...prev,
        teammates: updatedTeammates
      }));
    } else if (updatedTeammates[eventId] && updatedTeammates[eventId].length === 1) {
      // Keep at least one empty input
      updatedTeammates[eventId] = [""];
      
      setFormData(prev => ({
        ...prev,
        teammates: updatedTeammates
      }));
    }
  };
  
  const handleTermsChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };
  
  const nextStep = () => {
    if (step === 1) {
      // Validate first step
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields to continue",
          variant: "destructive"
        });
        return;
      }
    }
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.events.length === 0) {
      toast({
        title: "No Events Selected",
        description: "Please select at least one event to register",
        variant: "destructive"
      });
      return;
    }
    
    // Validate teammates for team events
    const teamEventsWithMissingTeammates = formData.events
      .filter(eventId => {
        const event = events.find(e => e.id === eventId);
        return event?.isTeamEvent && (!formData.teammates[eventId] || formData.teammates[eventId].some(name => !name.trim()));
      })
      .map(eventId => events.find(e => e.id === eventId)?.name);
    
    if (teamEventsWithMissingTeammates.length > 0) {
      toast({
        title: "Missing Teammate Information",
        description: `Please enter names for all teammates in: ${teamEventsWithMissingTeammates.join(', ')}`,
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert registration data
      const { data: registrationData, error: registrationError } = await supabase
        .from('registrations')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college || null,
          department: formData.department || null,
          year: formData.year || null
        })
        .select()
        .single();
        
      if (registrationError) {
        throw new Error(registrationError.message);
      }
      
      // Insert event selections with teammate information
      const eventPromises = formData.events.map(eventId => {
        const teammateNames = formData.teammates[eventId] || [];
        const teammateData = teammateNames.filter(name => name.trim()).join(', ');
        
        return supabase
          .from('registration_events')
          .insert({
            registration_id: registrationData.id,
            event_id: eventId,
            teammates: teammateData || null
          });
      });
      
      await Promise.all(eventPromises);
      
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering for MOONSTONE Fest. Check your email for confirmation.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        department: "",
        year: "",
        events: [],
        teammates: {},
        agreeToTerms: false
      });
      
      // Reset to step 1
      setStep(1);
      
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive"
      });
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Register for MOONSTONE Fest</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to register for our exciting events. You can register for multiple events at once.
          </p>
        </div>
        
        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-moonstone-purple/20 backdrop-blur-sm border border-moonstone-purple/30">
              <CardHeader>
                <CardTitle className="text-white">Registration Form</CardTitle>
                <CardDescription>
                  Step {step} of 3: {step === 1 ? "Personal Information" : step === 2 ? "Select Events" : "Review & Submit"}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="bg-moonstone-purple/30 border-moonstone-purple/40 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="bg-moonstone-purple/30 border-moonstone-purple/40 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="bg-moonstone-purple/30 border-moonstone-purple/40 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="college" className="text-white">College/Institution</Label>
                        <Input
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          placeholder="Enter your college name"
                          className="bg-moonstone-purple/30 border-moonstone-purple/40 text-white placeholder-gray-400"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="department" className="text-white">Department</Label>
                          <Select
                            value={formData.department}
                            onValueChange={(value) => handleSelectChange("department", value)}
                          >
                            <SelectTrigger className="bg-moonstone-purple/30 border-moonstone-purple/40 text-white">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bca">BCA</SelectItem>
                              <SelectItem value="bba">BBA</SelectItem>
                              <SelectItem value="bsc">B.Sc</SelectItem>
                              <SelectItem value="bcom">B.Com</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="year" className="text-white">Year</Label>
                          <Select
                            value={formData.year}
                            onValueChange={(value) => handleSelectChange("year", value)}
                          >
                            <SelectTrigger className="bg-moonstone-purple/30 border-moonstone-purple/40 text-white">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1st Year</SelectItem>
                              <SelectItem value="2">2nd Year</SelectItem>
                              <SelectItem value="3">3rd Year</SelectItem>
                              <SelectItem value="4">4th Year</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Event Selection */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <p className="text-gray-300">Select the events you wish to participate in:</p>
                      
                      <div className="space-y-4">
                        {events.map((event) => (
                          <div key={event.id}>
                            <div className="flex items-start space-x-3 p-3 bg-moonstone-purple/30 rounded-md border border-moonstone-purple/40">
                              <Checkbox 
                                id={event.id} 
                                checked={formData.events.includes(event.id)}
                                onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, event.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <label 
                                  htmlFor={event.id} 
                                  className="text-white font-medium cursor-pointer"
                                >
                                  {event.name}
                                </label>
                                <p className="text-sm text-gray-400">
                                  Registration Fee: {event.fee}
                                  {event.isTeamEvent && " • Team Event"}
                                </p>
                              </div>
                            </div>
                            
                            {/* Teammate inputs for team events */}
                            {event.isTeamEvent && formData.events.includes(event.id) && (
                              <div className="pl-8 mt-2 space-y-2">
                                <p className="text-sm text-moonstone-pink font-medium">Add Teammate Names:</p>
                                
                                {(formData.teammates[event.id] || [""]).map((teammate, index) => (
                                  <div key={`${event.id}-teammate-${index}`} className="flex items-center space-x-2">
                                    <Input
                                      value={teammate}
                                      onChange={(e) => handleTeammateChange(event.id, index, e.target.value)}
                                      placeholder={`Teammate ${index + 1} Name`}
                                      className="bg-moonstone-purple/30 border-moonstone-purple/40 text-white placeholder-gray-400"
                                    />
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => removeTeammate(event.id, index)}
                                    >
                                      <MinusCircle className="h-5 w-5 text-moonstone-pink" />
                                    </Button>
                                  </div>
                                ))}
                                
                                {formData.teammates[event.id] && formData.teammates[event.id].length < (event.maxTeamSize - 1) && (
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => addTeammate(event.id)}
                                    className="flex items-center mt-1 text-sm border-moonstone-pink/50 text-moonstone-pink hover:bg-moonstone-pink/10"
                                  >
                                    <PlusCircle className="h-4 w-4 mr-1" /> Add Teammate
                                  </Button>
                                )}
                                
                                <p className="text-xs text-gray-400">
                                  Team Size: Maximum {event.maxTeamSize} members (including you)
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Review & Submit */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white font-medium mb-2">Personal Information</h3>
                        <div className="bg-moonstone-purple/30 p-3 rounded-md border border-moonstone-purple/40 space-y-2">
                          <p className="text-gray-300"><span className="text-gray-400">Name:</span> {formData.name}</p>
                          <p className="text-gray-300"><span className="text-gray-400">Email:</span> {formData.email}</p>
                          <p className="text-gray-300"><span className="text-gray-400">Phone:</span> {formData.phone}</p>
                          <p className="text-gray-300"><span className="text-gray-400">College:</span> {formData.college || "Not provided"}</p>
                          <p className="text-gray-300">
                            <span className="text-gray-400">Department:</span> {formData.department ? formData.department.toUpperCase() : "Not provided"}
                          </p>
                          <p className="text-gray-300">
                            <span className="text-gray-400">Year:</span> {formData.year ? `${formData.year}${formData.year === "1" ? "st" : formData.year === "2" ? "nd" : formData.year === "3" ? "rd" : "th"} Year` : "Not provided"}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-medium mb-2">Selected Events</h3>
                        {formData.events.length > 0 ? (
                          <div className="bg-moonstone-purple/30 p-3 rounded-md border border-moonstone-purple/40 divide-y divide-moonstone-purple/30">
                            {formData.events.map((eventId) => {
                              const event = events.find(e => e.id === eventId);
                              return (
                                <div key={eventId} className="py-2 first:pt-0 last:pb-0">
                                  <p className="text-gray-300 font-medium">{event?.name}</p>
                                  
                                  {event?.isTeamEvent && formData.teammates[eventId]?.filter(name => name.trim()).length > 0 && (
                                    <div className="mt-1">
                                      <p className="text-sm text-gray-400">Teammates:</p>
                                      <ul className="list-disc list-inside pl-2">
                                        {formData.teammates[eventId]
                                          .filter(name => name.trim())
                                          .map((name, idx) => (
                                            <li key={`review-${eventId}-tm-${idx}`} className="text-sm text-gray-300">
                                              {name}
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <p className="text-red-400">No events selected. Please go back and select at least one event.</p>
                        )}
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="terms" 
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleTermsChange(checked as boolean)}
                        />
                        <label 
                          htmlFor="terms" 
                          className="text-gray-300 text-sm cursor-pointer"
                        >
                          I agree to the <span className="text-moonstone-pink">Terms and Conditions</span> and <span className="text-moonstone-pink">Privacy Policy</span> of MOONSTONE Fest. I confirm that all information provided is accurate.
                        </label>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {step > 1 && (
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="border-moonstone-pink/50 text-white hover:bg-moonstone-pink/10"
                      >
                        Previous
                      </Button>
                    )}
                    
                    {step < 3 ? (
                      <Button 
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white ml-auto"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-moonstone-pink to-moonstone-teal text-white ml-auto"
                        disabled={formData.events.length === 0 || !formData.agreeToTerms || isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Registration"}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Important Notes */}
          <div className="mt-8 bg-moonstone-purple/20 backdrop-blur-sm p-4 rounded-lg border border-moonstone-purple/30">
            <h3 className="text-lg font-medium text-white mb-2">Important Notes:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>Registration fees will be collected at the venue on the day of the event.</li>
              <li>Please bring your college ID card for verification.</li>
              <li>For team events, all team members' details are required during registration.</li>
              <li>A confirmation email will be sent to your registered email address.</li>
              <li>For any queries, contact us at <span className="text-moonstone-pink">info@moonstone.edu</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
