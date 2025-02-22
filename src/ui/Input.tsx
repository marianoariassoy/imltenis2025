interface Props {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: Props) => {
  return (
    <input
      type={type}
      className="w-full input input-bordered border-primary text-sm"
      placeholder={placeholder}
    />
  );
};

export default Input;
