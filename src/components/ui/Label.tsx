// // src/components/ui/Label.tsx
// import React from 'react';

// type LabelProps = {
//   htmlFor: string;
//   children: React.ReactNode;
// };

// export const Label = ({ htmlFor, children }: LabelProps) => {
//   return (
//     <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
//       {children}
//     </label>
//   );
// };

// src/components/ui/Label.tsx
import React from 'react';

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;  // Thêm className vào đây
};

export const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  );
};
