// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

import { Button } from "./Button";

export function WelcomeScreen({ onStart }) {
  return (
    <div className=" flex flex-col md:flex-row w-full h-screen text-center space-y-6">
      <section className="flex flex-col justify-between pb-7 text-center space-y-6 h-screen md:rounded-r-3xl bg-white md:pb-4 md:overflow-hidden">
        <section className="flex flex-col gap-5 py-26 px-8 m-0 items-center justify-center rounded-br-full rounded-bl-full md:rounded-tr-3xl bg-pale-santa">
          <div>
            <p className="text-xl font-semibold uppercase">Ho ! Ho ! Ho !</p>
            <h1 className="text-4xl font-black uppercase">Secret Santa</h1>
          </div>
          <p className="md:px-8">
          Bienvenue dans l'application Secret Santa ! Organisez facilement votre
          échange de cadeaux entre amis ou collègues.
          </p>
        </section>

        <img src="kdo.svg" alt="Cadeaux" className="w-1/2 mx-auto"/>

        <Button onClick={onStart} input="Commencer"></Button>
      </section>

      <section className="hidden md:flex w-11/12">
        
      </section>

    </div>
  );
}
