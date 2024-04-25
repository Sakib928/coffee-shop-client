import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <>
      <h1 className="text-4xl text-center">
        total data size : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2">
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>;
        })}
      </div>
    </>
  );
}

export default App;
