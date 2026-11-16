"use client";
import React from "react";
import Link from "next/link";

export default function Features() {
  return (
    <div className="min-h-screen bg-[#E9C0E9] flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Built for Performance</h1>
        <p className="text-gray-700 text-lg">Explore the powerful tools included with every BitTree to help you grow online.</p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider bg-[#E9C0E9] text-gray-900 py-1 px-3 rounded-full inline-block mb-3">Customization</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Unique Handle & Profile URL</h3>
            <p className="text-gray-600">Claim your personalized link and showcase your brand identity instantly.</p>
          </div>
          <div className="bg-gray-900 text-white font-bold py-3 px-6 rounded-2xl text-sm shrink-0">
            Personalized
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider bg-[#E9C0E9] text-gray-900 py-1 px-3 rounded-full inline-block mb-3">Flexibility</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Unlimited Links Management</h3>
            <p className="text-gray-600">Add, edit, or rearrange as many links as you want without any restrictions.</p>
          </div>
          <div className="bg-gray-900 text-white font-bold py-3 px-6 rounded-2xl text-sm shrink-0">
            Unlimited
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/generate" className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-md">
          Build Your BitTree Now
        </Link>
      </div>
    </div>
  );
}