
function DetailsPage({ Tvdata }) {
    return (
        <div className="show-container">
        <ul className="show-data">
            {Tvdata.map((dataObj) => (
                <li className="datas-list" key={dataObj.id}>
                    <img src={dataObj.image.original} alt="" />
                    <div className="mapped-text">
                        <h1>{dataObj.name}</h1>
                        <p>{dataObj.summary}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default DetailsPage;