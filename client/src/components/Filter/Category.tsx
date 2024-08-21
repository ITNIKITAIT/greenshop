export interface ICategory {
    name: string;
    _count: {
        products: number;
    };
}

const Category = ({ name, _count }: ICategory) => {
    return (
        <li>
            {name}
            <span>({_count.products})</span>
        </li>
    );
};

export default Category;
