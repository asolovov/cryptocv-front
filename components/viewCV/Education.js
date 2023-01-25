const Education = ({education}) => {
    education.sort((a, b) => {
        return -(a.year - b.year);
    });

    return (
        <ul className="list-group list-group-flush">
            {education && education.map((element, index) => <li key={index} className="list-group-item">{element.year} {element.description}</li>)}
        </ul>
    );
};

export default Education;