import { useContext, useEffect } from "react";
import { KeypressContext } from "./KeypressContext";

export const ReactKeypressItem = ({
    combo,
    description,
    onTrigger,
    children,
}) => {
    const ctx = useContext(KeypressContext);
    if (!ctx) {
        throw new Error("ReactKeypress.Item must be used inside ReactKeypress");
    }

    const { register, activate, deactivate, ready } = ctx;

    useEffect(() => {
        register({ combo, description, callback: onTrigger });
    }, [combo, description, onTrigger, register]);

    useEffect(() => {
        if (!ready) return;

        activate(combo);
        return () => {
            deactivate(combo);
        };
    }, [ready, combo, activate, deactivate]);

    return children || null;
};
