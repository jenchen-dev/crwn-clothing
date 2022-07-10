import { Fragment } from "react";

const BannerCard = ({ products }) => {
    return (
        <Fragment>
            {
                products && products.map((product) => (
                    <img
                        key={product.name}
                        className="image"
                        src={product.imageUrl}
                        alt={`${product.name}`}
                    />
                ))
            }
        </Fragment>
    );
};

export default BannerCard;
