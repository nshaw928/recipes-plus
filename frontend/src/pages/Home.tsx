import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1>Home</h1>
            
          </div>
        </header>
    <div>Home Content</div>
    
    
    
    </>
  
  );
};

export default Home;