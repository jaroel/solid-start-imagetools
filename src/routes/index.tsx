import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

import Road from "~/assets/pexels-photo-1563356.jpeg?as=img&w=200";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>

      <hr />
      <pre>{JSON.stringify(Road)}</pre>
      <hr />
      <img
        src={Road.src}
        width={Road.width}
        height={Road.height}
        style="background-color: red; border: 1px solid red;"
      />

      <hr />

      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
