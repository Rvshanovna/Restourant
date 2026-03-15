import Image from "next/image";

interface GalleryCardProps {
  image: string;
  description: string;
  avatar: string;
  name: string;
}

const GalleryCard = ({ image, description, avatar, name }: GalleryCardProps) => {
  return (
    <div className="relative bg-white/40 backdrop-blur-md rounded-[28px] p-6 pt-24 w-90">
      <div className="absolute -top-17.5 left-6">
        <Image src={image} alt="gallery" width={213} height={157} className="rounded-[20px] object-cover"/>
      </div>
      <p className="text-[15px] text-gray-700 leading-[160%] mb-6">{description}</p>
      <div className="flex items-center gap-3">
        <Image src={avatar} alt={name} width={36} height={36} className="rounded-full object-cover"/>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
};

export default GalleryCard;