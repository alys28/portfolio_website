const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        display: "flex",
        padding: "20px",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `url(${require("../img/contact_bg.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col bg-bg_contact shadow-[0px_5px_11px_8px_rgba(255,255,255,0.2)] rounded-lg p-5 w-[80%] m-5">
        <h1 className="font-bold text-[50px] text-white p-10 text-center">
          Get in Touch!
        </h1>
        <h2 className="text-gray-300 text-xl">
          Have a question? Feel free to hit me up! Send me an email:{" "}
          <a
            href="mailto:alyshariff2810@gmail.com"
            className="underline underline-offset-2"
          >
            alyshariff2810@gmail.com
          </a>
        </h2>
        <form className="flex flex-col justify-around">
          <div className="flex flex-wrap">
            <input
              required
              type="text"
              name="name"
              placeholder="Full name"
              className="m-5 p-2 rounded-sm bg-transparent border-b-2 text-white flex-1"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="m-5 p-2 rounded-sm bg-transparent border-b-2 text-white flex-1"
            />
          </div>
          <textarea
            required
            type="text"
            placeholder="Your message"
            className="m-5 p-2 rounded-sm bg-transparent border-2 min-h-[100px] text-white"
          />
          <button
            type="submit"
            className="bg-white font-bold  text-indigo-600 hover:translate-y-[5px] hover:bg-indigo-800 hover:text-white	 w-[20%] self-center p-2 m-5 rounded-lg shadow-[0px_5px_11px_8px_rgba(0,0,0,0.1)]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="absolute right-0 bottom-0 p-3 text-xs">
        <a
          className="text-white font-ChivoMono"
          href="https://www.freepik.com/free-vector/abstract-colorful-technology-dotted-wave-background_6166234.htm#query=modern%20background&position=0&from_view=keyword"
          target="_blank"
        >
          Image by Harryarts on Freepik
        </a>
      </div>
    </div>
  );
};

export default Contact;
