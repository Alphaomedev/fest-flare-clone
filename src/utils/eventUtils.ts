import { EventProps } from "@/components/EventCard";

// Define organizer type


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
    detailedDescription: "Join us for the grand opening of ENIGMA* Fest 2025! The event will be inaugurated by our college principal and distinguished guests. This marks the beginning of two days filled with exciting activities, competitions, and fun.",
    organizers: [
      {
        id: "1",
        name: "Ravi devadiga",
        phone: "+91 87228 46337", 
        initials: "RD",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: "2", 
        name: "Abhishek naik",
        phone: "+91 734 901 7610",
        initials: "AB",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
      }
    ]
  },
  {
    id: "video-shoot",
    title: "Video Shoot Competition",
    time: "10:00 AM – 2:00 PM",
    mode: "Offline",
    team: "2 members",
    regFee: "₹50/team",
    prize: "₹1000",
    openToAll: false,
    icon: "video",
    description: "SDM Students Only - Create a short video showcasing SDM college.",
    detailedDescription: "Exclusive for SDM students! Put your videography skills to the test by creating a short video that showcases our beloved SDM College. Teams of 2 members will have 4 hours to shoot and edit a video not exceeding 3 minutes in duration. The winning video will be featured on the college's official social media channels.",
    organizers: [
      {
        id: "5",
        name: "Kalpit Bhandari",
        phone: "+91 70221 05358",
        initials: "KB",
      },
      {
        id: "6",
        name: "Sunaina Baadkar",
        phone: "+91 74113 76253",
        initials: "SN",
      }
    ]
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
    time: "12:00 PM (Online via Google Meet)",
    mode: "Online & Offline",
    team: "1-4 members",
    regFee: "₹250/team",
    prize: "₹3000 + Certificates",
    openToAll: true,
    icon: "computer",
    description: "Day 1 Ideation - Develop tech solutions for chosen themes.",
    detailedDescription: `Join us for a two-day hybrid hackathon designed to spark innovation!

**Day 1 (Online)** starts at 12:00 PM with a kickoff via Google Meet. Teams will:
- Get introduced and form connections.
- Choose from 3 exciting themes:
  1. **Tech4Good** – Tackle social/environmental problems.
  2. **AI Tools** – Build something fun or useful using AI.
  3. **Campus Hacks** – Solve campus-related issues.

Teams will brainstorm and submit:
- Their idea
- A rough design/prototype
by **10:00 PM** using a Google Form and GitHub/Drive link.

**Day 2 (Offline)** begins at 10:00 AM at the venue. Teams will:
- Build their working prototype (UI + basic logic)
- Get mentor feedback mid-way
- Finalize their build and submit by 2:00 PM

🎥 **Final Submission Includes**:
- A GitHub repo or Google Drive folder
- A 1-minute demo video/screen recording
- A proper README file with:
  - Team Name
  - Members & Roles
  - Problem Statement
  - Tech Stack
  - Setup Instructions
  - Short write-up

🏆 Prizes:
- 🥇 1st Prize: ₹3000 + Certificates + Social Media Feature
- 🥈 2nd Prize: ₹1000 + Certificates
- ⭐ Special Mentions: Best UI, Best Pitch, Most Original Idea


### NOTE: all ai tools are allowed for this hackathon 

Open to all students passionate about building real-world solutions through tech.`,
    organizers: [
      {
        id: "1",
        name: "Pranav Bhat",
        phone: "+91 70163 09456",
        initials: "PB",
      },
      {
        id: "2",
        name: "Ebenezer Dsouza",
        phone: "+91 84314 53818",
        initials: "ED",
      }
    ]
  },
  {
    id: "free-fire",
    title: "Free Fire Tournament",
    time: "1:30 PM – 3:00 PM",
    team: "Squad of 4",
    regFee: "₹50/team",
    prize: "₹2000 (winner), ₹500(runner up)",
    openToAll: false,
    icon: "gamepad",
    description: "SDM Students Only - Battle in teams in this exciting esports tournament.",
    detailedDescription: `- Exclusive for SDM students! Form your squad of 4 and compete in this thrilling Free Fire tournament.

      - The format includes 2 pool matches followed by 1 final Clash Squad (Best of 8).

      - Only registered teams can participate. ( contact organisers or visit bca lab 1 to register on 28th)  
      
      - The winning squad will receive ₹2500 cash prize and a stunning trophy!
      
      ## join whatsapp group for futher details : https://chat.whatsapp.com/IEN9Q2FFfXE514rAedRuag `,
    organizers: [
      {
        id: "1",
        name: "Humam Sab",
        phone: "+91 97413 37316",
        initials: "HS",
      },
      {
        id: "2",
        name: "Abhishek Naik",
        phone: "+91 73490 17610",
        initials: "AN",
      },
      {
        id: "3",
        name: "Ebenezer Dsouza",
        phone: "+91 84314 53818",
        initials: "ED",
      }
    ]
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
    id: "photography-contest",
    title: "Photography Contest",
    time: "9:00 AM – 2:30 PM",
    regFee: "₹50",
    prize: "₹1000 + Insta Feature",
    openToAll: true,
    icon: "camera",
    description: "Capture the essence of the fest through your lens.",
    detailedDescription: "Calling all photography enthusiasts! Capture the vibrant moments of our fest through your creative lens. Participants need to submit 5 photographs based on the themes 'Capture the Fest' or 'Candid Campus'. The winning entries will not only receive cash prizes but also be featured on our official Instagram handle!"
  },
  {
    id: "hackathon-day2",
    title: "Hackathon (Build Phase)",
    time: "10:00 AM – 3:00 PM",
    mode: "Offline",
    openToAll: true,
    team: "4 members",
    regFee: "₹250/team",
    prize: `₹3000 + Certificates`,
    icon: "computer",
    description: "Day 2 Build Phase - Implement your solutions and prepare for final presentations.",
    detailedDescription: `Join us for a two-day hybrid hackathon designed to spark innovation!

**Day 1 (Online)** starts at 12:00 PM with a kickoff via Google Meet. Teams will:
- Get introduced and form connections.
- Choose from 3 exciting themes:
  1. **Tech4Good** – Tackle social/environmental problems.
  2. **AI Tools** – Build something fun or useful using AI.
  3. **Campus Hacks** – Solve campus-related issues.

Teams will brainstorm and submit:
- Their idea
- A rough design/prototype
by **10:00 PM** using a Google Form and GitHub/Drive link.

**Day 2 (Offline)** begins at 10:00 AM at the venue. Teams will:
- Build their working prototype (UI + basic logic)
- Get mentor feedback mid-way
- Finalize their build and submit by 2:00 PM

🎥 **Final Submission Includes**:
- A GitHub repo or Google Drive folder
- A 1-minute demo video/screen recording
- A proper README file with:
  - Team Name
  - Members & Roles
  - Problem Statement
  - Tech Stack
  - Setup Instructions
  - Short write-up

🏆 Prizes:
- 🥇 1st Prize: ₹3000 + Certificates + Social Media Feature
- 🥈 2nd Prize: ₹1000 + Certificates
- ⭐ Special Mentions: Best UI, Best Pitch, Most Original Idea


### NOTE: all ai tools are allowed for this hackathon 

Open to all students passionate about building real-world solutions through tech.

## join whatsapp group for notifications : https://chat.whatsapp.com/FKLZuzfP8JiINMBgRumpYo`,
  },
  {
    id: "quiz-competition",
    title: "Quiz Competition",
    time: "10:30 AM – 3:00 PM",
    team: "2 members",
    regFee: "₹30/team",
    prize: "₹1500 + Certificates",
    openToAll: true,
    icon: "quiz",
    description: "Test your knowledge across various categories in this exciting quiz.",
    detailedDescription: `Form a team of two and get ready to test your knowledge across general awareness, tech, logic, and visuals!

The competition has 4 intense rounds including a written screening, toss-up challenges, visual puzzles, and a rapid recall finale.

Open to all students. Registration fee: ₹30 per team. Winners get ₹1000, certificates, and a feature on our Insta page.

Limited to 15–20 teams. Pre-registration required.

join whatsapp group for notifications : https://chat.whatsapp.com/FN9sTra4YpN4FWxsW7iSkp
`,
    organizers: [
      {
        id: "1",
        name: "Ratan Naik",
        phone: "+91 94818 01949", 
        initials: "RN",
        image: ""
      },
      {
        id: "2", 
        name: "Suraj Shet",
        phone: "+91 63631 53166",
        initials: "SS",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
      }
    ]
  },
  
