import styles from './filter.module.scss';
import './custom-slider.scss';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type RangePrice = [number, number];

const Price = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getDefaultPrice = () => {
        let defaultValue: RangePrice = [39, 1230];
        const [from, to] = [searchParams.get('from'), searchParams.get('to')];
        if (from && to) {
            defaultValue = [parseInt(from), parseInt(to)];
        }
        return defaultValue;
    };

    const [prices, setPrices] = useState<RangePrice>(getDefaultPrice());

    const handleChange = (values: number[] | number) => {
        setPrices(values as RangePrice);
    };

    const handleFilter = () => {
        setSearchParams((params) => {
            params.set('from', prices[0].toString());
            params.set('to', prices[1].toString());
            return params;
        });
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
            <button
                onClick={handleFilter}
                className={'green-btn ' + styles.filterBtn}>
                Filter
            </button>
        </>
    );
};

export default Price;
