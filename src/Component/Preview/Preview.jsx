import React, { useRef, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import {
    Container,
    Sidebar,
    MainContent,
    ContentWrap,
    VideoContainer,
    VideoPlayer,
    VideoOverlay,
    VideoIcon,
    Section,
    HelpBox,
    EmailRow,
} from "../GetHelp/getHelpStyled.js";
import PreviewText from './PreviewText.jsx';

export default function Preview({ data }) {
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

    // Use useMemo to recompute style when data changes
    const style = React.useMemo(() => {
        const GridLeft = data?.data[0]?.data[0]?.data[0];
        const GridRight = data?.data[0]?.data[0]?.data[1];

        return {
            Container: data?.data[0]?.style,
            Sidebar: GridLeft?.style,
            SidebarTitle: GridLeft?.data[0],
            SidebarItem1: GridLeft?.data[1],
            SidebarItem2: GridLeft?.data[2],
            SidebarItem3: GridLeft?.data[3],
            SidebarItem4: GridLeft?.data[4],
            SidebarItem5: GridLeft?.data[5],
            ContentWrap: GridRight?.data[0],
            Title: GridRight?.data[0]?.custom__section[0],
            VideoData: GridRight?.data[0]?.custom__section[1],
            Section: GridRight?.data[0]?.custom__section[2],
            StepDescription1: GridRight?.data[0]?.custom__section[3],
            HelpBox: GridRight?.data[0]?.custom__section[4],
            HelpBoxTitle: GridRight?.data[0]?.custom__section[5],
            HelpBoxDesc: GridRight?.data[0]?.custom__section[6],
            EmailRow: GridRight?.data[0]?.custom__section[7],
            FaEnvelope: GridRight?.data[0]?.custom__section[8],
            EmailText: GridRight?.data[0]?.custom__section[9],
            videoData: GridRight?.data[0]?.data,
        };
    }, [data]);

    // Handle video state changes
    React.useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);
            const handleEnded = () => setIsPlaying(false);

            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
            video.addEventListener('ended', handleEnded);

            return () => {
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('pause', handlePause);
                video.removeEventListener('ended', handleEnded);
            };
        }
    }, []);

    return (
        <Container item={style.Container}>
            <Sidebar item={style.Sidebar}>
                <PreviewText
                    DataCheck={style.SidebarTitle}
                />
                <PreviewText
                    DataCheck={style.SidebarItem1}
                />
                <PreviewText
                    DataCheck={style.SidebarItem2}
                />
                <PreviewText
                    DataCheck={style.SidebarItem3}
                />
                <PreviewText
                    DataCheck={style.SidebarItem4}
                />
                <PreviewText
                    DataCheck={style.SidebarItem5}
                />
            </Sidebar>

            <MainContent>
                <PreviewText
                    DataCheck={style.Title}
                />
                <ContentWrap item={style?.ContentWrap?.style}>
                    {
                        style?.videoData?.length ? style?.videoData?.map((elem, index) => {
                            return (
                                <VideoContainer key={elem?.id || index} onClick={handleVideoClick}>
                                    <VideoPlayer
                                        ref={videoRef}
                                        poster={elem?.poster}
                                        controls
                                        preload={elem?.preload || "metadata"}
                                        style={{
                                            width: elem?.width || "100%",
                                            height: elem?.height || "auto",
                                            objectFit: elem?.objectFit || "cover",
                                            objectPosition: elem?.objectPosition || "center"
                                        }}
                                    >
                                        <source src={elem?.sourceSrc} type="video/mp4" />
                                    </VideoPlayer>
                                    {!isPlaying && <VideoOverlay>
                                        <VideoIcon />
                                    </VideoOverlay>}
                                </VideoContainer>
                            )
                        }) : null
                    }

                    <Section item={style?.Section?.style}>
                        <PreviewText
                            DataCheck={style?.StepDescription1}
                        />
                    </Section>

                    <HelpBox item={style?.HelpBox?.style}>
                        <PreviewText
                            DataCheck={style?.HelpBoxTitle}
                        />
                        <PreviewText
                            DataCheck={style?.HelpBoxDesc}
                        />
                        <EmailRow item={style?.EmailRow?.style} item2={style?.FaEnvelope?.style}>
                            <FaEnvelope className='envolev-icon' />
                            <PreviewText
                                DataCheck={style?.EmailText}
                            />
                        </EmailRow>
                    </HelpBox>
                </ContentWrap>
            </MainContent>
        </Container>
    );
} 