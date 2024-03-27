/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="pt-20 h-full w-full">
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-zinc-100 rounded-xl p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-left">
                  <h2 className="text-2xl font-bold text-black md:text-3xl">
                    About me
                  </h2>

                  <p className=" text-black/90 sm:mt-4 sm:block">
                    With a work experience of 11 years , astonishingly
                    passionate about the transformative power of makeup, I bring
                    creativity, precision, and a keen eye for detail to every
                    project. my goal is to enhance individual beauty and bring
                    artistic visions to life. Let's create something beautiful
                    together! <br />  <br />Hello, beauty enthusiasts! I'm Ritu , a dedicated
                    makeup artist driven by a profound passion for the art of
                    transformation. With a keen eye for detail and a love for
                    enhancing individual beauty, I embark on a journey where
                    every face becomes my canvas. <br /><br /> My makeup journey began 11
                    years ago, and since then, I've honed my skills through
                    formal training and hands-on experiences. Specializing in a
                    diverse range of styles, from soft and natural to bold and
                    avant-garde, I pride myself on creating looks that resonate
                    with each client's unique personality. Whether it's a
                    glamorous evening event, a high-fashion editorial shoot, or
                    a playful exploration of fantasy makeup, I approach each
                    project with enthusiasm and a commitment to delivering
                    results that exceed expectations. Continuous learning is a
                    cornerstone of my philosophy, as I stay updated on the
                    latest trends, techniques, and products in the ever-evolving
                    world of beauty. My goal is to create an experience where
                    every client not only looks stunning but feels empowered and
                    beautiful from within. Let's embark on a journey of beauty
                    together! For inquiries or to book your personalized makeup
                    session, feel free to reach out through Book your
                    appointment or consultation today to embark on a journey
                    towards radiant and revitalized skin.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <Link
                      to="/pricing"
                      className="inline-block btn2 rounded border  px-12 py-3 text-sm font-medium transition  "
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2  gap-4 md:grid-cols-1 lg:grid-cols-2">
                <img
                  alt="Student"
                  src="src/assets/p1.jpg"
                  className="h-64 lg:object-cover  rounded-xl w-full sm:h-96 md:h-full"
                />

                <img
                  alt="Student"
                  src="src/assets/about2.jpg"
                  className="h-64 rounded-xl w-full object-cover sm:h-96 md:h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
