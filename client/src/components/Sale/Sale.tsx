import styles from './sale.module.scss';

interface Props {
    sale: number;
}

const Sale = ({ sale }: Props) => {
    return <div className={styles.sale}>{sale}% OFF</div>;
};

export default Sale;
