import { opine, json, urlencoded } from "./express.ts";
import bookRouter from "./bookRouter.ts";
const app = opine();

app.use(json());
app.use(urlencoded());

app.use("/api/", bookRouter);

const port = 3000;

app.listen(port);

console.log(`Api server running ${port}`);
