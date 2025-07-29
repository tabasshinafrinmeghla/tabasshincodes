import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';

const Footer = () => {
  return (
    <div>
      <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] text-center">
            Ready to take <span className="text-purple">your</span> digital presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
          </p>

          {/* ✅ Contact Form */}
          <form
            action="https://formsubmit.co/tabasshinafrinmeghla@gmail.com"
            method="POST"
            className="flex flex-col gap-4 w-full max-w-xl mt-6"
          >
            {/* Email input */}
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-300 text-white-100"
            />

            {/* Subject input */}
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="p-3 rounded-md border border-gray-300 text-white-100"
            />

            {/* Message input */}
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="p-3 rounded-md border border-gray-300 text-white-100"
            />

            {/* Submit button */}
            <button type="submit">
              <MagicButton
                title="Contact Me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </button>

            {/* Optional: redirect after submission */}
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
            {/* Optional: disable CAPTCHA */}
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>

        {/* ✅ Social Icons */}
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
          <p className="md:text-base text-sm md:font-normal font-light text-center">
            © 2025 Tabasshin Afrin Meghla
          </p>

          <div className="flex gap-4">
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={profile.img} alt={`social-${profile.id}`} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
