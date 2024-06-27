import styles from './filter.module.scss';
import './custom-slider.scss';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useState } from 'react';

const Price = () => {
    const [prices, setPrices] = useState<number[] | number>([0, 1200]);

    return (
        <>
            <h3>Price range</h3>
            <div className={styles.price}>
                <Slider
                    range
                    min={0}
                    max={3000}
                    defaultValue={prices}
                    onChange={(e) => setPrices(e)}
                    trackStyle={[{ backgroundColor: '#46A358', height: 5 }]}
                    handleStyle={[
                        {
                            borderColor: 'white',
                            height: 22,
                            width: 22,
                            marginTop: -8,
                            backgroundColor: '#46A358',
                            opacity: 1,
                            borderWidth: 3,
                        },
                        {
                            borderColor: 'white',
                            height: 22,
                            width: 22,
                            marginTop: -8,
                            backgroundColor: '#46A358',
                            opacity: 1,
                            borderWidth: 3,
                        },
                    ]}
                    railStyle={{ backgroundColor: '#46A35833', height: 5 }}
                />
                <p>
                    Price: <span>$39 - $1230</span>
                </p>
            </div>
            <button className={'green-btn ' + styles.filterBtn}>Filter</button>
        </>
    );
};

export default Price;
