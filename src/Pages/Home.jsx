import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Test from "./Test";
import Read from "./Read";

const Home = () => {

  const dispatch = useDispatch();
  const { readuser } = useSelector((state) => state.userStore);
  const [data, setdata] = useState(readuser);
  const [searchInput, setSearchInput] = useState("");
  
  function forFilter() {
    // Implement your search logic here
    const filteredData = readuser.filter(user => user.username.toLowerCase().includes(searchInput.toLowerCase()));
    setdata(filteredData);
}

// Add an event listener to the input to detect backspace key press
const handleInputChange = (e) => {
    setSearchInput(e.target.value);

    // Check if the input is empty, and reset the data to the original 'readuser'
    if (e.target.value === '') {
        setdata(readuser);
    }
};


  return (
    <>
      <div className="bg-black text-white h-10 flex items-center px-6">
        React Phone Dir
      </div>
      <div className="flex gap-3 px-4">
        <h1 className="text-2xl">Phone Directory</h1>
        <Link className="bg-green-500 text-3xl text-red-500" to={"/createpage"}>
          New
        </Link>
      </div>
      <div className="gap-2 flex p-4">
        <input
          type="text"
          className="sm:w-1/5 border border-black rounded"
          placeholder="...Search by name"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button className="text-2xl underline" onClick={forFilter}>
          Search
        </button>
      </div>

      <div className="flex-col xs:gap-2 p-10 sm:flex sm:flex-row sm:gap-10">
                {/* Render your data if there are items */}
                {data && data.length > 0 ? (
                    data.map((item,id) => (
                        // Render each item here
                        <div key={item._id} className="flex flex-col gap-3 p-4 sm:border-r-black border-r-2 justify-center">
    <h1>{item.username}</h1>
    <h1>{item.email}</h1>
    <h1>{item.number}</h1> </div>                  ))
                ) : (
                    // Render the 'Read' component if there are no items
                    <Read />
                )}
            </div>

    </>
  );
};

export default Home;
