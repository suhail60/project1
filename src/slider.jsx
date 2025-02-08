// import React from 'react'

// function slider() {
//   return (
//     <div className='container'>
//         <div className='slider'>
//         <div className="slides">
//             <div className="card">
//              <div className="headlines">
//                 <span>1st India tour of pakistan, 2024</span>
//                 <button>Live</button>
//              </div>
//              <div className="subhead">
//              <h4>Day 2: 2nd Session - india trail by 360 <br /> runs </h4>
//              </div>
//              <div className="vs">
//                 <div className="team1">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" alt="" />
//                     <h2>India</h2>
//                     <span>360/7</span>
//                 </div>
//                 <div className="team2">
//                     <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="" />
//                     <h2>pakistan</h2>
//                     <span>Yet To Be</span>
//                 </div>
//              </div>
//              <h5>Brisbane Heat Women won by 9 wkts</h5>
//             </div>
        
//         <div className="card">
//              <div className="headlines">
//                 <span>1st India tour of pakistan, 2024</span>
//                 <button>Live</button>
//              </div>
//              <div className="subhead">
//              <h4>Day 2: 2nd Session - india trail by 360 <br /> runs </h4>
//              </div>
//              <div className="vs">
//                 <div className="team1">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" alt="" />
//                     <h2>India</h2>
//                     <span>360/7</span>
//                 </div>
//                 <div className="team2">
//                     <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="" />
//                     <h2>pakistan</h2>
//                     <span>Yet To Be</span>
//                 </div>
//              </div>
//              <h5>Brisbane Heat Women won by 9 wkts</h5>
//             </div>
//             <div className="card">
//              <div className="headlines">
//                 <span>1st India tour of pakistan, 2024</span>
//                 <button>Live</button>
//              </div>
//              <div className="subhead">
//              <h4>Day 2: 2nd Session - india trail by 360 <br /> runs </h4>
//              </div>
//              <div className="vs">
//                 <div className="team1">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" alt="" />
//                     <h2>India</h2>
//                     <span>360/7</span>
//                 </div>
//                 <div className="team2">
//                     <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="" />
//                     <h2>pakistan</h2>
//                     <span>Yet To Be</span>
//                 </div>
//              </div>
//              <h5>Brisbane Heat Women won by 9 wkts</h5>
//             </div>
//             <div className="card">
//              <div className="headlines">
//                 <span>1st India tour of pakistan, 2024</span>
//                 <button>Live</button>
//              </div>
//              <div className="subhead">
//              <h4>Day 2: 2nd Session - india trail by 360 <br /> runs </h4>
//              </div>
//              <div className="vs">
//                 <div className="team1">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" alt="" />
//                     <h2>India</h2>
//                     <span>360/7</span>
//                 </div>
//                 <div className="team2">
//                     <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="" />
//                     <h2>pakistan</h2>
//                     <span>Yet To Be</span>
//                 </div>
//              </div>
//              <h5>Brisbane Heat Women won by 9 wkts</h5>
//             </div>
//              <div className="card">
//              <div className="headlines">
//                 <span>1st India tour of pakistan, 2024</span>
//                 <button>Live</button>
//              </div>
//              <div className="subhead">
//              <h4>Day 2: 2nd Session - india trail by 360 <br /> runs </h4>
//              </div>
//              <div className="vs">
//                 <div className="team1">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" alt="" />
//                     <h2>India</h2>
//                     <span>360/7</span>
//                 </div>
//                 <div className="team2">
//                     <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="" />
//                     <h2>pakistan</h2>
//                     <span>Yet To Be</span>
//                 </div>
//              </div>
//              <h5>Brisbane Heat Women won by 9 wkts</h5>
//             </div>
//             </div>

//     </div>
//     </div>
//   )
// }

// export default slider
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, match: "India vs Pakistan", status: "Live", score: "360/7", result: "Match Ongoing" },
    { id: 2, match: "Australia vs England", status: "Live", score: "275/6", result: "Match Ongoing" },
    { id: 3, match: "South Africa vs Sri Lanka", status: "Live", score: "198/3", result: "Match Ongoing" },
    { id: 4, match: "New Zealand vs West Indies", status: "Live", score: "312/5", result: "Match Ongoing" },
    { id: 5, match: "Bangladesh vs Afghanistan", status: "Live", score: "260/4", result: "Match Ongoing" }
  ];

  const maxIndex = cards.length - 3;

  const slideLeft = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slideRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: slideLeft,
    onSwipedRight: slideRight,
    trackMouse: true
  });

  return (
    <div className="slider-container" {...handlers}>
    
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 34}%)` }}>
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div className="headlines">
                <span>{card.match}</span>
                <button>{card.status}</button>
              </div>
              <div className="subhead">
                <h4>{card.match} - {card.status}</h4>
              </div>
              <div className="vs">
                <div className="team1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" alt="India Flag" />
                  <h2>India</h2>
                  <span>{card.score}</span>
                </div>
                <div className="team2">
                  <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="Pakistan Flag" />
                  <h2>Pakistan</h2>
                  <span>{card.result}</span>
                </div>
              </div>
              <h5>{card.result}</h5>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Slider;
