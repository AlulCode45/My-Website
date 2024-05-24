"use client";
import { useState, useEffect } from "react";

const ChangingTextEffect = () => {
  const [texts] = useState<string[]>([
    "Create your website with me!",
    "Let's build something amazing together!",
    "Exploring a world of endless possibilities.",
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    let currentIndex = 0;
    let currentDisplayedText = "";

    const interval = setInterval(() => {
      currentDisplayedText += texts[currentTextIndex][currentIndex];
      setDisplayedText(currentDisplayedText);
      currentIndex++;

      if (currentIndex === texts[currentTextIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) =>
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1,
          );
        }, 3500); // Delay before switching to the next text
      }
    }, 100); // Speed of typing

    return () => clearInterval(interval);
  }, [currentTextIndex, texts]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <span>{displayedText}</span>
      <span style={{ visibility: cursorVisible ? "visible" : "hidden" }}>
        |
      </span>
    </div>
  );
};

export default ChangingTextEffect;
