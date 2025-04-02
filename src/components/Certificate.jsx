import { Card } from "./Card";
import sertjavabasic from "../assets/images/javabasic.png";
import sertprobsolvbasic from "../assets/images/problemsolving.png";

export function Certificate() {
  const projectData = [
    {
      title: "Problem Solving (Basic)",
      description: "Hackerrank",
      details: "I got this certificate for completing the Problem Solving (Basic) skill badge on HackerRank. This badge is awarded to those who have successfully solved some problem in 1 hours and 30 minutes. and i solved it in Java.",
      image: sertprobsolvbasic,
      author: "Hilmi, Dhivara, Ninda, Adesta"
    },
    {
      title: "Java (Basic)",
      description: "Hackerrank",
      details: "I got this certificate for completing the Java (Basic) skill badge on HackerRank. This badge is awarded to those who have successfully solved some problem in 1 hours and 30 minutes. and i solved it in Java.",
      image: sertjavabasic,
      author: "Hilmi, Aldino, Gavino, Delisya", 
    }
  ];

  return (
    <section className="px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Certificate</h2>
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