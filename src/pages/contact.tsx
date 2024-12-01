import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Contact = () => {
  return (
    <>
      <div className="bg-white text-gray-800">
        <Header />
        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
            {/* Left section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
              <p className="block text-sm font-medium mb-2">
                I'm very approachable and would love to speak to you. Feel free
                to call, send me an email. Follow me on social media or simply
                complete the enquiry form.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <p>+62821-7192-1388</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </svg>
                  <p>hadiparker12@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right section (Form) */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your message
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
