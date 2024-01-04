import { cva } from 'class-variance-authority';

type ButtonType = 'normal' | 'primary' | 'success' | 'warn' | 'danger';
type ButtonNativeType = 'submit' | 'button' | 'reset';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProp {
  type: ButtonType;
  nativeType: ButtonNativeType;
  to: string;
  size: ButtonSize;
}

export const buttonTypeClass = computed(() =>
  cva(['text-sm font-sans rounded transition border text-white inline-flex items-center justify-center space-x-3'], {
    variants: {
      intent: {
        normal: ['border-zinc-300 hover:border-green-500 text-zinc-500 hover:text-green-500 bg-white'],
        primary: ['border-green-500 hover:border-green-600 bg-green-500 hover:bg-green-600'],
        success: ['border-teal-500 hover:border-teal-500'],
        warn: ['border-amber-500 hover:border-amber-600'],
        danger: ['border-red-500 hover:border-red-600']
      },
      size: {
        small: ['text-xs', 'py-1', 'px-2'],
        medium: ['text-sm', 'py-2', 'px-4'],
        large: ['text-base', 'py-3', 'px-6']
      }
    },
    compoundVariants: [
      {
        intent: 'normal',
        size: 'medium'
      }
    ],
    defaultVariants: {
      intent: 'normal',
      size: 'medium'
    }
  })
);
