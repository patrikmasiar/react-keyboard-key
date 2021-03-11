[![npm](https://img.shields.io/npm/v/react-keyboard-key?style=plastic)](https://www.npmjs.com/package/react-keyboard-key)
[![NPM](https://img.shields.io/npm/l/react-keyboard-key)](https://github.com/massoprod/react-keyboard-key/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/dy/react-keyboard-key?style=plastic)](https://www.npmjs.com/package/react-keyboard-key)

# react-keyboard-key
Container and hook with keyboard event listener.

## Usage

#### Types
```javascript
keyInfo: {
  key: string | null;
  code: string | null;
  keyCode: number | null;
  output: KeyboardEvent | null,
};
addKeyListener: () => void;
removeEventListener: () => void;
onKeyDownCallback: (event: KeyboardEvent) => void;
```

### Container
```javascript
import { KeyListenerContainer } from 'react-keyboard-key';

...

const ExampleComponent: FC<Props> = ({ children }) => {
  return (
    <KeyListenerContainer
      onKeyDownCallback={e => {
        e.preventDefault();
      }}
    >
      {keyInfo => (
        <div>
          {keyInfo.code}
        </div>
      )}
    </KeyListenerContainer>
  );
};

```

### Hook
```javascript
import { useKeyboardKey } from 'react-keyboard-key';

const ExampleComponent: FC<Props> = () => {
  const { keyInfo } = useKeyboardKey(onKeyDownCallback);

  const onKeyDownCallback = (e: KeyboardEvent) => {
    e.preventDefault
  };

  return (
    <div>
      {keyInfo.code}
    </div>
  );
};
```

## Project
* [whatdidipress.com](https://whatdidipress.com/)
* [Github project whatdidipress.com](https://github.com/massoprod/what-did-i-press/)