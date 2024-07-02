import styles from './discount.module.scss';

interface Props {
    sale: number;
}

const Discount = ({ sale }: Props) => {
    return <div className={styles.sale}>{sale}% OFF</div>;
};

export default Discount;
