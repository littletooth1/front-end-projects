import './Card.css';

function Card({type,imgSrc,title,content,price,alt}){
    return(
        <div className= {`${type}-card card`}>
            <div className={`${type}-card-text card-text`}>
                <div className={`${type}-card-title card-title`}>{title}</div>
                <p className={`${type}-card-content card-content`}>{content}</p>
                {price && <span className={`${type}-card-price card-price`}>{price}</span>}
            </div>
            {imgSrc && <img className={`${type}-card-pic card-pic`} src={imgSrc} alt={alt}/>}
        </div>
    );
}

export default Card;