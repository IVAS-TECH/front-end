import { Maybe } from 'purify-ts/Maybe';

export default function equal<T>(l: Maybe<T>, r : Maybe<T>): boolean {
    return l.equals(r);
};