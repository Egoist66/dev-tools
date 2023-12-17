export const toLS = {
    saveState(context: any) {
        localStorage.setItem("root", JSON.stringify(context));
    },

    loadState(afterInit: (parsedData: any) => void) {
        const savedState = localStorage.getItem("root");
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            afterInit(parsedState)
        }
    }
}