import about from "/assets/about.jpg";

export const About = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center font">
        About Our School
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg">
            Welcome to Gharla Skate School, where we turn passion into progress
            on the board! I'm Gharla, a dedicated skateboarding instructor with
            a focus on skill-building, safety, and fostering a vibrant
            skateboarding community. My classes are designed for skaters of all
            levels, whether you're stepping on a skateboard for the first time
            or looking to refine your skills.
          </p>
        </div>
        <div>
          <img
            src={about}
            alt="Skate facility"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);