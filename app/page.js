"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");
  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main className="overflow-x-hidden">
      <section className="min-h-[100vh] bg-[#254f1a] grid grid-cols-1 md:grid-cols-2 py-16 md:py-0 items-center">
        <div className="px-6 md:ml-[7vw] flex justify-center gap-3 flex-col">
          <p className="text-yellow-300 text-4xl md:text-7xl font-bold">
            A link in bio
          </p>
          <p className="text-yellow-300 text-4xl md:text-7xl font-bold">
            {" "}
            built for you.
          </p>
          <p className="text-yellow-300 text-base md:text-xl my-4">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-white py-3 px-5 rounded-lg focus:outline-green-900 text-black w-full sm:w-auto"
              placeholder="Enter Your Handle"
            />
            <button
              type="button"
              onClick={() => createTree()}
              className="bg-pink-200 px-6 py-3 md:py-4 rounded-full text-black font-semibold cursor-pointer whitespace-nowrap"
            >
              Claim your Bittree
            </button>
          </div>
        </div>
        <div className="px-6 md:mr-[7vw] flex flex-col justify-center items-center mt-10 md:mt-0">
          <img
            src="/home.png"
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-none h-auto"
          />
        </div>
      </section>

      <section className="min-h-[100vh] bg-[#2665d6] grid grid-cols-1 md:grid-cols-2 py-16 md:py-0 items-center">
        <div className="px-6 md:ml-[7vw] flex justify-center gap-3 flex-col order-2 md:order-1">
          <video
            width="1520"
            height="1408"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto object-cover rounded-lg"
          >
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
              type='video/mp4; codecs="hvc1"'
            />
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-6 md:mr-[7vw] flex flex-col justify-center gap-2 items-start order-1 md:order-2 mb-10 md:mb-0">
          <p className="text-[#d2e823] text-4xl md:text-7xl font-bold">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-[#d2e823] text-base md:text-xl my-4">
            Connect all your content across social media, websites, stores and
            more in one link in bio. Customize every detail or let Linktree
            automatically enhance it to match your brand and drive more clicks.
          </p>
          <Link href={"/generate"}>
            <button className="bg-[#d2e823] rounded-full font-semibold px-10 md:px-16 cursor-pointer py-4 md:py-5 text-black">
              Get started for free
            </button>
          </Link>
        </div>
      </section>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#e8efd6] py-16 md:py-0 items-center">
        <div className="px-6 md:ml-[7vw] flex justify-center gap-3 flex-col">
          <Image
            src="/webimg.png"
            alt="Analyze your audience and keep them engaged"
            width={1392}
            height={1408}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="px-6 md:mr-[7vw] flex flex-col justify-center mt-10 md:mt-0 items-start md:ml-15 gap-6 md:gap-10">
          <p className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Analyze your audience and keep them engaged
          </p>
          <p className="text-base md:text-xl text-gray-700">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <Link href={"/generate"}>
            <button className="bg-[#e9c0e9] rounded-full font-semibold px-10 md:px-16 cursor-pointer py-4 md:py-5 text-black">
              Get started for free
            </button>
          </Link>
        </div>
      </section>

      <section className="min-h-screen bg-[#780016] py-16 md:py-20 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-extrabold text-center text-[#E9C0E9] tracking-tight mb-10 md:mb-14">
            Questions? Answered
          </h2>

          <div className="flex flex-col gap-4">
            <div className="bg-[#51000F] rounded-3xl px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-4">
              <p className="text-base md:text-xl font-bold text-[#F3D8F3]">
                Why should I choose BitTree for my link in bio?
              </p>
              <svg
                className="w-5 h-5 text-[#F3D8F3] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="bg-[#51000F] rounded-3xl px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-4">
              <p className="text-base md:text-xl font-bold text-[#F3D8F3]">
                Can I customize the theme and colors of my BitTree?
              </p>
              <svg
                className="w-5 h-5 text-[#F3D8F3] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="bg-[#51000F] rounded-3xl px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-4">
              <p className="text-base md:text-xl font-bold text-[#F3D8F3]">
                Is BitTree safe to share across all my social profiles?
              </p>
              <svg
                className="w-5 h-5 text-[#F3D8F3] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="bg-[#51000F] rounded-3xl px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-4">
              <p className="text-base md:text-xl font-bold text-[#F3D8F3]">
                How can I bring more visitors to my BitTree page?
              </p>
              <svg
                className="w-5 h-5 text-[#F3D8F3] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="bg-[#51000F] rounded-3xl px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-4">
              <p className="text-base md:text-xl font-bold text-[#F3D8F3]">
                How many links should I add on my BitTree?
              </p>
              <svg
                className="w-5 h-5 text-[#F3D8F3] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="bg-[#51000F] rounded-3xl px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-4">
              <p className="text-base md:text-xl font-bold text-[#F3D8F3]">
                Do I need a separate website to use BitTree?
              </p>
              <svg
                className="w-5 h-5 text-[#F3D8F3] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
