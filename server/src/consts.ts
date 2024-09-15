export const categories = [
    { name: 'House Plants' },
    { name: 'Potter Plants' },
    { name: 'Seeds' },
    { name: 'Succulents' },
    { name: 'Trerrariums' },
    { name: 'Gardening' },
    { name: 'Accessories' },
];

export const products = [
    {
        name: 'Barberton Daisy',
        price: 119,
        categoryId: 1,
        shortDesc:
            'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.',
        fullDesc:
            'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.',
        imageUrl: process.env.BASE_URL + '/cactus.png',
    },
    {
        name: 'Angel Wing Begonia',
        price: 169,
        categoryId: 2,
        shortDesc:
            'This hardy plant can survive in low light and requires minimal care, making it a great option for beginners.',
        fullDesc:
            'The Snake Plant, also known as Sansevieria, features long, sword-shaped leaves with green and yellow variegation. It is an excellent air purifier and thrives on neglect, needing water only every few weeks. This plant’s upright growth makes it perfect for narrow spaces. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor nunc eget eros molestie, et luctus mauris interdum. Integer id velit a urna pulvinar pretium non non eros. Proin eu neque vel magna pulvinar fermentum in nec orci.',
        imageUrl:
            process.env.BASE_URL +
            '/Arecaceae Chamaedorea elegans Houseplant Flowerpot Embryophyta.png',
    },
    {
        name: 'African Violet',
        price: 229,
        categoryId: 2,
        sale: 13,
        shortDesc:
            'These vibrant flowering plants are known for their velvety leaves and delicate flowers that add a pop of color to any room.',
        fullDesc:
            'African Violets thrive in indirect light and prefer consistent moisture, making them ideal for indoor environments. Their small, rounded leaves are covered in fine hairs, and the flowers bloom in shades of purple, pink, or white. These plants are perfect for tabletops or window sills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Ut fringilla lorem at dui condimentum, at viverra leo tincidunt. Fusce vehicula metus nec nisi convallis, id dictum nisi volutpat. Cras viverra volutpat neque, sit amet tincidunt erat venenatis sit amet.',
        imageUrl:
            process.env.BASE_URL + '/Flowerpot Houseplant Hanging basket.png',
    },
    {
        name: 'Beach Spider Lily',
        price: 129,
        categoryId: 4,
        shortDesc:
            'Beach Spider Lily is a trailing vine known for its heart-shaped leaves and easy care, perfect for hanging baskets.',
        fullDesc:
            'Beach Spider Lily is a popular houseplant due to its resilience and ability to thrive in low light. It can be trained to grow up shelves or trail down from hanging pots. Its leaves range from green to variegated with yellow or white. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec justo eget erat sodales vehicula. Ut bibendum odio et malesuada vehicula. Curabitur malesuada purus eget ligula aliquet, a viverra arcu vehicula.',
        imageUrl:
            process.env.BASE_URL + '/Flowerpot Houseplant Sago palm Leaf.png',
    },
    {
        name: 'Peace lily',
        price: 139,
        categoryId: 3,
        shortDesc:
            'This elegant plant features glossy leaves and white blooms, perfect for brightening up any corner of your home.',
        fullDesc:
            'Peace Lilies are known for their ability to remove toxins from the air while adding a touch of nature’s beauty to your indoor space. They thrive in medium, indirect light and require watering when the soil becomes dry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae libero vitae orci lacinia luctus et eget erat. Sed a arcu ut augue lobortis vehicula ac id mi. Duis at lacus sit amet libero auctor fermentum. Nam fermentum dictum sapien, at fermentum libero ultricies ac.',
        imageUrl:
            process.env.BASE_URL +
            '/Peace lily Houseplant Ornamental plant Bog arum.png',
    },
    {
        name: 'Aluminum Plant',
        price: 179,
        categoryId: 1,
        shortDesc:
            'Spider Plants are easy to grow and propagate, with arching leaves and small white flowers that create a striking display.',
        fullDesc:
            'The Spider Plant is a great choice for hanging baskets or as a trailing plant on shelves. It is known for its air-purifying qualities and its ability to thrive in a variety of lighting conditions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet eros ut purus bibendum fringilla. Phasellus vitae ligula ut odio sollicitudin dictum. Aenean sed vehicula dui. Ut auctor erat eget ipsum cursus, vel accumsan justo consectetur. Nullam imperdiet ante sed urna fermentum, et tincidunt eros varius.',
        imageUrl:
            process.env.BASE_URL + '/green leafed plant in vase painting.png',
    },
    {
        name: 'Broadleaf Lady Palm',
        price: 59,
        categoryId: 7,
        shortDesc:
            'Broadleaf Lady Palm is a tropical plant with large, banana-like leaves that can bring a touch of the tropics indoors.',
        fullDesc:
            'Broadleaf Lady Palm is known for its dramatic foliage and ability to grow tall, making it an excellent choice for creating a bold statement in any room. With enough care and sunlight, it can also produce striking orange and blue flowers that resemble a bird in flight. It prefers bright, direct sunlight and regular watering. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus justo in velit vulputate, at condimentum odio facilisis. Donec id nibh ut risus laoreet eleifend. Praesent accumsan, sapien at convallis feugiat, ligula lorem cursus justo, id ullamcorper enim nisl ac justo.',
        imageUrl: process.env.BASE_URL + '/green plant.png',
    },
    {
        name: 'Aloe Vera',
        price: 39,
        categoryId: 7,
        shortDesc:
            'Aloe Vera is a succulent known for its medicinal properties, with fleshy leaves that store water.',
        fullDesc:
            'Aloe Vera is not only decorative but also functional, as its gel can be used to soothe burns and skin irritations. It requires bright, indirect sunlight and minimal watering, making it a low-maintenance addition to any space. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero non lorem ultricies viverra. Proin tempus, justo vel laoreet vestibulum, odio orci scelerisque est, non ultrices metus ipsum ac quam. Morbi vehicula risus id erat dignissim, nec malesuada augue pellentesque.',
        imageUrl:
            process.env.BASE_URL +
            '/Houseplant Dragon tree Dracaena fragrans Light.png',
    },
    {
        name: "Bird's Nest Fern",
        price: 99,
        categoryId: 2,
        shortDesc:
            "The Bird's Nest Fern Plant is virtually indestructible, thriving in low light and requiring little water.",
        fullDesc:
            "With its glossy, dark green leaves, the Bird's Nest Fern Plant  Plant is ideal for beginners or those who travel often. This drought-tolerant plant stores water in its rhizomes and can go weeks without watering. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor mi nec tortor lobortis, ut accumsan lorem suscipit. Aliquam tincidunt, felis at facilisis pharetra, sem lectus pulvinar quam, sit amet pulvinar sem libero et augue.",
        imageUrl:
            process.env.BASE_URL + '/green leafed plant in gray plant box.png',
    },
    {
        name: 'Monstera Deliciosa',
        price: 159,
        categoryId: 5,
        shortDesc:
            'Known for its large, split leaves, Monstera adds a tropical touch to any indoor space.',
        fullDesc:
            'Monstera Deliciosa, often called the Swiss cheese plant, features large, fenestrated leaves that bring a jungle vibe indoors. It prefers bright, indirect sunlight and regular watering when the top inch of soil is dry. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin velit nec tortor fringilla, vel pharetra arcu lacinia. In varius felis nec metus vestibulum condimentum. Nullam ac mi et sapien scelerisque lacinia. Suspendisse commodo velit ac turpis tempus.',
        imageUrl: process.env.BASE_URL + '/Plant leaf houseplant.png',
    },
    {
        name: 'Calathea',
        price: 149,
        sale: 25,
        categoryId: 5,
        shortDesc:
            'Calathea is known for its strikingly patterned leaves, which fold up at night like prayer hands.',
        fullDesc:
            'Calathea’s vibrant, patterned leaves make it a standout houseplant. It prefers a humid environment and indirect light. With proper care, this plant can thrive in most indoor spaces, adding a unique touch of nature to your home. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum nulla ut nisi gravida, in auctor orci placerat. Donec vehicula felis et ligula volutpat, vel tempor ante lacinia.',
        imageUrl:
            process.env.BASE_URL +
            '/Ravenea Ornamental plant Houseplant Flowerpot Bench.png',
    },
    {
        name: 'Rubber Plant',
        price: 129,
        categoryId: 5,
        shortDesc:
            'Rubber Plants have thick, glossy leaves and can grow tall, making them a statement piece in any room.',
        fullDesc:
            'The Rubber Plant (Ficus elastica) is a hardy, low-maintenance plant that can grow several feet tall indoors. It thrives in medium light and prefers to dry out slightly between waterings. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id ligula vel risus interdum suscipit. Duis vel ligula sit amet odio efficitur lobortis. Curabitur at erat eget risus accumsan suscipit. Integer euismod, urna eu pharetra pellentesque, enim libero ornare metus, non volutpat nunc ipsum eget ante.',
        imageUrl: process.env.BASE_URL + '/red petal flowers.png',
    },
    {
        name: 'Fiddle Leaf Fig',
        price: 189,
        categoryId: 1,
        shortDesc:
            'Fiddle Leaf Figs are loved for their large, violin-shaped leaves and bold appearance.',
        fullDesc:
            'Fiddle Leaf Figs are known for their tall stature and large, leathery leaves, making them a popular choice for interior design. They require bright, indirect light and consistent watering to thrive. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non urna at libero suscipit feugiat. Fusce rutrum magna eget magna ultricies, vel sodales turpis ultricies. Nullam vel justo fermentum, gravida lorem sit amet, aliquet sapien.',
        imageUrl:
            process.env.BASE_URL +
            '/Succulent plant Flowerpot Artificial flower Agave.png',
    },
    {
        name: 'Jade Plant',
        price: 299,
        sale: 50,
        categoryId: 3,
        shortDesc:
            'The Jade Plant is a succulent with thick, shiny leaves, symbolizing good luck and prosperity.',
        fullDesc:
            'Jade Plants are slow-growing succulents that can live for decades with proper care. They prefer bright, indirect light and only need watering when the soil is completely dry. Over time, their stems thicken, giving them a tree-like appearance. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, orci sed dictum tempus, felis metus feugiat quam, at tincidunt turpis orci eget felis. Ut in ligula et velit vehicula suscipit ut vitae nunc.',
        imageUrl:
            process.env.BASE_URL +
            '/Woody plant Flowerpot Table Houseplant.png',
    },
];

export const carts = [
    {
        userId: 1,
        token: '111111',
    },
    { userId: 2, token: '222222' },
];

export const cartItems = [
    {
        productId: 1,
        cartId: 1,
        quantity: 1,
    },
    {
        productId: 2,
        cartId: 1,
        quantity: 5,
    },
    {
        productId: 2,
        cartId: 2,
        quantity: 3,
    },
];
