import { KeypressContext } from "./KeypressContext";
import { useKeypressManager } from "./useKeypressManager";
import { ReactKeypressItem } from "./ReactKeypressItem";

export const ReactKeypress = ({ children }) => {
    const manager = useKeypressManager();

    return (
        <KeypressContext.Provider value={manager}>
            {children}
        </KeypressContext.Provider>
    );
};

ReactKeypress.Item = ReactKeypressItem;
