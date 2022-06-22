const PlayerTurn = ({ playerName }) => {
  return (
    <h4
      className={`text-lg font-outfit rounded-lg ${
        playerName === "X"
          ? " text-red-600 bg-red-200 px-8 py-2 "
          : playerName === "O"
          ? " text-blue-600 bg-blue-200 px-8 py-2 "
          : "hidden"
      }`}
    >
      {playerName + "'s Move"}
    </h4>
  );
};

export default PlayerTurn;
