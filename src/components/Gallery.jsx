import React from "react";

const galleryPhotos = [
  {
    src: "/engaged.jpg",
    alt: "Merna engagement memory",
    title: "The Day Forever Got Real",
    caption: "A promise, a smile, and the beginning of our next chapter.",
    tag: "Forever",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/fatha.jpg",
    alt: "Fatha day memory",
    title: "Blessed Beginning",
    caption: "The kind of day that stays glowing in the heart.",
    tag: "Us",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/ta2deem.jpeg",
    alt: "Family visit memory",
    title: "Home Felt Close",
    caption: "A beautiful step toward the life we are building.",
    tag: "Family",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/iti-first-day.jpeg",
    alt: "Merna first ITI day",
    title: "Dream Girl Energy",
    caption: "You chasing your dream is one of my favorite views.",
    tag: "Proud",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/1.png",
    alt: "Merna portrait",
    title: "My Favorite Face",
    caption: "The smile I keep looking for in every room.",
    tag: "Smile",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/2.jpg",
    alt: "Soft romantic memory",
    title: "Small Magic",
    caption: "A little moment, a big place in my heart.",
    tag: "Soft",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/3.jpg",
    alt: "Favorite birthday memory",
    title: "The Look I Love",
    caption: "Every photo of you carries its own kind of light.",
    tag: "Light",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/5.jpg",
    alt: "Happy love memory",
    title: "Always You",
    caption: "The person I would pick in every version of life.",
    tag: "Love",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/letter1.jpeg",
    alt: "Love letter detail",
    title: "Written For You",
    caption: "Some feelings deserve to be saved like photographs.",
    tag: "Letter",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/letter2.jpeg",
    alt: "Second love letter detail",
    title: "A Promise Page",
    caption: "A quiet note for the loud love I carry for you.",
    tag: "Promise",
    className: "lg:col-span-1 lg:row-span-1",
  },
];

const galleryNotes = [
  "The photos I keep because they feel like home.",
  "The smiles that make every hard day softer.",
  "The memories I would choose again, every time.",
];

export default function Gallery() {
  const featuredPhoto = galleryPhotos[0];
  const mosaicPhotos = galleryPhotos.slice(1);
  const reelPhotos = galleryPhotos.slice(0, 8);

  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-white px-4 py-24"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,251,251,0.96) 34%, rgba(255,212,222,0.42) 100%)",
        }}
      />
      <div className="absolute left-6 top-16 -z-10 hidden h-[78%] w-px bg-gradient-to-b from-transparent via-[#6c8e8e]/35 to-transparent lg:block" />
      <div className="absolute right-6 top-16 -z-10 hidden h-[78%] w-px bg-gradient-to-b from-transparent via-[#ee9cb0]/40 to-transparent lg:block" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#ee9cb0]">
              Gallery
            </p>
            <h2
              className="max-w-2xl text-5xl leading-none text-[#6c8e8e] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "Italianno, cursive" }}
            >
              A museum of all the reasons I love you
            </h2>
          </div>

          <div className="border-l-0 border-[#eba9b9]/50 pt-2 lg:border-l lg:pl-8">
            <p className="max-w-xl text-base leading-8 text-gray-600">
              Every picture here is a little proof: your laugh, your ambition,
              your softness, your beauty, and the way life becomes better when
              you are in the frame.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_1.35fr]">
          <article className="group relative min-h-[34rem] overflow-hidden border border-white/80 bg-white shadow-xl">
            <img
              src={featuredPhoto.src}
              alt={featuredPhoto.alt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263f3f]/85 via-[#263f3f]/25 to-transparent" />

            <div className="absolute left-5 top-5 border border-white/50 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#6c8e8e] backdrop-blur-md">
              Cover Memory
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <span className="mb-4 inline-flex border border-white/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#ffd4de]">
                {featuredPhoto.tag}
              </span>
              <h3 className="max-w-md text-4xl font-black leading-tight sm:text-5xl">
                {featuredPhoto.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                {featuredPhoto.caption}
              </p>
            </div>
          </article>

          <div className="grid auto-rows-[13rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mosaicPhotos.map((photo, index) => (
              <article
                key={`${photo.src}-${photo.title}`}
                className={`group relative overflow-hidden border border-white/80 bg-white shadow-lg ${
                  photo.className
                } ${index === 0 ? "sm:row-span-2" : ""}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6c8e8e]/80 via-[#6c8e8e]/20 to-transparent opacity-85 transition duration-300 group-hover:opacity-95" />

                <div className="absolute left-4 top-4 border border-white/50 bg-white/85 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#ee9cb0] backdrop-blur-md">
                  {photo.tag}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="text-xl font-black leading-tight">
                    {photo.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/80">
                    {photo.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="border border-[#eba9b9]/35 bg-white/75 p-7 shadow-md backdrop-blur-md">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#ee9cb0]">
              Saved Feelings
            </p>

            <div className="grid gap-4">
              {galleryNotes.map((note, index) => (
                <div
                  key={note}
                  className="grid grid-cols-[3rem_1fr] items-center gap-4 border-b border-[#eba9b9]/25 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-[#f8fbfb] text-sm font-black text-[#6c8e8e]">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-gray-600">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border-y border-[#6c8e8e]/25 py-5">
            <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto">
              {reelPhotos.map((photo, index) => (
                <figure
                  key={`reel-${photo.src}`}
                  className="group relative h-52 w-40 shrink-0 snap-start overflow-hidden border border-white/80 bg-white shadow-md sm:w-48"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-white/90 px-3 py-3 text-[#6c8e8e] backdrop-blur-md">
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#ee9cb0]">
                      Frame {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-sm font-bold leading-tight">
                      {photo.title}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <p
          className="mx-auto mt-16 max-w-3xl text-center text-5xl leading-none text-[#6c8e8e] sm:text-6xl"
          style={{ fontFamily: "Italianno, cursive" }}
        >
          And still, the best photo is the next one we take together.
        </p>
      </div>
    </section>
  );
}