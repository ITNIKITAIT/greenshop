import styles from './products.module.scss';
import { RiArrowRightSLine } from 'react-icons/ri';

const Pages = () => {
    return (
        <div className={styles.pages__list}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>
                <RiArrowRightSLine />
            </div>
        </div>
    );
};

export default Pages;
