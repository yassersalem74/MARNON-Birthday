import React from "react";

export default function Hero() {
  const images = [
    { src: "/1.png", type: "main" },

    { src: "/2.jpg", pos: "topLeft" },
    { src: "/3.jpg", pos: "topRight" },
    { src: "/5.jpg", pos: "bottomRight" }, 
    { src: "/6.jpg", pos: "bottomLeft" },
    { src: "/8.jpg", pos: "top" },
  ];

  const positions = {
    main: "w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 z-10",

    top: "absolute top-[-60px] sm:top-[-80px] lg:top-[-110px] w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44",

    topLeft:
      "absolute -left-10 sm:-left-16 lg:-left-28 -top-6 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52",

    topRight:
      "absolute -right-10 sm:-right-16 lg:-right-28 -top-6 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52",

    bottomLeft:
      "absolute -left-6 sm:-left-12 lg:-left-20 bottom-[-40px] w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52",

    bottomRight:
      "absolute right-0 sm:right-4 lg:right-10 bottom-[-60px] w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52",
  };

  return (
    <section
      id="home"
      className="relative py-28 px-4 lg:px-0 bg-[#f8fbfb] overflow-hidden"
    >
      {/* background decoration */}
      <div className="absolute w-24 h-24 bg-[#6c8e8e]/20 rounded-full top-10 left-10 blur-xl"></div>
      <div className="absolute w-20 h-20 bg-[#ee9cb0]/40 rounded-full bottom-20 right-10 blur-lg"></div>

      <div className="max-w-6xl mx-auto text-center">

        {/* IMAGES */}
        <div className="relative flex justify-center items-center mb-24">

          {images.map((img, index) => {
            const isFive = img.src === "/5.jpg";

            return (
              <div
                key={index}
                className={`
                  ${positions[img.type || img.pos]}
                  rounded-full border-[6px] border-[#ee9cb0]
                  overflow-hidden shadow-xl
                  transition-all duration-500
                  hover:scale-110
                `}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* ring */}
          <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] lg:w-[34rem] lg:h-[34rem] border-[14px] border-[#6c8e8e]/30 rounded-full -z-10"></div>
        </div>

        {/* TEXT */}
        <h2 className="text-3xl sm:text-4xl  lg:text-5xl  font-bold text-[#ee9cb0] mb-6 leading-snug">
          From a little princess 👶 <br /> <p className="text-[#6c8e8e]"> to my forever queen 👑</p>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">
          On <span className="text-[#ee9cb0] font-bold text-xl">16/4/2000</span>,
          the world became more beautiful… because you were born 💖
        </p>

        <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">
          I watched you grow through moments, smiles, dreams, and memories…
          and today, at{" "}
          <span className="text-[#ee9cb0] font-bold text-xl">26</span>,
          you are more than just a story — you are my favorite chapter ✨
        </p>

        <button className="px-8 py-3 rounded-xl border border-[#6c8e8e] text-[#6c8e8e] hover:text-white hover:bg-gradient-to-r hover:from-[#6c8e8e] hover:to-[#ee9cb0] transition-all duration-300 hover:scale-105">
          Our Journey 💫
        </button>
      </div>
    </section>
  );
}