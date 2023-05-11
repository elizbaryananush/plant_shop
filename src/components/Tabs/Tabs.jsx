import React, { useState } from 'react'
import bestSellerDataset from '../../datasets/bestSellerDataset'
import careToolsDataset from '../../datasets/careToolsDataset'
import accsessoriesDataset from '../../datasets/accsessoriesDataset'
import Product from '../Product/Product'

function Tabs() {
    const [toggle, setToggle] = useState(1)

    const changeToggle = (index) => {
        setToggle(index)
    }
    return (
        <div className='Tabs'>
            <div className="leftSide">
                <div className='wrapper'>
                    <div
                        className={toggle === 1 ? 'tabs active-tab' : 'tabs'}
                        onClick={() => changeToggle(1)}
                    >Plants</div>
                    <div
                        className={toggle === 2 ? 'tabs active-tab' : 'tabs'}
                        onClick={() => changeToggle(2)}
                    >CareTools</div>
                    <div
                        className={toggle === 3 ? 'tabs active-tab' : 'tabs'}
                        onClick={() => changeToggle(3)}
                    >Decor</div>
                </div>
            </div>
            <div className="rightSide">
                <div className={toggle === 1 ? 'page active-page' : 'page'}>
                    {bestSellerDataset.map((elements, index) => (
                        <Product category="best" img={bestSellerDataset[index].image} name={bestSellerDataset[index].name} price={bestSellerDataset[index].price} id={bestSellerDataset[index].id} />
                    ))}
                </div>

                <div className={toggle === 2 ? 'page active-page' : 'page'}>
                    {careToolsDataset.map((elements, index) => (
                        <Product category="care" img={careToolsDataset[index].image} name={careToolsDataset[index].name} price={careToolsDataset[index].price} id={bestSellerDataset[index].id} />
                    ))}
                </div>
                <div className={toggle === 3 ? 'page active-page' : 'page'}>
                    {accsessoriesDataset.map((elements, index) => (
                        <Product category="accessories" img={accsessoriesDataset[index].image} name={accsessoriesDataset[index].name} price={accsessoriesDataset[index].price} id={accsessoriesDataset[index].id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tabs
