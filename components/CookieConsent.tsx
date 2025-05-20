"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 text-white md:flex md:items-center md:justify-between shadow-lg">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:flex-1 md:pr-6">
            <h3 className="text-lg font-semibold mb-2">Cookie Notice</h3>
            <p className="text-sm mb-4 md:mb-0">
              We use cookies to enhance your experience on our website. By clicking "Accept All", 
              you consent to the use of all cookies. Visit our{" "}
              <Link href="/privacy" className="underline text-blue-300 hover:text-blue-400">
                Privacy Policy
              </Link>{" "}
              to learn more about how we use cookies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm rounded-md bg-transparent border border-white hover:bg-gray-800 transition-colors duration-200"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
