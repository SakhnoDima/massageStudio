const SubTitle = ({ children, className }) => {
    return (
        <p className={`font-jost font-normal text-2xl ${className}`}>
            {children}
        </p>
    );
};

export default SubTitle;
