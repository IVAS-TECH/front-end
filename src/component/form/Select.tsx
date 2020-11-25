import { InputPicker, ErrorMessage } from 'rsuite';

interface SelectOption<Value> {
    label: string,
    value: Value
}

interface SelectProps<Value> {
    value: '' | Value,
    options: Array<SelectOption<Value>>,
    notSelectedText: string,
    requiredMessage: string
}

function Select<Value>({
    value,
    options,
    notSelectedText,
    requiredMessage
}: SelectProps<Value>) {
    return (
        <div className="rs-form-control-wrapper">
            <InputPicker
                className="form-select"
                toggleComponentClass="div"
                data={options}
                value={value}
                placeholder={notSelectedText}
                creatable={false}
                searchable={false}
                virtualized={false}
                cleanable={false}
                block
            />
            <ErrorMessage show={value === ''} placement="bottomStart">
                {requiredMessage}
            </ErrorMessage>
        </div>
    );
}

export default Select;