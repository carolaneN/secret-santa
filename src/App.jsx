import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";
import { Button } from "./components/Button";

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="bg-pine-santa h-full w-full">
      <div className="flex flex-col gap-8 w-full h-full">
        
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        
        {currentScreen === "input" && (
          <div className="flex flex-col gap-4 h-screen md:w-1/2 md:rounded-r-3xl pb-7 justify-between bg-white md:overflow-hidden md:overflow-y-scroll">
          <section className="relative flex flex-col py-8 md:py-5 items-center justify-center">
            <p className="text-3xl md:text-xl font-black uppercase text-pine-santa">Secret Santa</p>
            <img src="guirlande.svg" alt="Guirlandes" className=""/>
          </section>
            <h2 className="text-lg font-bold text-center uppercase">
              Ajoutez les participants
            </h2>
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <div className="mt-6 pb-7">
              <button className="button flex flex-col justify-center items-center w-full cursor-pointer" onClick={distributeGifts}>
                Distribuer les cadeaux
                <img src="kdo.svg" alt="Cadeaux" className="w-1/2" />
              </button>
            </div>
          </div>
        )}
        
        {currentScreen === "assignments" && (
          <div className="flex flex-col gap-4 h-screen pb-7 md:w-1/2 md:rounded-r-3xl justify-between bg-white md:overflow-hidden md:overflow-y-scroll">
          <section className="relative flex flex-col py-8 items-center justify-center">
            <p className="text-xl font-black uppercase text-pine-santa">Secret Santa</p>
            <img src="guirlande.svg" alt="Guirlandes" className=""/>
          </section>
            <h2 className="text-lg font-bold text-center uppercase">
              Attributions des cadeaux
            </h2>
            <AssignmentDisplay assignments={assignments} />
            <div className="flex w-full justify-center my-8 pb-7">
              <Button onClick={resetApp} input="Recommencer"></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
