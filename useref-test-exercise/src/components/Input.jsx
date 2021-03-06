
export default function Input({ name, label, placeholder }) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        //ref={nameInputRef}
      />
    </div>
  );
}