import { ObjectId } from "mongodb";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = await params;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");
  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
  }

  return (
    <div className="bg-purple-400 min-h-screen flex justify-center items-start py-10 px-4">
      {item && (
        <div className="photo flex justify-center items-center flex-col gap-4 w-full max-w-md">
          <img
            src={item.pic}
            alt="Handle Image"
            className="rounded-full w-32 h-32 object-cover shadow-md"
          />
          <span className="font-bold text-xl">@{item.handle}</span>
          
          {/* Description responsive width & padding */}
          <span className="desc w-full text-center px-4 text-gray-800">
            {item.desc}
          </span>

          {/* Links Container */}
          <div className="links w-full flex flex-col items-center mt-2">
            {item.links.map((item, index) => {
              return (
                <Link href={item.linktext} key={index} className="w-full flex justify-center">
                  <div className="bg-purple-100 py-4 transition-all duration-300 hover:scale-105 hover:bg-purple-200 cursor-pointer px-4 my-2 rounded-md w-full max-w-md flex shadow-lg justify-center font-medium text-gray-900">
                    {item.link}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}