"use client";

import { useState } from "react";
import Image from "next/image";
import Text from "@/components/Text";

const Gallery = () => {
  const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
    "/gallery7.png",
    "/gallery8.png",
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
  ];

  const itemsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="pt-28">
      <div className="containers">
        <Text title="Галерея"/>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((img, index) => (
            <div key={index} className="relative w-full h-40 rounded-[20px] overflow-hidden">
              <Image src={img} alt="gallery" fill className="object-cover hover:scale-105 transition duration-300"/>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-12">
          {[...Array(totalPages)].map((_, index) => { const page = index + 1;
            return (
              <button key={page} onClick={() => setCurrentPage(page)} className={`w-10 h-10 rounded-full flex items-center justify-center transition
                  ${ currentPage === page ? "bg-[#F5D7D7] text-black shadow" : "bg-white/50 text-black/70 hover:bg-white" }`}>
                {page}
              </button>
            );
          })}
          {totalPages > 4 && (
            <span className="w-10 text-[20px] h-10 flex items-center justify-center text-black/50">...</span>
          )}
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}className="w-10 h-10 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-[25px]">›</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;