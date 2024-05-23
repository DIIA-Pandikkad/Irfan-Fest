import React from 'react'
import Marquee from 'react-fast-marquee'

function MarqueeAsst({ marquee, marqueeSmall, galleryMarquee }) {
    if (marqueeSmall) {
        var style = {
            ...marquee.marqueeSmall.marqueeStyle,
        }
        var textStyle = {
            ...marquee.marqueeSmall.marqueeTextStyle
        }
        var text = marquee.marqueeSmall.marqueeText
    } else if (galleryMarquee) {
        var style = {
            ...marquee.marqueeStyle,
        }
        var textStyle = {
            ...marquee.marqueeTextStyle
        }
        var text = marquee.marqueeText
    }
    return (
        <Marquee gradient={false} speed={50} autoFill={true} pauseOnHover={false} style={{...style}}>
            <h1 className='text-black text-center' style={{
                ...textStyle
            }}>{text}</h1>
        </Marquee>
    )
}

export default MarqueeAsst