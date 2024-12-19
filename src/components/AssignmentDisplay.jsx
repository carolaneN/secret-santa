// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <ul className="flex flex-col space-y-2 gap-4">
      {assignments.map((assignment, index) => (
        <li className="flex w-full justify-between items-center px-6" key={index}>
          <section className="flex flex-col justify-center items-center h-20 w-20 rounded bg-pale-santa">
            <img src="nutcracker.svg" alt="Personnage" className="w-6" />
            <span>{assignment.giver}</span>
          </section>

          <div className="h-px w-8 bg-black "></div>
          <img src="kdo_seul.svg" alt="" />
          <div className="h-px w-8 bg-black "></div>
            

          <section className="flex flex-col justify-center items-center h-20 w-20 rounded bg-pale-santa">
            <img src="nutcracker.svg" alt="Personnage" className="w-6" />
            <span>{assignment.receiver}</span>
          </section>
        </li> 
      ))}
    </ul>
  );
}
