import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface Props {
    label: string;
    type: 'desc' | 'asc';
}

const SelectElem = ({ label, type }: Props) => {
    return (
        <div className="select__item">
            {label} {type === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
        </div>
    );
};

export default SelectElem;
