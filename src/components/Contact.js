function Contact() {
  return (
    <div className="relative flex flex-col h-1/2 items-center justify-center bg-customblack z-10 pt-12 md:pt-32 -mt-12 pb-24 md:pb-32 mb-10 text-white" id="contact">
      <div className="text-4xl font-bold underline text-center mx-4 mb-4">
        Let's get in touch!
      </div>
      <div className="text-2xl px-5 md:px-12 text-center mb-4">
        If you wish to contact me, feel free to shoot me an email!
      </div>

      <a className="flex flex-row bg-gradient-to-r from-customblue to-gray-500 hover:to-customyellow text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" href="mailto:dansakai0@gmail.com" rel="noopener noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Say Hello</span>
      </a>
    </div>
  );
}

export default Contact;
