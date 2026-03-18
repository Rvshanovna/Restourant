import GalleryCard from "@/components/GalleryCard";
import { useState } from "react";

const News = () => {
     const gallery = [
        { id: 1, image: "/gallery1.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 2, image: "/gallery2.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 3, image: "/gallery3.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 4, image: "/gallery1.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 5, image: "/gallery2.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 6, image: "/gallery3.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 7, image: "/gallery3.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 8, image: "/gallery3.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
        { id: 9, image: "/gallery3.png", description: "Используйте гибкие структуры...", avatar: "/avatarSergey.svg", name: "Сергей" },
      ];
    
      const itemsPerPage = 3;
      const [currentPage, setCurrentPage] = useState(1);
    
      const totalPages = Math.ceil(gallery.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const currentItems = gallery.slice(startIndex, startIndex + itemsPerPage);
      return (
        <section>
        <div className="grid grid-cols-3 gap-10 justify-items-center mt-40">
          {currentItems.map((item) => (
            <GalleryCard key={item.id} image={item.image} description={item.description} avatar={item.avatar} name={item.name}/>))}
        </div>
        <div className="grid grid-cols-3 gap-10 justify-items-center mt-40">
          {currentItems.map((item) => (
            <GalleryCard key={item.id} image={item.image} description={item.description} avatar={item.avatar} name={item.name}/>))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-30">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button key={page} onClick={() => setCurrentPage(page)} className={`w-10 h-10 rounded-full flex items-center justify-center transition
                  ${ currentPage === page ? "bg-[#F5D7D7] text-black shadow" : "bg-white/40 text-black/70 hover:bg-white"}`}>
                {page}
              </button>
            );
          })}
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} className="w-10 h-10 rounded-full bg-white/40 hover:bg-white flex items-center justify-center text-[25px]">›</button>
        </div>
    </section>
      )
}

export default News