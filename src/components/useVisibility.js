import { useState } from "react";
import { SHORTCUTS } from "./shortcutConfig";

export const useVisibility = () => {
    const [visible, setVisible] = useState(() =>
        Object.fromEntries(SHORTCUTS.map((s) => [s.id, true]))
    );

    const toggleVisibility = (id) => {
        setVisible((v) => ({ ...v, [id]: !v[id] }));
    };

    const toggleAll = () => {
        setVisible((v) => {
            const anyVisible = Object.values(v).some(Boolean);
            return Object.fromEntries(
                Object.keys(v).map((key) => [key, !anyVisible])
            );
        });
    };

    return { visible, toggleVisibility, toggleAll };
};
