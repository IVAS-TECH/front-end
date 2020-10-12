export default function isInRange(start: string, end: string): (val: string) => boolean {
    return val => {
        const n = val.length;
        for(let i = 0; i < n; ++i) {
            if(val[i] >= start && val[i] <= end) {
                return true;
            }
        }
        return false;
    };
};