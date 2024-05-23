import React from 'react'
import Image from '../../Assets/Images/DJI_0753.JPG'
import './Gallery.css'
import BackgroundImage from '../../Assets/Images/icons_psd.jpg'
import { Container, Row } from 'react-bootstrap'
import MarqueeAsst from '../../Assets/Marquee'

function GalleryComp() {

    let marquee = {
        marqueeText: 'HIGHLIGHTS #',
        marqueeTextStyle: {
            fontSize: '20px',
            fontWeight: 'bold',
        },
        marqueeStyle: {
            backgroundColor: '#FFFFFF',
            width: '30%',
            textWrap: 'nowrap',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            padding: '7px 0px 2px 0px',
            border: '3px solid #000000',
            borderStyle: 'solid none',
            rotate: '-20deg',
        }
    }

    return (
        <div id="gallery" class="pt-5 pb-5 sec-4" style={{
            background: '#e9da26',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',

        }}>
            <Container className=''>
                {/* <MarqueeAsst marquee={marquee} galleryMarquee={true} /> */}

                <h1 class="text-left">Kalathalam fest <br /> Highlight <br /> Photos</h1>
                <Row gap={3} className='mt-4'>
                    {/* {{ #each photo }} */}
                    <div class="animate col-md-3 position-relative" style={{
                        // --i:{{@index}};
                    }}>
                        <div className='position-relative'>
                            <div className='position-absolute top-0 end-0'>
                                <p className='image-crums'>
                                    Program - Category
                                </p>
                            </div>
                            <img class="grid-image grid-image-hover" src={Image}
                                data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />

                        </div>
                    </div>
                    <div class="animate col-md-3 position-relative" style={{
                        // --i:{{@index}};
                    }}>
                        <div className='position-relative'>
                            <div className='position-absolute top-0 end-0'>
                                <p className='image-crums'>
                                    Program - Category
                                </p>
                            </div>
                            <img class="grid-image grid-image-hover" src={Image}
                                data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />

                        </div>
                    </div>
                    <div class="animate col-md-3 position-relative" style={{
                        // --i:{{@index}};
                    }}>
                        <div className='position-relative'>
                            <div className='position-absolute top-0 end-0'>
                                <p className='image-crums'>
                                    Program - Category
                                </p>
                            </div>
                            <img class="grid-image grid-image-hover" src={Image}
                                data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />

                        </div>
                    </div>
                    <div class="animate col-md-3 position-relative" style={{
                        // --i:{{@index}};
                    }}>
                        <div className='position-relative'>
                            <div className='position-absolute top-0 end-0'>
                                <p className='image-crums'>
                                    Program - Category
                                </p>
                            </div>
                            <img class="grid-image grid-image-hover" src={Image}
                                data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />

                        </div>
                    </div>
                    {/* {{/ each}} */}
                </Row>
            </Container >
        </div >
    )
}

export default GalleryComp