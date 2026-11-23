import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

const notes = [
  "Focus on progress, not perfection.",
  "Break big tasks into smaller steps.",
  "Consistency creates great results.",
];

function FocusNotes() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((current - 1 + notes.length) % notes.length);
  };

  const next = () => {
    setCurrent((current + 1) % notes.length);
  };

  return (
    <div className="focus-notes">
      <h3>
        <Lightbulb size={20} />
        Focus Notes
      </h3>

      <p>{notes[current]}</p>

      <div className="notes-controls">
        <button onClick={previous} aria-label="Previous note">
          <ChevronLeft size={18} />
        </button>

        <span>{current + 1} / {notes.length}</span>

        <button onClick={next} aria-label="Next note">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default FocusNotes;