import { SHORTCUTS } from "./shortcutConfig";
import { ShortcutBox } from "./ShortcutBox";

export const ShortcutGrid = ({ visible, togglesMapRef }) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                height: "70vh",
                gap: "2px",
            }}
        >
            {SHORTCUTS.map(
                (s) =>
                    visible[s.id] && (
                        <ShortcutBox
                            key={s.id}
                            id={s.id}
                            label={s.label}
                            togglesMapRef={togglesMapRef}
                        />
                    )
            )}
        </div>
    );
};
