# React Simple Multi Counter

This is an alternative approach to Zhiquan's React Multi Counter demo.

# Rationale

Since the `count` value of each `Counter` component does not need to be made known to other `Counter` components, we can encapsulate the `count` state within its own component.

Each `Counter` (child) component accepts a `resetAllCounters` property that notifies `MainCounter` (parent) component to "pass" this message to all `Counter` components to reset its `count` state. This is achieved through the use of a combination of `resetCount` and `useEffect`.

Acccording to React's documention,

> The Effect Hook lets you perform side effects in function components...

`useEffect` accepts a dependecy array as its second argument, where the callback is invoked only when values in the dependecy array changes.

In this example, `resetCount` (which tracks the number of times all counters are reset) is passed to this dependecy array.

```js
useEffect(() => {
	handleResetCount()
}, [
	resetCount
])
```

Therefore, whenever the value of `resetCount` changes, the callback is invoked and executes `handleResetCount` function in the `Counter` component.

Read more about `useEffect` [here](https://reactjs.org/docs/hooks-effect.html).