import './MenuSection.css';
import Card from "./Card";

function MenuSection({type,list}){
    const sectionList = list.map((e) => {
        return (
            e.category === type ?
                <Card
                    type="dish"
                    key={e.name}
                    imgSrc={e.src}
                    title={e.name}
                    content={e.description}
                    price={e.price}
                    alt={e.alt}
                /> : ""
        );
    });
    return (
        <div className="menu-section">
            <h3 className="section-title" id={type}>{type}</h3>
            <div className="dish-cards">
                {sectionList}
            </div>
        </div>
    );
}

export default MenuSection;