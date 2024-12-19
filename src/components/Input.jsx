export function Input ({ input, onChange }) {
    return (
        <input
        type="text"
        className="input flex-grow"
        placeholder="Entrez un nom"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        ></input>
    );
}