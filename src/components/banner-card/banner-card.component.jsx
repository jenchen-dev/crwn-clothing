import { Fragment } from "react";

const BannerCard = ({ products }) => {
    return (
        <Fragment>
            {
                products && products.map((product) => (
                    <img
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
