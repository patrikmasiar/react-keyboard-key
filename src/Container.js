import { useState, useEffect, useCallback } from 'react';

const KeyListenerContainer = ({ children, onKeyDownCallback }) => {
  const [keyInfo, setKeyInfo] = useState({
    key: null,
    code: null,
    keyCode: null,
    output: null,
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
      output: e,
    });
  }, []);

  return children({
    keyInfo,
  });
};

export default KeyListenerContainer;