import { Card } from "./Card";

export function Projects() {
  const projectData = [
    {
      title: "Leaf Health App",
      description: "A brief description of the project.",
      details: "This app uses AI to analyze leaf health through image processing."
    },
    {
      title: "VR Learning System",
      description: "A brief description of the project.",
      details: "An immersive VR-based learning platform for interactive education."
    },
    {
      title: "Game Prototype",
      description: "A brief description of the project.",
      details: "A 2D indie game concept developed with Unity and pixel art."
    },
    {
      title: "Game Prototype",
      description: "A brief description of the project.",
      details: "A 2D indie game concept developed with Unity and pixel art."
    },
    {
      title: "Game Prototype",
      description: "A brief description of the project.",
      details: "A 2D indie game concept developed with Unity and pixel art."
    },
    {
      title: "Game Prototype",
      description: "A brief description of the project.",
      details: "A 2D indie game concept developed with Unity and pixel art."
    },
    {
      title: "Game Prototype",
      description: "A brief description of the project.",
      details: "A 2D indie game concept developed with Unity and pixel art."
    }
  ];

  return (
    <section className="px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      
      {/* Flex container to center grid */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
          {projectData.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}