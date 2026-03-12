function Input({ type, placeholder, value, onChange, onKeyDown }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="border border-[#9ACBD0] bg-[#F2EFE7] text-[#006A71]
      rounded px-3 py-2 block w-full mb-3 mt-5
      focus:outline-none focus:ring-2 focus:ring-[#48A6A7]"
    />
  );
}

export default Input;