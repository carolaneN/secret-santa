// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6">
      <section>
        <div>
          <p className="text-xl font-semibold uppercase">Ho ! Ho ! Ho !</p>
          <h1 className="text-4xl font-bold uppercase">Secret Santa</h1>
        </div>
        <p className="text-lg">
        Bienvenue dans l'application Secret Santa ! Organisez facilement votre
        échange de cadeaux entre amis ou collègues.
        </p>
      </section>
      
      <button onClick={onStart} className="button text-lg px-8 py-3">
        Commencer
      </button>
    </div>
  );
}
