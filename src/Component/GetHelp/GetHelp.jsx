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
import ImageEditor from '../../CommonComponents/ImageEditor/index.jsx';
import { useSelector } from 'react-redux';



export default function A2ZGuide(props) {
    const SelcetedItem = useSelector((state) => state.pageBuilder.SelcetedItem);

    // Log or use the selected text item JSON object
    console.log('Selected Text Item:', SelcetedItem);
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
    const GridLeft = data?.data[0]?.data[0]?.data[0];
    const GridRight = data?.data[0]?.data[0]?.data[1]
    const style = {
        Container: data?.data[0]?.style,
        Sidebar: GridLeft?.style,
        SidebarTitle: GridLeft.data[0],
        SidebarItem1: GridLeft.data[1],
        SidebarItem2: GridLeft.data[2],
        SidebarItem3: GridLeft.data[3],
        SidebarItem4: GridLeft.data[4],
        SidebarItem5: GridLeft.data[5],
        ContentWrap: GridRight?.data[0],
        Title: GridRight?.data[0].custom__section[0],
        VideoData: GridRight?.data[0].custom__section[1],
        Section: GridRight?.data[0].custom__section[2],
        StepTitle1: GridRight?.data[0].custom__section[3],
        StepDescription1: GridRight?.data[0].custom__section[4],
        StepTitle2: GridRight?.data[0].custom__section[5],
        StepDescription2: GridRight?.data[0].custom__section[6],
        BulletList1: GridRight?.data[0].custom__section[7],
        BulletItem1: GridRight?.data[0].custom__section[8],
        BulletItem2: GridRight?.data[0].custom__section[9],
        BulletItem3: GridRight?.data[0].custom__section[10],
        StepTitle3: GridRight?.data[0].custom__section[11],
        StepDescription3: GridRight?.data[0].custom__section[12],
        BulletList2: GridRight?.data[0].custom__section[13],
        BulletItem4: GridRight?.data[0].custom__section[14],
        BulletItem5: GridRight?.data[0].custom__section[15],
        StepTitle4: GridRight?.data[0].custom__section[16],
        StepDescription4: GridRight?.data[0].custom__section[17],
        BulletList3: GridRight?.data[0].custom__section[18],
        BulletItem6: GridRight?.data[0].custom__section[19],
        StepTitle5: GridRight?.data[0].custom__section[20],
        StepDescription5: GridRight?.data[0].custom__section[21],
        StepTitle6: GridRight?.data[0].custom__section[22],
        StepDescription6: GridRight?.data[0].custom__section[23],
        StepTitle7: GridRight?.data[0].custom__section[24],
        StepDescription7: GridRight?.data[0].custom__section[25],
        StepDescription8: GridRight?.data[0].custom__section[26],
        StepTitle8: GridRight?.data[0].custom__section[27],
        StepDescription10: GridRight?.data[0].custom__section[28],
        StepDescription9: GridRight?.data[0].custom__section[29],
        BulletList4: GridRight?.data[0].custom__section[30],
        BulletItem7: GridRight?.data[0].custom__section[31],
        BulletItem8: GridRight?.data[0].custom__section[32],
        HelpBox: GridRight?.data[0].custom__section[33],
        HelpBoxTitle: GridRight?.data[0].custom__section[34],
        HelpBoxDesc: GridRight?.data[0].custom__section[35],
        EmailRow: GridRight?.data[0].custom__section[36],
        FaEnvelope: GridRight?.data[0].custom__section[37],
        EmailText: GridRight?.data[0].custom__section[38],
        videoData: GridRight?.data[0]?.data,
    }
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
                    {
                        style?.videoData?.length ? style?.videoData?.map((elem) => {
                            return (
                                <ImageEditor data={elem} key={elem?.id} index={elem?.id}>
                                    <VideoContainer onClick={handleVideoClick}>
                                        <VideoPlayer
                                            ref={videoRef}
                                            poster={elem?.poster}
                                            preload={elem?.preload} >
                                            <source src={elem?.sourceSrc} type="video/mp4" />
                                        </VideoPlayer>
                                        {!isPlaying && <VideoOverlay>
                                            <VideoIcon />
                                        </VideoOverlay>}
                                    </VideoContainer>
                                </ImageEditor>
                            )
                        }) : null
                    }


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
                        <Text DataCheck={style?.StepDescription10} />
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
