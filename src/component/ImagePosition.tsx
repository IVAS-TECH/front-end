import { InputPicker, ErrorMessage } from 'rsuite';
import { horizontal, vertical } from './Position';

type Option = 'vertical' | 'horizontal';

interface ImagePositionProps {
    value: '' | Option,
    label: Record<Option, string>,
    notSelectedText: string,
    requiredMessage: string
}

const ImagePosition: React.FC<ImagePositionProps> = ({
    value,
    label,
    notSelectedText,
    requiredMessage
}) => {
    return (
        <div className="rs-form-control-wrapper">
            <InputPicker
                className="form-select"
                toggleComponentClass="div"
                data={[
                    {
                        label: label.horizontal,
                        value: 'horizontal'
                    },
                    {
                        label: label.vertical,
                        value: 'vertical'
                    }
                ]}
                value={value}
                placeholder={notSelectedText}
                creatable={false}
                searchable={false}
                virtualized={false}
                cleanable={false}
                block
                renderMenuItem={(label, item) => {
                    if(item.value === 'horizontal') {
                        return (
                            <span>
                                {label}
                                {horizontal}
                            </span>
                        );
                    }
                    if(item.value === 'vertical') {
                        return (
                            <span>
                                {label}
                                {vertical}
                            </span>
                        );
                    }
                    return <span>{label}</span>;
                }}
            />
            <ErrorMessage show={value === ''} placement="bottomStart">
                {requiredMessage}
            </ErrorMessage>
        </div>
    );
}

export default ImagePosition;