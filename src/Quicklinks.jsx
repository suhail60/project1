// import React from 'react'

// function Quicklinks() {
//   return (
//     <div className='containers' >
//         <div className="container">
//             <div className="sticky">
//                 <span>Quick Links</span>
//             </div>
//             <div className="slider">
//                 <div className="links">
//                     <div className="content">
//                         <h3>News</h3>
//                     </div>
//                     <div className="content">
//                         <h3>BGT 2024-25</h3>
//                     </div>
//                     <div className="content">
//                         <h3>Team India</h3>
//                     </div>
//                     <div className="content">
//                         <h3>Fantasy Handbook</h3>
//                     </div>
//                     <div className="content">
//                         <h3>See Plans</h3>
//                     </div>
//                     <div className="content">
//                         <h3>CB plus & Time Primes</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Quicklinks
// import React, { useState, useRef } from "react";

// function Quicklinks() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalLinks = 6; // Number of links
//   const visibleLinks = 3; // Number of visible links at a time
//   const sliderRef = useRef(null);
  
//   // Handle touch gestures
//   let startX = 0;
//   const handleTouchStart = (e) => {
//     startX = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     let diff = e.touches[0].clientX - startX;
//     if (diff > 50) {
//       handlePrev(); // Swipe right
//     } else if (diff < -50) {
//       handleNext(); // Swipe left
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < totalLinks - visibleLinks) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="containers">
//       <div className="container">
//         <div className="sticky">
//           <span>Quick Links</span>
//         </div>

//         <div
//           className="slider"
//           ref={sliderRef}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//         >
//           <div
//             className="links"
//             style={{ transform: `translateX(-${currentIndex * 33}%)` }}
//           >
//             <div className="content">
//               <h3>News</h3>
//             </div>
//             <div className="content">
//               <h3>BGT 2024-25</h3>
//             </div>
//             <div className="content">
//               <h3>Team India</h3>
//             </div>
//             <div className="content">
//               <h3>Fantasy Handbook</h3>
//             </div>
//             <div className="content">
//               <h3>See Plans</h3>
//             </div>
//             <div className="content">
//               <h3>CB plus & Time Primes</h3>
//             </div>
//           </div>
//         </div>

//         {/* Optional: Add buttons to manually slide */}
//         <button className="slider-btn left" onClick={handlePrev}>
//           {"<"}
//         </button>
//         <button className="slider-btn right" onClick={handleNext}>
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Quicklinks;
import React, { useState, useRef } from "react";

function Quicklinks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLinks = 6; // Number of links
  const visibleLinks = 3; // Number of visible links at a time
  const sliderRef = useRef(null);

  let startX = 0;
  
  // Handle touch start
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      e.preventDefault(); // Prevents default scroll
      diff > 0 ? handlePrev() : handleNext();
    }
  };

  // Move Next
  const handleNext = () => {
    if (currentIndex < totalLinks - visibleLinks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Move Previous
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="containers">
      <div className="container">
        <div className="sticky">
          <span>Quick Links</span>
        </div>

        <div
          className="slider"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="links"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleLinks)}%)`,
              transition: "transform 0.3s ease-in-out",
              display: "flex",
            }}
          >
            {["News", "BGT 2024-25", "Team India", "Fantasy Handbook", "See Plans", "CB plus & Time Primes"].map((item, index) => (
              <div className="content" key={index}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="slider-btn left" onClick={handlePrev} disabled={currentIndex === 0}>
        <i class="ri-arrow-left-circle-fill"></i>
        </button>
        <button className="slider-btn right" onClick={handleNext} disabled={currentIndex >= totalLinks - visibleLinks}>
        <i class="ri-arrow-right-circle-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Quicklinks;


