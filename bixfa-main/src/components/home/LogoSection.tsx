// src/components/LogoSection.tsx
import React from "react";
import { Link } from "react-router-dom"; // If you want links, otherwise just images

const LogoSection = () => {
  return (
    <section className="bg-[#060f15] py-6">
      <div className="container mx-auto flex justify-center items-center space-x-20">
        <Link to="https://www.amazon.com" className="text-white">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="w-32" />
        </Link>
        <Link to="https://www.linkedin.com" className="text-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2013.svg"
            alt="LinkedIn"
            className="w-48 text-[#0077B5]"
          />
        </Link>
        <Link to="https://www.google.com" className="text-white">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-32" />
        </Link>
        <Link to="https://www.spotify.com" className="text-white">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Spotify_logo_with_text.svg" alt="Spotify" className="w-32" />
        </Link>
        <Link to="https://www.slack.com" className="text-white">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Slack_Icon_2019.svg" alt="Slack" className="w-32" />
        </Link>
      </div>

      <div className="h-[1px] bg-white my-6 mx-4"></div>
    </section>
  );
};

export default LogoSection;
