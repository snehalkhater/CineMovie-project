const SelectBox = ({ value, onChange, options }) => {
  return (
    <select className='border  text-lg! px-5 py-2 w-[100%] cursor-pointer md:w-[25%] bg-[#234C6A]  focus:outline-none rounded-[4px] border-[1.5px] text-gray-300 border-[#456882] '
      value={value} onChange={onChange}>
      {
        options.map((item) => {
          return (
            <option key={item} value={item} className="px-5 bg-[#456882]">{item}</option>
          )
        })
      }
    </select>
  )
}

export default SelectBox;