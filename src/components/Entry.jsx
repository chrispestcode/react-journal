function Entry({ title, travelDate, distanceTraveled, imgSrc, imgAlt }) {
    return (
        <>
            <style> {`
                .entry {
                    display: flex;
                    justify-content: space-around;
                    width: 50%;
                    background-color: rgb(109, 103, 103);
                    padding:20px;
                    margin: 10px 5px;
                    border-radius: 9px;
                    
                }

                .entry-content {
                    width:55%;
                    background-color: rgb(251, 251, 251);
                    display: flex;
                    flex-direction: column;
                    padding-bottom: 10px;
                    color: black;
                    border-radius: 9px;
                }

                .entry-thumbnail{
                    max-width: 30%;
                    max-height: 350px;
                    border-radius: 100px;
                }
            `}
            </style>
            <content className="entry">
                <img className="entry-thumbnail" src={imgSrc} alt={imgAlt}/>
                <span className="entry-content">
                    <h3>{title}</h3>
                    {travelDate ?  <div>{travelDate}</div> : <div></div>} 
                    {distanceTraveled ? <div>{distanceTraveled}</div> : <div></div>}
                </span>
            </content>
        </>
    )
}

export default Entry;
