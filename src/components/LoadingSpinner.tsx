import loadingIcon from '/loading-icon.svg';

function LoadingSpinner() {
    return <img src={loadingIcon} alt="Loading icon" className="animate-spin mx-auto" />;
}

export default LoadingSpinner;
