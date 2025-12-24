import { useState, useCallback, useEffect, useRef } from "react";

export const ShortcutBox = ({ id, label, togglesMapRef }) => {
    const [active, setActive] = useState(false);
    const activeRef = useRef(active);

    useEffect(() => {
        activeRef.current = active;
    }, [active]);

    const toggle = useCallback(() => {
        setActive(!activeRef.current);
    }, []);

    useEffect(() => {
        togglesMapRef.current.set(id, toggle);
        return () => {
            togglesMapRef.current.delete(id);
        };
    }, [id, toggle, togglesMapRef]);

    return (
        <div
            onClick={toggle}
            style={{
                height: "100%",
                width: "100%",
                background: active ? "#00c853" : "#0a33ff",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                cursor: "pointer",
            }}
        >
            {label}
        </div>
    );
};
