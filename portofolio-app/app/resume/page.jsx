"use client";


import { SiLaravel } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const about =
{
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero harum ab doloribus magni nostrum laudantium mollitia sit earum sunt sint iusto velit ipsa adipisci cum tempora, praesentium, inventore sequi officiis!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nando Abdillah "
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 821-2546-9584"
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian "
    },
    {
      fieldName: "Email",
      fieldValue: "nandoabdilah1606@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian"
    }

  ]

}


const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ex, facere voluptatibus hic ducimus cum nemo non deleniti quae exercitationem molestias nostrum recusandae distinctio, placeat odio aliquid delectus voluptatum! Officia.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "IT Brain",
      position: "Front End Developer",
      duration: "2022 - Present"
    },
    {
      company: "Alpha Tech",
      position: "Backend Developer",
      duration: "2022 - Present"
    },
    {
      company: "Alpha Tech",
      position: "Backend Developer",
      duration: "2022 - Present"
    },
    {
      company: "Alpha Tech",
      position: "Backend Developer",
      duration: "2022 - Present"
    },
    {
      company: "Alpha Tech",
      position: "Backend Developer",
      duration: "2022 - Present"
    },
    {
      company: "Alpha Tech",
      position: "Backend Developer",
      duration: "2022 - Present"
    },
    {
      company: "Alpha Tech",
      position: "Backend Developer",
      duration: "2022 - Present"
    },
    {
      company: "Alpha Tech",
      position: "Backend Developer",
      duration: "2022 - Present"
    },

  ]

}

const educations = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ex, facere voluptatibus hic ducimus cum nemo non deleniti quae exercitationem molestias nostrum recusandae distinctio, placeat odio aliquid delectus voluptatum! Officia.",
  items: [
    {
      institution: "State Vocational High School  2 Buduran Sidoarjo ",
      degree: "Software Engineer",
      duration: "2022 - 2025"
    },
    {
      institution: "State University of Surabaya",
      degree: "Bachelor of Computer Science",
      duration: "2025 - Present"
    }

  ]

}

const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem assumenda ullam possimus odit, quo laudantium animi, distinctio voluptas magni optio impedit eius, neque saepe iusto. Odio quas quam consequatur.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html-5"
    },
    {
      icon: <FaCss3 />,
      name: "css-3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react-js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwinds"
    },
    {
      icon: <SiLaravel />,
      name: "laravel"
    },
  ]
}


function Resume() {

  return (
    <motion.div initial={{
      opacity: 0
    }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"

        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">

              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">
                  {experiences.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experiences.items.map((item, index) => (
                      <li key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.position}</h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60 ">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">
                  {educations.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educations.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {educations.items.map((item, index) => (
                      <li key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60 ">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="skills" className="w-full">
              {/* Skills */}

              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">
                    {skills.title}
                  </h3>

                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {
                      skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p className="capitalize ">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </TabsContent>


            <TabsContent value="about" className="w-full text-center xl:text-left">
              {/* About */}
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.info.map((item, index) => (
                      <li key={index}
                          className="flex  items-center justify-center xl:justify-start gap-4"
                      >
                         <span className="text-white/60 ">{item.fieldName}</span>
                         <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>

            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume