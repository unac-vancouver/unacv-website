import WorldOceansDayImage from "@/assets/SDGPage/world-oceans-day.webp";
import SDGGoal13 from "@/assets/SDGPage/sdg-goal-13.webp";
import SDGGoal03 from "@/assets/SDGPage/sdg-goal-03.webp";
import SDGGoal15 from "@/assets/SDGPage/sdg-goal-15.webp";
import SDGGoal14 from "@/assets/SDGPage/sdg-goal-14.webp";
import { CTAButton } from "@/components/ui/cta-button";
import { Link } from "react-router-dom";

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
  sdgGoals = [],
  link = "/events",
}: EventCardProps) {
  const sdgIcons: { [key: string]: string } = {
    "3": SDGGoal03,
    "13": SDGGoal13,
    "14": SDGGoal14,
    "15": SDGGoal15,
  };

  return (
    <div className="bg-white rounded-[10px] p-3 flex flex-col gap-1.5 w-[400px] min-h-36">
      {/* Image and Title/SDG Row */}
      <div className="flex items-start gap-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-[85px] h-[74px] rounded-[10px] object-cover flex-shrink-0"
        />
        <div className="flex flex-col gap-1.5 flex-1">
          <h3 className="font-extrabold text-base leading-5 tracking-[-0.15px]">
            {title}
          </h3>
          {/* SDG Goals */}
          {sdgGoals.length > 0 && (
            <div className="flex gap-3">
              {sdgGoals.map((goal) => (
                <img
                  key={goal}
                  src={sdgIcons[goal]}
                  alt={`SDG Goal ${goal}`}
                  className="w-9 h-9"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="font-light text-[11px] leading-tight tracking-[-0.15px] text-black line-clamp-4">
        {description}
      </p>

      {/* Read More Button */}
      <div className="flex justify-end mt-1">
        <Link to={link}>
          <CTAButton variant="solid" size="default" className="text-[9px] px-3 py-0.5 h-auto min-h-0">
            Read More
          </CTAButton>
        </Link>
      </div>
    </div>
  );
}
