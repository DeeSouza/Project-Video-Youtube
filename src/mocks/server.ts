import { setupWorker, rest } from "msw";
import data from "./data";

const worker = setupWorker(
   rest.get("/games", async (req, res, ctx) => {
      return res(ctx.json(data));
   })
);

export { worker };
