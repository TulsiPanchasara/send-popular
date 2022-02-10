import React, { useState } from 'react';

const allProductions = [
    {
        title: 'RAW MATERIAL',
        desc: 'we use high quality raw material from branded companies. the material is tested before being accepted by the stores. the non-conforming raw material is not accepted into production. further we downgrade the supplier for the same. our vendor rating system enables us to work with the most reliable suppliers. we check the vendor for his product quality, timely delivery and product offer as a whole'
    },
    {
        title: 'SLIP PREPARATION',
        desc: 'the ball mill uses the pebbles in required proportions. the pebbles are long lasting and uniform in size and enable uniform grinding of the material. this gives consistent slip which ultimately effects the consistency of the final products. the rejections are reduced because of high degree of control on the process.'
    },
    {
        title: 'CASTING',
        desc: 'In the unorganized sector, most of the grinding is done manually. This is a common practice. The traditional system though good enough is slow. We have employed battery casting for our fast moving products. The system also gives very uniform and consistent cast pieces. The green stage and the drying rejections are minimum. The greenware is checked by a well trined QC supervisor, before sending the same for glazing'
    },
    {
        title: 'GLAZING',
        desc: 'The Glaze material is prepared in a closely controlled environment to reduce color difference between the different glazing batches. The glazing stations are of modern design so as to control the glazing function in order to enhance the consistency and uniformity of the glazing process'
    },
    {
        title: 'FIRING',
        desc: 'Firing is done in state-of-the-art tunnel kilns. Gas is used as the firing agent. While most of the industries use oil, or kerosene. Usage of gas guarantees better distribution of the heat and hence the products will have smooth water retarding surface and strong vitreous body that lasts very long'
    },
    {
        title: 'SORTING',
        desc: 'The final Q.C. is done with a predefined checklist on the product. The R.O.K. first Choice and second choice are sorted out based on the checklist and the products meeting the criteria. Each and every piece is checked for its conformity and hence there is a hundred percent checking.'
    },
    {
        title: 'PACKING',
        desc: 'The bundles are normally packed in grass because that is the requirement of the market today. However, we can provide box packing with shrink wrapped pallets. We understand that this is the type of packing desired by certain markets.'
    },
    {
        title: 'FLOW',
        desc: ''
    },
]

const ProductionList = () => {
    const [selected, setSelected] = useState(allProductions[0])
    return (
        <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 mb-96 px-10' >
            <div className='border border-customGray-1 opacity-100' >
                <div className='mt-5 mb-7 text-customGray-3 text-center' >CATEGORY</div>
                {allProductions.map((productions, index) => {
                    if ((index + 1) === allProductions.length) {
                        return (
                            <div onClick={() => setSelected(productions) } className='flex items-center cursor-pointer pl-8' >
                                <img src="/images/square-icon.png" className='w-5 h-5' />
                                <div className='m-3 text-customGray-3 hover:text-customGray-2 opacity-100' >{productions.title}</div>
                            </div>
                        )
                    }
                    return (
                        <div key={index} onClick={() => setSelected(productions) } className='flex items-center cursor-pointer pl-8 border-b border-customGray-1 ' >
                            <img src="/images/square-icon.png" className='w-5 h-5' />
                            <div className='m-3 text-customGray-3 hover:text-customGray-2 opacity-100' >{productions.title}</div>
                        </div>        
                    )
                })}
                
            </div>
            <div className='col-span-2 ml-5' >
                { selected &&  <div className='text-customLightBlue-1' >{selected.title}</div>}
                { selected &&  <p className='mt-10 text-customGray-5' >{selected.desc}</p>}
            </div>
        </div>
    );
};

export default ProductionList;
