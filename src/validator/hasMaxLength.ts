export default function hasMaxLength(max: number): (val: string) => boolean {
    return val => val.length <= max;
};