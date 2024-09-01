import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchParams } from '../utils/getSearchParams';

type RangePrice = [number, number];

const useFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { from, to, type, category, sortBy, page } =
        getSearchParams(searchParams);

    const [prices, setPrices] = useState<RangePrice>([from, to]);
    const [sortType, setSortType] = useState<string>(type);
    const [SortBy, setSortBy] = useState<string>(sortBy);
    const [currPage, setPage] = useState<number>(Number(page));

    useEffect(() => {
        setPrices([from, to]);
        setSortType(type);
        setSortBy(sortBy);
        setPage(Number(page));
    }, [searchParams]);

    return {
        prices,
        setPrices,
        sortType,
        setSortType,
        category,
        SortBy,
        setSortBy,
        currPage,
        setSearchParams,
    };
};

export default useFilters;
