import Select, { SingleValue } from 'react-select';
import SelectElem from './SelectElem';
import useFilters from '../../hooks/useFilters';

type OptionType = {
    value: string;
    label: string | React.ReactNode;
};

const options: OptionType[] = [
    { value: 'default', label: 'Default sorting' },
    {
        value: 'price-asc',
        label: <SelectElem type={'asc'} label={'Price'} />,
    },
    {
        value: 'price-desc',
        label: <SelectElem type={'desc'} label={'Price'} />,
    },
    {
        value: 'rating-asc',
        label: <SelectElem type={'asc'} label={'Rating'} />,
    },
    {
        value: 'rating-desc',
        label: <SelectElem type={'desc'} label={'Rating'} />,
    },
];

const SortBy = () => {
    const { SortBy, setSearchParams } = useFilters();

    const getValue = () => options.find((s) => s.value === SortBy);

    const onChange = (newValue: SingleValue<OptionType>) => {
        setSearchParams((params) => {
            params.set('sortBy', newValue?.value as string);
            return params;
        });
    };

    return (
        <div>
            <Select
                className="sortSelect"
                classNamePrefix="react-select"
                onChange={onChange}
                defaultValue={getValue()}
                options={options}
                isSearchable={false}
            />
        </div>
    );
};

export default SortBy;
