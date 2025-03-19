import React, { useEffect, useRef } from "react";

const ScrollPage = () => {

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      // If already scrolling, return
      if (isScrollingRef.current) return;
      // console.log("isScrollingRef.current = ", isScrollingRef.current)
      
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const deltaY = event.deltaY;
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Calculate the target scroll position
      const targetScroll = deltaY > 0
        ? Math.ceil(currentScroll / viewportHeight) * viewportHeight + viewportHeight
        : Math.floor(currentScroll / viewportHeight) * viewportHeight - viewportHeight;
      // console.log("targetScroll = ", targetScroll)

      // Set scrolling flag
      isScrollingRef.current = true;

      // Perform the scroll
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });

      // Reset the scrolling flag after animation
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1700); // Adjust this value based on your needs
    };

    // Add the scroll listener
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Your content goes here */}
    </div>
  );
};

export default ScrollPage;