interface DatePickerProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  min?: string;
  max?: string;
  'aria-label'?: string;
}

export default function DatePicker({ 
  id, 
  value, 
  onChange, 
  label, 
  min, 
  max,
  'aria-label': ariaLabel 
}: DatePickerProps) {
  return (
    <div>
      {label && <label htmlFor={id} className="label-text">{label}</label>}
      <input
        id={id}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        className="input-field"
        aria-label={ariaLabel || label}
      />
    </div>
  );
}
