import React from 'react'

function Cards() {
    return (
        <div>
            <div className="card mt-4" style={{ "width": "18rem", "maxHeight": "560px" }}>
                <img src="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="card-img-top" alt="...." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some nfcivcilfv jncjarnlcifunr</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-green rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-green rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5 margin:right-20px'>
                            Total Prices
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards