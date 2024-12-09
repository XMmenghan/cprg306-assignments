export default function Dog({ id, name, age, onDeletDog }) {
  return (
    <div>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={() => onDeletDog(id)}>Delete</button>
    </div>
  );
}
