import heroimg from "../assets/images/pphero.svg";

export function Introduction() {
    return (
      <section className="py-20 text-center">
        <div>
          <img
            src={heroimg}
            alt="Hero"
            className="mx-auto w-96 h-96 pb-10"
          />
        </div>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Hello, I'm Hilmi 👋</h2>
          <p className="mt-4 text-lg text-gray-300">
            Android Developer | Game Developer | Educator
          </p>
          <p className="mt-4 text-md text-gray-300">
          A fresh graduate majoring in Information Technology Education who has an interest in mobile application development with experience in building Android applications using Kotlin and Java. Strong understanding of Object Oriented Programming (OOP), Firebase, and cloud-based API development. Experienced in collaborating with cross functional teams to develop functional, efficient, and user-friendly applications. Familiar with using Git for version control and have good communication skills in conveying ideas and technical challenges. 
          </p>
          <button className="mt-6 px-4 py-2 bg-secondarycolor text-maincolor rounded-lg hover:bg-tertiarycolor transition-all duration-200">
            Download Resume
          </button>
        </div>
      </section>
    );
  }  