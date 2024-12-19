
export function Button ({ input, onClick }) {
    return (
        <button onClick={onClick} className="button text-lg px-8 py-3 self-center text-white bg-pine-santa rounded-full cursor-pointer focus:bg-green-santa">{input}</button>
    );
}