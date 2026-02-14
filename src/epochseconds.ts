import { Clipboard, showHUD } from "@raycast/api";

export default async function main() {
  const timestamp = Math.floor(Date.now() / 1000);
  Clipboard.copy(timestamp.toString());
  await showHUD("Copied to clipboard");
  return null;
}
