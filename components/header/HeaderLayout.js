const HeaderLayout = ({name, position, hello}) => {
    return (
        <div className="card-body">
            <div className={"d-flex"}>
                {name}
            </div>
            {position}
            <hr/>
            {hello}
        </div>
    );
};

export default HeaderLayout;