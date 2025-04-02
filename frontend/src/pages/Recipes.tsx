import RecipeCards from '@/components/recipe-cards';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

const Recipes: React.FC = () => {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1>Recipes</h1>
        </div>
      </header>
      <RecipeCards />
    </>
  );
};

export default Recipes;