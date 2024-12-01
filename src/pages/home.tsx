import Hadi from "./../assets/hadi.jpg";

export const Home = () => {
  return (
    <>
      <div className="bg-white text-gray-800">
        <header className="flex justify-end items-center p-6 container mx-auto">
          <nav className="space-x-6 font-bold">
            <a href="/" className="text-gray-800">
              Home
            </a>
            <a href="/activity" className="text-gray-800">
              Activity
            </a>
            <a href="/contact" className="text-gray-800">
              Contact
            </a>
          </nav>
        </header>
        <main>
          <section className="py-12 max-w-7xl mx-auto p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1 w-[500px]">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Hi, I am Hadi,
                  <br />
                  Creative Technologist
                </h1>
                <p className="mt-8 text-black max-w-md">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button className="mt-8 bg-blue-800 text-white text-lg px-8 py-3">
                  Download CV
                </button>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={Hadi}
                  alt="Profile picture of Hadi"
                  className="mt-6 rounded-full w-64 h-64 object-cover border-4 border-blue-800"
                />
              </div>
            </div>
          </section>
          <section className="mt-12 bg-blue-500/10">
            <div className="max-w-7xl mx-auto p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Recent posts
                </h2>
                <a href="#" className="text-blue-800">
                  View all
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900">
                    Making a design system from scratch
                  </h3>
                  <p className="mt-2 text-gray-600">
                    12 Feb 2020 | Design, Pattern
                  </p>
                  <p className="mt-4 text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900">
                    Creating pixel perfect icons in Figma
                  </h3>
                  <p className="mt-2 text-gray-600">
                    12 Feb 2020 | Figma, Icon Design
                  </p>
                  <p className="mt-4 text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-12 max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured works</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center space-x-6">
                <img
                  src="https://placehold.co/200x200"
                  alt="Designing Dashboards project screenshot"
                  className="w-[300px] h-[200px] flex-shrink-0 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Designing Dashboards
                  </h3>
                  <p className="mt-2 text-gray-600">2020 | Dashboard</p>
                  <p className="mt-4 text-lg text-gray-600 line-clamp-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi animi officiis neque eveniet porro, iste eaque magni,
                    sed totam, praesentium libero fugiat autem eum quidem
                    quisquam voluptates. Optio dolorem iste laudantium suscipit!
                    Ad asperiores itaque, ratione cum vel consectetur enim harum
                    quis rerum a repellat perspiciatis labore. Repellat qui
                    tenetur aspernatur sit quia earum ipsa. Quia sed repudiandae
                    quos architecto, vero explicabo qui debitis illo praesentium
                    in molestiae autem sit dolor corporis ab similique atque
                    culpa. Beatae, velit! At adipisci ab quos iure est,
                    obcaecati incidunt, culpa officia assumenda repudiandae
                    neque animi corporis error ex id repellendus nam, ea
                    pariatur!
                  </p>
                </div>
              </div>

              <hr />

              <div className="flex items-center space-x-6">
                <img
                  src="https://placehold.co/200x200"
                  alt="Vibrant Portraits of 2020 project screenshot"
                  className="w-[300px] h-[200px] flex-shrink-0 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Vibrant Portraits of 2020
                  </h3>
                  <p className="mt-2 text-gray-600">2018 | Illustration</p>
                  <p className="mt-4 text-lg text-gray-600 line-clamp-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi animi officiis neque eveniet porro, iste eaque magni,
                    sed totam, praesentium libero fugiat autem eum quidem
                    quisquam voluptates. Optio dolorem iste laudantium suscipit!
                    Ad asperiores itaque, ratione cum vel consectetur enim harum
                    quis rerum a repellat perspiciatis labore. Repellat qui
                    tenetur aspernatur sit quia earum ipsa. Quia sed repudiandae
                    quos architecto, vero explicabo qui debitis illo praesentium
                    in molestiae autem sit dolor corporis ab similique atque
                    culpa. Beatae, velit! At adipisci ab quos iure est,
                    obcaecati incidunt, culpa officia assumenda repudiandae
                    neque animi corporis error ex id repellendus nam, ea
                    pariatur!
                  </p>
                </div>
              </div>

              <hr />

              <div className="flex items-center space-x-6">
                <img
                  src="https://placehold.co/200x200"
                  alt="36 Days of Malayalam type project screenshot"
                  className="w-[300px] h-[200px] flex-shrink-0 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    36 Days of Malayalam type
                  </h3>
                  <p className="mt-2 text-gray-600">2018 | Typography</p>
                  <p className="mt-4 text-lg text-gray-600 line-clamp-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi animi officiis neque eveniet porro, iste eaque magni,
                    sed totam, praesentium libero fugiat autem eum quidem
                    quisquam voluptates. Optio dolorem iste laudantium suscipit!
                    Ad asperiores itaque, ratione cum vel consectetur enim harum
                    quis rerum a repellat perspiciatis labore. Repellat qui
                    tenetur aspernatur sit quia earum ipsa. Quia sed repudiandae
                    quos architecto, vero explicabo qui debitis illo praesentium
                    in molestiae autem sit dolor corporis ab similique atque
                    culpa. Beatae, velit! At adipisci ab quos iure est,
                    obcaecati incidunt, culpa officia assumenda repudiandae
                    neque animi corporis error ex id repellendus nam, ea
                    pariatur!
                  </p>
                </div>
              </div>
            </div>

            <hr className="mt-6" />
          </section>
        </main>
        <footer className="bg-gray-800 text-gray-400 py-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
            <p>
              Built with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-red-500 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              by Hadi
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
