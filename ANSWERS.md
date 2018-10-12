1. In JS type conversion can happen, e.g., '1' is a string not a number. In React, PropTypes is used to define a type for a prop. If the proptype is unexpected a warning sign will pop up on Chrome Dev Tools. Add isRequired will prevent it from being used.
2. The Lifecycle is Mount component, Update it, and Unmount it.
- Mount: initial constructor and render and componentDidMount
- Update: each additional render and componentDidUpdate
- Unmount: componentWillUnmount (important for log in pages).
3. Higher Order Components is a function that returns a component. The simpliest HOC would be a wrapper HOC that renders any component that is used as a parameter.
4. Inline styling, .css files imported into each .js file that needs it, and styled components which is perfect when many items (e.g., buttons) need to look the same, but are throughout the various components.
