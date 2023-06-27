import { AiOutlineSearch } from "react-icons/ai";

const Input = ({ handleChange, value }) => {
  return (
    <div className="flex md:gap-2 md:px-2 py-2 rounded md:w-80 md:mx-0 mx-6 shadow-md border items-center">
      <AiOutlineSearch
        className="cursor-pointer mx-2 md:ml-0 ml-3 text-inherit"
        size={18}
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search for a country..."
        className="outline-none bg-inherit flex-1 placeholder:text-sm placeholder:text-slate-500"
      />
    </div>
  );
};

export default Input;
