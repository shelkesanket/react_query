import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function RQSuperHeroesPage() {
  const { isLoading, data } = useQuery("super_hero", fetchSuperHeroes);
  if (isLoading) {
    return <h2>Loading in RQ...</h2>;
  }

  return (
    <div>
      <h2>RQ SUPER HERO</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
}
export default RQSuperHeroesPage;
