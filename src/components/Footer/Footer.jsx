import React from "react"
import image1 from '../../assets/icon/image1.png'
import image2 from '../../assets/icon/image2.png'
import image3 from '../../assets/icon/image3.png'
import image4 from '../../assets/icon/image4.png'
import image5 from '../../assets/icon/image5.png'
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className="Footer">
            <div className="wrapper">
                <div className="btn">
                    <Link to='https://wa.me/qr/FBWHHLPWKBSKE1'>
                        <img src={image1} />
                    </Link>
                </div>
                <div className="btn">
                    <Link to='https://github.com/elizbaryananush'>
                        <img src={image2} />
                    </Link>
                </div>
                <div className="btn">
                    <Link to='https://www.instagram.com/elizbar_yan/'>
                        <img src={image3} />
                    </Link>
                </div>
                <div className="btn">
                    <Link to='https://wa.me/qr/FBWHHLPWKBSKE1'>
                        <img src={image4} />
                    </Link>
                </div>
                <div className="btn">
                    <Link to='https://t.me/AnushElizbaryan'>
                        <img src={image5} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer



