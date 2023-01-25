const CaseFeatures = ({features}) => {
    return (
        <ul className="list-group list-group-flush">
            {features && features.map((element, index) =>
                <li key={index} className="list-group-item">{element}</li>
            )}
        </ul>
    );
};

export default CaseFeatures;