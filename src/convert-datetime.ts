import { Clipboard, popToRoot, showHUD } from "@raycast/api";

interface Arguments {
  datetime: string;
}

export default async (props: { arguments: Arguments }) => {
  const { datetime } = props.arguments;
  const date = new Date(datetime);
  if (isNaN(date.getTime())) {
    await showHUD("Invalid date format");
    return null;
  }

  const timestamp = Date.now();
  Clipboard.copy(timestamp.toString());
  await showHUD("Copied to clipboard");
  await popToRoot();
};
