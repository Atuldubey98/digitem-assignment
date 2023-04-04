import "./InputField.css";

export default function InputField({ input }) {
  return (
    <div className="input__field">
      <input {...input} />
    </div>
  );
}
