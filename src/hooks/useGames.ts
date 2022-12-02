import { useEffect, useState } from "react";

interface Games {
   id: number;
   name: string;
   rating: number;
   platform: string;
   cover: string;
}

export const useGames = () => {
   const [games, setGames] = useState<Games[]>([]);

   const getGames = () => {
      fetch("/games")
         .then((response) => response.json())
         .then((response) => setGames(response));
   };

   useEffect(() => {
      getGames();
   }, []);

   return {
      games,
   };
};
