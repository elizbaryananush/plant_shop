import React , {useState} from 'react'
import bestSellerDataset from '../../datasets/bestSellerDataset'
import careToolsDataset from '../../datasets/careToolsDataset'
import accsessoriesDataset from '../../datasets/accsessoriesDataset'

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
                        <div>
                            <img src={bestSellerDataset[index].image} />
                            <h4>{bestSellerDataset[index].name}</h4>
                            <h5>{bestSellerDataset[index].price}</h5>
                            <button className='btn'> buy </button>
                        </div>
                    ))}
                </div>

                <div className={toggle === 2 ? 'page active-page' : 'page'}>
                    {careToolsDataset.map((elements, index) => (
                        <div>
                            <img src={careToolsDataset[index].image} />
                            <h4>{careToolsDataset[index].name}</h4>
                            <h5>{careToolsDataset[index].price}</h5>
                            <button className='btn'> buy </button>
                        </div>
                    ))}
                </div>
                <div className={toggle === 3 ? 'page active-page' : 'page'}>
                    {accsessoriesDataset.map((elements, index) => (
                        <div>
                            <img src={accsessoriesDataset[index].image} />
                            <h4>{accsessoriesDataset[index].name}</h4>
                            <h5>{accsessoriesDataset[index].price}</h5>
                            <button className='btn'> buy </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tabs
