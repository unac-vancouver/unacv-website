import WorldOceansDayImage from "@/assets/SDGPage/world-oceans-day.webp";
import SDGGoal03 from "@/assets/SDGGoals/E-WEB-Goal-03.png";
import SDGGoal04 from "@/assets/SDGGoals/E-WEB-Goal-04.png";
import SDGGoal05 from "@/assets/SDGGoals/E-WEB-Goal-05.png";
import SDGGoal10 from "@/assets/SDGGoals/E-WEB-Goal-10.png";
import SDGGoal13 from "@/assets/SDGGoals/E-WEB-Goal-13.png";
import SDGGoal14 from "@/assets/SDGGoals/E-WEB-Goal-14.png";
import SDGGoal15 from "@/assets/SDGGoals/E-WEB-Goal-15.png";
import SDGGoal16 from "@/assets/SDGGoals/E-WEB-Goal-16.png";
import SDGGoal17 from "@/assets/SDGGoals/E-WEB-Goal-17.png";
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
    "4": SDGGoal04,
    "5": SDGGoal05,
    "10": SDGGoal10,
    "13": SDGGoal13,
    "14": SDGGoal14,
    "15": SDGGoal15,
    "16": SDGGoal16,
    "17": SDGGoal17,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex gap-4 w-full max-w-md md:max-w-xl lg:max-w-2xl">
      {/* Image */}
      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Title */}
        <h3 className="font-bold text-base leading-tight tracking-tight text-gray-900">
          {title}
        </h3>

        {/* SDG Goals */}
        {sdgGoals.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {sdgGoals.map((goal) => (
              <img
                key={goal}
                src={sdgIcons[goal]}
                alt={`SDG Goal ${goal}`}
                className="w-8 h-8 rounded"
              />
            ))}
          </div>
        )}

        {/* Description */}
        <p className="font-normal text-xs leading-relaxed text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Read More Button */}
        <div className="mt-auto">
          <Link to={link} className="inline-block">
            <CTAButton variant="solid" size="default" className="text-xs px-4 py-1.5 h-auto">
              Read More
            </CTAButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
