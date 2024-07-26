"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";

const tours = [
  "tour-80cac283ffb84eef8b73415e7884ee2b",
  "tour-6f775af69a684b8aa166d8d24c980a34",
  "tour-6f775af69a684b8aa166d8d24c980a34",
];

export default function Home() {
  useEffect(() => {
    console.log(12);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 text-neutral-800">
        {tours.map((t, i) => (
          <Link href={"/tour"} className="bg-white flex flex-col" key={i}>
            <div className="w-96 h-[12rem]">
              <img
                data-walksee={t}
                src={`https://beta.walksee.pl/api/tour/${t}/mini`}
                className="object-cover"
                alt=""
              />
            </div>
            <h4 className="p-4">Image {i}</h4>
          </Link>
        ))}
      </div>
      <Script
        src="/scripts/test.js"
        onLoad={() => {
          console.log("Walksee Script Loaded");
        }}
        onReady={() => {
          console.log("PAINT/INIT");
          walkseeInit();
        }}
      />
    </>
  );
}

