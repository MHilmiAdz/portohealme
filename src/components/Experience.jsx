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
      details: "Assist lecturer to teach more than 30 students in the practicum process, help students understand the material, and help students solve problems in the practicum process.",
      image: practicumAssistantfilkom,
      author: "College Subject: Education Game Development, Algorithm and Data Structure, and Advanced Programming" 
    },
    {
      title: "Cloud Computing Cohort",
      description: "Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka",
      details: "Bangkit Academy is a program that aims to develop the next generation of highly skilled tech professionals in Indonesia. The program is a collaboration between Google, Tokopedia, Gojek, and Traveloka. Developed a project called 'LeafCheck' with a team of 4 people. The project is an AI-based leaf health detection application that allows you to scan leaves using a camera or upload images to get an instant health analysis.",
      image: bangkitAcademycohort,
      author: "", 
    },
    {
        title: "Teacher at SMKN 2 Malang",
        description: "State Vocational High School 2 Malang",
        details: "Teach 3 classes of Vocacional High School Student in the field of Computer Network and Telecommunication Engineering for 1 semester.",
        image: plpsmkn2malang,
        author: "College Subject: Field Introduction to School"
    },
    {
        title: "Teacher at SMKN 3 Batu",
        description: "State Vocational High School 3 Batu",
        details: "Taught 2 classes of Vocational High School students in Computer Network and Telecommunication Engineering for one month focusing on research to implement collaborative mind mapping in SVVR environment.",
        image: svvrsmkn3batu,
        author: "College Subject: Skripsi"
    },
    {
      title: "Head Coordinator Multimeda of Tahfidz Graduation",
      description: "Pusat Tahfidz Al-Qur'an, Brawijaya University",
      details: "Manage the Documentation of the event, handle multimedia needed in the event, and make a video for the event.",
      image: coddmtahfidzgrad,
      author: ""
    },
    {
      title: "IT Development Staff",
      description: "Digital Creative Masjid Raden Patah, Brawijaya University",
      details: "Help the IT Development team in the process of making a website for the mosque. we use laravel as the framework.",
      image: itdevdc,
      author: ""
    },
    {
      title: "Design, Documentation, and Multimedia Staff",
      description: "Keluarga Besar Mahasiswa Departemen Sistem Informasi, Brawijaya University",
      details: "Design, take photo, and handle Multimedia for the event.",
      image: kbmptiddmcert,
      author: ""
    },
    {
      title: "Education Department Secretary",
      description: "Pusat Tahfidz Al-Qur'an, Brawijaya University",
      details: "Help the Head of Education Department in the process of making all the event run smoothly.",
      image: sekrependptq
    },
    {
      title: "Tahfidz Camp Multimedia Co-Coordinator",
      description: "Pusat Tahfidz Al-Qur'an, Brawijaya University",
      details: "Help the Multimedia team in the process of making all necessary media for the event.",
      image: tahfidzcampwaco
    },
  ];

  return (
    <section className="px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Experiences</h2>
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