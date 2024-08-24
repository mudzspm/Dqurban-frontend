const Loader = ({ loading }: { loading: boolean }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${loading ? 'block' : 'hidden'}`}>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-4 border-[#00ADB9]"></div>
        </div>
    );
};

export default Loader;
