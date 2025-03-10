const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Want to Interact? Send me an E-mail through this button and I'll
          respond,Whenever I can.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jiteshjangid1008@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-Lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
