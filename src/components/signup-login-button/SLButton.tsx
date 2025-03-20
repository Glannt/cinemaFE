import React from 'react';
import { UserIcon } from 'lucide-react';
import { Button } from '@heroui/button';

type SLButtonProps = {
  title: 'Login' | 'Signup';
  onClick?: () => void;
};
export const SLButton: React.FC<SLButtonProps> = ({ title, onClick }: SLButtonProps) => {
  return (
    <Button
      className="text-gray-300 hover:text-white hover:bg-gray-800 hover:shadow-md hover:shadow-gray-700 transition-all duration-200 transform hover:scale-105"
      variant="ghost"
      onPress={onClick}
    >
      <UserIcon className="mr-2 h-4 w-4" />
      {title}
    </Button>
  );
};
