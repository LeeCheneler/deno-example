import { render } from "preact-render-to-string";

const Example = () => {
  return <h1>Hello, world!</h1>;
};

console.log(render(<Example />));
