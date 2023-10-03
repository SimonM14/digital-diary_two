import React from "react";
import Footer from "./Footer";
import LogSin from "./LogSinForm";

const WelcomePage = () => {
  return (
    <span>
      <h1 style={{ fontSize: 40, color: "", textAlign: "center" }}>
        Welcome to Your Digital Diary
      </h1>
      <div className="welcome-page">
      <p style={{ fontSize: 20, fontFamily: "" }}>
        Welcome to Mi-thoughts-Your Personal Digital Diary.In this fast-paced
        world, it's easy to lose track of our thoughts, emotions, and
        experiences. That's why we created Mi-Thoughts. A place where you can
        record, reflect, and relive your personal journey with ease and joy.
        <br />
        <br />
        With our intuitive and beautifully designed interface, documenting your
        daily musings, significant events, and inspiring discoveries has never
        been simpler. Whether you're looking to express your deepest thoughts or
        simply capture the highlights of your day. is here to help you tell your
        story.
      </p>
      <div className="container">
        <LogSin />
      </div>

      {/* Add a button to navigate to the EntriesPage */}
      <Footer />
    </div>
    </span>
  );
};

export default WelcomePage;
