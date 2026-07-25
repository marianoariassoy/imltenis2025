import { Marquee } from "@/components/ui/marquee";

const MarqueeComponent = ({ text }: { text: string }) => {
  return <Marquee className="text-secondary font-medium">{text}</Marquee>;
};

export default MarqueeComponent;
