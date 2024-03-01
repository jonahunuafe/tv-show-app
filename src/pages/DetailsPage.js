function DetailsPage({ Tvdata }) {
    return (
        <div>
            <ul>
                <center>
                    {Tvdata.map((dataObj) => {
                        return (
                        <div
                            style={{
                            width: "15em",
                            backgroundColor: "#35D841",
                            padding: 2,
                            borderRadius: 10,
                            marginBlock: 10,
                            }}
                        >
                            <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
                            <p style={{ fontSize: 20, color: 'red' }}>{dataObj.summary}</p>
                        </div>
                        );
                    })}
                </center>
            </ul>
        </div>
    );
}

export default DetailsPage;