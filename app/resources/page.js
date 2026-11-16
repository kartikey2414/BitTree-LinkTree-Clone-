"use client";
import React from "react";
import Link from "next/link";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e5b3e5] via-[#E9C0E9] to-[#f4dcf4] flex flex-col items-center justify-center py-24 px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Help & Resources
        </h1>
        <p className="text-gray-700 text-lg">
          Everything you need to know about setting up and growing your BitTree.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white/95 p-8 md:p-12 rounded-3xl shadow-sm border border-white/60">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>How do I claim a handle?</strong> Simply head over to the
            generate page and pick your custom URL name.
          </p>
          <p>
            <strong>Is it free to use?</strong> Yes! All essential features are
            completely free forever.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/generate"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-md"
        >
          Create Your BitTree
        </Link>
      </div>
    </div>
  );
}
