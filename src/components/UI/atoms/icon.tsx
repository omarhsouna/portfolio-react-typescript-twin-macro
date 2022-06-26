import icons from "../../icons";

interface Props {
  name: string;
}
function Icon({ name }: Props) {
  const SelectedIcon = icons[name as keyof typeof icons];
  if (!SelectedIcon) return null;

  return <SelectedIcon />;
}

export default Icon;
