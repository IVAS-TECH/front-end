export default function hasMinLength(min: number): (val: string) => boolean {
    return val => val.length >= min;
};