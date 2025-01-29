import './Navbar.css'
import logo from '/src/assets/journal-log.png'
export default function NavBar() {
    return (
        <>
            <nav>
                <style> {`
                    #nav-logo {
                        width: 5em;
                    }
                    #nav-logo-container {
                        width:5%;
                        display: flex;
                        justify-content: center;
                        align-items: start;
                    }`
                }
                </style>
                
                <style> {`
                    directory {
                        width: 80%;
                        padding: 2em 3em 0 3em;
                        background-color: --primary-color;
                    }
                    #mainNav {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }`
                }
                </style>
                <directory>
                    <ul className="" id="mainNav">
                        <div id="nav-logo-container">
                            <img id="nav-logo" src={logo} alt="journal-logo"/> 
                        </div>
                        <style> {`
                            #subNav {
                                width: 150vw;
                                text-align: center;
                            }`
                        }
                        </style>
                        <ul id="subNav">
                            <style> {`
                                #lowerNav {
                                    display: flex;
                                    justify-content: end;
                                    align-items: center;
                                    gap: 1em;
                                }
                                #lowerNav > button {
                                    box-shadow: none;
                                    border-radius: 4px;
                                    width: 10vw;
                                }
                                #title > h2{
                                    margin: 0;
                                    padding: 0;
                                    padding-right: 2em;
                                }
                            `}
                            </style>
                            <li id="title">
                                <h2>Travel Journal</h2>
                            </li>
                            <ul id="lowerNav">
                                <button>
                                    View All
                                </button>
                                <button>
                                    Add Entry
                                </button>
                            </ul>
                        </ul>
                    </ul>
                </directory>
            </nav>
        </>
    )
}
