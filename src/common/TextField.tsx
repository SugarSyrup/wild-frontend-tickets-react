import { useId } from "./useId";

export default function TextField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} placeholder={placeholder} id={id} />
    </div>
  );
}
