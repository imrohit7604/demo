export default function Input(props) {
  return (
    <input
      className="rounded p-4 text-xl w-full"
      name={props.name}
      placeholder={props.placeholder}
      ref={props.formRef}
    />
  );
}
