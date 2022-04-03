import React, { useEffect, useState } from 'react';
import { mainProductionType, productionsListType } from '../../interfaces';


interface IProductionListProps{
  allProductions: mainProductionType;
}


const ProductionList = (props: IProductionListProps) => {
    console.log('ALL PROPS ARE', props.allProductions);
    const { allProductions } = props;
    const records = allProductions?.records || [];
    
    const [selected, setSelected] = useState<productionsListType | null>();

    useEffect(() => {
        let defaultProduction = records.length > 0 ? records[0] : Object;
        setSelected(defaultProduction);
    }, [allProductions])
    

    return (
        <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 mb-96 px-10' >
            <div className='border border-customGray-1 opacity-100' >
                <div className='mt-5 mb-7 text-customGray-3 text-center' >CATEGORY</div>
                <div className='lg:block hidden'>
                     {records.map((productions, index) => {
                    if ((index + 1) === records.length) {
                        return (
                            <div onClick={() => setSelected(productions) } className='flex items-center cursor-pointer pl-8' >
                                <img src="/images/square-icon.png" className='w-5 h-5' />
                                <div className={`m-3 capitalize hover:text-customGray-2 opacity-100 ${selected?.name === productions.name ? 'text-customRed-1': 'text-customGray-3'} `  } >{productions.name}</div>
                            </div>
                        )
                    }
                    return (
                        <div key={index} onClick={() => setSelected(productions) } className='flex items-center cursor-pointer pl-8 border-b border-customGray-1 ' >
                            <img src="/images/square-icon.png" className='w-5 h-5' />
                            <div className={`m-3 capitalize hover:text-customGray-2 opacity-100 ${selected?.name === productions.name ? 'text-customRed-1': 'text-customGray-3'} `  } >{productions.name}</div>
                        </div>        
                    )
                })}
                </div>
                    <select onChange={e => {
                    let mainValue = records.find((p) => p.name === e.target.value)
                    mainValue && setSelected(mainValue)
                } } className='lg:hidden w-full px-2' >
                    {records.map((producttion, index) => (
                            <option value={producttion.name} key={index}  className='font-josefin' >
                                {producttion.name}
                            </option>
                        ))}

                </select>
                
            </div>
            <div className='col-span-2 ml-5' >
                { selected &&  <div className='text-customRed-1' >{selected?.name}</div>}
                { selected &&  <p className='mt-10 text-customGray-5' >{selected?.description}</p>}
            </div>
        </div>
    );
};

export default ProductionList;
