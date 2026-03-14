const SelectBox = ({ value, onChange, options }) => {
  return (
    <select
      className="border text-lg px-5 py-2 w-full cursor-pointer md:w-[25%] bg-[#006A71] focus:outline-none rounded-[4px] border-[1.5px] text-white border-[#456882]"
      value={value}
      onChange={onChange}
    >
      {options.map((item) => {
        return (
          <option
            key={item}
            value={item}
            className="bg-[#006A71] hover:bg-[#9ACBD0] text-white"
          >
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBox;