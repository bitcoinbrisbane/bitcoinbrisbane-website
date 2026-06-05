import { readFile, writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";

const dist = resolve("dist");
const template = await readFile(resolve(dist, "index.html"), "utf-8");
const { render } = await import(resolve(dist, "server/assets/entry-server.js"));

const html = render("/");
const output = template.replace(
  '<div id="root"></div>',
  `<div id="root">${html}</div>`
);
await writeFile(resolve(dist, "index.html"), output, "utf-8");
console.log("prerendered / -> dist/index.html");

await rm(resolve(dist, "server"), { recursive: true, force: true });
