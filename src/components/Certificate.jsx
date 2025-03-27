import { Card } from "./Card";
import sertjavabasic from "../assets/images/javabasic.png";
import sertprobsolvbasic from "../assets/images/problemsolving.png";

export function Certificate() {
  const projectData = [
    {
      title: "Problem Solving (Basic)",
      description: "Hackerrank",
      details: "LeafCheck is an AI-based app that allows you to scan leaves using a camera or upload images to get an instant health analysis. With LeafCheck, you can easily detect leaf problems early!",
      image: sertprobsolvbasic,
      author: "Hilmi, Dhivara, Ninda, Adesta"
    },
    {
      title: "Java (Basic)",
      description: "Hackerrank",
      details: "KanaGames is an educational game that helps you learn Japanese Katakana characters. With KanaGames, you can learn Japanese characters in a fun and interactive way!",
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