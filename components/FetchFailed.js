const FetchFailed = () => {
    return (
        <div className={"px-5 py-5 my-5 text-center"}>
            <h1 className={"color-indigo mt-5"}>Fetching data from blockchain failed!</h1>
            <h4 className={"mt-4"}>Try to reload the page, it&apos;s happening sometimes. Or</h4>
            <a href={"/api/latest"} className={"btn btn-lg btn-primary mt-4"}>Download offline version</a>
        </div>
    );
};

export default FetchFailed;