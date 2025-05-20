"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

// Simple typewriter effect that shows a typing animation
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentWord = words[wordIndex].text;
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (text.length < currentWord.length) {
        // Still typing the current word
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, 100); // Adjust speed as needed
      } else {
        // Word completed, keep it visible for a while
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setWordIndex((prev) => (prev + 1) % words.length);
          setText('');
        }, 2000); // Pause before typing the next word
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isTyping, words]);
  
  return (
    <div className={cn(
      "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
      className
    )}>
      {words.map((word, idx) => {
        if (idx === wordIndex) {
          // Only show the actively typing word
          return (
            <span key={`word-${idx}`} className={word.className}>
              {text}
            </span>
          );
        } else if (idx < wordIndex) {
          // Show completed words
          return (
            <React.Fragment key={`word-${idx}`}>
              <span className={word.className}>{word.text}</span>
              {" "}
            </React.Fragment>
          );
        }
        return null;
      })}
      <span
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 animate-pulse",
          cursorClassName
        )}
      ></span>
    </div>
  );
};

// Smoother version with a sliding effect that plays once then shows full text
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    // Skip animation if already completed
    if (isComplete) return;
    
    let timeout: NodeJS.Timeout;
    
    if (isAnimating) {
      const currentWord = words[wordIndex].text;
      
      if (text.length < currentWord.length) {
        // Type the word character by character
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, 50); // Slightly faster typing for smoother appearance
      } else {
        // Word completed
        if (wordIndex < words.length - 1) {
          // Move to next word after a pause
          timeout = setTimeout(() => {
            setWordIndex(wordIndex + 1);
            setText('');
          }, 600); // Shorter pause between words
        } else {
          // All words completed, show final state
          timeout = setTimeout(() => {
            setIsAnimating(false);
            setIsComplete(true);
          }, 800); // Shorter final pause
        }
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, wordIndex, words, isAnimating, isComplete]);
  
  // Render the completed text (all words) when animation is complete
  if (isComplete) {
    return (
      <div className={cn("flex items-center space-x-1 my-6", className)}>
        <div className="overflow-visible">
          <div 
            className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
            style={{ whiteSpace: "nowrap" }}
          >
            {words.map((word, idx) => (
              <React.Fragment key={`word-${idx}`}>
                <span className={word.className}>{word.text}</span>
                {idx < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </div>
        </div>
        <span
          className={cn(
            "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500 animate-pulse",
            cursorClassName
          )}
        ></span>
      </div>
    );
  }
  
  // Show the typing animation
  return (
    <div className={cn("flex items-center space-x-1 my-6", className)}>
      <div className="overflow-hidden">
        <div 
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Show completed words */}
          {words.map((word, idx) => {
            if (idx < wordIndex) {
              return (
                <React.Fragment key={`word-${idx}`}>
                  <span className={word.className}>{word.text}</span>
                  {" "}
                </React.Fragment>
              );
            }
            return null;
          })}
          
          {/* Show current word being typed */}
          {wordIndex < words.length && (
            <span className={words[wordIndex].className}>
              {text}
            </span>
          )}
        </div>
      </div>
      <span
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500 animate-pulse",
          cursorClassName
        )}
      ></span>
    </div>
  );
};
