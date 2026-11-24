import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const dir = dirname(fileURLToPath(import.meta.url));
process.stdout.write(readFileSync(join(dir, "entry.txt"), "utf8"));
