// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";
import Input_ from "postcss/lib/input";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="space-y-4 px-5">
      <div className="flex items-center space-x-2 px-4 py-3 bg-pine-santa rounded-full">
        <input
          type="text"
          className="input flex-grow text-white h-full w-full"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button
          className="button flex items-center justify-center h-10 w-12 text-4xl rounded-full bg-white cursor-pointer"
          onClick={addParticipant}
        >
          +
        </button>
      </div>
      <ul className="flex flex-col space-y-2 px-4 py-5 gap-2 rounded-xl bg-pale-santa">
        {participants.map((name, index) => (
          <li
            key={index}
            className="flex items-center justify-between w-full rounded-full px-8 py-3 bg-white"
          >
            <div className="flex items-center gap-4">
              <img src="nutcracker.svg" alt="Personnage" className="w-6" />
              {name}
            </div>
            <div className="space-x-2 flex items-center">
              <button
                className="flex items-center justify-center rounded-full h-10 w-10 bg-red-santa"
                onClick={() => onRemoveParticipant(index)}
              >
                <svg
                  dataSlot="icon"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="fill-white w-6"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
