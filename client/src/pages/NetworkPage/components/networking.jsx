import pfpPlaceholder from "../assets/pfpPlaceholder.png"
import ranking from "../assets/ranking.png"
import star from "../assets/star.png"

export const Networking = () => {
    return (
        <div className="network-list-container">
            <p>Connect with other people:</p>
            <ul className="network-list">
                <li className="network-listitem">
                    <img src={pfpPlaceholder}/>
                    <div className="network-listitem-container">
                        <h3>Monica Andersson</h3>
                        <div>
                            <img src={star}/>
                            <p>825</p>
                            <p>|</p>
                            <img src={ranking}/>
                            <p>28</p>
                        </div>
                        <p>Redovisningkonsult</p>
                    </div>
                </li>
                <li className="network-listitem">
                    <img src={pfpPlaceholder}/>
                    <div className="network-listitem-container">
                        <h3>Stefan Göransson</h3>
                        <div>
                            <img src={star}/>
                            <p>1255</p>
                            <p>|</p>
                            <img src={ranking}/>
                            <p>22</p>
                        </div>
                        <p>Revisor</p>
                    </div>
                </li>
            </ul>
        </div>
    )
  };
  