/* eslint-disable react/prop-types */


import '../product/product.css'

function Product({ product, rate, count}) {



    return (
        <div className="band">
            <div className='card'>
                <div className="imgBox">
                    <img src={product.image} alt='imagem do produto ' />
                </div>

                <div className="title">
                    <h4>{product.title}</h4>
                </div>
                <div className="price">
                    <h4>${product.price}</h4>
                </div>

                <div className="rate">
                    <img src="./public/star-svgrepo-com.svg" alt="" />
                    <h6>{rate}</h6>
                </div>
                <div className="rate count">
                    <img src="./public/emot-rate-rating-svgrepo-com.svg" alt="" />
                    <h6>({count})</h6>
                </div>
            </div>

            <div className="category">
                <strong><span>{product.category}</span></strong>
            </div>

            <div className="description">
                <small>{product.description}</small>
            </div>

        </div>
    )
}

export default Product