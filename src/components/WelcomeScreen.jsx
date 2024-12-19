// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

import { Button } from "./Button";

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6 h-full">
      <section className="flex flex-col gap-5 py-26 px-8 items-center justify-center rounded-b-full bg-pale-santa">
        <div>
          <p className="text-xl font-semibold uppercase">Ho ! Ho ! Ho !</p>
          <h1 className="text-4xl font-black uppercase">Secret Santa</h1>
        </div>
        <p className="">
        Bienvenue dans l'application Secret Santa ! Organisez facilement votre
        échange de cadeaux entre amis ou collègues.
        </p>
      </section>

      <img src="kdo.svg" alt="Cadeaux" className="w-3/4 mx-auto"/>

      <Button onClick={onStart} input="Commencer"></Button>

    </div>
  );
}
