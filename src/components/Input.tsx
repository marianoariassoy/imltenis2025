import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  title: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, title, placeholder, register }: Input) => {
  return (
    <div>
      <label className="block mb-2">
        <span className="text-primary font-medium">{title}</span>
      </label>
      <input
        type={type}
        className="w-full h-12 border border-primary rounded-lg bg-transparent px-4 focus:outline-none focus:ring-0 placeholder:text-secondary mb-2"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
