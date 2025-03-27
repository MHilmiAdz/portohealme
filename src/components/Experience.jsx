import { Card } from "./Card";
import practicumAssistantfilkom from "../assets/images/practicumassist.png";
import bangkitAcademycohort from "../assets/images/bangkitcert.jpg";
import plpsmkn2malang from "../assets/images/plp2smk2malang.png";
import svvrsmkn3batu from "../assets/images/svvrsmk3batu.png";
import coddmtahfidzgrad from "../assets/images/coddm.png";
import itdevdc from "../assets/images/dc2024itdev.jpg";
import sekrependptq from "../assets/images/sekrependptq.png";
import kbmptiddmcert from "../assets/images/ddmcert.png";
import tahfidzcampwaco from "../assets/images/wacomultmed.png";

export function Experience() {
  const projectData = [
    {
      title: "Practicum Assistant",
      description: "Computer Science Faculty, Brawijaya University",
      details: "Assist students in the practicum process, help students understand the material, and help lecturers in the practicum process.",
      image: practicumAssistantfilkom,
      author: "2 Years - Experience"
    },
    {
      title: "Bangkit Academy Cloud Computing Cohort",
      description: "Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka",
      details: "Bangkit Academy is a program that aims to develop the next generation of highly skilled tech professionals in Indonesia. The program is a collaboration between Google, Tokopedia, Gojek, and Traveloka.",
      image: bangkitAcademycohort,
      author: "Hilmi, Aldino, Gavino, Delisya", 
    },
    {
        title: "Teacher at SMKN 2 Malang",
        description: "Computer Science Faculty, Brawijaya University",
        details: "Assist students in the practicum process, help students understand the material, and help lecturers in the practicum process.",
        image: plpsmkn2malang,
        author: "2 Years - Experience"
    },
    {
        title: "Teacher at SMKN 3 Batu",
        description: "Computer Science Faculty, Brawijaya University",
        details: "Assist students in the practicum process, help students understand the material, and help lecturers in the practicum process.",
        image: svvrsmkn3batu,
        author: "2 Years - Experience"
    },
    {
      title: "Head Coordinator Multimeda of Tahfidz Graduation",
      description: "Pusat Tahfidz Al-Qur'an, Brawijaya University",
      details: "Head Coordinator of Tahfidz Graduation at Pusat Tahfidz Al-Qur'an Brawijaya University.",
      image: coddmtahfidzgrad,
      author: "Hilmi, Rasyid, Delisya"
    },
    {
      title: "IT Development Staff",
      description: "Digital Creative Masjid Raden Patah, Brawijaya University",
      details: "This game is my first platformer game. The goal is to collect 10 coins to win the game. Enjoy!",
      image: itdevdc,
      author: "Hilmi - All Tutorial from Brackeys Youtube Channel"
    },
    {
      title: "Design, Documentation, and Multimedia Staff",
      description: "Keluarga Besar Mahasiswa Departemen Sistem Informasi, Brawijaya University",
      details: "More detailed description of Project 1.",
      image: kbmptiddmcert,
      author: "Hilmi - All Tutorial from Game Maker's Toolkit Youtube Channel"
    },
    {
      title: "Education Department Secretary",
      description: "Pusat Tahfidz Al-Qur'an, Brawijaya University",
      details: "More detailed description of Project 1.",
      image: sekrependptq,
      author: "Hilmi - All Tutorial from Game Maker's Toolkit Youtube Channel"
    },
    {
      title: "Tahfidz Camp Multimedia Co-Coordinator",
      description: "Keluarga Besar Mahasiswa Departemen Sistem Informasi, Brawijaya University",
      details: "More detailed description of Project 1.",
      image: tahfidzcampwaco,
      author: "Hilmi - All Tutorial from Game Maker's Toolkit Youtube Channel"
    },
  ];

  return (
    <section className="px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
          {projectData?.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}