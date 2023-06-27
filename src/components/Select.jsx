import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Select = ({ handleClick, region }) => {
  const [open, setOpen] = useState(false);

  const filterRegion = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <>
      <div
        className="flex w-48 md:my-0 mt-6 px-2 p-2 mx-6 md:mx-0 items-center rounded shadow-md border cursor-pointer relative hover:bg-slate-100/50"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex-1 mx-4 text-sm text-inherit font-medium">
          {region ? region : "Filter by Region"}
        </div>
        <RiArrowDownSLine />
      </div>

      {open && (
        <div className="bg-white absolute flex w-48 px-2 md:mx-0 mx-6 items-center rounded shadow-md border cursor-pointer md:top-40 md:right-20 py-2 md:my-0 my-1.5">
          <div className="mx-4">
            {filterRegion.map((region) => (
              <div
                key={region}
                className="text-sm text-slate-800 font-medium my-2 hover:text-slate-900"
                onClick={(e) => {
                  handleClick(e);
                  setOpen(false);
                }}
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Select;
