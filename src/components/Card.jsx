import { useNavigate } from "react-router-dom";

const Card = ({ country }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/${country.name.common}`);
  };

  return (
    <div key={country.name.common} onClick={handleNavigation}>
      <div className="h-72 shadow-md border rounded-md cursor-pointer hover:shadow-lg md:mx-0 mx-8">
        <div className="h-2/4 flex justify-center items-center">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-full h-full object-cover rounded-t border-b"
          />
        </div>
        <div className="mx-4 my-4">
          <div className="font-bold mb-3">{country?.name.common}</div>
          <div className="text-sm">
            <span className="font-bold ">Population:</span>{" "}
            {country?.population.toLocaleString()}
          </div>
          <div className="text-sm">
            <span className="font-bold ">Region:</span> {country?.region}
          </div>
          <div className="text-sm">
            <span className="font-bold ">Capital:</span> {country?.capital}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
