import React, { useRef, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import {
    Container,
    Sidebar,
    SidebarTitle,
    SidebarItem,
    MainContent,
    ContentWrap,
    Title,
    VideoContainer,
    VideoPlayer,
    VideoOverlay,
    VideoIcon,
    Section,
    StepTitle,
    StepDescription,
    BulletList,
    BulletItem,
    HelpBox,
    HelpBoxTitle,
    HelpBoxText,
    EmailRow,
    EmailText
} from "./getHelpStyled.js";
import Text from '../../Element/TextElement/Text.jsx';



export default function A2ZGuide(props) {
    const data = props?.data
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };
    const style = {
        Container: data?.data[0]?.style,
        Sidebar: data?.data[0]?.data[0]?.data[0]?.style,
        SidebarTitle: data?.data[0]?.data[0]?.data[0].data[0],
        SidebarItem1: data?.data[0]?.data[0]?.data[0].data[1],
        SidebarItem2: data?.data[0]?.data[0]?.data[0].data[2],
        SidebarItem3: data?.data[0]?.data[0]?.data[0].data[3],
        SidebarItem4: data?.data[0]?.data[0]?.data[0].data[4],
        SidebarItem5: data?.data[0]?.data[0]?.data[0].data[5],
        ContentWrap: data?.data[0]?.data[0]?.data[1]?.data[0],
        Title: data?.data[0]?.data[0]?.data[1]?.data[0].data[0],
        VideoData: data?.data[0]?.data[0]?.data[1]?.data[0].data[1],
        Section: data?.data[0]?.data[0]?.data[1]?.data[0].data[2],
        StepTitle1: data?.data[0]?.data[0]?.data[1]?.data[0].data[3],
        StepDescription1: data?.data[0]?.data[0]?.data[1]?.data[0].data[4],
        StepTitle2: data?.data[0]?.data[0]?.data[1]?.data[0].data[5],
        StepDescription2: data?.data[0]?.data[0]?.data[1]?.data[0].data[6],
        BulletList1: data?.data[0]?.data[0]?.data[1]?.data[0].data[7],
        BulletItem1: data?.data[0]?.data[0]?.data[1]?.data[0].data[8],
        BulletItem2: data?.data[0]?.data[0]?.data[1]?.data[0].data[9],
        BulletItem3: data?.data[0]?.data[0]?.data[1]?.data[0].data[10],
    }
    // const DataCheck = data?.data[0]?.data[0]?.data[1].data[0].data[0]
    console.log(style, "stylestylestyle");


    return (
        <Container item={style.Container}>
            <Sidebar item={style.Sidebar}>
                <Text DataCheck={style.SidebarTitle} />
                <Text DataCheck={style.SidebarItem1} />
                <Text DataCheck={style.SidebarItem2} />
                <Text DataCheck={style.SidebarItem3} />
                <Text DataCheck={style.SidebarItem4} />
                <Text DataCheck={style.SidebarItem5} />
            </Sidebar>

            <MainContent>
                <Text DataCheck={style.Title} />
                {/* <Title>Getting Started with A2Z POS: A Beginner's Guide</Title> */}
                <ContentWrap item={style?.ContentWrap?.style}>
                    <VideoContainer onClick={handleVideoClick}>
                        <VideoPlayer
                            ref={videoRef}
                            poster="video/video-thumb.png"
                            preload="metadata"
                        >
                            <source src="video/smart-city.mp4" type="video/mp4" />
                        </VideoPlayer>
                        {!isPlaying && <VideoOverlay>
                            <VideoIcon />
                        </VideoOverlay>}
                    </VideoContainer>

                    <Section item={style?.Section?.style}>
                        <Text DataCheck={style?.StepTitle1} />
                        <Text DataCheck={style?.StepDescription1} />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text DataCheck={style?.StepTitle2} />
                        <Text DataCheck={style?.StepDescription2} />
                        <BulletList item={style.BulletList1?.style}>
                            <Text DataCheck={style?.BulletItem1} />
                            <Text DataCheck={style?.BulletItem2} />
                            <Text DataCheck={style?.BulletItem3} />
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <StepTitle>3. Set your Time Zone</StepTitle>
                        <StepDescription>Customize your time settings:</StepDescription>
                        <BulletList>
                            <BulletItem>Choose 12-hour or 24-hour format</BulletItem>
                            <BulletItem>Select your state from the dropdown menu</BulletItem>
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <StepTitle>4. Log In</StepTitle>
                        <StepDescription>Enter your registered Email ID and Password. Tap "Forgot Password" to reset if needed.</StepDescription>
                        <BulletList>
                            <BulletItem>Forgot your password? Tap “Forgot Password” to reset it.</BulletItem>
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <StepTitle>• Secure Your Account with Two-Factor Authentication</StepTitle>
                        <StepDescription>To enhance security, enter the verification code sent to your registered phone number.</StepDescription>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <StepTitle>• Verify Store Information</StepTitle>
                        <StepDescription>Verify your store details: Legal Business Entity Name, Doing Business As (DBA), Store Address, Business Type & Operating Hours</StepDescription>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <StepTitle>• Create an Admin PIN</StepTitle>
                        <StepDescription>
                            Set up a 4-digit PIN for secure access. This PIN will be required for important administrative actions.
                        </StepDescription>
                        <StepDescription>
                            Re-enter your Admin PIN to confirm.
                        </StepDescription>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <StepTitle>• Accept Terms</StepTitle>
                        <StepDescription>Read the Terms of Service and tap “Agree and Continue.”</StepDescription>
                        <StepDescription>A pop-up will confirm that your subscription is being activated. Once completed, you’ll see a Welcome Message with two options:</StepDescription>
                        <BulletList>
                            <BulletItem>Get Started Now</BulletItem>
                            <BulletItem>View a Tutorial</BulletItem>
                        </BulletList>
                    </Section>

                    <HelpBox>
                        <HelpBoxTitle>Need more help?</HelpBoxTitle>
                        <HelpBoxText>
                            Post your inquiry on the given contact number or email. Our Company representative will contact you soon.
                        </HelpBoxText>
                        <EmailRow>
                            <FaEnvelope className='envolev-icon' />
                            <EmailText>getsupport@gmail.com</EmailText>
                        </EmailRow>
                    </HelpBox>
                </ContentWrap>
            </MainContent>
        </Container>
    );
}
