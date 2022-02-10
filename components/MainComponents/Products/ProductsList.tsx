import React, { useState } from 'react';

const allProducts = [
    {
        title: 'REDESTAL VITROSA SERIES',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'PEDESTAL WASH BASIN',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'WATER CLOSET',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'ONE PIECE',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'URINAL',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'WASH BASIN',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'ONE PIECE WASH BASIN',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'VITROSA BASSIN',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'ORRISA PAN',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
    {
        title: 'COLOUR RANGE    ',
        products: [
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },
            {
            primaryImage: "/images/TestImage.png"
            },{
            primaryImage: "/images/TestImage.png"
            }
        ]
    },
]


const ProductsList = () => {
  const [selected, setSelected] = useState(allProducts[0])
    return (
        <div className='container mx-auto grid grid-cols-3 gap-6 mb-96 ' >
            <div className='border border-customGray-1 opacity-100' >
                <div className='mt-5 mb-7 text-customGray-3 text-center' >CATEGORY</div>
                {allProducts.map((products, index) => {
                    if ((index + 1) === allProducts.length) {
                        return (
                            <div onClick={() => setSelected(products) } className='flex items-center cursor-pointer pl-8' >
                                <img src="/images/square-icon.png" className='w-5 h-5' />
                                <div className='m-3 text-customGray-3 hover:text-customGray-2 opacity-100' >{products.title}</div>
                            </div>
                        )
                    }
                    return (
                        <div key={index} onClick={() => setSelected(products) } className='flex items-center cursor-pointer pl-8 border-b border-customGray-1 ' >
                            <img src="/images/square-icon.png" className='w-5 h-5' />
                            <div className='m-3 text-customGray-3 hover:text-customGray-2 opacity-100' >{products.title}</div>
                        </div>        
                    )
                })}
                
            </div>
            <div className='col-span-2 ml-5' >
                { selected &&  <div className='text-customLightBlue-1' >{selected.title}</div>}
                {selected && (
                    <div className='grid grid-cols-3 gap-3' >
                        {selected.products.map((product, index) => {
                            return (
                                <div key={index} >
                                    <img src={product.primaryImage || "/images/TestImage.png"} className='w-60 h-60 ' />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductsList