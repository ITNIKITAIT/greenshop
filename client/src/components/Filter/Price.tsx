import styles from './filter.module.scss';
import './custom-slider.scss';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import useFilters from '../../hooks/useFilters';

type RangePrice = [number, number];

const Price = () => {
    const { prices, setPrices, setSearchParams } = useFilters();

    const handleChange = (values: number[] | number) => {
        setPrices(values as RangePrice);
    };

    const handleFilter = () => {
        setSearchParams((params) => {
            params.set('from', prices[0].toString());
            params.set('to', prices[1].toString());
            params.delete('page');
            return params;
        });
    };

    return (
        <>
            <h3 className={styles.price__title}>Price range</h3>
            <div className={styles.price}>
                <Slider
                    range
                    min={0}
                    max={2000}
                    defaultValue={prices}
                    allowCross={false}
                    pushable={50}
                    step={5}
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
