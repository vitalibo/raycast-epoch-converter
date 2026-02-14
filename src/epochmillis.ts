import { Clipboard, showHUD } from "@raycast/api";

export default async function main() {
  const timestamp = Date.now();
  Clipboard.copy(timestamp.toString());
  await showHUD("Copied to clipboard");
  return null;
}