{
  id: "canva-design-challenge",
  title: "Canva Design Challenge",
  time: "10:30 AM – 1:30 PM",
  mode: "Offline (Requires Laptop)",
  openToAll: true,
  team: "2 members (duo)",
  regFee: "₹50 per team",
  prize: "₹1000 + Certificates + Feature on College Page",
  icon: "canva",
  description: "Test your creativity and design skills using Canva. A theme will be revealed on the spot!",
  detailedDescription: `Join the **Canva Design Challenge**, a creative design competition aimed at testing participants' ability to create visually appealing and effective designs using Canva. You will be provided with a theme on the spot and will have to design within a time limit.

**Event Details:**
- **Date:** Day 2 of the Fest
- **Time:** 10:30 AM – 1:30 PM
- **Venue:** [bca Lab]
- **Team Size:** 2 members (duo)
- **Registration Fee:** ₹50 per team
- **Registration Type:** On-site (or Pre-registration if preferred)
- **Theme:** To be Announced at the start of the event
- **Volunteers:** 5 are needed for this event.

**Participation Guidelines:**
- Each team must consist of 2 members.
- Designs must be made **only using Canva** (browser or app).
- Participants must bring their own laptops or use college systems (if available).
- Internet connectivity should be ensured prior to the event.
- No use of AI tools outside Canva’s native AI features is allowed.
- Each team is allowed to submit only one design.
- Plagiarism or copying existing templates directly without creativity will result in disqualification.

**Objective:**
Create a compelling and theme-based design using Canva that effectively conveys the message, aesthetics, and purpose. The theme will test creativity, layout sense, design balance, and clarity.

**Schedule:**
| Time | Activity |
| ------ | ------ |
| 10:30 AM | Reporting and Attendance |
| 10:45 AM | Theme Reveal & Rules Briefing |
| 11:00 AM | Design Time Begins |
| 1:00 PM | Submission Deadline |
| 1:00 – 1:30 PM | Judging and Feedback |
| 1:30 PM | Winners Announcement & Wrap-up |

**Judging Criteria** (Total: 100 points):
- **Creativity & Originality:** Uniqueness and innovation in design (25 points)
- **Theme Relevance:** How well the design reflects the assigned theme (25 points)
- **Visual Appeal:** Aesthetic and color usage, layout, and spacing (20 points)
- **Clarity of Message:** How clearly the message is communicated (15 points)
- **Technical Execution:** Use of design tools, typography, and composition (15 points)

**Prizes:**
- **1st Prize:** ₹1000 + Certificate + Feature on College Page
- **2nd Prize:** Certificate + Goodie
- All participants receive an E-certificate of participation. The general list mentions a prize of ₹500.

**Judging Panel:** Judges will include design faculty and experienced UI/UX or digital media professionals. These are still to be finalised.

**Checklist for Participants:**
- Laptop / Device with Canva access
- Stable internet connection
- Canva account (preferably logged in before event)
- Charger / Power backup
- Creativity and good vibes 😄

The Canva Design Challenge is open to all.
`,
organizers: [
  {
    id: "1",
    name: "Soori Naik",
    phone: "+91 93532 80426", 
    initials: "SN",
    image: ""
  },
  {
    id: "2", 
    name: "Ravi Naik",
    phone: "+91 63638 37948",
    initials: "SS",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
  }
]
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

// Export organizer type
