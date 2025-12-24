import { useRef } from "react";
import { ReactKeypress } from "./keypress/ReactKeypress";
import { ReactKeypressItem } from "./keypress/ReactKeypressItem";
import { ShortcutGrid } from "./components/ShortcutGrid";
import { TogglePanel } from "./components/TogglePanel";
import { HelpContainer } from "./components/HelpContainer";
import { useVisibility } from "./components/useVisibility";

export default function App() {
  const visibility = useVisibility();

  const togglesMapRef = useRef(new Map());

  const toggleAllColors = () => {
    togglesMapRef.current.forEach((toggleFn) => {
      toggleFn();
    });
  };

  return (
    <ReactKeypress>
      <ReactKeypressItem
        combo="shift s"
        description="Press shift + s to toggle all"
        onTrigger={toggleAllColors}
      />

      <ShortcutGrid
        visible={visibility.visible}
        togglesMapRef={togglesMapRef}
      />

      <HelpContainer visible={visibility.visible} />

      <TogglePanel {...visibility} />
    </ReactKeypress>
  );
}
