import React from "react";

const storyImages = [
  {
    src: "/1.png",
    alt: "Merna smiling",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/2.jpg",
    alt: "A soft memory together",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/3.jpg",
    alt: "A favorite little moment",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/5.jpg",
    alt: "A happy birthday memory",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/6.jpg",
    alt: "A beautiful chapter",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/8.jpg",
    alt: "Another reason to smile",
    className: "col-span-2 row-span-1",
  },
];

const chapters = [
  {
    number: "01",
    date: "16 / 04 / 2000",
    title: "The Day The World Got Softer",
    text: "You arrived with a light that did not need to be loud. Since that day, every room lucky enough to know you became warmer.",
  },
  {
    number: "02",
    date: "Every Dream You Chased",
    title: "The Girl I Keep Admiring",
    text: "You grew into a woman with taste, talent, patience, and a heart that makes ordinary days feel carefully designed.",
  },
  {
    number: "03",
    date: "When We Became Us",
    title: "My Favorite Plot Twist",
    text: "Some people enter life like a page turn. You entered mine like the whole story finally knew where it was going.",
  },
  {
    number: "04",
    date: "Today And Always",
    title: "Happy Birthday, My Love",
    text: "This birthday is not just about your age. It is about the life you built, the love you give, and the forever I want beside you.",
  },
];

const promises = [
  {
    image: "/letter1.jpeg",
    alt: "A romantic letter memory",
    text: "I will keep choosing you in the quiet days and the loud ones.",
  },
  {
    image: "/letter2.jpeg",
    alt: "A promise written with love",
    text: "I will celebrate every dream you carry like it is my own.",
  },
  {
    image: "/letter3.jpeg",
    alt: "A soft birthday love note",
    text: "I will make home feel like a safe smile whenever you need it.",
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-[#f8fbfb] px-4 py-24"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.94) 0%, rgba(248,251,251,0.88) 36%, rgba(255,212,222,0.48) 100%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#ee9cb0]">
              Our Story
            </p>

            <h2
              className="mb-6 text-5xl leading-none text-[#6c8e8e] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "Italianno, cursive" }}
            >
              The chapter I never want to end
            </h2>

            <p className="mx-auto max-w-xl text-base leading-8 text-gray-600 lg:mx-0">
              This is not a normal timeline. It is the little map of how you
              became my calm place, my proudest smile, and the person I want to
              keep writing life with.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-xl">
              {["Born to shine", "Made with kindness", "Loved forever"].map(
                (item) => (
                  <div
                    key={item}
                    className="border border-[#eba9b9]/40 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-[#6c8e8e] shadow-sm backdrop-blur-md"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 top-8 h-28 w-28 border-[10px] border-[#6c8e8e]/20" />
            <div className="absolute -right-3 bottom-10 h-24 w-24 border-[10px] border-[#ee9cb0]/30" />

            <div className="relative grid h-[430px] grid-cols-4 grid-rows-4 gap-3 sm:h-[500px]">
              {storyImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`group relative overflow-hidden border border-white/70 bg-white shadow-lg ${
                    image.className
                  } ${index % 2 === 0 ? "translate-y-3" : "-translate-y-2"}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6c8e8e]/35 via-transparent to-transparent opacity-70" />
                </div>
              ))}
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-white/80 bg-white/85 text-center shadow-2xl backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#ee9cb0]">
                Birthday
              </span>
              <span className="text-5xl font-black leading-none text-[#6c8e8e]">
                26
              </span>
              <span className="text-xs font-semibold text-gray-500">
                years of you
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-10 flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#ee9cb0]">
                Little Chapters
              </p>
              <h3 className="text-3xl font-bold text-[#6c8e8e] sm:text-4xl">
                How my favorite story reads
              </h3>
            </div>
            <p className="mx-auto max-w-md text-sm leading-7 text-gray-500 sm:mx-0">
              Every chapter keeps pointing to the same ending: a life where
              your smile is the detail I never stop noticing.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#ee9cb0] via-[#6c8e8e] to-[#ee9cb0] sm:block" />

            <div className="grid gap-5">
              {chapters.map((chapter) => (
                <article
                  key={chapter.number}
                  className="relative grid gap-4 border border-[#eba9b9]/35 bg-white/75 p-5 shadow-md backdrop-blur-md sm:ml-14 sm:grid-cols-[9rem_1fr] sm:p-6"
                >
                  <div className="absolute -left-[3.25rem] top-7 hidden h-10 w-10 items-center justify-center border border-[#ee9cb0]/40 bg-white text-sm font-black text-[#ee9cb0] shadow-md sm:flex">
                    {chapter.number}
                  </div>

                  <div>
                    <span className="inline-flex h-9 items-center border border-[#6c8e8e]/20 bg-[#f8fbfb] px-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6c8e8e]">
                      {chapter.date}
                    </span>
                  </div>

                  <div>
                    <h4 className="mb-2 text-2xl font-bold text-[#6c8e8e]">
                      {chapter.title}
                    </h4>
                    <p className="text-sm leading-7 text-gray-600">
                      {chapter.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex min-h-72 flex-col justify-between bg-[#6c8e8e] p-8 text-white shadow-xl">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#ffd4de]">
                My Letter
              </p>
              <p
                className="text-5xl leading-none sm:text-6xl"
                style={{ fontFamily: "Italianno, cursive" }}
              >
                You are my favorite today, tomorrow, and every birthday after.
              </p>
            </div>
            <p className="mt-8 text-sm leading-7 text-white/80">
              Happy birthday, my love. May this year be gentle with your heart,
              generous with your dreams, and full of reasons to smile.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {promises.map((promise, index) => (
              <div
                key={promise.text}
                className="group flex min-h-72 flex-col overflow-hidden border border-[#eba9b9]/35 bg-white/75 shadow-md backdrop-blur-md"
              >
                <div className="h-36 overflow-hidden bg-[#ffd4de]/40">
                  <img
                    src={promise.image}
                    alt={promise.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <span className="text-sm font-black text-[#ee9cb0]">
                    0{index + 1}
                  </span>
                  <p className="mt-8 text-base font-semibold leading-7 text-[#6c8e8e]">
                    {promise.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
