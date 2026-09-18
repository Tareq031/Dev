🚀 Dev Stack

A Modern Technology Stack Explorer

Dev Stack is a responsive React application where users can explore different web technologies, view their details, ratings, and difficulty levels, and add technologies to their personal stack.

🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- JavaScript
- HTML
- CSS

✨ Features

1. 🔍 Explore Technologies

Users can explore different technologies with their name, category, description, rating, and difficulty level.

2. 📚 Add to My Stack

Users can add technologies to their personal stack and manage the selected technologies.

3. 🔔 Interactive Alerts

React-Toastify is used to show notifications when a technology is added, a duplicate add is attempted, or an item is removed.

---

⚛️ React Questions & Answers

1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. React uses JSX to make UI code easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is data managed inside a component that can change over time.

In short:

- Props → Data received from parent
- State → Data managed inside the component

3. What does the useState hook do, and where did you use it in this project?

"useState" is used to create and manage changing data in a React component.

In this project, I used "useState" to manage the technology data and My Stack items.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

"useEffect" is used to perform side effects in a React component.

I used "useEffect" to load the technology data from the local JSON file when the component loads.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique "key" to identify each item in a list.

It helps React understand which item was added, removed, or changed, so it can update the UI efficiently.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I used it to show an empty stack message when there are no technologies in My Stack.

For example:

{myStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

A child can send something back to the parent by calling a function passed through props.

For example:

<Child data={data} onAdd={handleAdd} />

Here, "data" is passed from the parent to the child, and "onAdd" allows the child to send an action back to the parent.

---

👨‍💻 Author

Tarequl Islam

Beginner Web Developer | Frontend Developer


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
