import { Clipboard, popToRoot, showHUD } from "@raycast/api";

interface Args {
  timestamp: string;
}

export default async (props: { arguments: Args }) => {
  const { timestamp } = props.arguments;

  const parsed = parseInt(timestamp);
  if (isNaN(parsed) || parsed <= 0n || parsed > 9999999999999n) {
    await showHUD("Invalid timestamp");
    return null;
  }

  const millis = parsed > 9999999999n ? Number(timestamp) : Number(timestamp) * 1000;
  const datetime = new Date(millis).toISOString();
  Clipboard.copy(datetime);
  await showHUD("Copied to clipboard");
  await popToRoot();
};
