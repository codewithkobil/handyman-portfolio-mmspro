import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "src/assets/icons";
const quality = 80;

const exts = new Set([".png", ".jpg", ".jpeg"]);

async function run() {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!exts.has(ext)) continue;

    const inPath = path.join(inputDir, file);
    const outPath = path.join(inputDir, `${path.basename(file, ext)}.webp`);

    await sharp(inPath).webp({ quality }).toFile(outPath);
    console.log(`✅ ${file} -> ${path.basename(outPath)}`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
