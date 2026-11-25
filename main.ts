import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const monologue = "At dawn, Captain Vey will open the eastern sluice, as his father did before I hanged him from its chain. The river will drown the king's granaries; my banners will rise above the flood, and the starving will call it deliverance. Yes, I remember the miller's daughter. She asked me to spare one sack. I spared it. She fed the rebels. A ruler must learn which mercies grow teeth. I lose the thread only when I hear her name. Ah. The gate. Sound the horn when the moon touches the tower. No, not that horn—the cracked one. It has my voice. Let the kingdom wake to it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), monologue, "utf8");
