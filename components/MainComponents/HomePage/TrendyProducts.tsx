import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { API_SERVICE_URL } from '../../../config/constants';
var groupBy = require('lodash.groupby');

const TrendyProducts = () => {
    const [trendingCategories, setTrendingCategories] = useState();

    useEffect(() => {
        getAllCategoriesData();
    }, [])

    const getAllCategoriesData = async () => {
        try {
            const res = await fetch(`${API_SERVICE_URL}/categories/read.php` );
        const response = await res.json();
            if (response) {
                let records = response.records
                if (records && Array.isArray(records) && records.length > 0) {
                    console.log('Records', records);
                    let grouppedRecords = groupBy(records, 'category_name')    
                    console.log('grouppedRecords', grouppedRecords);
                    setTrendingCategories(grouppedRecords);
                }
        }
        } catch (error) {
            console.log('Error in categories API', error);
        }
    }
    

    const settings = {
        centerMode: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className='my-12' >
            <div className='text-customRed-1 text-center' >PRODUCTS</div>
            <div className='text-3xl text-center my-2' >Trendy Products</div>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-9 container mx-auto mt-14 px-10 ' >
                {trendingCategories && Object.entries(trendingCategories).length > 0 && Object.entries(trendingCategories).map((category:any, index: number) => {
                    return (
                          <div className='shadow-xl' key={index} >
                            <Slider {...settings} >
                                {category[1].map((p: any, i: number) => {
                                    console.log('p is ', p.image);
                                    return (
                                        <img src={p.image || "/images/fish-1.png"} className='w-full' key={i} />
                                    )
                                })}
                                </Slider>
                                <div className='p-5' >
                                    <div>{category[0]}</div>
                                </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-center mt-10' >
                <a href="/products" className=' bg-customRed-1 text-customWhite-1 text-xs px-4 py-3 rounded ' >
                View All
            </a>
            </div>
        </div>);
};

export default TrendyProducts;


{/* <div className='text-customRed-1' >26th</div>
                    <div className='text-customGray-3 mb-3'>Lorem ipsum dolor sit amet, consetetur </div>
                    <img src="/images/Line 20.png" />
                    <p className='mt-8 mb-10' >Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                    
                    <a href="/about-us" className='flex text-customRed-1 items-center text-sm ' >Know <SendArrow className='w-4 h-4 ml-2' /></a>  */}