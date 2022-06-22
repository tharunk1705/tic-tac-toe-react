const Square = ({ value, onClick }) => {
  return (
    <button
      className="flex justify-center items-center h-20 w-20 bg-slate-200 border border-gray-600 text-4xl"
      onClick={onClick}
    >
      {value === "X" ? (
        <ion-icon name="close"></ion-icon>
      ) : value === "O" ? (
        <ion-icon name="ellipse-outline"></ion-icon>
      ) : (
        ""
      )}
    </button>
  );
};

export default Square;
