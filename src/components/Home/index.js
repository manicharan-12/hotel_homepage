import {
    MainContainer,
    LoginContainer,
    LoginButton,
    BannerContainer,
    BannerSection,
    BannerSection1,
    MainHeading1,
    Para1,
    Header1,
    Icon1,
    Text1,
    ImageContainer,
    Image1,
    PopularHotels,
    MainHeading2,
    ViewAllContainer,
    ViewAllButton,
    RoomsContainer,
    RoomCard,
    RoomImage,
    RoomText,
    RoomDetailContainer,
    DetailText1,
    Line,
    StarImage,
    Rating,
    FacilitiesContainer,
    TextContainers,
    MainHeading3,
    Para2,
    ContactButton,
    ImagesContainer,
    IconContainer,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    IconText,
    AboutUsContainer,
    AboutImageContainer,
    PoolImage,
    AboutTextContainer,
    AboutHeading,
    AboutPara,
    ExploreButton,
    QuestionsContainer,
    MainText,
    MainHeading4,
    Hightlight,
    MiniText,
    QuestionsSection,
    Question1,
    Container,
    Question,
    Arrow1,
    Arrow2,
    Answer,
    MapContainer,
    VisitUsContainer,
    MainHeading5,
    Section2,
    Para3,
    Section3,
    InputText,
    ContactButton2,
    FooterSection,
    Part,
    SubParts,
    MainPart,
    IconsPart
} from './styledComponents'

import hotel1 from '../../assets/hotel1.png'
import room1 from '../../assets/room1.png'
import room2 from '../../assets/room2.png'
import room3 from '../../assets/room3.png'
import star1 from '../../assets/star1.png'
import star2 from '../../assets/star2.png'
import pool from '../../assets/swimmingpool.png'

import {BiLogoFacebookCircle,BiLogoInstagramAlt,BiLogoGoogle} from 'react-icons/bi'

