\# ConditionalRender Component

A React component that conditionally renders content based on boolean conditions.

```bash
npm install react-native-conditional-render
```
or
```bash
yarn add react-native-conditional-render
```



## Props

- `condition` (boolean, default: `false`): A boolean value determining whether to render content.
- `truth` (React Component): The content to render when the `condition` is `true`.
- `untruth` (React Component): The content to render when the `condition` is `false`.

## Usage ReactJS

```jsx
import React from 'react';
import ConditionalRender from 'react-native-conditional-render';

function MyComponent() {
  const isCondition = true;
  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      <ConditionalRender
        condition={isCondition}
        truth={<p>Condition is true, rendering truth content.</p>}
        untruth={<p>Condition is false, rendering untruth content.</p>}
      />

      <ConditionalRender
        condition={isCondition}
        truth={<p>Condition is true, rendering truth content.</p>}
      />
    </div>
  );
}

export default MyComponent;
```

## Usage React-Native

```jsx
import React from 'react';
import {View, Text} from 'react-native';
import ConditionalRender from 'react-native-conditional-render';

function MyComponent() {
  const isCondition = true;

  return (
    <View>
      <Text>Conditional Rendering Example</Text>
      <ConditionalRender
        condition={isCondition}
        truth={<Text>Condition is true, rendering truth content.</Text>}
        untruth={<Text>Condition is false, rendering untruth content.</Text>}
      />

      <ConditionalRender
        condition={isCondition}
        truth={<Text>Condition is true, rendering truth content.</Text>}
      />
    </View>
  );
}

export default MyComponent;