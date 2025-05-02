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
        StepTitle3: data?.data[0]?.data[0]?.data[1]?.data[0].data[11],
        StepDescription3: data?.data[0]?.data[0]?.data[1]?.data[0].data[12],
        BulletList2: data?.data[0]?.data[0]?.data[1]?.data[0].data[13],
        BulletItem4: data?.data[0]?.data[0]?.data[1]?.data[0].data[14],
        BulletItem5: data?.data[0]?.data[0]?.data[1]?.data[0].data[15],
        StepTitle4: data?.data[0]?.data[0]?.data[1]?.data[0].data[16],
        StepDescription4: data?.data[0]?.data[0]?.data[1]?.data[0].data[17],
        BulletList3: data?.data[0]?.data[0]?.data[1]?.data[0].data[18],
        BulletItem6: data?.data[0]?.data[0]?.data[1]?.data[0].data[19],
        StepTitle5: data?.data[0]?.data[0]?.data[1]?.data[0].data[20],
        StepDescription5: data?.data[0]?.data[0]?.data[1]?.data[0].data[21],
        StepTitle6: data?.data[0]?.data[0]?.data[1]?.data[0].data[22],
        StepDescription6: data?.data[0]?.data[0]?.data[1]?.data[0].data[23],
        StepTitle7: data?.data[0]?.data[0]?.data[1]?.data[0].data[24],
        StepDescription7: data?.data[0]?.data[0]?.data[1]?.data[0].data[25],
        StepDescription8: data?.data[0]?.data[0]?.data[1]?.data[0].data[26],
        StepTitle8: data?.data[0]?.data[0]?.data[1]?.data[0].data[27],
        StepDescription8: data?.data[0]?.data[0]?.data[1]?.data[0].data[28],
        StepDescription9: data?.data[0]?.data[0]?.data[1]?.data[0].data[29],
        BulletList4: data?.data[0]?.data[0]?.data[1]?.data[0].data[30],
        BulletItem7: data?.data[0]?.data[0]?.data[1]?.data[0].data[31],
        BulletItem8: data?.data[0]?.data[0]?.data[1]?.data[0].data[32],
        HelpBox: data?.data[0]?.data[0]?.data[1]?.data[0].data[33],
        HelpBoxTitle: data?.data[0]?.data[0]?.data[1]?.data[0].data[34],
        HelpBoxDesc: data?.data[0]?.data[0]?.data[1]?.data[0].data[35],
        EmailRow: data?.data[0]?.data[0]?.data[1]?.data[0].data[36],
        FaEnvelope: data?.data[0]?.data[0]?.data[1]?.data[0].data[37],
        EmailText: data?.data[0]?.data[0]?.data[1]?.data[0].data[38],
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
                        <Text DataCheck={style?.StepTitle3} />
                        <Text DataCheck={style?.StepDescription3} />
                        <BulletList item={style.BulletList2?.style}>
                            <Text DataCheck={style?.BulletItem4} />
                            <Text DataCheck={style?.BulletItem5} />
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text DataCheck={style?.StepTitle4} />
                        <Text DataCheck={style?.StepDescription4} />
                        <BulletList item={style.BulletList3?.style}>
                            <Text DataCheck={style?.BulletItem6} />
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text DataCheck={style?.StepTitle5} />
                        <Text DataCheck={style?.StepDescription5} />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text DataCheck={style?.StepTitle6} />
                        <Text DataCheck={style?.StepDescription6} />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text DataCheck={style?.StepTitle7} />
                        <Text DataCheck={style?.StepDescription7} />
                        <Text DataCheck={style?.StepDescription8} />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text DataCheck={style?.StepTitle8} />
                        <Text DataCheck={style?.StepDescription8} />
                        <Text DataCheck={style?.StepDescription9} />
                        <BulletList item={style.BulletList4?.style}>
                            <Text DataCheck={style?.BulletItem7} />
                            <Text DataCheck={style?.BulletItem8} />
                        </BulletList>
                    </Section>

                    <HelpBox item={style?.HelpBox?.style}>
                        <Text DataCheck={style?.HelpBoxTitle} />
                        <Text DataCheck={style?.HelpBoxDesc} />
                        <EmailRow item={style?.EmailRow?.style} item2={style?.FaEnvelope?.style}>
                            <FaEnvelope className='envolev-icon' />
                            <Text DataCheck={style?.EmailText} />
                            {/* <EmailText item={style?.EmailText?.style}  >getsupport@gmail.com</EmailText> */}
                        </EmailRow>
                    </HelpBox>
                </ContentWrap>
            </MainContent>
        </Container>
    );
}
