import '../App.css'
export default function Footer() {
    return (
        <>
            <style> {`
                .footer {
                    position: relative;
                    bottom: 0;
                    width: 100%;
                    height: 180px;
                    background-color: #ffc0cb;
                    box-sizing: border-box;

                    }

                .footer-links {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1em;
                    max-width: 100%;
                    font-size: 1em;
                    color: black;
                }
            `}
            </style>
            <footer className="footer">
                <div className="footer-links">
                    <div>
                        About us
                    </div>  
                    <div>
                        Contact us
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                </div>
            </footer>
        </>
    )
}
