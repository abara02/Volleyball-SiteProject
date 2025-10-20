"use client";
import { useState } from "react";

export default function RotationTracker() {
  // Cour positions: 1, 2, 3, 4, 5, 6
  const [positions, setPositions] = useState(["1", "2", "3", "4", "5", "6"]);
  const [playerNumbers, setPlayerNumbers] = useState(["", "", "", "", "", ""]);
  const [benchPlayers, setBenchPlayers] = useState(["", "", ""]);
  const [rotationCount, setRotationCount] = useState(0);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const rotateCounterClockwise = () => {
    // Move players counter-clockwise
    const newPositions = [...positions.slice(1), positions[0]];
    setPositions(newPositions);
    setRotationCount(rotationCount + 1);
  };

  const resetRotation = () => {
    setPositions([...playerNumbers]);
    setRotationCount(0);
  };

  const handlePlayerChange = (index, value) => {
    const newPlayers = [...playerNumbers];
    newPlayers[index] = value;
    setPlayerNumbers(newPlayers);

    if (rotationCount === 0) {
      setPositions(newPlayers);
    }
  };

  const handleBenchChange = (index, value) => {
    const newBench = [...benchPlayers];
    newBench[index] = value;
    setBenchPlayers(newBench);
  };

  const addBenchPlayer = () => {
    setBenchPlayers([...benchPlayers, ""]);
  };

  const removeBenchPlayer = (index) => {
    const newBench = benchPlayers.filter((_, i) => i !== index);
    setBenchPlayers(newBench);
  };

  const openSubMenu = (positionIndex) => {
    setSelectedPosition(positionIndex);
    setShowSubMenu(true);
  };

  const substitutePlayer = (benchIndex) => {
    if (selectedPosition === null) return;

    // Sub out a player
    const newPositions = [...positions];
    const newBench = [...benchPlayers];

    const temp = newPositions[selectedPosition];
    newPositions[selectedPosition] = newBench[benchIndex];
    newBench[benchIndex] = temp;

    setPositions(newPositions);
    setBenchPlayers(newBench);
    setShowSubMenu(false);
    setSelectedPosition(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-6 text-purple-600">
        Volleyball Rotation Tracker
      </h2>

      {/* Add Player Numbrs*/}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Starting Lineup:
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {playerNumbers.map((player, index) => (
            <div key={index} className="text-center">
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Position {index + 1}
              </label>
              <input
                type="text"
                value={player}
                onChange={(e) => handlePlayerChange(index, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-center bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Player #"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Players on bench for subs */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Avaliable Substitutions / Players on the bench:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benchPlayers.map((player, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={player}
                onChange={(e) => handleBenchChange(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-center bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder="Player #"
              />
              <button
                onClick={() => removeBenchPlayer(index)}
                className="px-3 py-2 bg-orange-600 hover:bg-red-700 text-white rounded-md"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addBenchPlayer}
          className="mt-4 px-4 py-2 bg-lime-500 hover:bg-green-700 text-white rounded-md text-sm"
        >
          + Add Player
        </button>
      </div>

      {/* Volleyball Court */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
          Current Rotation (Count: {rotationCount})
        </h3>

        <div className="relative bg-orange-600 dark:bg-orange-900 border-4 border-orange-500 rounded-lg p-8">
          {/* Net */}
          <div className="relative mb-4">
            <div className="h-1 bg-white">
              <span className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-white text-white dark:text-gray-900 px-3 py-1 rounded text-sm font-bold">
                NET
              </span>
            </div>
          </div>

          {/* Court positions */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Positions*/}
            <div className="text-center">
              <div
                className="bg-purple-600 text-white rounded-lg p-6 shadow-lg cursor-pointer hover:bg-purple-700 transition-colors"
                onClick={() => openSubMenu(3)}
              >
                <div className="text-s font-semibold mb-2">Position 4</div>
                <div className="text-xs text-purple-200 mb-2">Left Front</div>
                <div className="text-4xl font-bold">{positions[3]}</div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="bg-purple-600 text-white rounded-lg p-6 shadow-lg cursor-pointer hover:bg-purple-700 transition-colors"
                onClick={() => openSubMenu(2)}
              >
                <div className="text-s font-semibold mb-2">Position 3</div>
                <div className="text-xs text-purple-200 mb-2">Middle Front</div>
                <div className="text-4xl font-bold">{positions[2]}</div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="bg-purple-600 text-white rounded-lg p-6 shadow-lg cursor-pointer hover:bg-purple-700 transition-colors"
                onClick={() => openSubMenu(1)}
              >
                <div className="text-s font-semibold mb-2">Position 2</div>
                <div className="text-xs text-purple-200 mb-2">Right Front</div>
                <div className="text-4xl font-bold">{positions[1]}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div
                className="bg-purple-600 text-white rounded-lg p-6 shadow-lg cursor-pointer hover:bg-purple-700 transition-colors"
                onClick={() => openSubMenu(4)}
              >
                <div className="text-s font-semibold mb-2">Position 5</div>
                <div className="text-xs text-purple-200 mb-2">Left Back</div>
                <div className="text-4xl font-bold">{positions[4]}</div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="bg-purple-600 text-white rounded-lg p-6 shadow-lg cursor-pointer hover:bg-purple-700 transition-colors"
                onClick={() => openSubMenu(5)}
              >
                <div className="text-s font-semibold mb-2">Position 6</div>
                <div className="text-xs text-purple-200 mb-2">Middle Back</div>
                <div className="text-4xl font-bold">{positions[5]}</div>
              </div>
            </div>
            <div className="text-center">
              <div
                className="bg-lime-500 text-white rounded-lg p-6 shadow-lg border-4 border-lime-300 cursor-pointer hover:bg-lime-600 transition-colors"
                onClick={() => openSubMenu(0)}
              >
                <div className="text-s font-semibold mb-2">Position 1</div>
                <div className="text-xs text-lime-100 mb-2">Right Back</div>
                <div className="text-3xl font-bold">{positions[0]}</div>
                <div className="text-2 font-bold mt-2 text-lime-900">
                  SERVER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Substitution Menu */}
      {showSubMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Substitute Player in Position {selectedPosition + 1}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Current Player:{" "}
              <span className="font-bold">{positions[selectedPosition]}</span>
            </p>
            <div className="space-y-2 mb-4">
              {benchPlayers.map((player, index) => (
                <button
                  key={index}
                  onClick={() => substitutePlayer(index)}
                  className="w-full px-4 py-3 bg-purple-600 hover:bg-lime-500 text-white rounded-lg font-semibold transition-colors"
                >
                  Sub in: {player}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setShowSubMenu(false);
                setSelectedPosition(null);
              }}
              className="w-full px-4 py-2 bg-gray-600 hover:bg-orange-700 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={rotateCounterClockwise}
          className="px-6 py-3 bg-purple-600 hover:bg-lime-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
        >
          ↺ Rotate (Win Point)
        </button>
        <button
          onClick={resetRotation}
          className="px-6 py-3 bg-orange-600 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
        >
          Reset Rotation
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-orange-500 dark:bg-orange-900 rounded-lg">
        <h4 className=" text-m font-semibold mb-2 text-white">How to use:</h4>
        <ul className="text-sm text-white space-y-1">
          <li>
            → Enter starting lineup player numbers/names in the Starting Lineup
            section
          </li>
          <li>
            → Add players who can be substituted in under the next section
          </li>
          <li>
            → Click "Rotate (Win Point)" when your team wins a point and rotates
          </li>
          <li>
            → Click any position on the court to substitute with another player
          </li>
          <li>
            → The player in Position 1 (Right Back) is always the current server
            (highlighted in lime green)
          </li>
          <li>→ Click "Reset" to start over with the original lineup</li>
        </ul>
      </div>
    </div>
  );
}
