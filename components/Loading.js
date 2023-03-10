const Loading = () => {
    return (
        <div className={"px-5 py-5 my-5 text-center"}>
            <div className="m-5 spinner-border" role="status" style={{width: "10rem", height: "10rem", color: "#6610f2", fontWeight: "bold"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
            <h1 className={"color-indigo"}>Just a sec...</h1>
        </div>
    );
};

export default Loading;