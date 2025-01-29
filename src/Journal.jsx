import Entry from './components/Entry'
import entriesData from './entries.json'

function Journal() {
    const mappedEntries = Array.isArray(entriesData.entries) ? entriesData.entries.map((entry) => {
        return <Entry 
            title={entry['journal-title']} 
            travelDate={entry['travel-date']} 
            distanceTraveled={entry['distance-traveled']}
            imgSrc={entry['img-src']}
            imgAlt={entry['img-alt']}
            key={entry['journal-title']} 
        />
    }) : [];

    return (
        <>  
            <style> {`
            
                #journal {
                    text-align: center;
                }
                main {
                    height: 100%;
                    background-color: rgba(31, 31, 40, 0.372);
                    padding: 20px; 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            `}
            </style>
            <div id="journal">
                <main>
                    {mappedEntries.length > 0 ? mappedEntries : <p>No entries found</p>}
                </main>
            </div>
        </>
    );
}
export default Journal;