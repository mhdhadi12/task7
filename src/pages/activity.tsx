import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Activity = () => {
  return (
    <>
      <div className="bg-white text-gray-800">
        <Header />
        <main>
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
        <Footer />
      </div>
    </>
  );
};
