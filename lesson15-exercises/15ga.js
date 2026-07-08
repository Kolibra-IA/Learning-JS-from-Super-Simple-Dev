import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { isWeekend as isSatSun } from "./15gb.js";
isSatSun(dayjs().add(4, "days"));
