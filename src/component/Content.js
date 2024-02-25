import Package from "./Package";
import packageData from "../data";
export default function Content(){
    console.log(packageData);
    const packageElements = packageData.map((item) =>{
        console.log(item.title);
        return(
            <Package 
            key={item.id}
            img={item.coverImg}
            rating ={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSports={item.openSpots}
            item={item}>      
            </Package>

        )
    })
    console.log("Mapped array is" + packageElements);
    return (
        <section id="content">
            <div className="container">
                <div className="row d-flex justify-content-around">
                    {packageElements}
                    
                </div>
            </div>
        </section>
    )
}
