import { useState } from 'react';
import styles from './product.module.scss';

type Description = 'Description' | 'Reviews';

const ProductMore = () => {
    const [type, setType] = useState<Description>('Description');

    return (
        <section className={styles.product__more}>
            <div>
                <h3
                    className={`${type === 'Description' && styles.current}`}
                    onClick={() => setType('Description')}>
                    Product Description
                </h3>
                <h3
                    className={`${type === 'Reviews' && styles.current}`}
                    onClick={() => setType('Reviews')}>
                    Reviews (19)
                </h3>
            </div>
            <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nam fringilla augue nec est tristique auctor.
                Donec non est at libero vulputate rutrum. Morbi ornare lectus
                quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
                cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget
                laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
                eros eget velit. Donec ac tempus ante. Fusce ultricies massa
                massa. Fusce aliquam, purus eget sagittis vulputate, sapien
                libero hendrerit est, sed commodo augue nisi non neque. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
                lorem et placerat vestibulum, metus nisi posuere nisl, in
                accumsan elit odio quis mi. Cras neque metus, consequat et
                blandit et, luctus a nunc. Etiam gravida vehicula tellus, in
                imperdiet ligula euismod eget. The ceramic cylinder planters
                come with a wooden stand to help elevate your plants off the
                ground.{' '}
            </p>
        </section>
    );
};

export default ProductMore;
