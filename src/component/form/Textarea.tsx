import { Input } from 'rsuite';

interface TextareaProps {
    rows: number,
    placeholder: string,
}

const style: React.CSSProperties = {
    width: '100%',
    resize: 'vertical'
};

const Textarea: React.FC<TextareaProps> = ({ rows, placeholder }) => (
    <Input
        componentClass="textarea"
        rows={rows}
        placeholder={placeholder}
        style={style}
    />
);

export default Textarea;