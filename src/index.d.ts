declare module 'react-keyboard-key' {
  import { FC } from 'react';

  export const KeyListenerContainer: FC<{
    children: (params: {
      keyInfo: {
        key: string | null;
        code: string | null;
        keyCode: number | null;
        output: KeyboardEvent | null,
      };
    }) => JSX.Element;
    onKeyDownCallback: (event: KeyboardEvent) => void;
  }>

  export const useKeyboardKey: (onKeyDownCallback: (e: KeyboardEvent) => void) => {
    keyInfo: {
      key: string | null;
      code: string | null;
      keyCode: number | null;
      output: KeyboardEvent | null,
    };
    addKeyListener: () => void;
    removeEventListener: () => void;
  }
}
