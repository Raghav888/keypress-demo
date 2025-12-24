import { SHORTCUTS } from "./shortcutConfig";

export const HelpContainer = ({ visible }) => {
    return (
        <div style={{ padding: "8px" }}>
            <h4>Help</h4>
            <ul>
                {SHORTCUTS.filter((s) => visible[s.id]).map((s) => (
                    <li key={s.id}>
                        Click {s.label} or Press shift s to toggle {s.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};
