import React, { useEffect } from "react";

const ScrollPage = () => {

  const ScreenHeight = window.innerHeight


  useEffect(() => {
    const handleScroll = (event) => {
      // Prevent default scrolling
      event.preventDefault();

      // Determine the scroll direction
      const deltaY = event.deltaY;

      // Calculate the scroll speed multiplier
      const speedMultiplier = 1

      // Scroll down or up by 100vh
      if (deltaY > 0) {
        // Scroll to the next section
        window.scrollBy({
          top: window.innerHeight * speedMultiplier,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll to the previous section
        window.scrollBy({
          top: -window.innerHeight * speedMultiplier,
          left: 0,
          behavior: "smooth",
        });
      }
    };

    // Add the scroll listener
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
   <></>
  );
};

export default ScrollPage;
