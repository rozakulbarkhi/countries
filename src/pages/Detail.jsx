import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    try {
      const fetchCountry = async () => {
        const response = await axios(
          `https://restcountries.com/v3.1/name/${country}`
        );

        setCountryData(response?.data[0]);
      };

      fetchCountry();
    } catch (err) {
      console.log(err);
    }
  }, [country]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container md:mx-auto px-6 my-16">
      <div
        className="border rounded-md shadow-md flex justify-center items-center md:w-32 w-24 md:py-1.5 py-1 gap-3 md:text-base  text-sm cursor-pointer hover:bg-slate-100/50"
        onClick={handleBack}
      >
        <FaArrowLeftLong className="md:text-md text-sm" />
        <div className="capitalize">back</div>
      </div>

      <div className="md:flex my-14 w-full md:h-80 h-full">
        <div className="flex-1 rounded-md">
          <div className="md:h-full h-60 md:px-0 px-4">
            <img
              src={countryData?.flags?.png}
              alt={countryData?.flags?.alt}
              className="object-cover h-full md:w-3/4 w-full rounded-md border-2 border-inherit"
            />
          </div>
        </div>

        <div className="flex-1 md:my-4 my-8 flex flex-col justify-between">
          <div className="font-bold text-lg">{countryData?.name?.common}</div>
          <div className="md:flex justify-center items-start h-full my-6">
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <span className="font-semibold">Native name: </span>
                {countryData?.name?.nativeName?.nld?.common}
              </div>
              <div>
                <span className="capitalize font-semibold">population: </span>
                {countryData?.population?.toLocaleString()}
              </div>
              <div>
                <span className="capitalize font-semibold">region: </span>
                {countryData?.region}
              </div>
              <div>
                <span className="capitalize font-semibold">sub region: </span>
                {countryData?.subregion}
              </div>
              <div>
                <span className="capitalize font-semibold">capital : </span>
                {countryData?.capital}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 md:my-0 my-10">
              <div>
                <span className="capitalize font-semibold">
                  top level domain:{" "}
                </span>
                {countryData?.tld}
              </div>
              <div>
                <span className="capitalize font-semibold">currencies: </span>
                {
                  countryData?.currencies?.[
                    Object.keys(countryData?.currencies)[0]
                  ]?.name
                }
              </div>
              <div>
                <span className="capitalize font-semibold">languages: </span>
                {
                  countryData?.languages?.[
                    Object.keys(countryData?.languages)[0]
                  ]
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
