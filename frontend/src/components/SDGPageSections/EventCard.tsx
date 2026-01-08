import WorldOceansDayImage from "@/assets/SDGPage/world-oceans-day.webp";

interface EventCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  sdgGoals?: string[];
  link?: string;
}

export default function EventCard({
  imageSrc = WorldOceansDayImage,
  title,
  description,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-[10px] p-[18px] flex flex-col gap-3">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-[85px] h-[74px] rounded-[10px] object-cover"
      />

      {/* Title */}
      <h3 className="font-extrabold text-base leading-5 tracking-[-0.15px]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-light text-[13px] leading-5 tracking-[-0.15px] text-black">
        {description}
      </p>
    </div>
  );
}
