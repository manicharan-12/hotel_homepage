import styled from "styled-components"
import {AiOutlinePlaySquare,AiOutlineWifi} from 'react-icons/ai'
import {BsPersonWorkspace, BsThreeDots} from 'react-icons/bs'
import {LuParkingCircle} from 'react-icons/lu'
import {PiCoffeeLight} from 'react-icons/pi'
import {MdElectricBolt} from 'react-icons/md'
import {BiSwim,BiDumbbell} from 'react-icons/bi'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io'

import map from '../../assets/map.png'

export const MainContainer=styled.div`
min-height:100vh;
background-color:#000000;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
padding-top:3%;
`

export const LoginContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:end;
width:90%;
`

export const LoginButton=styled.button`
background: rgba(255, 118, 101, 1);
width:133px;
height:40px;
border-radius:35px;
border:none;
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: rgba(255, 255, 255, 1);
`

export const BannerContainer = styled.div`
width: 90%;
margin-top:3%;
border-radius: 16px;
background: #FFF;
`

export const BannerSection =styled.div`
display:flex;
flex-direction:row;
`
export const BannerSection1 = styled.div`
background: rgba(255, 255, 255, 1);
width:50%;
padding:24px;
`

export const MainHeading1 = styled.h1`
font-family: Poppins;
font-size: 64px;
font-weight: 700;
line-height: 80px;
letter-spacing: 0em;
text-align: left;
color:#000000;
`

export const Para1=styled.p`
font-family: Open Sans;
font-size: 20px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
`

export const Header1=styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

export const Icon1= styled(AiOutlinePlaySquare)`
color:#F95F5F;
margin-right:8px;
font-size:20px
`

export const Text1 = styled.h1`
color: #222;
font-family: Open Sans;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 30px; /* 150% */
`

export const ImageContainer=styled.div`
width:50%;
`

export const Image1=styled.img`
width:100%;
`

export const PopularHotels=styled.div`
width: 90%;
margin-top:40px;
`

export const MainHeading2=styled.h1`
color: #FFF;
font-family: Open Sans;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 60px; /* 150% */
`

export const ViewAllContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:end;
`

export const ViewAllButton=styled.button`
width: 109px;
height: 40px;
flex-shrink: 0;
border-radius: 280px;
background: rgba(255, 118, 101, 0.40);
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 175% */
border:0px;
`

export const RoomsContainer=styled.div`
display:flex;
flex-wrap:wrap;
margin-top:15px;
justify-content:center;
gap:5%;
`

export const RoomCard=styled.div`
width: 400px;
flex-shrink: 0;
border-radius: 16px;
background: #FAFAFA;
margin:12px;
`

export const RoomImage=styled.img`
width:100%
`

export const RoomText=styled.h1`
color: #222;
font-family: Open Sans;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 30px; /* 125% */
padding-left:12px;
`

export const RoomDetailContainer=styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:70%;
padding:12px;
`

export const DetailText1=styled.h1`
color: #222;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
`

export const Line=styled.hr`
width: 1px;
height: 16px;
background: #DDD;
`

export const StarImage=styled.img`
width: 16px;
height: 16px;
flex-shrink: 0;
`

export const Rating=styled.h1`
color: #222;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 112.5% */
`

export const FacilitiesContainer = styled.div`
display:flex;
flex-direction:row;
margin-top:5%;
width: 90%;
`
export const MainHeading3=styled.h1`
color: #FFF;
font-family: Open Sans;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 50px; /* 125% */
`

export const Para2=styled.p`
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 175% */
`

export const ContactButton=styled.button`
padding: 16px 32px;
width:max-content;
align-items: flex-start;
gap: 10px;
border-radius: 35px;
background: rgba(255, 118, 101, 0.80);
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
border:none;
`

export const TextContainers = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:40%;
`

export const ImagesContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
width:60%;
gap:2%;

