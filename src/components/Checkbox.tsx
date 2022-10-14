import { clsx } from 'clsx';

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <div
      className={clsx(
        'py-4 px-3 bg-cyan-100 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-200 focus:ring-2 ring-white'
    )}
    />
  );
}
