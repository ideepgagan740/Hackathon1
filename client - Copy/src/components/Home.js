import React from "react"

import { MDBCarousel, MDBCarouselItem,MDBContainer } from 'mdb-react-ui-kit';
const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className=" Header mb-0">WELCOME To Digital India</p>
                    {/* <h1 >Digital life certificate for pensioners</h1> */}
                    <MDBCarousel showControls className="w-auto">
                        <MDBCarouselItem
                            className='vw-100 d-block '
                            itemId={1}
                            src='https://updatedyou.com/wp-content/uploads/2019/09/NPS-1.jpg'
                            alt='...'
                        />
                        <MDBCarouselItem
                            className='vw-100  d-block'
                            itemId={2}
                            src='https://img.freepik.com/free-vector/happy-senior-old-people-saving-pension-money-characters-retirement-plan-personal-finance-program-vector-concept_53562-4420.jpg?size=626&ext=jpg'
                            alt='...'
                        />
                        <MDBCarouselItem
                            className='vw-100  d-block'
                            itemId={3}
                            src='https://www.investify.in/wp-content/uploads/2020/09/National-Pension-Scheme-5.png'
                            alt='...'
                        />
                    </MDBCarousel>

                    <p className="Header">About Us</p>

                    <MDBContainer breakpoint="md ">This very requirement of personally being present in front of the disbursing agency or getting a life certificate often becomes a major hurdle in the process of seamless transfer of pension amount to the pensioner. It has been noted that it causes a lot of hardship and unnecessary inconvenience particularly for the aged and infirm pensioners who cannot always be in a position to present themselves in front of the particular authority to secure their life certificate. In addition to this a lot of government employees post their retirement choose to move to a different location either to be with their family or other reasons, hence causing a huge logistical issue when it comes to accessing their rightful pension amount.</MDBContainer>
                </div>
            </div>
        </>
    )
}

export default Home