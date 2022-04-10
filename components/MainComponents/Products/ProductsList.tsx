import React, { useEffect, useState } from 'react';
import { ArrowDown } from '../../../assets/svgs/ArrowDown';
import { ArrowRight } from '../../../assets/svgs/ArrowRight';
import { formatPorudctListType, mainProductsType, productsListType } from '../../interfaces';
var groupBy = require('lodash.groupby');

interface IProductsListProps {
    allProducts?: mainProductsType;
}

const getFormattedProducts = (data: productsListType[]) => {
    let newData: formatPorudctListType[] = [];
    if (data && data.length > 0) {
        const grouppedData = groupBy(data, 'category_name');
        if (grouppedData) {
            Object.entries(grouppedData).map((categories: any) => {
                let subCategories: productsListType[] = []
                let products: productsListType[] = [];
                categories[1].map((c: any) => {
                    if (c.category_name === categories[0] && c.subcat_id) {
                        const idx = subCategories.findIndex((s) => s.subcat_id === c.subcat_id)
                        if (idx <= -1) {
                            subCategories.push(c)
                        }
                    }
                    if (c.category_name === categories[0] && c.id) {
                        const idx = products.findIndex((s) => s.id === c.id)
                        if (idx <= -1) {
                            products.push(c)
                        }
                    }
                })
                newData.push({
                    category: categories[1].find((c:any) => c.category_name === categories[0]),
                    products: products,
                    subCategory: subCategories
                })
            })
        }
    }
    
    return newData;
}

const ProductsList = (props: IProductsListProps) => {
    const { allProducts } = props;
    const records = allProducts?.records || [];
    const formattedProducts = getFormattedProducts(records);
    const [selected, setSelected] = useState<formatPorudctListType>();
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [showSubCat, setShowSubCat] = useState('');

    useEffect(() => {
        let defaultProduction = formattedProducts.length > 0 && formattedProducts[0];
        defaultProduction && setSelected(defaultProduction);
        defaultProduction && defaultProduction.subCategory && defaultProduction.subCategory.length > 0 && setSelectedSubcategory(defaultProduction.subCategory[0].subcat_id);
    }, [allProducts])

    console.log('SHOW SUB CAT IS', showSubCat);
    
    
    if (!allProducts && !records) {
        return <div>'LOADING'</div>
    }

    return (
        <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 mb-96 px-10' >
            <div className='border h-fit border-customGray-1 opacity-100' >
                <div className='mt-5 mb-7 text-customGray-3 text-center' >CATEGORY</div>
                <div className='lg:block hidden' >
                    {formattedProducts.map((mappedData, index) => {
                        if ((index + 1) === formattedProducts.length) {
                            return (
                                <div onClick={() => setSelected(mappedData)} className='w-full justify-between cursor-pointer pl-8' >
                                <div className='flex items-center justify-between w-full'  >
                                    <div className='flex items-center'  >
                                        <img src="/images/square-icon.png" className='w-5 h-5' />
                                        <div style={{ textTransform: 'capitalize' }} className={`m-3  hover:text-customGray-2 opacity-100 ${selected?.category.category_name === mappedData.category.category_name ? 'text-customRed-1' : 'text-customGray-3'} `} >{mappedData.category.category_name}</div>
                                    </div>
                                    {mappedData.subCategory.length > 0 && (showSubCat !== mappedData.category.cat_id ?
                                        <div className='pr-5' onClick={() => setShowSubCat(mappedData.category.cat_id)} ><ArrowRight className="w-4 h-4" strokeWidth="2" /></div>
                                        : <div className='pr-5' onClick={() => setShowSubCat('')} ><ArrowDown className="w-6 h-6" strokeWidth="2" /></div>)}
                                </div>
                                {showSubCat === mappedData.category.cat_id && mappedData.subCategory.length > 0 && <div className='ml-8'>
                                    <div className=' text-left' >
                                        {mappedData.subCategory.map((s:productsListType, i:number) => {
                                            return (
                                                <div onClick={() => setSelectedSubcategory(s.subcat_id)} className='text-sm flex items-center mb-1 hover:text-customGray-2 pr-5' >
                                                    <div className='pr-3' ><img  src="/images/square-icon-blue.png" className='w-4 h-4' /></div> {s.subcategory_name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>}
                            </div>)
                        }
                        return (
                            <div key={index} onClick={() => setSelected(mappedData)} className='w-full cursor-pointer pl-8 border-b border-customGray-1 ' >
                                <div className='flex items-center justify-between w-full' >
                                        <div className='flex items-center' >
                                    <img src="/images/square-icon.png" className='w-5 h-5' />
                                    <div style={{ textTransform: 'capitalize' }} className={`m-3  hover:text-customGray-2 opacity-100 ${selected?.category.category_name === mappedData.category.category_name ? 'text-customRed-1' : 'text-customGray-3'} `} >{mappedData.category.category_name}</div>
                                    </div>
                                    {mappedData.subCategory.length > 0 && (showSubCat !== mappedData.category.cat_id ?
                                        <div className='pr-5' onClick={() => setShowSubCat(mappedData.category.cat_id)} ><ArrowRight className="w-4 h-4" strokeWidth="2" /></div>
                                        : <div className='pr-5' onClick={() => setShowSubCat('')} ><ArrowDown className="w-6 h-6" strokeWidth="2" /></div>)}
                                </div>

                                {showSubCat === mappedData.category.cat_id && mappedData.subCategory.length > 0 && <div className='ml-8'>
                                    <div className=' text-left' >
                                        {mappedData.subCategory.map((s:productsListType, i:number) => {
                                            return (
                                                <div onClick={() => setSelectedSubcategory(s.subcat_id)} className='text-sm flex items-center mb-1 hover:text-customGray-2 pr-5' >
                                                    <div className='pr-3' ><img  src="/images/square-icon-blue.png" className='w-4 h-4' /></div> {s.subcategory_name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>}
                            </div>
                        )
                    })}
                </div>

                <select onChange={e => {
                    let mainValue = formattedProducts.find((p) => p.category.category_name === e.target.value)
                    mainValue && setSelected(mainValue)
                }} className='lg:hidden w-full px-2' >
                    {formattedProducts.map((products, index) => (
                        <option value={products.category.category_name} key={index} className='font-josefin' >
                            {products.category.category_name}
                        </option>
                    ))}

                </select>
                
            </div>
            <div className='col-span-2 ml-5' >
                {selected &&
                    <div className='text-customRed-1 flex items-center' >
                        <span className='mr-3' >{selected.category.category_name}</span>
                        {selected.subCategory && selected.subCategory.map((subCat, idx) => {
                            if (selectedSubcategory === subCat.subcat_id) {
                                return (
                                    <>
                                        <ArrowRight className="w-4 h-4" strokeWidth="2" />
                                        <span className='ml-3' >
                                            {subCat.subcategory_name}
                                        </span>
                                    </>)
                            }
                        })}
                    </div>}
                {selected && (
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mt-10' >
                        {selected.products?.length > 0 ? selected.products.map((product: any, index: number) => {
                            return (
                                <div key={index} >
                                    <img src={product.image || "/images/TestImage.png"} alt={product.name} className='w-60 h-60 ' />
                                </div>
                            )
                        }) : <div>No Products To Show</div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductsList