import logo from './Logo.svg';

const Logo = () => {
    return (
        <img
            style={{ cursor: 'pointer' }}
            className="logo"
            src={logo}
            alt="logo"
        />
    );
};

export default Logo;
