const symbols = /^[0-9A-Za-z_-]*$/;

export default function isSafeSymbol(val: string): boolean {
    return symbols.test(val);
};