export default function taskBlock(trueOrFalse) {
  let task = false; // Utiliser let à la place de var
  let task2 = true;  // Utiliser let à la place de var

  if (trueOrFalse) {
    let task = true;  // Utiliser let à la place de var
    let task2 = false; // Utiliser let à la place de var
  }

  return [task, task2];
}
