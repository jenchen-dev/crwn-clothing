import { useContext } from 'react';

import { CategoriesContext } from "../../contexts/categories.context";
import BannerCard from '../banner-card/banner-card.component';

import './banner.styles.scss';

const ScrollLeft = () => {
    document.getElementById('image-container').scrollLeft += 100;
}

const ScrollRight = () => {
    document.getElementById('image-container').scrollLeft -= 100;
}

const Banner = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div className="banner-container">
            <h1 className="banner-title">--- Stylish cloth, stylish life. ---</h1>
            <div className="wrapper">
                <div className="prev" onClick={ScrollRight}>&#10094;</div>
                <div className="image-container" id="image-container">
                    {
                        Object.keys(categoriesMap).map((title) => {
                            const products = categoriesMap[title];
                            return (
                                <BannerCard key={title} products={products} />
                            );
                        })
                    }
                </div>
                <div className="next" onClick={ScrollLeft}>&#10095;</div>
            </div>
        </div>
    );
}

export default Banner;
