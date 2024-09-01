import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchParams } from '../utils/getSearchParams';

type RangePrice = [number, number];

const useFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { from, to, type, category, sortBy } = getSearchParams(searchParams);

    const [prices, setPrices] = useState<RangePrice>([from, to]);
    const [sortType, setSortType] = useState<string>(type);
    const [SortBy, setSortBy] = useState<string>(sortBy);

    useEffect(() => {
        setPrices([from, to]);
        setSortType(type);
        setSortBy(sortBy);
    }, [searchParams]);

    return {
        prices,
        setPrices,
        sortType,
        setSortType,
        category,
        SortBy,
        setSortBy,
        setSearchParams,
    };
};

export default useFilters;
