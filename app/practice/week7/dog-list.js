import Dog from "./dog.js";
import dogData from "./dog-data.json";

export default function DogList({ dogs, onDeletDog }) {
  return (
    <div>
      <h2>Dog List</h2>
      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDeletDog={onDeletDog}
        />
      ))}
    </div>
  );
}
