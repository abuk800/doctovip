"use client";

import { useRef, useState, type FormEvent } from "react";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  wide?: boolean;
  autoComplete?: string;
};

function validate(f: FieldDef, value: string): string | null {
  const v = value.trim();
  if (f.required && !v) {
    return f.type === "select"
      ? `Bitte wählen Sie bei „${f.label}“ eine Option aus.`
      : `Bitte füllen Sie das Feld „${f.label}“ aus.`;
  }
  if (v && f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
    return "Bitte geben Sie eine gültige E-Mail-Adresse an, zum Beispiel name@beispiel.de.";
  }
  if (v && f.type === "tel" && v.replace(/\D/g, "").length < 6) {
    return "Bitte geben Sie eine Telefonnummer an, unter der wir Sie erreichen.";
  }
  return null;
}

export function Form({
  id,
  fields,
  submitLabel,
  success,
  note,
}: {
  id: string;
  fields: FieldDef[];
  submitLabel: string;
  success: string;
  note?: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const doneRef = useRef<HTMLParagraphElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const f of fields) {
      const msg = validate(f, String(data.get(f.name) ?? ""));
      if (msg) next[f.name] = msg;
    }
    setErrors(next);
    const firstBad = fields.find((f) => next[f.name]);
    if (firstBad) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstBad.name}"]`)?.focus();
      return;
    }
    // TODO: Backend anbinden (Route Handler, E-Mail-Versand oder CRM). Bis dahin werden keine Daten übertragen.
    setDone(true);
    setTimeout(() => doneRef.current?.focus(), 0);
  }

  if (done) {
    return (
      <p ref={doneRef} tabIndex={-1} role="status" className="max-w-measure text-xl text-ink">
        {success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label={submitLabel}>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
        {fields.map((f) => {
          const fid = `${id}-${f.name}`;
          const err = errors[f.name];
          const common = {
            id: fid,
            name: f.name,
            className: "field",
            required: f.required,
            autoComplete: f.autoComplete,
            "aria-invalid": err ? (true as const) : undefined,
            "aria-describedby": err ? `${fid}-err` : undefined,
          };
          return (
            <div key={f.name} className={f.wide ? "md:col-span-2" : undefined}>
              <label htmlFor={fid} className="mb-2 block text-base font-medium text-ink">
                {f.label}
                {!f.required && <span className="font-normal text-graphite"> (optional)</span>}
              </label>
              {f.type === "select" ? (
                <select {...common} defaultValue="">
                  <option value="" disabled>
                    Bitte auswählen
                  </option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : f.type === "textarea" ? (
                <textarea {...common} rows={5} />
              ) : (
                <input {...common} type={f.type ?? "text"} />
              )}
              {err && (
                <p id={`${fid}-err`} className="mt-2 text-base text-ink">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <button type="submit" className="btn">
          {submitLabel}
        </button>
        {note && <p className="max-w-measure text-base text-graphite">{note}</p>}
      </div>
    </form>
  );
}
