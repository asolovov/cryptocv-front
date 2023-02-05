const Alert = ({text, type, close}) => {
    return (
        <div className={`alert alert-${type} alert-dismissible mt-3 fixed-top w-50 m-auto`} role="alert">
            {text}
            <button type="button" className="btn-close" onClick={close}></button>
        </div>
    );
};

export default Alert;