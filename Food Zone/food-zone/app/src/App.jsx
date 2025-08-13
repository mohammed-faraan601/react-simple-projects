import { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";

export const BASE_URL = "http://localhost:9000";
// export const BASE_URL = "https://kkpdddwq-9000.inc1.devtunnels.ms/";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [filterData, setFilteredData] = useState(null);
  const [btnSelected, setBtnSelected] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchFoodData() {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL);
      const data = await response.json();

      if (data) {
        setFoodData(data);
        setFilteredData(data);
        setLoading(false);
      }
    } catch (e) {
      
      setError("Unable to fetch data!");
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchFoodData();
  }, []);

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];


  function handleSearchFood(e) {
    const searchedData = e.target.value;
    console.log(searchedData);

    if (searchedData.trim() === "") {
      setFilteredData(foodData);
      return;
    }

    const filteredFoodData = foodData.filter((item) => item.name.toLowerCase().includes(searchedData.toLowerCase()));
    setFilteredData(filteredFoodData);
  }


  function filterFoodData(type) {
    const cpyOfFoodData = [...foodData];
    const filteredFoodData = cpyOfFoodData?.filter(
      (item) => item.type === type
    );
    setFilteredData(filteredFoodData);
  }

  function handleFilterBtnClick(btnType) {
    console.log(btnType);

    if (btnType === "all") {
      setFilteredData(foodData);
      setBtnSelected((prev) => (prev === btnType ? null : btnType));
      fetchFoodData();
      return;
    } 
    filterFoodData(btnType);
    setBtnSelected(btnType);

    
  }

  return (
    <main style={{ backgroundColor: "#323334" }} className="min-h-screen">
      <header className="flex flex-col min-h-60 gap-9">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 lg:min-w-[1200px] lg:mt-[85px] mx-auto mt-10">
          <div>
            <img src="/images/Foody_Zone.svg" alt="food-zone" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search Food..."
              style={{ backgroundColor: "#323334" }}
              onChange={handleSearchFood}
              className="placeholder:text-white text-white border border-red-600  rounded p-2 min-w-72 min-h-10"
            />
          </div>
        </div>

        <div className="flex flex-row gap-3.5 mx-auto">
          {filterBtns &&
            filterBtns.map((btn) => (
              <button
                key={btn.name}
                onClick={() => handleFilterBtnClick(btn.type)}
                className={
                  btnSelected === btn.type
                    ? "bg-black text-base px-3 py-1.5 text-white border border-white rounded cursor-pointer"
                    : "bg-red-500 text-base px-3 py-1.5 text-white border-none rounded cursor-pointer"
                }
              >
                {btn.name}
              </button>
            ))}
        </div>
      </header>
      <SearchResults foodData={filterData} loading={loading} error={error} />
    </main>
  );
}

export default App;
