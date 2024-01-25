import pfpPlaceholder from "../assets/pfpPlaceholder.png"
import ranking from "../assets/ranking.png"
import star from "../assets/star.png"

export const Onboarding = () => {
    return (
        <div className="network-list-container">
        <p>Connect with other people:</p>
        <ul className="network-list">
            <li className="network-listitem">
                <img src={pfpPlaceholder}/>
                <div className="network-listitem-container">
                    <h3>William BureFalk</h3>
                    <div>
                        <img src={star}/>
                        <p>415</p>
                        <p>|</p>
                        <img src={ranking}/>
                        <p>43</p>
                    </div>
                    <p>CEO at LunchConnect</p>
                </div>
            </li>
        </ul>
    </div>
    )
  };
  