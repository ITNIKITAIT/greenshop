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
const DEFAULT_SORTING = 'default';
const DEFAULT_TYPE = 'all';
const DEFAULT_PAGE = '1';

export const getSearchParams = (params: URLSearchParams) => {
    const from = Number(params.get('from')) || DEFAULT_MIN_PRICE;
    const to = Number(params.get('to')) || DEFAULT_MAX_PRICE;
    const type = params.get('type') || DEFAULT_TYPE;
    const category = params.get('category');
    const sortBy = params.get('sortBy') || DEFAULT_SORTING;
    const page = params.get('page') || DEFAULT_PAGE;

    return { from, to, type, category, sortBy, page };
};
