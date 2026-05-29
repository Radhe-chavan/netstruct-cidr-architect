import { Network } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="p-1.5 bg-primary rounded-md">
        <Network className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold text-primary font-headline">
        NetStruct
      </span>
    </div>
  );
}