const Home = ()=>{
    return (
        <MainContainer>
            <LoginContainer>
                <LoginButton>Login</LoginButton>
            </LoginContainer>
            <BannerContainer>
                <BannerSection>
                    <BannerSection1>
                        <MainHeading1>
                        Find your perfect place to stay
                        </MainHeading1>
                        <Para1>
                        Our exquisite rooms offers a perfect blend of contemporary elegance and warm hospitality
                        </Para1>
                        <Header1 >
                            <Icon1/>
                            <Text1>Watch Video</Text1>
                    </Header1>
                    </BannerSection1>
                    <ImageContainer>
                        <Image1 src={hotel1}/>
                    </ImageContainer>
                </BannerSection>
            </BannerContainer>
            <PopularHotels>
                <MainHeading2>
                Our Most Popular Rooms
                </MainHeading2>
                <ViewAllContainer>
                    <ViewAllButton>
                        View All
                    </ViewAllButton>
                </ViewAllContainer>
                <RoomsContainer>
                    <RoomCard>
                        <RoomImage src={room1}/>
                        <RoomText>Executive Room</RoomText>
                        <RoomDetailContainer>
                            <DetailText1>$200 Par Night</DetailText1>
                            <Line/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star2}/>
                            <Rating>4.8</Rating>
                        </RoomDetailContainer>
                    </RoomCard>
                    <RoomCard>
                        <RoomImage src={room2}/>
                        <RoomText>Premium Room</RoomText>
                        <RoomDetailContainer>
                            <DetailText1>$200 Par Night</DetailText1>
                            <Line/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star2}/>
                            <Rating>4.8</Rating>
                        </RoomDetailContainer>
                    </RoomCard>
                    <RoomCard>
                        <RoomImage src={room3}/>
                        <RoomText>Basic Room </RoomText>
                        <RoomDetailContainer>
                            <DetailText1>$200 Par Night</DetailText1>
                            <Line/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star1}/>
                            <StarImage src={star2}/>
                            <Rating>4.8</Rating>
                        </RoomDetailContainer>
                    </RoomCard>
                </RoomsContainer>
            </PopularHotels>
            <FacilitiesContainer>
                <TextContainers>
                    <MainHeading3>
                    We do our best facilities provide you
                    </MainHeading3>
                    <Para2>
                    Discover Your Ideal Haven: Find Your Perfect Stay at Golden Sands Resort 
                    </Para2>
                    <ContactButton>
                        Contact Now
                    </ContactButton>
                </TextContainers>
                <ImagesContainer>
                    <IconContainer>
                        <Icon2/>
                        <IconText>
                        Private Workspace
                        </IconText>
                    </IconContainer>
                    <IconContainer>
                        <Icon3/>
                        <IconText>
                        Parking Area
                        </IconText>
                    </IconContainer>
                    <IconContainer>
                        <Icon4/>
                        <IconText>
                        Breakfast
                        </IconText>
                    </IconContainer>
                    <IconContainer>
                        <Icon5/>
                        <IconText>
                        Free Wifi
                        </IconText>
                    </IconContainer>
                    <IconContainer>
                        <Icon6/>
                        <IconText>
                        Free Electricity
                        </IconText>
                    </IconContainer>
                    <IconContainer>
                        <Icon7/>
                        <IconText>
                        Swimming Pool
                        </IconText>
                    </IconContainer>
                    <IconContainer>
                        <Icon8/>
                        <IconText>
                        exercise Space
                        </IconText>
                    </IconContainer>
                    <IconContainer>
                        <Icon9/>
                        <IconText>
                        Other Service
                        </IconText>
                    </IconContainer>
                </ImagesContainer>
            </FacilitiesContainer>
            <AboutUsContainer>
                <AboutImageContainer>
                    <PoolImage src={pool}/>
                </AboutImageContainer>
                <AboutTextContainer>
                    <AboutHeading>Discover our History</AboutHeading>
                    <AboutPara>Golden Sands Resort has a rich history dating back over a century. Originally a grand mansion, it transformed into a distinguished hotel.</AboutPara>
                    <AboutPara>Welcoming esteemed guests and witnessing significant moments, it has evolved while preserving its historic charm. Today, it stands as an icon of luxury, offering a perfect blend of heritage and contemporary hospitality.</AboutPara>
                    <ExploreButton>Explore More</ExploreButton>
                </AboutTextContainer>
            </AboutUsContainer>
            <QuestionsContainer>
                <MainText>
                    <MainHeading4>Frequently Asked <Hightlight> Questions </Hightlight></MainHeading4>
                    <MiniText></MiniText>
                </MainText>
                <QuestionsSection>
                    <Question1>
                        <Container>
                            <Question>How far is nearset bus station ?</Question>
                            <Arrow1/>
                        </Container>
                        <Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</Answer>
                    </Question1>
                    <Question1>
                        <Container>
                            <Question>What Makes Us Different</Question>
                            <Arrow2/>
                        </Container>
                    </Question1>
                    <Question1>
                        <Container>
                            <Question>What Time Is Checking Out?</Question>
                            <Arrow2/>
                        </Container>
                    </Question1>
                </QuestionsSection>
            </QuestionsContainer>
            <MapContainer>
                <VisitUsContainer>
                    <MainHeading5>Visit Us</MainHeading5>
                    <Section2>
                        <Para3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </Para3>
                        <Section3>
                            <InputText placeholder="Enter your email" type='text'/>
                            <ContactButton2>Contact</ContactButton2>
                        </Section3>
                    </Section2>
                </VisitUsContainer>
            </MapContainer>
            <FooterSection>
                <Part>
                    <SubParts>Looking forward to a wonderful stay</SubParts>
                    <IconsPart>
                        <BiLogoFacebookCircle/>
                        <BiLogoInstagramAlt/>
                        <BiLogoGoogle/>
                    </IconsPart>
                </Part>
                <Part>
                    <MainPart>Home</MainPart>
                    <SubParts>Booking</SubParts>
                    <SubParts>Facilities</SubParts>
                    <SubParts>Location</SubParts>
                    <SubParts>Contact</SubParts>
                </Part>
                <Part>
                    <MainPart>Help</MainPart>
                    <SubParts>About Us</SubParts>
                    <SubParts>Help center</SubParts>
                    <SubParts>Privacy policy</SubParts>
                    <SubParts>FAQs</SubParts>
                </Part>
                <Part>
                    <MainPart>Get the app</MainPart>
                    <SubParts>iOS app</SubParts>
                    <SubParts>Android app</SubParts>
                </Part>
            </FooterSection>
        </MainContainer>
    )
}

export default Home
