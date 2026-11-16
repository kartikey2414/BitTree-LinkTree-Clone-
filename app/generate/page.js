"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Generate = () => {
  const searchParams = useSearchParams();
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [picturelink, setPicturelink] = useState("");
  const [desc, setdesc] = useState("");
  const [iscreated, setIscreated] = useState(false);

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: picturelink,
      desc: desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const r = await fetch("/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setPicturelink("");
      setLinks([]);
      setdesc("");
    } else {
      toast.error(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setIscreated(true);
  };

  return (
    <div className="min-h-screen bg-[#E9C0E9]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 w-full py-16">
        {/* Left Column: Form Inputs Section */}
        <div className="col1 flex flex-col justify-center items-center w-full p-6 md:p-12">
          <div className="inputs flex flex-col gap-5 my-8 text-gray-900 w-full max-w-md">
            <h1 className="font-bold text-3xl md:text-4xl">Create your Bittree</h1>
            
            <div className="item">
              <h2 className="font-semibold text-xl md:text-2xl">
                Step 1: Claim your Handle
              </h2>
              <div className="mx-2">
                <input
                  type="text"
                  value={handle || ""}
                  onChange={(e) => {
                    sethandle(e.target.value);
                  }}
                  className="bg-white px-4 py-2 rounded-full focus:outline-pink-600 my-2 w-full"
                  placeholder="Choose a Handle"
                />
              </div>
            </div>

            <div className="item">
              <h2 className="font-semibold text-xl md:text-2xl">Step 2: Add Links</h2>
              {links &&
                links.map((item, index) => {
                  return (
                    <div className="mx-2 flex flex-col md:flex-row gap-2 my-2" key={index}>
                      <input
                        type="text"
                        value={item.link || ""}
                        onChange={(e) => {
                          handleChange(index, e.target.value, item.linktext);
                        }}
                        className="bg-white px-4 py-2 rounded-full focus:outline-pink-600 w-full"
                        placeholder="Enter Link text"
                      />
                      <input
                        type="text"
                        value={item.linktext || ""}
                        onChange={(e) => {
                          handleChange(index, item.link, e.target.value);
                        }}
                        className="bg-white px-4 py-2 rounded-full focus:outline-pink-600 w-full"
                        placeholder="Enter Link"
                      />
                    </div>
                  );
                })}
              <button
                onClick={() => addLink()}
                className="p-2 px-4 mx-2 mt-2 rounded-3xl bg-gray-900 text-white font-bold cursor-pointer"
              >
                Add Link
              </button>
            </div>

            <h2 className="font-semibold text-xl md:text-2xl">
              Step 3: Add Picture and Finalize
            </h2>
            <div className="mx-2 flex flex-col gap-2">
              <input
                type="text"
                value={picturelink || ""}
                onChange={(e) => {
                  setPicturelink(e.target.value);
                }}
                className="bg-white px-4 py-2 rounded-full focus:outline-pink-600 w-full"
                placeholder="Enter Picture URL"
              />
              <input
                type="text"
                value={desc || ""}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                className="bg-white px-4 py-2 rounded-full focus:outline-pink-600 w-full"
                placeholder="Enter Description"
              />
              <button
                disabled={
                  picturelink == "" || handle == "" || links[0].linktext == ""
                }
                onClick={() => {
                  submitLinks();
                }}
                className="w-fit p-3 px-6 my-3 rounded-3xl disabled:bg-gray-700 bg-gray-900 text-white font-bold cursor-pointer"
              >
                Create your Bitlink
              </button>

              {iscreated && handle && (
                <div className="mt-2">
                  <Link
                    href={`/${handle}`}
                    target="_blank"
                    className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold inline-block text-center"
                  >
                    My BitTree
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Illustration Image Section */}
        <div className="col2 hidden md:flex w-full h-screen justify-center items-center overflow-hidden sticky top-0">
          <img
            src="/generate.png"
            alt="Generate Your Links"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Generate;