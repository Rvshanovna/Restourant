import { ReactNode } from "react";

interface FeatureProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  extraClass?: string;
}

const Feature = ({ icon, title, description, extraClass }: FeatureProps) => {
  return (
    <div className={`flex flex-col items-start gap-4 max-w-[320px] ${extraClass}`}>
      {icon && (<div className="text-black text-[50px]">
          {icon}
        </div>
      )}

      {title && (
        <h3 className="text-[28px] font-semibold leading-[120%]">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-[16px] text-gray-700 leading-[150%]">
          {description}
        </p>
      )}
    </div>
  );
};

export default Feature;