`

export const IconContainer=styled.div`
width: 153px;
height: 153px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid #E8E8E8;
background: #FFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:2%;
`
export const Icon2=styled(BsPersonWorkspace)`
color:#FF7665;
font-size:24px;
`
export const Icon3=styled(LuParkingCircle)`
color:#FF7665;
font-size:24px;
`
export const Icon4=styled(PiCoffeeLight)`
color:#FF7665;
font-size:24px;
`
export const Icon5=styled(AiOutlineWifi)`
color:#FF7665;
font-size:24px;
`
export const Icon6=styled(MdElectricBolt)`
color:#FF7665;
font-size:24px;
`
export const Icon7=styled(BiSwim)`
color:#FF7665;
font-size:24px;
`
export const Icon8=styled(BiDumbbell)`
color:#FF7665;
font-size:24px;
`
export const Icon9=styled(BsThreeDots)`
color:#FF7665;
font-size:24px;
`

export const IconText=styled.h1`
color: #222;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 175% */
`

export const AboutUsContainer=styled.div`
display:flex;
flex-direction:row;
border-radius: 16px;
background: #F4FBF8;
margin-top:10%;
width: 90%;
`

export const AboutImageContainer=styled.div`
wdith:40%;
`
export const PoolImage=styled.img`
width:100%;
`

export const AboutTextContainer=styled.div`
display:flex;
flex-direction:column;
width:60%;
padding:24px;
`

export const AboutHeading =styled.h1`
color: #000;
font-family: Open Sans;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 50px; /* 125% */
`

export const AboutPara=styled.p`
color: #555;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 175% */
`

export const ExploreButton=styled.button`
display: inline-flex;
padding: 16px 32px;
align-items: flex-start;
gap: 10px;
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
width:max-content;
border-radius: 35px;
background: #FF7665;
border:none;
`

export const QuestionsContainer=styled.div`
display:flex;
flex-direction:row;
width: 90%;
margin-top:10%;
`

export const MainText=styled.div`
display:flex;
flex-direction:column;
width:40%;
`

export const MainHeading4=styled.h1`
color: #FFF;
font-family: Open Sans;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 62.4px */
text-transform: capitalize;
`

export const Hightlight=styled.h1`
color: #FF7665;
font-family: Open Sans;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: 130%;
text-transform: capitalize;
`

export const MiniText=styled.p`
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
`

export const QuestionsSection=styled.div`
display:flex;
flex-direction:column;
width:60%;
`

export const Question1=styled.div`
display:flex;
flex-direction:column;
border-radius: 5px;
border: 1px solid #585858;
background: #FFF;
box-shadow: 6px 10px 50px 0px rgba(168, 175, 183, 0.25);
margin-bottom:2%;
padding:12px;
`

export const Container=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

export const Question=styled.h1`
color: #0C1623;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 170%; /* 30.6px */
text-transform: capitalize;
`

export const Arrow1=styled(IoIosArrowUp)``

export const Arrow2=styled(IoIosArrowDown)``

export const Answer=styled.p`
color: rgba(29, 38, 58, 0.90);
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
`

export const MapContainer=styled.div`
background-image:url(${map});
background-size:cover;
width:95%;
height:450px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:end;
padding:18px;
margin-top:15%;
`

export const VisitUsContainer=styled.div`
width:90%;
display:flex;
flex-direction:column;
border-radius: 16px;
background: #FFF;
padding:12px;
`

export const MainHeading5=styled.h1`
color: #222;
font-family: Open Sans;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: 40px; /* 111.111% */
`

export const Section2=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

export const Para3=styled.p`
color: #555;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 175% */
width:50%
`

export const Section3=styled.div`
display:flex;
width:50%
`

export const InputText=styled.input`
border-radius: 50px;
background: #FAFAFA;
color: #555;
font-family: Open Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
width:400px;
border:none;
`

export const ContactButton2=styled.button`
border-radius: 50px;
background: rgba(211, 101, 88, 0.80);
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */;
width:120px;
border:none;
`

export const FooterSection=styled.div`
background: rgba(255, 118, 101, 0.80);
display:flex;
flex-direction:row;
justify-content:space-between;
width:96%;
margin-top:10%;
padding:22px;
padding-bottom:8%;
`

export const Part=styled.div`
display:flex;
flex-direction:column;
`

export const SubParts=styled.p`
color: #FFF;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`

export const MainPart=styled.h1`
color: #FFF;
font-family: Open Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px; /* 133.333% */
`

export const IconsPart=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`