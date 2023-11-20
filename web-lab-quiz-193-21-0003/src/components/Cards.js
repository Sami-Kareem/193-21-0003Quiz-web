import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import c1 from '../assets/images/div.png';
import c2 from '../assets/images/div (1).png';
import c3 from '../assets/images/div (2).png';
import c4 from '../assets/images/div (3).png';
import c5 from '../assets/images/div (4).png';
import c6 from '../assets/images/div (5).png';



export const Cards = ()=>{
    return(
        <>
            <h3 className='text-center'>People who has published their books using writealy</h3>
            <div className='container mb-5 pb-5'>
                <div className='row my-5 ms-5'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={c1} />
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top"src={c2} />
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                         <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={c3} />
                        </Card>
                    </div>
                </div>
                <div className='row my-5 ms-5'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                          <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={c4}/>
                        </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={c5} />
                            </Card>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                          <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={c6}/>
                            </Card>
                    </div>
                </div>
            </div>
        </>
    )
}