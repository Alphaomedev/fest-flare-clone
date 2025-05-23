
import { EventProps } from "@/components/EventCard";

// Combined events data
const day1Events: EventProps[] = [
  {
    id: "ribbon-cutting",
    title: "Ribbon Cutting Ceremony",
    time: "9:30 AM",
    type: "Formal",
    openToAll: true,
    icon: "ribbon",
    description: "The official inauguration ceremony of the fest.",
    detailedDescription: "Join us for the grand opening of ENIGMA* Fest 2025! The event will be inaugurated by our college principal and distinguished guests. This marks the beginning of two days filled with exciting activities, competitions, and fun."
  },
  {
    id: "talents-day",
    title: "Talents Day",
    time: "10:00 AM – 11:30 AM",
    mode: "Offline",
    team: "Solo/Group",
    openToAll: false,
    icon: "microphone",
    description: "BCA Students Only - Showcase your talent through dance, music, or any performing art.",
    detailedDescription: "Exclusive for BCA students! This is your opportunity to showcase your talents on stage. Whether you're a singer, dancer, musician, or have any other performing art talent, this is your time to shine. Each performer gets one event slot. Pre-registration required."
  },
  {
    id: "video-shoot",
    title: "Video Shoot Competition",
    time: "10:00 AM – 2:00 PM",
    mode: "Offline",
    team: "2 members",
    regFee: "₹50/team",
    prize: "₹500",
    openToAll: false,
    icon: "video",
    description: "SDM Students Only - Create a short video showcasing SDM college.",
    detailedDescription: "Exclusive for SDM students! Put your videography skills to the test by creating a short video that showcases our beloved SDM College. Teams of 2 members will have 4 hours to shoot and edit a video not exceeding 3 minutes in duration. The winning video will be featured on the college's official social media channels."
  },
  {
    id: "craft-competition",
    title: "Craft Competition",
    time: "10:45 AM – 1:15 PM",
    mode: "Offline",
    team: "Solo or Team",
    regFee: "₹30",
    prize: "Gift hamper",
    openToAll: false,
    icon: "scissors",
    description: "SDM Students Only - Create art using recycled materials or festive decorations.",
    detailedDescription: "Exclusive for SDM students! Unleash your creativity in this craft competition where you can choose between creating art using recycled materials or making festive decorations. Participants can work individually or in teams. All materials must be brought by participants. The most creative piece wins an exciting gift hamper!"
  },
  {
    id: "hackathon-day1",
    title: "Hackathon: Tech for Tomorrow",
    time: "12:00 AM (Online via Google Meet)",
    mode: "Online & Offline",
    team: "1-4 members",
    regFee: "₹250/team",
    prize: "₹3000 + Certificates",
    openToAll: true,
    icon: "computer",
    description: "Day 1 Ideation - Develop tech solutions for chosen themes.",
    detailedDescription: "Day 1 of our 2-day Hackathon starts with an online kickoff session where teams will receive their themes and begin ideating. Choose from exciting themes like Tech4Good, AI Tools, or Campus Hacks. Teams of 1-4 members will brainstorm solutions and prepare for Day 2's build phase. This event is open to all participants interested in technology and innovation."
  },
  {
    id: "free-fire",
    title: "Free Fire Tournament",
    time: "1:30 PM – 3:00 PM",
    team: "Squad of 4",
    regFee: "₹100/team",
    prize: "₹2000 + Trophy",
    openToAll: false,
    icon: "gamepad",
    description: "SDM Students Only - Battle in teams in this exciting esports tournament.",
    detailedDescription: "Exclusive for SDM students! Form your squad of 4 and compete in this thrilling Free Fire tournament. The format includes 2 pool matches followed by 1 final Clash Squad (Best of 8). Only registered teams can participate. The winning squad will receive ₹2000 cash prize and a stunning trophy!"
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    time: "3:00 PM onwards",
    team: "6 members",
    openToAll: false,
    icon: "mapPin",
    description: "BCA Students Only - Follow clues around campus to find the hidden treasure.",
    detailedDescription: "Exclusive for BCA students! Form a team of 6 and embark on an exciting treasure hunt spanning the entire college campus. The event consists of 4 rounds with 15 different sets of clues. Teams must decode clues, solve puzzles, and race against time to find the hidden treasure. Pre-registration is required for participation."
  },
];

