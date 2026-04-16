import React from "react";

export default function Moments() {
  const moments = [
    {
      title: "💫 16 / 4 / 2000 ",
      desc: "اليوم اللي الدنيا نورت فيه 💖... يوم ما اتولدتي، وأجمل قلب دخل الحياة.",
      media: "/child.png",
      type: "image",
    },
    {
      title: "🎓 25 / 11 / 2024 --- أول يوم فى ال iti",
      desc: "أول يوم ليكي في ITI... بداية طريق كبير وحلم بدأ يتحقق خطوة بخطوة.",
      media: "/iti-first-day.jpeg",
      type: "image",
    },
    {
      title: "🎉 26 / 4 / 2025 --- تخرج ال iti",
      desc: "يوم التخرج من ITI 👩‍🎓... بقيتي UI Designer شاطرة جدًا، وفخور بيكي بكل خطوة 💖",
      media: "/iti-graduate.mp4",
      type: "video",
    },
    {
      title: "🤍 7 / 5 / 2025 --- اتقدمتلك",
      desc: "أول مرة أدخل بيتك وأقعد مع أهلك... لحظة عمري ما هنساها ❤️",
      media: "/ta2deem.jpeg",
      type: "image",
    },
    {
      title: "🤍 27 / 6 / 2025 --- قراية فتحتنا",
      desc: "قراية الفاتحة... أول إحساس حقيقي إننا بقينا لبعض، وكان يوم مليان حب وسعادة ✨",
      media: "/fatha.jpg",
      type: "image",
    },
    {
      title: "💍 26 / 7 / 2025 --- خطوبتنا",
      desc: "يوم خطوبتنا... أهم يوم في حياتنا لحد دلوقتي، اليوم اللي أعلننا فيه حبنا قدام الدنيا كلها 💖",
      media: "/engaged.jpg",
      type: "image",
    },
  ];

  return (
    <section
      dir="rtl"
      id="moments"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/story-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Cairo, sans-serif", // 🔥 الخط الأساسي
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-[#ffcbd8]/30 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl mb-12"
          style={{
            fontFamily: "Italianno, cursive", // 💖 رومانسي
            color: "#6c8e8e",
          }}
        >
          Best Moments 💖
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {moments.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl 
                overflow-hidden
                bg-white/80 
                backdrop-blur-md 
                shadow-lg 
                hover:scale-105 
                hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* MEDIA */}
              <div className="w-full h-48 overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={item.media}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={item.media}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-5 text-right">
                <h3 className="text-lg font-semibold text-[#6c8e8e] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* FOOTER */}
        <p className="mt-10 text-gray-500 text-sm">
          كل لحظة معاكي هي أجمل حاجة حصلتلي 💫
        </p>
      </div>
    </section>
  );
}