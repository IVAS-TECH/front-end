export default function comparator<P extends {}>
    (list: Array<keyof P>) : (oldProps : P, newProps : P) => boolean {
    return (oldProps, newProps) => {
        for(const key of list) {
            if(oldProps[key] !== newProps[key]) {
                return false;
            }
        }
        return true;
    };
}