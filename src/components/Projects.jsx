import { Card } from "./Card";
import leafcheckimg from '../assets/images/leafcheck.png';
import kanagamesimg from "../assets/images/kanagames.png";
import perpushubimg from "../assets/images/perpushub.png";
import firstknightimg from "../assets/images/firstknight.png";
import firstbirdimg from "../assets/images/firstbird.png";

export function Projects() {
  const projectData = [
    {
      title: "LeafCheck App",
      description: "AI-based leaf health detection application.",
      details: "LeafCheck is an AI-based app that allows you to scan leaves using a camera or upload images to get an instant health analysis. With LeafCheck, you can easily detect leaf problems early!",
      image: leafcheckimg,
      author: "Team: Hilmi, Dhivara, Ninda, Adesta"
    },
    {
      title: "KanaGames",
      description: "2D Japanese learning game.",
      details: "KanaGames is an educational game that helps you learn Japanese Katakana characters. With KanaGames, you can learn Japanese characters in a fun and interactive way!",
      image: kanagamesimg,
      author: "Team: Hilmi, Aldino, Gavino, Delisya", 
    },
    {
      title: "PerpusHub",
      description: "PDF Organizer App",
      details: "PerpusHub is an app to manage your PDF books. With PerpusHub, you can easily organize your PDF books and read them anytime, anywhere!",
      image: perpushubimg,
      author: "Team: Hilmi, Rasyid, Delisya"
    },
    {
      title: "First Knight Game",
      description: "Knight Platformer Game",
      details: "This game is my first platformer game. The goal is to collect 10 coins to win the game. Enjoy!",
      image: firstknightimg,
      author: "Hilmi - All Tutorial from Brackeys Youtube Channel"
    },
    {
      title: "FlappyBird Game",
      description: "Flappybird Clone Game",
      details: "This game is a clone of the popular Flappy Bird game. The goal is to navigate the bird through the pipes without hitting them. Enjoy!",
      image: firstbirdimg,
      author: "Hilmi - All Tutorial from Game Maker's Toolkit Youtube Channel"
    },
  ];

  return (
    <section className="px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
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