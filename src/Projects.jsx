import { Card, CardContent } from "./Card";

export function Projects() {
    return (
        <>
            <section className="px-6 py-10">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                {["Leaf Health App", "VR Learning System", "Game Prototype"].map((project, index) => (
                    <Card key={index} className="bg-white dark:bg-gray-800 transition-colors duration-200">
                    <CardContent>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        A brief description of the project.
                      </p>
                    </CardContent>
                    </Card>        
                ))}
                </div>
            </section>
        </>
    );
}