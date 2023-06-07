function Contact() {
   return (
      <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
         <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8 flex flex-row justify-center">
               <p className="text-5xl font-bold inline border-gray-500">Contact</p>
            </div>

            <div className="flex justify-center items-center">
               <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col w-full md:w-1/2">
                  <input type="hidden" name="access_key" value="b112561c-f111-4ad0-a285-d9cab17089c1" />
                  <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                  <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                  <input type="text" name="name" placeholder="John Doe" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                  <input type="text" name="email" placeholder="you@company.com" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                  <textarea name="message" rows="10" placeholder="Your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                  <button type="button" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Contact;
