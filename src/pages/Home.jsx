import { useEffect, useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Select from "../components/Select";
import Card from "../components/Card";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios("https://restcountries.com/v3.1/all", {
          method: "GET",
        });

        setCountries(response.data);
      };

      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const filteredCountries = countries?.filter(
    (country) =>
      country?.name?.common &&
      country?.name?.common.toLowerCase().startsWith(filter.toLowerCase())
  );

  const filteredCountriesByRegion = countries?.filter(
    (country) => country?.region === region
  );

  const handleChange = async (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    setRegion("");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setRegion(e.target.textContent);
    setFilter("");
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-between py-8">
        <Input handleChange={handleChange} value={filter} />
        <Select handleClick={handleClick} region={region} />
      </div>
      <div className="py-8 grid md:grid-cols-4 grid-cols-1 md:gap-28 gap-14">
        {filteredCountriesByRegion.length > 0 ? (
          filteredCountriesByRegion?.map((country) => (
            <Card key={country?.name?.common} country={country} />
          ))
        ) : filteredCountries.length > 0 ? (
          filteredCountries?.map((country) => (
            <Card key={country?.name?.common} country={country} />
          ))
        ) : (
          <div className="tracking-wider text-sm md:px-0 px-6">
            No country found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
