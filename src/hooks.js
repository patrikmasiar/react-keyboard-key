import { useEffect, useState } from 'react';

export const useKeyboardKey = (onKeyDownCallback) => {
  const [keyInfo, setKeyInfo] = useState({
    key: null,
    code: null,
    keyCode: null,
  });

  useEffect(() => {
    addKeyListener();

    return () => {
      removeKeyListener();
    }
  }, []);

  const addKeyListener = () => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyDown);
  };

  const removeKeyListener = () => {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyDown);
  };

  const onKeyDown = useCallback(e => {
    onKeyDownCallback(e);

    setKeyInfo({
      key: e.key,
      code: e.code,
      keyCode: e.keyCode,
    });
  }, []);

  return { keyInfo, addKeyListener, removeKeyListener }; 
};
