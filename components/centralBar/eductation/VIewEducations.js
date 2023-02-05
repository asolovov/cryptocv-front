const VIewEducations = ({educations}) => {
    return (
        <ul className="list-group list-group-flush">
            {educations && educations.map((education, index) =>
                <li key={index} className="list-group-item">{education.year} {education.description}</li>
            )}
        </ul>
    );
};

export default VIewEducations;