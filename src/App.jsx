import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const allCoffees = useLoaderData();
  // console.log(allCoffees);
  const [coffees, setCoffees] = useState(allCoffees);

  return (
    <>
      <h1 className="text-4xl text-center">
        total data size : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2">
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeCard>
          );
        })}
      </div>
    </>
  );
}

export default App;
