import React from "react";

import { useGames } from "../../hooks/useGames";

export const Home = () => {
   const { games } = useGames();

   return (
      <div>
         <ul>
            {React.Children.toArray(games.map((item) => <li>{item.name}</li>))}
         </ul>
      </div>
   );
};
