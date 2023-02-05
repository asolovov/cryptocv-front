const ViewCaseFeatures = ({features}) => {
    return (
        <ul className="list-group list-group-flush">
            {features && features.map((feature, index) =>
                <li key={index} className="list-group-item">{feature}</li>
            )}
        </ul>
    );
};

export default ViewCaseFeatures;