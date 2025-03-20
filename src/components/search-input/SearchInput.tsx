import * as React from 'react';
import { Search } from 'lucide-react';

import { Input } from '../input';

import { cn } from '@/lib/utils';

export const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative">
      <Input
        ref={ref}
        className={cn(
          'bg-[#1A1A1A] text-gray-300 pl-4 pr-10 py-2 rounded-full w-48 border-gray-600 focus:border-gray-400',
          'placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0',
          className,
        )}
        type="search"
        {...props}
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    </div>
  );
});
SearchInput.displayName = 'SearchInput';
