import { Marquee } from "@/components/ui/marquee";

const MarqueeComponent = ({ text }: { text: string }) => {
  return (
    <Marquee className="text-secondary font-medium -mt-4 -mb-2">{text}</Marquee>
  );
};

export default MarqueeComponent;
