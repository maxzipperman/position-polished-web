import { FC } from 'react';
import { 
  Gavel, 
  Scissors, 
  Building2, 
  Heart, 
  Camera, 
  PenTool, 
  Brush, 
  Video, 
  Palette, 
  Calculator, 
  Briefcase 
} from 'lucide-react';

const iconMap = {
  gavel: Gavel,
  scissors: Scissors,
  building2: Building2,
  heart: Heart,
  camera: Camera,
  'pen-tool': PenTool,
  brush: Brush,
  video: Video,
  palette: Palette,
  calculator: Calculator,
  briefcase: Briefcase,
} as const;

export const IndustryIcon: FC<{ name?: string; className?: string }> = ({ name, className }) => {
  const Icon = name && iconMap[name as keyof typeof iconMap] ? iconMap[name as keyof typeof iconMap] : Briefcase;
  return <Icon className={className} />;
};
