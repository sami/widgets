import React from 'react';

// Props definition
interface {{ComponentName}}Props {
  title: string;
  isActive?: boolean;
}

/**
 * {{ComponentName}}
 * 
 * Description of what this component does.
 */
export const {{ComponentName}}: React.FC<{{ComponentName}}Props> = ({ title, isActive = false }) => {
  return (
    <div className={`p-4 rounded ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`}>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};
