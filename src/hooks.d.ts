declare module 'react-keyboard-key/hook' {
  export const useKeyboardKey: (onKeyDownCallback: (e: KeyboardEvent) => void) => {
    keyInfo: {
      key: string | null;
      code: string | null;
      keyCode: number | null;
    };
    addKeyListener: () => void;
    removeEventListener: () => void;
  };
};
