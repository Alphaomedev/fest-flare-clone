
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About ENIGMA*</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn more about our annual college festival, its history, and its mission.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl shadow-enigma-purple/20"
          >
            <img 
              src="https://ik.imagekit.io/i3rmsw3yv/WhatsApp%20Image%202025-05-28%20at%2011.55.13%20AM.jpeg?updatedAt=1748413805039" 
              alt="College Fest" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="text-gray-300 space-y-4">
              <p>
              Nestled in the heart of the coastal region, MPE’s SDM College is known for its commitment to academic excellence, holistic development, and a vibrant campus life. With a legacy of nurturing young minds and fostering innovation, the college offers a dynamic learning environment that empowers students to explore, create, and lead.

Within this ecosystem of growth and opportunity, the Department of BCA has consistently taken the lead in organizing technical and cultural events that go beyond textbooks and classrooms. One such flagship event is our inter-collegiate fest — ENIGMA*.
              </p>
              <p>
                ENIGMA* began as a modest departmental event in 2018 and has since grown into one of the most anticipated inter-collegiate festivals in the region. What started as a single-day affair with just a few competitions has transformed into a vibrant two-day celebration of talent, innovation, and creativity.
              </p>
              <p>
              The name ENIGMA* reflects our core belief — that every student carries within them untapped potential, much like the enigma gem, which reveals its brilliance under the right light.  
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Mission and Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-enigma-purple/20 backdrop-blur-sm rounded-lg p-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-enigma-pink mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To create a platform that enables students to showcase their talents, foster innovation, and build lasting connections. ENIGMA* aims to provide opportunities for students to step outside their academic comfort zones and explore their potential in various fields.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-enigma-teal mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be recognized as the premier college festival that nurtures creativity, promotes inclusivity, and inspires the next generation of leaders. We envision ENIGMA* as a celebration that transcends competitive boundaries and creates a community of passionate individuals.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* What Makes Us Special */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Makes ENIGMA* Special</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Diverse Events",
                description: "From technical competitions to artistic showcases, ENIGMA* offers a wide spectrum of events catering to different interests and skills."
              },
              {
                title: "Inclusive Participation",
                description: "While some events are exclusively for our students, many are open to participants from other colleges, fostering a broader community spirit."
              },
              {
                title: "Learning Opportunities",
                description: "Beyond competitions, ENIGMA* creates spaces for learning through workshops, guest lectures, and interactive sessions."
              },
              {
                title: "Professional Exposure",
                description: "Students gain real-world experience in event management, marketing, design, and more by being part of the organizing team."
              },
              {
                title: "Networking Platform",
                description: "The festival brings together students, faculty, alumni, and industry professionals, creating valuable networking opportunities."
              },
              {
                title: "Celebration of Creativity",
                description: "At its core, ENIGMA* celebrates the creative spirit that drives innovation and positive change in society."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-enigma-purple/30 backdrop-blur-sm rounded-lg p-6 border border-enigma-purple/40"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
            ENIGMA* is organized by a dedicated team of students and faculty members who work tirelessly to create an unforgettable experience. From event planning to logistics, our team handles every aspect of the festival with passion and precision.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
            {[
              {
                name: "Prof. Vandana Bhat",
                role: "HOD of BCA Dept",
                image: "https://ik.imagekit.io/i3rmsw3yv/vandana-maam.jpeg?updatedAt=1748272320687"
              },
              {
                name: "Prof. Prasanna Shet",
                role: "Events Manager",
                image: "https://ik.imagekit.io/i3rmsw3yv/prasana-sir.jpeg?updatedAt=1748272320594"
              },
              {
                name: "Prof Subhramanya Bhat",
                role: "Faculty Coordinator",
                image: "https://ik.imagekit.io/i3rmsw3yv/subbu-sir.jpeg?updatedAt=1748272320598"
              },
              {
                name: "Ravi Devadega",
                role: "Student Coordinator",
                image: "https://ik.imagekit.io/i3rmsw3yv/ravi.jpeg?updatedAt=1748272321038"
              },
              {
                name: "Abhishek Naik",
                role: "Technical Head",
                image: "https://ik.imagekit.io/i3rmsw3yv/WhatsApp%20Image%202025-05-26%20at%208.31.38%20PM.jpeg?updatedAt=1748272321357"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="text-center event-card rounded-lg overflow-hidden p-4 flex flex-col justify-items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-enigma-pink">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <p className="text-enigma-pink">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
