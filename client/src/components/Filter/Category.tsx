interface Props {
    title: string;
    amount: number;
}

const Category = ({ title, amount }: Props) => {
    return (
        <li>
            {title}
            <span>({amount})</span>
        </li>
    );
};

export default Category;
