"use client";
import React from "react";
import Link from "next/link";

export default function Integrations() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f4def4] via-[#E9C0E9] to-[#d69cd6] flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Seamless Integrations
        </h1>
        <p className="text-gray-700 text-lg">
          Connect BitTree with your favorite tools and platforms effortlessly.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            🔗 Social Channels
          </h3>
          <p className="text-gray-600">
            Embed your social feeds and links in seconds.
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Click Analytics
          </h3>
          <p className="text-gray-600">
            Keep track of your audience engagement easily.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/generate"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-md"
        >
          Explore Integrations
        </Link>
      </div>
    </div>
  );
}
