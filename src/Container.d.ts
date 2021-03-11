declare module 'react-keyboard-key/container' {
  import { FC } from 'react';

  export const KeyListenerContainer: FC<{
    children: (params: {
      keyInfo: {
        key: string | null;
        code: string | null;
        keyCode: number | null;
      };
    }) => JSX.Element;
    onKeyDownCallback: (event: KeyboardEvent) => void;
  }>
};
