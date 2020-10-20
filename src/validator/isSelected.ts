export default function
isSelected<Choice extends string | number>(val: '' | Choice): boolean {
    return val !== '';
};