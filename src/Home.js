import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className='home__container'>
                {/* <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg' alt='' /> */}
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />

                {/* Products displayed */}
                <div className='home__row'>
                    <Product 
                        id= '111'
                        title='The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers' 
                        price={24.33} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51slqM2g3jL._SX329_BO1,204,203,200_.jpg' 
                        rating={2}/>
                    <Product
                        id= '112'
                        title='Lenovo Flex 5 14" 2-in-1 Laptop, 
                            14.0" FHD (1920 x 1080) Touch Display, 
                            D Ryzen 5 4500U Processor, 16GB DDR4, 
                            256GB SSD, AMD Radeon Graphics, 
                            Digital Pen Included, Win 10, 81X20005US, 
                            Graphite Grey
                        '
                        price={599.99}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SX679_.jpg'
                    />
                    
                </div>
                <div className='home__row'>
                    
                    <Product
                        id='113'
                        title='VicTsing MM057 2.4G Wireless Mouse 
                            Portable Mobile Optical 
                            Mouse with USB Receiver, 5 
                            Adjustable DPI Levels, 
                            6 Buttons for Notebook, 
                            PC, Laptop, Computer, 
                            Macbook - Black'
                        price={11.99}
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC_SL1280_.jpg'
                        />
                    <Product
                        id='114'
                        title='Fjallraven, Kanken Classic Backpack for Everyday'
                        price={69.99}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/71gjJZ4Df2L._AC_UX679_.jpg'

                    />
                    <Product
                        id='115'
                        title='Revlon One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary'
                        price={41.99}
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Uv3VOrCAL._SX425_.jpg'
                    />

                </div>
                <div className='home__row'>
                    <Product
                        id='116'
                        title='
                        Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)'
                        price={275.12}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX679_.jpg'
                    />
                    <Product
                        id='117'
                        title='Dove Body Wash with Pump with Skin Natural Nourishers for Instantly Soft Skin and Lasting Nourishment Deep Moisture Effectively Washes Away Bacteria While Nourishing Your Skin, 34 oz'
                        price={8.18}
                        rating={5}
                        image='data:image/webp;base64,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'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
