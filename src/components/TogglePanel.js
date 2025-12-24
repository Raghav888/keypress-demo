import { SHORTCUTS } from "./shortcutConfig";

export const TogglePanel = ({ visible, toggleVisibility }) => {
    return (
        <div style={{ marginBottom: "8px" }}>
            {SHORTCUTS.map((s) => (
                <button
                    key={s.id}
                    onClick={() => toggleVisibility(s.id)}
                    style={{ marginRight: "8px" }}
                >
                    {visible[s.id] ? `Unmount ${s.label}` : `Mount ${s.label}`}
                </button>
            ))}
        </div>
    );
};
