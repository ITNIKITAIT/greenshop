import styles from './filter.module.scss';
import './custom-slider.scss';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useState } from 'react';

const Price = () => {
    const [prices, setPrices] = useState<[number, number]>([39, 1230]);

    const handleChange = (values: number[] | number) => {
        setPrices(values as [number, number]);
    };

    return (
        <>
            <h3>Price range</h3>
            <div className={styles.price}>
                <Slider
                    range
                    min={0}
                    max={2000}
                    defaultValue={prices}
                    allowCross={false}
                    pushable={50}
                    onChange={handleChange}
                    trackStyle={[{ backgroundColor: '#46A358', height: 5 }]}
                    handleStyle={[{}, {}]}
                    railStyle={{ backgroundColor: '#46A35833', height: 5 }}
                />
                <p>
                    Price:{' '}
                    <span>
                        ${prices[0]} - ${prices[1]}
                    </span>
                </p>
            </div>
            <button className={'green-btn ' + styles.filterBtn}>Filter</button>
        </>
    );
};

export default Price;
