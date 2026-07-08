import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { isWeekend } from "./15fb.js";
isWeekend(dayjs().add(4, "days"));
