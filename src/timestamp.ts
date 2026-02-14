import { Clipboard, showHUD } from "@raycast/api";

interface Args {
  unit: number;
}

export default async function main(props: { arguments: Args }) {
  const { unit } = props.arguments;
  const timestamp = Math.floor(Date.now() / (unit || 1));
  Clipboard.copy(timestamp.toString());
  await showHUD("Copied to clipboard");
  return null;
}
