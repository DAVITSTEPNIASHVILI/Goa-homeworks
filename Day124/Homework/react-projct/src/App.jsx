import { useState } from "react";

const staticArr = [
  "Aleksandre Maxaradze",
  "Petre Sikmashvili",
  "Beqa Gulbatabashvili",
  "Lizi Mchedlidze",
  "Demetre Gagnidze",
  "Nikoloz Iobidze",
  "Davit Stepniashvili"
];

const App = () => {
  const [selected, setSelected] = useState([]);

  const handleAdd = ({ target }) => {
    const selectedStudent = target.value;

    if (!selected.includes(selectedStudent)) {
      setSelected(prev => [selectedStudent, ...prev]);
    }
  };

  const handleRemove = ({ target }) => {
    const selectedStudent = target.value;

    setSelected(prev => prev.filter(el => el !== selectedStudent));
  };

  return (
    <>
      <section>
        <ul>
          {
            selected.map((student, index) => (
              <li key={index}>
                <p>{student}</p>
                <button value={student} onClick={handleRemove}>remove</button>
              </li>
            ))
          }
        </ul>
      </section>

      {
        selected.length !== 0 && (
          <>
            <button onClick={() => setSelected([])}>Reset</button>
            <hr />
          </>
        )
      }

      <section>
        <ul>
          {staticArr.map((student, index) => (
            <li key={index}>
              <p>{student}</p>
              <button value={student} onClick={handleAdd}>add</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;