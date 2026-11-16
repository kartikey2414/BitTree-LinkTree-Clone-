"use client";
import React from "react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#dfaee0] via-[#E9C0E9] to-[#f8e4f8] flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Simple Pricing
        </h1>
        <p className="text-gray-700 text-lg">
          No hidden charges. Everything is open and free for creators.
        </p>
      </div>

      <div className="bg-white/95 p-8 md:p-12 rounded-3xl shadow-sm border border-white/60 w-full max-w-md text-center">
        <span className="bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
          Always Free
        </span>
        <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
          Standard Plan
        </h3>
        <div className="text-6xl font-black text-gray-900 my-6">
          ₹0{" "}
          <span className="text-lg font-normal text-gray-500">/ forever</span>
        </div>

        <p className="text-gray-600 mb-8">
          Get custom handles, unlimited links, and full responsiveness without
          paying a dime.
        </p>

        <Link
          href="/generate"
          className="block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-full transition-colors shadow-md w-full"
        >
          Get Started Free
        </Link>
      </div>
    </div>
  );
}
