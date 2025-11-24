const Title = ({ children, className }) => {
    return (
        <h2 className={`font-jost font-medium text-6xl ${className}`}>
            {children}
        </h2>
    );
};

export default Title;
