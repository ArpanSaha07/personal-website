'use client';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-15 md:px-20 bg-white w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-[2000px] mx-auto">
        {/* LEFT SECTION */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="section-heading mt-5 mb-3">Contact Me</h2>
          <p className="text-gray-600 text-lg max-w-md">
            Open to all project inquiries, ideas, and creative conversations.
          </p>
          
          <button className="mt-6 relative overflow-hidden rounded-full text-black text-[18px] font-semibold border-black border-1 px-6 py-2 w-fit hover:text-white transition-all duration-300 flex items-center gap-2 group">
            <Link href="mailto:sahaarpan550@gmail.com">
              <span className="relative z-10">SCHEDULE A CALL</span>
              <span className="relative z-10"> ↗</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-full 
                              transition-all duration-500 ease-out 
                              group-hover:w-[600px] group-hover:h-[600px] 
                              transform -translate-x-1/2 translate-y-1/2 origin-bottom"
              />
            </Link>
          </button>
        </div>

        {/* RIGHT SECTION - FORM */}
        <form
          className="lg:w-1/2 w-full max-w-xl rounded-2xl border border-gray-400 p-6 md:p-8 flex flex-col gap-4 text-gray-700 text-lg"
          action="https://formsubmit.co/sahaarpan550@gmail.com" method="POST"
        >
          {/* Name & Email */}
          <div className="flex flex-col lg:flex-row gap-4 overflow-hidden">
            <input
              type="text"
              name="Name"
              placeholder="Your Name *"
              className="flex-1 border-b border-gray-400 outline-none py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              className="flex-1 border-b border-gray-400 outline-none py-2"
              required
            />
          </div>

          {/* Dropdown */}
          <select
            name="subject"
            className="border-b border-gray-400 py-2 outline-none text-gray-400"
            required
            defaultValue=""
          >
            <option value="" disabled>What are you looking for?</option>
            <option value="freelance">Freelance Collaboration</option>
            <option value="idea">Project Idea</option>
            <option value="chat">General Chat</option>
            <option value="other">Sending hi from a long lost friend</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            className="border-b border-gray-600 py-2 outline-none resize-none min-h-[100px]"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="relative overflow-hidden bg-black text-white font-semibold rounded-full py-3 border-black border-1 hover:bg-transparent hover:text-black transition-all duration-300 group"
          >
            <span className="relative z-10">SUBMIT</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-white rounded-full 
                            transition-all duration-500 ease-out 
                            group-hover:w-[800px] group-hover:h-[800px] 
                            transform -translate-x-1/2 translate-y-1/2 origin-bottom"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
