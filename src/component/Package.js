
function Package(props){
    console.log(props.title);
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    }
    else if(props.location ==="Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className ="col-sm-3">
            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`image/${props.img}`} alt={props.title} className="card--image"/>
                <div className="card--stats py-2">
                    <img src="image/star.png" alt="star" className="card--star me-1" />
                    <span>{props.rating}</span>
                    <span className="gray me-1">({props.reviewCount}).</span>
                    <span className="gray">USA</span> <br/>
                </div>
                <p className="mb-1">
                    {props.title}
                </p>
                <p>
                   <b><span className="bold">From${props.price}</span></b>/person
                </p>
            </div>
        </div>
    )
}
export default Package;