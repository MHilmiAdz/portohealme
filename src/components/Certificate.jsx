import { Card } from "./Card";
import sertjavabasic from "../assets/images/javabasic.png";
import sertprobsolvbasic from "../assets/images/problemsolving.png";
import sertbecomeagooglecloudengineer from "../assets/images/becomeagce.jpg";

export function Certificate() {
  const projectData = [
    {
      title: "Problem Solving (Basic)",
      description: "Hackerrank",
      details: "I got this certificate for completing the Problem Solving (Basic) skill badge on HackerRank. This badge is awarded to those who have successfully solved some problem in 1 hours and 30 minutes. and i solved it in Java.",
      image: sertprobsolvbasic,
    },
    {
      title: "Java (Basic)",
      description: "Hackerrank",
      details: "I got this certificate for completing the Java (Basic) skill badge on HackerRank. This badge is awarded to those who have successfully solved some problem in 1 hours and 30 minutes. and i solved it in Java.",
      image: sertjavabasic,
    },
    {
      title: "Become a Google Cloud Engineer",
      description: "Dicoding",
      details: "I got this certificate for completing the Google Cloud Engineer course on Dicoding. This course is designed to help you learn the skills needed to become a Google Cloud Engineer.",
      image: sertbecomeagooglecloudengineer,
    }
  ];

  return (
    <section className="px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Certificates</h2>
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