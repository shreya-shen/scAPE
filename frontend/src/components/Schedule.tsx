import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Binary,
  Blocks,
  BookCheckIcon,
  Brain,
  BrainCircuit,
  Bug,
  Code2,
  CodeIcon,
  Computer,
  Cookie,
  CookingPot,
  FerrisWheel,
  Gamepad2,
  GitCompareArrows,
  Goal,
  Laptop2,
  LaptopIcon,
  Leaf,
  MicIcon,
  MicVocal,
  Monitor,
  PartyPopper,
  Sandwich,
  ScrollIcon,
  SendToBack,
  Soup,
  Sparkle,
  Sparkles,
  SquareCode,
  Users,
  UsersRound,
  Utensils,
  Workflow,
  Wrench,
} from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Code } from "mongodb";

const scheduleData = [
  {
    day: "7th November",
    events: [
      {
        icon: <Leaf />,
        title: "Inaugration",
        time: "10:00 am - 10:45 am",
        description: "",
        speaker: "",
        type: "",
      },
      {
        icon: <MicVocal />,
        title: "Devtalk 1 - Building a thriving career in a VUCA world",
        time: "11:00 am - 11:45 am",
        description: `In today’s rapidly changing, unpredictable VUCA world (Volatile, Uncertain, Complex, Ambiguous), building a sustainable career requires adaptability, continuous learning, and strategic foresight. This talk explores essential skills, mindset shifts, and actionable strategies to not just survive but thrive amidst disruption and uncertainty.`,
        speaker: "Bheema Prakash Adkasthala, Head of Service Delivery at Ericsson India",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "DevTalk 2 - Will the real AI job please stand up?",
        time: "12:00 pm - 12:45 pm",
        description: "Dive into the evolving world of AI careers and uncover what skills and roles are truly in demand! This session breaks down the hype to reveal actionable insights for those ready to make their mark in AI.",
        speaker: "Srikanth Shenoy, Co-Founder at Coachbuddy.ai",
        type: "Talk",
      },
      {
        icon: <Wrench />,
        title: "MasterClass 1 - Fundamentals of Image Processing and Computer Vision",
        time: "11:30 am - 1:00 pm",
        description: "Explore the core concepts and techniques behind image processing and computer vision, setting the stage for exciting projects and innovation in visual AI. Perfect for beginners looking to build a solid foundation!",
        speaker: "Pranav Durai, Research Scholar at Stanford School of Medicine",
        type: "Workshop",
      },
      {
        icon: <MicVocal />,
        title: "DevTalk 3 - The Future of Computing",
        time: "2:00 pm - 2:45 pm",
        description: "Join us for a look into tomorrow’s tech landscape, exploring how emerging computing trends will shape the world. Get ready to rethink what's possible and see where technology is taking us next!",
        speaker: "Suhas Kudlur Viswanath, Hardware Engineer at Arithmetic Labs",
        type: "Talk",
      },
      {
        icon: <MicVocal />,
        title: "DevTalk 4",
        time: "3:00 pm - 3:45 pm",
        description: "TBA",
        speaker: "Speaker",
        type: "Talk",
      },
      {
      icon: <Wrench />,
      title: "MasterClass 2 - Ethical Hacking 101:Unleash Your Inner Hacker",
      time: "2:00 pm - 4:00 pm",
      description: "Step into the world of ethical hacking with hands-on insights into cybersecurity essentials! Learn key techniques and responsible hacking practices to protect and defend like a pro.",
      speaker: "Samarth Sudesh Acharya, Cyber Security Analyst at KPMG India",
      type: "Workshop",
    },
      // {
      //   icon: <CookingPot />,
      //   title: "Lunch Break",
      //   time: "1:30 pm - 02:15 pm",
      //   description: "",
      //   speaker: "",
      //   type: "",
      // },

      {
        icon: <Gamepad2 />,
        title: "Valorant",
        time: "11:00 pm - 06:00 pm",
        description: "TBA",
        speaker: "Become the ultimate agent in our Valorant competition!",
        type: "Competition",
      },
    ],
  },
  {
    day: "8th November",
    events: [
      {
        icon: <SquareCode />,
        title: "CodeForge - CP ",
        time: "09:00 am - 10:15 am",
        description: "",
        speaker: "Competitive Programming Battle: Unleash Your Coding Prowess",
        type: "Competition",
      },
      {
        icon: <Monitor />,
        title: "CSS Action",
        time: "9:00 am - 10:45 pm",
        description: "TBA",
        speaker: "Put your web design chops to the test!",
        type: "Competition",
      },
      {
        icon: <Goal />,
        title: "Capture the Flag",
        time: "10:30 am - 12:00 pm",
        description: "TBA",
        speaker: "Are you ready for a mind-bending challenge?",
        type: "Competition",
      },
      {
        icon: <BrainCircuit />,
        title: "Tech Pitch",
        time: "11:30 am - 1:30 pm",
        description: "TBA",
        speaker: "Spark Innovation and Inspire Change!",
        type: "Competition",
      },
      {
        icon: <CodeIcon />,
        title: "Sightless Coding ",
        time: "12:00 pm - 01:30 pm",
        description: "TBA",
        speaker: "Are you a coding mastermind?",
        type: "Competition",
      },
      {
        icon: <Gamepad2 />,
        title: "Battleground Brawl ",
        time: "02:00 pm - 04:00 pm",
        description: "TBA",
        speaker: "Enter the battleground and claim victory in BGMI’s online showdown.",
        type: "Competition",
      },
      // {
      //   icon: <Soup />,
      //   title: "Lunch Break",
      //   time: "12:45 pm - 01:45 pm",
      //   description: "TBA",
      //   speaker: "",
      //   type: "",
      // },
      // {
      //   icon: <SendToBack />,
      //   title: "Hackathon Registration / Onboarding",
      //   time: "03:45 pm - 04:00 pm",
      //   description: "20 Teams to be participating offline in the Venue.",
      //   speaker: "TBA",
      //   type: "",
      // },
      {
        icon: <Bug />,
        title: "Hacknight Kick-off",
        time: "04:00 pm",
        description: "",
        speaker: "Team up, code through the night, and build groundbreaking tech solutions.",
        type: "",
      },
    ],
  },
  {
    day: "9th November",
    events: [
      {
        icon: <BrainCircuit />,
        title: "Judging Round Starts",
        time: "10:30 am - 1:30 pm",
        description: "On their respective places",
        speaker: "",
        type: "",
      },
      {
        icon: <Laptop2 />,
        title: "Final Presentation",
        time: "02:00 pm",
        description: "TBA",
        speaker: "",
        type: "",
      },
      {
        icon: <PartyPopper />,
        title: "Valedictory and Prize Distribution",
        time: "04:00 pm",
        description: "",
        speaker: "May the prize be with you!",
        type: "",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="overflow-hidden pt-20 pb-20">
      <h1 className="select-none text-center text-3xl md:text-4xl font-semibold md:pb-10 pb-6">
        Schedule
      </h1>
      <div className="mx-auto max-w-7xl px-5">
        <Tabs defaultValue="7th November">
          <div className="flex justify-center items-center">
            <TabsList>
              {scheduleData.map((day) => (
                <TabsTrigger key={day.day} value={day.day}>
                  {day.day.charAt(0).toUpperCase() + day.day.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day} className="pt-10">
              <div className="max-w-2xl mx-auto">
                <ol className="relative border-s border-primary">
                  {day.events.map((event, index) => (
                    <li key={index} className="mb-10 ms-10">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-background rounded-full -start-5 ring-8 ring-background">
                        {event.icon}
                      </span>
                      <div className="flex mb-2 items-center md:text-xl text-lg tracking-wider font-semibold">
                        <span>
                          {event.title}{" "}
                          {event.type && <Badge>{event.type}</Badge>}
                        </span>
                      </div>
                      <div className="mb-2 text-primary md:text-base text-sm tracking-wider">
                        {event.speaker}
                      </div>
                      {/* <time className="block mb-2 font-normal leading-none text-white/60">
                        {event.time}
                      </time> */}
                      <p className="text-base font-normal text-white/85">
                        {event.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;
