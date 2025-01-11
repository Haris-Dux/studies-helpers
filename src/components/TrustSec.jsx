import React from 'react'


const TrustSec = () => {
    return (
        <>
            <section className="mb-28 lg:mb-16 relative flex items-center justify-center">
                <div className='custom_shadow relative sm:absolute sm:-top-12 w-full sm:max-w-6xl mx-auto rounded-none sm:rounded-full bg-surface  px-5 sm:px-10 py-7 mb-5'>
                    <div className="max-w-5xl mx-auto grid sm:place-items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                        {/* BOX 1 */}
                        <div className="box flex items-center gap-2">
                            <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1.png?v=1713438051" alt="" /></span>
                            <span className='text-white font-medium text-lg xxl:text-xl text-nowrap'>100% Confidential</span>
                        </div>
                        {/* BOX 2 */}
                        <div className="box flex items-center gap-2">
                            <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_1.png?v=1713438051" alt="" /></span>
                            <span className='text-white font-medium text-lg xxl:text-xl text-nowrap'>No Spam</span>
                        </div>
                        {/* BOX 3 */}
                        <div className="box flex items-center gap-2">
                            <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_2.png?v=1713438051" alt="" /></span>
                            <span className='text-white font-medium text-lg xxl:text-xl text-nowrap'>8200+ Classes with A/B</span>
                        </div>
                        {/* BOX 4 */}
                        <div className="box flex items-center gap-2">
                            <span className='w-10'><img className='w-full p-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/100-percent_1_3.png?v=1713438051" alt="" /></span>
                            <span className='text-white font-medium text-lg xxl:text-xl text-nowrap'>9.8/10 Feedback Rating</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TrustSec
