// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

import { Button } from "./Button";

export function WelcomeScreen({ onStart }) {
  return (
    <div className=" flex flex-col md:flex-row w-full text-center space-y-6 h-full">
      <section className="text-center space-y-6 h-full rounded-r-3xl bg-white p-0 m-0">
        <section className="flex flex-col gap-5 py-26 px-8 items-center justify-center md:rounded-br-full md:rounded-bl-full rmd:ounded-tr-3xl bg-pale-santa">
          <div>
            <p className="text-xl font-semibold uppercase">Ho ! Ho ! Ho !</p>
            <h1 className="text-4xl font-black uppercase">Secret Santa</h1>
          </div>
          <p className="md:px-8">
          Bienvenue dans l'application Secret Santa ! Organisez facilement votre
          échange de cadeaux entre amis ou collègues.
          </p>
        </section>

        <img src="kdo.svg" alt="Cadeaux" className="w-3/4 mx-auto"/>

        <Button onClick={onStart} input="Commencer"></Button>
      </section>

      <section className="hidden md:flex w-11/12">
        
      </section>

    </div>
  );
}
