interface TimePickerProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  'aria-label'?: string;
}

export default function TimePicker({ id, value, onChange, label, 'aria-label': ariaLabel }: TimePickerProps) {
  return (
    <div>
      {label && <label htmlFor={id} className="label-text">{label}</label>}
      <input
        id={id}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
        aria-label={ariaLabel || label}
      />
    </div>
  );
}
