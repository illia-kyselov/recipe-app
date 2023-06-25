import React from "react";
import { Header } from "./components/Header";
import { RecipeList } from "./components/RecipeList";
import { RecipeDetails } from "./components/RecipeDetails";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <RecipeList />
      <RecipeDetails />
    </div>
  );
};

export default App;