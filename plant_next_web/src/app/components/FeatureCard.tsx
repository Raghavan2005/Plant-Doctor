
// File: src/components/FeatureCard.tsx
import { Camera, BarChart4 } from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'camera':
        return <Camera size={32} className="text-green-600" />;
      case 'camera':
        return <Camera size={32} className="text-green-600" />;
      case 'chart':
        return <BarChart4 size={32} className="text-green-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {renderIcon()}
      </div>
      <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}
