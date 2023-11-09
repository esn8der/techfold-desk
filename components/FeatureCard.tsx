import { IconType } from "react-icons";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: IconType;
}
const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-fit max-w-xs p-4 bg-emerald-950 rounded-lg shadow-md">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary">
        <Icon className="text-5xl"/>
      </div>
      <h3 className="mb-2 text-xl font-bold text-center">{title}</h3>
      <p className="text-center whitespace-normal line-clamp-5 text-emerald-100/70">{description}</p>
    </div>
  );
};

export { FeatureCard };
