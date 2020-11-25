import { Checkbox as RsuiteCheckbox } from 'rsuite';

interface CheckboxProps {
    checked: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ checked }) => (
    <RsuiteCheckbox checked={checked} />
);

export default Checkbox;