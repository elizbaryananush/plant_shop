import React from 'react'
import { Link } from 'react-router-dom';
import collectionsDataset from '../../datasets/collectionsDataset'

function Collections() {

    return (
        <div className='Collections' id='collections'>
            <div className='carousel'>
                {collectionsDataset.map((e, index) => (
                    <Link to='/bl'>
                        <div>
                            <img src={collectionsDataset[index].image} alt="" />
                            <h1>{collectionsDataset[index].name}</h1>
                        </div>
                    </Link>
                ))}
                <svg onClick={() => {
                    document.querySelector('.carousel').scrollLeft -= 422;
                }}
                    style={{ left: 100 }} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="50" height="50"><path d="M13.422,19.061,8.129,13.768a2.5,2.5,0,0,1,0-3.536l5.293-5.293,2.121,2.122L10.6,12l4.939,4.939Z" /></svg>
                <svg onClick={() => {
                    document.querySelector('.carousel').scrollLeft += 422;
                }} style={{ right: 100 }} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="50" height="50"><path d="M11.164,19.061,9.043,16.939,13.982,12,9.043,7.061l2.121-2.122,5.293,5.293a2.5,2.5,0,0,1,0,3.536Z" /></svg>
            </div>
        </div>
    )
}


export default Collections
