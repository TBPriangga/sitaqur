import React from 'react'
import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-frame.jpg'
import IconBook from 'assets/images/icons/icon-book.svg'
import IconPen from 'assets/images/icons/icon-pen.svg'
import Button from 'elements/Button'
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offset = 30,
            behavior: "smooth"
        });
    }

  return (
    <section className='container pt-4'>
        <div className='row align-items-center'>
            <div className='col-auto pr-5' style={{width: 422}}>
                <h1 className='font-weight-bold line-height-1 mb-3'>
                Sistem Taman <br/>
                Al- Qur’an
                </h1>
                <p className='mb-4 font-weight-light text-gray-500 w-75' 
                style={{lineHeight: "170%"}}>
                    Memberikan pengalaman yang optimal
                    bagi para pengguna yang mencari buku
                    dan kitab-kitab santri secara online.
                </p>
                <Button className='btn px-5' hasShadow isPrimary onClick={showMostPicked}> 
                Lihat lebih banyak
                </Button>

                <div className='row' style={{marginTop: 80}}>
                    <div className='col-auto'style={{marginRight: 35}}>
                        <img width="36" height="36"
                        src={IconBook} 
                        alt={`${props.data.book} Buku`}
                        />
                        <h6 className='mt-3'>
                            {formatNumber(props.data.book)}{" "} 
                            <span className='text-gray-500 font-weight-light'>
                                Buku
                            </span>
                        </h6>
                    </div>
                    <div className='col-auto'style={{marginRight: 35}}>
                        <img width="36" height="36"
                        src={IconPen} 
                        alt={`${props.data.pen} Penulis`}
                        />
                        <h6 className='mt-3'>
                            {formatNumber(props.data.pen)}{" "} 
                            <span className='text-gray-500 font-weight-light'>
                                Penulis
                            </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div className='col-6 pl-5'>
                <div style={{width: 520, height: 410}}>
                    <img 
                    src={ImageHero} 
                    alt="Al-Qur'an" 
                    className='img-fluid position-absolute' 
                    style={{margin: '-10px 0 0 -10px', zIndex: 1}}/>
                    <img 
                    src={ImageHero_} 
                    alt="Al-Qur'an" 
                    className='img-fluid position-absolute' 
                    style={{margin: '0px -30px -30px 0'}}/>
                </div>
            </div>
        </div>
    </section>
  )
}
