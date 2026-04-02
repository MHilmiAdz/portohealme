import leafcheckimg from '../assets/images/leafcheck.png';
import kanagamesimg from "../assets/images/kanagames.png";
import perpushubimg from "../assets/images/perpushub.png";
import firstknightimg from "../assets/images/firstknight.png";
import firstbirdimg from "../assets/images/firstbird.png";

export const projects = [
  {
    title: "LeafCheck App",
    category: "Mobile",
    description: "AI-based leaf health detection application.",
    details: "LeafCheck is an AI-based app that allows you to scan leaves using a camera or upload images to get an instant health analysis. Developed during Bangkit Academy 2024.",
    image: leafcheckimg,
    author: "Team: Hilmi, Dhivara, Ninda, Adesta",
    tags: ["Android", "Kotlin", "Machine Learning", "Retofit"],
    downloadLink: "#"
  },
  {
    title: "LeafCheck API",
    category: "Cloud",
    description: "Flask API for LeafCheck App.",
    details: "A robust backend API built with Flask, deployed on Google Cloud Platform, providing real-time inference for the LeafCheck mobile application.",
    image: leafcheckimg,
    author: "Team: Hilmi, Dhivara",
    tags: ["Python", "Flask", "GCP", "Cloud Run"],
    downloadLink: "#"
  },
  {
    title: "KanaGames",
    category: "Game",
    description: "2D Japanese learning game.",
    details: "KanaGames is an educational game that helps you learn Japanese Katakana characters through interactive gameplay and quizzes.",
    image: kanagamesimg,
    author: "Team: Hilmi, Aldino, Gavino, Delisya", 
    tags: ["Construct 3", "Game Dev", "Education"],
    downloadLink: "#"
  },
  {
    title: "PerpusHub",
    category: "Mobile",
    description: "PDF Organizer App",
    details: "PerpusHub helps users manage large collections of PDF books with features like categorization, search, and an integrated reader.",
    image: perpushubimg,
    author: "Team: Hilmi, Rasyid, Delisya",
    tags: ["Android", "Java", "Firebase"],
    downloadLink: "#"
  },
  {
    title: "First Knight Game",
    category: "Game",
    description: "Knight Platformer Game",
    details: "A classic 2D platformer where players control a knight collecting coins and navigating obstacles. Built as a foundation in game mechanics.",
    image: firstknightimg,
    author: "Hilmi - All Tutorial from Brackeys Youtube Channel",
    tags: ["Unity", "C#", "2D Physics"],
    downloadLink: "#"
  },
  {
    title: "FlappyBird Game",
    category: "Game",
    description: "Flappybird Clone Game",
    details: "A clone of the iconic Flappy Bird game, focusing on simple but addictive physics-based gameplay.",
    image: firstbirdimg,
    author: "Hilmi - All Tutorial from Game Maker's Toolkit Youtube Channel",
    tags: ["Unity", "C#", "UI Design"],
    downloadLink: "#"
  },
];
