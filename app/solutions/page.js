"use client";
import React from "react";
import Link from "next/link";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E9C0E9] via-[#f2d5f2] to-[#dfaee0] flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Solutions for Everyone
        </h1>
        <p className="text-gray-700 text-lg">
          Tailored ways to connect your audience to everything you create.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            For Creators & Influencers
          </h3>
          <p className="text-gray-600">
            Share your YouTube videos, social profiles, and latest content in
            one clean page.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            For Businesses & Brands
          </h3>
          <p className="text-gray-600">
            Drive traffic from social bios directly to your products and
            campaign pages.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/generate"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-md"
        >
          Get Started Free
        </Link>
      </div>
    </div>
  );
}
