import './Card.css';

import React from 'react';
import ContentLoader from 'react-content-loader';

const Card = ({ id, title, imageURL, price, onPlus, onAddToBasket, isLoading }) => {
    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = (e) => {
        setIsAdded(!isAdded);
        onPlus({id, title, imageURL, price});
        }

    return (
        <div style={{marginBottom: "10px"}}>
            {isLoading ? <ContentLoader 
                speed={2}
                width={240}
                height={220}
                viewBox="0 0 210 220"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="0" y="0" rx="0" ry="0" width="171" height="160" /> 
                <rect x="28" y="40" rx="0" ry="0" width="64" height="45" /> 
                <rect x="0" y="174" rx="0" ry="0" width="171" height="31" />
            </ContentLoader>
             :
            <div className='card'>
                {/* <img className='like_unlike_img' src='/img/heart-unliked.svg' width={15} height={15}></img> */}
                <img width={133} height={133} src={imageURL} alt='items'></img>
                <h5>{title}</h5>
                <div className='card_text'>
                    <div>
                        <div className="card_price">
                        <span>Price:</span>
                        <b>{price + " USD"}</b>
                    </div>
                    </div>
                <div>
                    <button onClick={onClickPlus}>
                        <img width={20} height={20} src={isAdded ? "img/done.svg" : "img/plus.svg" } alt='plus'></img>
                    </button>
                </div>
            </div>
        </div>
        }
            
            </div>
            
    );
}

export default Card;

