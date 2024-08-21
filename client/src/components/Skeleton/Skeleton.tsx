import ContentLoader from 'react-content-loader';

export default function Skeleton() {
    return (
        <ContentLoader
            speed={2}
            width={310}
            height={300}
            viewBox="0 0 310 300"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="-1" y="0" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="30" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="60" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="90" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="120" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="180" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="150" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="240" rx="3" ry="3" width="200" height="20" />
            <rect x="0" y="210" rx="3" ry="3" width="200" height="20" />
        </ContentLoader>
    );
}
