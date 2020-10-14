import React from 'react';
import TextInput, { TextInputProps } from './TextInput';

interface TextAreaProps extends Omit<TextInputProps, 'multiline' | 'rows'> {
    initialRows: number,
    maxSymbolsPerRow: number
}

function computeRows(value: string, maxSymbolsPerRow: number, initialRows: number): number {
    let rows = 0;
    let afterNewLine = 0;
    const inital = Math.max(Math.round(initialRows), 3);
    for(let i = 0; i < value.length; ++i) {
        if(value[i] === '\n') {
            ++rows;
            afterNewLine = 0;
        } else {
            ++afterNewLine;
            if(afterNewLine > maxSymbolsPerRow) {
                ++rows;
                afterNewLine = 1;
            }
        }
    }
    if(rows < inital) {
        return inital;
    }
    const additionalRow = afterNewLine > 0 ? 1 : 0;
    return rows + additionalRow + 2;
}

const TextArea: React.FC<TextAreaProps> = ({
    initialRows,
    maxSymbolsPerRow,
    value,
    ...rest
}) => {
    const rows = computeRows(value, maxSymbolsPerRow, initialRows);
    return (
        <TextInput
            {...rest}
            fullWidth
            multiline
            outlined
            value={value}
            rows={rows} />
    );
};

export default TextArea;