type ButtonProps = {
  title: string;
  className?: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ title, className, onclick }: ButtonProps) => {
  return (
    <>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-full ${className}`}
        onClick={onclick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
