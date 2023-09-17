/* eslint-disable no-self-assign */
/* eslint-disable react/prop-types */


import '../product/product.css'

function Product({ product, rate, count }) {

    //verifica se o preço tem ponto decimal, se não tiver, acrescenta .00
    const Preco = () => {
        var price = product.price;
        if (price % 1 != 0 ) {
            price = price;
        } else { price = price + '.00'}
        return price;
    }
    
    return (
        <div className="band">
            <div className='card'>
            <p>Fakestore.api</p>
                <div className="imgBox">
                    <img src={product.image} alt='imagem do produto ' />
                </div>

                <div className="title">
                    <h4>{product.title}</h4>
                </div>
                <div className="price">
                    <h4><span>$</span>{Preco()}</h4>
                </div>

                <div className="rate star">
                    <img src="/public/star-svgrepo-com.svg" alt="" />
                    <h6>{rate}</h6>
                </div>
                <div className="rate count">
                    <img src="/public/emot-rate-rating-svgrepo-com.png" alt="" />
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