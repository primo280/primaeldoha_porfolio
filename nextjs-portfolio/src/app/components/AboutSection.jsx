"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NEXT.JS</li>
        <li>DJANGO</li>
        <li>LARAVEL</li>
        <li>API RESTFULL</li>
        <li>MYSQL</li>
        <li>ORACLE</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Institut de Formation et de Recherche en Informatique (IFRI)</li>
        <li>Université d&aposAbomey Calavi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Dev Junior Python</li>
        <li>Linkdeen</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} alt="hero images" height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Apropos</h2>
          <p className="text-base lg:text-lg">
            « Je suis un développeur web fullstack passionné par la création d&apos;applications web interactives et réactives. J&apos;ai de l&apos;expérience avec JavaScript, React, Redux, Node.js,Laravel,Django, Express, PostgreSQL, Sequelize, HTML, CSS, et Git. J&apos;apprends rapidement et je cherche toujours à élargir mes connaissances et mes compétences. Je suis un joueur d&apos;équipe et je suis enthousiaste à l&apos;idée de travailler avec d&apos;autres pour créer des applications incroyables. »</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
