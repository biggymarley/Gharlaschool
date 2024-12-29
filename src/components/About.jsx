import about from "/assets/about.jpg";

export const About = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center items-end gap-4">
        <h2 className="text-4xl font-bold mb-12 text-center font">About me</h2>
        <span className="text-xl font-light mb-12 text-center font text-yellow-400">
          Youness Ouahid
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg">
            Welcome! I'm <span className="text-yellow-500">Gharla</span>, and
            I'm here to help turn your skateboarding passion into real progress.
            As your dedicated instructor, I believe in building solid skills,
            keeping you safe, and creating an awesome skating community right
            here. Whether you're about to step on a board for the first time or
            you're looking to level up your skills, I've designed my classes to
            meet you where you are. Every beginner has a unique journey, and I'm
            excited to be part of yours!
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
