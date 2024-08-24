import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SortType } from '../components/Products/Sort';

type RangePrice = [number, number];

const useFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [prices, setPrices] = useState<RangePrice>(getDefaultPrice());

    function getDefaultPrice() {
        let defaultValue: RangePrice = [0, 1230];
        const [from, to] = [searchParams.get('from'), searchParams.get('to')];
        if (from && to) {
            defaultValue = [parseInt(from), parseInt(to)];
        }
        return defaultValue;
    }

    const [sortType, setSortType] = useState<SortType>(
        (searchParams.get('sort') as SortType) || 'all'
    );

    return { prices, setPrices, sortType, setSortType, setSearchParams };
};

export default useFilters;
