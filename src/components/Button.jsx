import ButtonLoading from "./ButtonLoading";

const Button = ({
  text,
  type,
  color = "blue",
  loading,
  onClick,
  lText = "cargando",
}) => {
  if (loading) return <ButtonLoading color={color} lText={lText} />;

  const classButtonBase = `focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-1.5 `;

  let classColor = "";
  if (color === "blue") {
    classColor =
      "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900";
  }

  if (color === "red") {
    classColor =
      "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
  }

  if (color === "yellow") {
    classColor =
      "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-200 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900";
  }

  if (color === "purple") {
    classColor =
      "bg-purple-400 hover:bg-purple-500 focus:ring-purple-200 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={classButtonBase + classColor}
    >
      {text}
    </button>
  );
};

export default Button;