const day2Events: EventProps[] = [
  {
    id: "formal-inauguration",
    title: "Formal Inauguration",
    time: "9:30 AM – 10:00 AM",
    openToAll: true,
    icon: "microphone",
    description: "The official opening ceremony for the main day of the fest.",
    detailedDescription: "Join us for the formal inauguration of ENIGMA* Fest's main day. The ceremony will feature addresses from college management, faculty coordinators, and student representatives. Everyone attending the fest is welcome to be part of this ceremonial beginning of our main fest day."
  },
  {
    id: "photography-contest",
    title: "Photography Contest",
    time: "9:00 AM – 2:30 PM",
    regFee: "₹50",
    prize: "₹500 + Insta Feature",
    openToAll: true,
    icon: "camera",
    description: "Capture the essence of the fest through your lens.",
    detailedDescription: "Calling all photography enthusiasts! Capture the vibrant moments of our fest through your creative lens. Participants need to submit 5 photographs based on the themes 'Capture the Fest' or 'Candid Campus'. The winning entries will not only receive cash prizes but also be featured on our official Instagram handle!"
  },
  {
    id: "hackathon-day2",
    title: "Hackathon (Build Phase)",
    time: "10:00 AM – 3:00 PM",
    openToAll: true,
    icon: "computer",
    description: "Day 2 Build Phase - Implement your solutions and prepare for final presentations.",
    detailedDescription: "This is Day 2 of our Hackathon where teams move from ideation to implementation. Teams will work in the Computer Lab or Projector Room to build their solutions. By the end of the session, each team needs to present a working UI with basic logic implementation and deliver a compelling 5-minute pitch. Judges will evaluate based on innovation, implementation, and presentation quality."
  },
  {
    id: "quiz-competition",
    title: "Quiz Competition",
    time: "10:30 AM – 3:00 PM",
    team: "2 members",
    regFee: "₹30/team",
    prize: "₹1000 + Certificates",
    openToAll: true,
    icon: "quiz",
    description: "Test your knowledge across various categories in this exciting quiz.",
    detailedDescription: "Put your knowledge to the test in this multi-round quiz competition! Teams of 2 will progress through a Written Quiz, followed by Toss-up questions, Visual rounds, and finally Rapid Recall for the finalists. Questions span a wide range of topics including current affairs, technology, pop culture, and academic subjects. The winning team takes home ₹1000 and certificates of excellence."
  },
  {
    id: "canva-design",
    title: "Canva Design Challenge",
    time: "10:30 AM – 1:30 PM",
    team: "2 members",
    regFee: "₹50/team",
    prize: "₹500 + Certificates",
    openToAll: true,
    icon: "canva",
    description: "Showcase your graphic design skills using Canva.",
    detailedDescription: "Showcase your graphic design prowess in this Canva Design Challenge! Teams of 2 will work together to create engaging designs based on themes revealed at the event. Participants will have 3 hours to conceptualize and execute their designs. Judging criteria include creativity, relevance to theme, visual appeal, and technical execution. Winners will receive cash prizes and certificates recognizing their design excellence."
  },
  {
    id: "game-stalls",
    title: "Game Stalls",
    time: "Throughout Day 2",
    regFee: "₹10-₹30 per game",
    openToAll: true,
    icon: "gamepad",
    description: "Enjoy various fun games and activities throughout the day.",
    detailedDescription: "Take a break from competitions and enjoy our fun game stalls spread throughout the campus! Activities include Bottle Fishing, Ring Toss, Balloon Pop, Can Knockdown, Buzz Wire, Bulls Eye, and Wheel of Fortune. Each game costs between ₹10-₹30 to play, with instant prizes for winners. Perfect for some casual fun between events!"
  },
  {
    id: "food-stalls",
    title: "Food Stalls",
    time: "All Day",
    openToAll: true,
    icon: "food",
    description: "A variety of food options available throughout the day.",
    detailedDescription: "Satisfy your cravings at our diverse food stalls offering everything from quick snacks and refreshing beverages to delicious local dishes. Various college departments and external vendors will be serving up tasty treats throughout the day. All stalls are open to everyone attending the fest!"
  },
];

// Combine all events into one array
const allEvents = [...day1Events, ...day2Events];

// Export the arrays for use in components
export const getDay1Events = () => day1Events;
export const getDay2Events = () => day2Events;

// Get event by ID
export const getEventById = (id: string): EventProps | null => {
  return allEvents.find(event => event.id === id) || null;
};

// Get featured events for homepage
export const getFeaturedEvents = (): EventProps[] => {
  return [
    getEventById("hackathon-day1") as EventProps,
    getEventById("photography-contest") as EventProps,
    getEventById("quiz-competition") as EventProps,
  ];
};
