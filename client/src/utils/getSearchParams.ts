export interface IFilter {
    type?: string;
    from?: number;
    to?: number;
    sortBy?: string;
    category?: string | null;
    page?: string;
}

export const DEFAULT_MIN_PRICE = 0;
export const DEFAULT_MAX_PRICE = 1230;
const DEFAULT_SORTING = 'desc';

export const getSearchParams = (params: URLSearchParams) => {
    const from = Number(params.get('from')) || DEFAULT_MIN_PRICE;
    const to = Number(params.get('to')) || DEFAULT_MAX_PRICE;
    const type = params.get('type') || 'all';
    const category = params.get('category');
    const sortBy = params.get('sortBy') || DEFAULT_SORTING;

    return { from, to, type, category, sortBy };
};
