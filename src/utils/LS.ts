export const toLS = {
    saveState(key: string, context: any) {
        localStorage.setItem(key, JSON.stringify(context));
    },

    loadState(key: string, afterInit: (parsedData: any) => void) {
        const savedState = localStorage.getItem(key);
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            afterInit(parsedState)
        }
    }
}