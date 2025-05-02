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
    }
    const DataCheck = data?.data[0]?.data[0]?.data[1].data[0].data[0]
    console.log(style, "stylestylestyle");


    return (
        <Container item={style.Container}>
            <Sidebar>
                <SidebarTitle>Recommended Topics</SidebarTitle>
                <SidebarItem>Clock In/Clock Out</SidebarItem>
                <SidebarItem>Operations</SidebarItem>
                <SidebarItem>Understanding Barcode Scanners: Best Practices</SidebarItem>
                <SidebarItem>Ring Sales</SidebarItem>
                <SidebarItem>Inventory</SidebarItem>
            </Sidebar>

            <MainContent>
                <Text DataCheck={DataCheck} />
                {/* <Title>Getting Started with A2Z POS: A Beginner's Guide</Title> */}
                <ContentWrap>
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

                    <Section>
                        <StepTitle>1. Get Started Screen</StepTitle>
                        <StepDescription>When you launch A2Z POS for the first time, you’ll see the Get Started screen. Tap “Get Started” to begin.</StepDescription>
                    </Section>

                    <Section>
                        <StepTitle>2. Connect to the Internet</StepTitle>
                        <StepDescription>Choose how your POS system will connect to the internet:</StepDescription>
                        <BulletList>
                            <li>Ethernet (Wired Connection)</li>
                            <li>Wi-Fi (Wireless Connection)</li>
                            <li>Mobile Data or Tethering</li>
                        </BulletList>
                    </Section>

                    <Section>
                        <StepTitle>3. Set your Time Zone</StepTitle>
                        <StepDescription>Customize your time settings:</StepDescription>
                        <BulletList>
                            <li>Choose 12-hour or 24-hour format</li>
                            <li>Select your state from the dropdown menu</li>
                        </BulletList>
                    </Section>

                    <Section>
                        <StepTitle>4. Log In</StepTitle>
                        <StepDescription>Enter your registered Email ID and Password. Tap "Forgot Password" to reset if needed.</StepDescription>
                        <BulletList>
                            <li>Forgot your password? Tap “Forgot Password” to reset it.</li>
                        </BulletList>
                    </Section>

                    <Section>
                        <StepTitle>• Secure Your Account with Two-Factor Authentication</StepTitle>
                        <StepDescription>To enhance security, enter the verification code sent to your registered phone number.</StepDescription>
                    </Section>

                    <Section>
                        <StepTitle>• Verify Store Information</StepTitle>
                        <StepDescription>Verify your store details: Legal Business Entity Name, Doing Business As (DBA), Store Address, Business Type & Operating Hours</StepDescription>
                    </Section>

                    <Section>
                        <StepTitle>• Create an Admin PIN</StepTitle>
                        <StepDescription>
                            Set up a 4-digit PIN for secure access. This PIN will be required for important administrative actions.
                        </StepDescription>
                        <StepDescription>
                            Re-enter your Admin PIN to confirm.
                        </StepDescription>
                    </Section>

                    <Section>
                        <StepTitle>• Accept Terms</StepTitle>
                        <StepDescription>Read the Terms of Service and tap “Agree and Continue.”</StepDescription>
                        <StepDescription>A pop-up will confirm that your subscription is being activated. Once completed, you’ll see a Welcome Message with two options:</StepDescription>
                        <BulletList>
                            <li>Get Started Now</li>
                            <li>View a Tutorial</li>
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
