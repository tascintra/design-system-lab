import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <input
      className={clsx(
        'py-4 px-3 rounded bg-gray-400 w-full outline-none text-gray-100 text-xs transition placeholder:text-gray-300 focus:shadow-3xl focus:ring-2 ring-cyan-200',
      )}
      { ...props }
    />
  );
}
