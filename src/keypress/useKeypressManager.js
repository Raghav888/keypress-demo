import { useEffect, useRef, useState, useCallback } from "react";

export const useKeypressManager = () => {
    const listenerRef = useRef(null);
    const shortcutsRef = useRef(new Map());
    const [ready, setReady] = useState(false);
    const [, forceRender] = useState(0);

    useEffect(() => {
        listenerRef.current = new window.keypress.Listener();
        setReady(true);
    }, []);


    const register = useCallback(({ combo, description, callback }) => {
        if (shortcutsRef.current.has(combo)) return;

        shortcutsRef.current.set(combo, {
            combo,
            description,
            callback,
            active: false,
        });

        forceRender((v) => v + 1);
    }, []);


    const activate = useCallback(
        (combo) => {
            if (!ready || !listenerRef.current) return;

            const shortcut = shortcutsRef.current.get(combo);
            if (!shortcut || shortcut.active) return;

            listenerRef.current.simple_combo(combo, shortcut.callback);
            shortcut.active = true;

            forceRender((v) => v + 1);
        },
        [ready]
    );


    const deactivate = useCallback((combo) => {
        if (!listenerRef.current) return;

        const shortcut = shortcutsRef.current.get(combo);
        if (!shortcut || !shortcut.active) return;

        listenerRef.current.unregister_combo(combo);
        shortcut.active = false;

        forceRender((v) => v + 1);
    }, []);

    return {
        register,
        activate,
        deactivate,
        shortcuts: Array.from(shortcutsRef.current.values()),
        ready,
    };
};
