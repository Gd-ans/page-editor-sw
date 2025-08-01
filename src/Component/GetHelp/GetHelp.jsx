import React, { useEffect, useRef, useState } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { setSelcetedItem, updateData } from '../../store/slices/pageBuilderSlice.js';



export default function A2ZGuide() {
    const pageBuilder = useSelector((state) => state.pageBuilder);
    const dispatch = useDispatch();

    // Log or use the selected text item JSON object
    const data = pageBuilder
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Get the currently selected item
    const selectedItem = pageBuilder.SelcetedItem;
    
    // Function to handle component selection
    const handleComponentClick = (componentPath, componentData) => {
        dispatch(setSelcetedItem({ path: componentPath, data: componentData }));
        console.log('Selected component:', componentPath);
        console.log('Component data:', componentData);
    };
    
    // Function to update component data
    const handleComponentUpdate = (path, newData) => {
        // Format the data properly for Redux update
        let formattedData;
        if (newData && Array.isArray(newData)) {
            // If newData is a Slate array, format it as the proper data structure
            formattedData = {
                data: newData
            };
        } else {
            formattedData = newData;
        }
        
        dispatch(updateData({ path, newData: formattedData }));
    };
    
    // Function to save complete updated data
    const handleSaveCompleteData = () => {
        const completeData = pageBuilder.data;
        
        // You can also download this as a JSON file
        const dataStr = JSON.stringify(completeData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'pageBuilderData.json';
        link.click();
        URL.revokeObjectURL(url);
        
        alert('✅ Data saved! Check console for complete data and download.');
    };

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
            StepTitle1: GridRight?.data[0]?.custom__section[3],
            StepDescription1: GridRight?.data[0]?.custom__section[4],
            StepTitle2: GridRight?.data[0]?.custom__section[5],
            StepDescription2: GridRight?.data[0]?.custom__section[6],
            BulletList1: GridRight?.data[0]?.custom__section[7],
            BulletItem1: GridRight?.data[0]?.custom__section[8],
            BulletItem2: GridRight?.data[0]?.custom__section[9],
            BulletItem3: GridRight?.data[0]?.custom__section[10],
            StepTitle3: GridRight?.data[0]?.custom__section[11],
            StepDescription3: GridRight?.data[0]?.custom__section[12],
            BulletList2: GridRight?.data[0]?.custom__section[13],
            BulletItem4: GridRight?.data[0]?.custom__section[14],
            BulletItem5: GridRight?.data[0]?.custom__section[15],
            StepTitle4: GridRight?.data[0]?.custom__section[16],
            StepDescription4: GridRight?.data[0]?.custom__section[17],
            BulletList3: GridRight?.data[0]?.custom__section[18],
            BulletItem6: GridRight?.data[0]?.custom__section[19],
            StepTitle5: GridRight?.data[0]?.custom__section[20],
            StepDescription5: GridRight?.data[0]?.custom__section[21],
            StepTitle6: GridRight?.data[0]?.custom__section[22],
            StepDescription6: GridRight?.data[0]?.custom__section[23],
            StepTitle7: GridRight?.data[0]?.custom__section[24],
            StepDescription7: GridRight?.data[0]?.custom__section[25],
            StepDescription8: GridRight?.data[0]?.custom__section[26],
            StepTitle8: GridRight?.data[0]?.custom__section[27],
            StepDescription10: GridRight?.data[0]?.custom__section[28],
            StepDescription9: GridRight?.data[0]?.custom__section[29],
            BulletList4: GridRight?.data[0]?.custom__section[30],
            BulletItem7: GridRight?.data[0]?.custom__section[31],
            BulletItem8: GridRight?.data[0]?.custom__section[32],
            HelpBox: GridRight?.data[0]?.custom__section[33],
            HelpBoxTitle: GridRight?.data[0]?.custom__section[34],
            HelpBoxDesc: GridRight?.data[0]?.custom__section[35],
            EmailRow: GridRight?.data[0]?.custom__section[36],
            FaEnvelope: GridRight?.data[0]?.custom__section[37],
            EmailText: GridRight?.data[0]?.custom__section[38],
        videoData: GridRight?.data[0]?.data,
        };
    }, [data]); // Recompute when data changes
    // Debug: Log the current data structure
    useEffect(() => {
        // Check the specific path for the title
        const titlePath = pageBuilder.data?.[0]?.data?.[0]?.data?.[1]?.data?.[0]?.custom__section?.[0];
    }, [pageBuilder.data, style.Title]);
    return (
        <>
            {/* Save Button */}
            <div style={{
                position: 'fixed',
                top: '6px',
                right: '10px',
                zIndex: 1000,
                background: '#646fc8',
                color: 'white',
                padding: '6px 14px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '10px',
                fontWeight: '600',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }} onClick={handleSaveCompleteData}>
                Save
            </div>
            
            {/* Test Update Button */}
            {/* <div style={{
                position: 'fixed',
                top: '60px',
                left: '10px',
                zIndex: 1000,
                background: '#ff6b35',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }} onClick={() => {
                const testData = {
                    data: [
                        {
                            type: 'alignLeft',
                            children: [
                                {
                                    type: 'p',
                                    children: [
                                        {
                                            lineHeight: '31px',
                                            text: "Manual Test Update " + new Date().toLocaleTimeString()
                                        }
                                    ],
                                    style: {
                                        desktop: {
                                            fontStyle: 'var(--global-typography-fontStyleH4)',
                                            color: '#1B202A',
                                            fontFamily: 'Nunito Sans',
                                            fontSize: '38px',
                                            fontWeight: '800',
                                            lineHeight: '46.2px',
                                            padding: {
                                                paddingTop: '0',
                                                paddingRight: '0',
                                                paddingBottom: '0',
                                                paddingLeft: '0'
                                            },
                                            margin: {
                                                marginTop: '0px',
                                                marginRight: '0px',
                                                marginBottom: '16px',
                                                marginLeft: '0px'
                                            }
                                        },
                                        tablet: {
                                            color: '',
                                            fontSize: '',
                                            fontWeight: '',
                                            lineHeight: '',
                                            backgroundColor: '',
                                            textAlign: 'center',
                                            position: {
                                                position: 'relative',
                                                top: '0px',
                                                bottom: '0px',
                                                left: '0px',
                                                right: '0px'
                                            },
                                            padding: {
                                                paddingTop: '0px',
                                                paddingRight: '0px',
                                                paddingBottom: '0px',
                                                paddingLeft: '0px'
                                            },
                                            margin: {
                                                marginTop: '0px',
                                                marginRight: '0px',
                                                marginBottom: '16px',
                                                marginLeft: '0px'
                                            }
                                        },
                                        mobile: {
                                            color: '',
                                            fontsize: '',
                                            fontweight: '',
                                            lineheight: '',
                                            backgroundcolor: '',
                                            textalign: '',
                                            position: {
                                                top: '0px',
                                                bottom: '0px',
                                                left: '0px',
                                                right: '0px'
                                            },
                                            padding: {
                                                paddingTop: '0px',
                                                paddingRight: '0px',
                                                paddingBottom: '0px',
                                                paddingLeft: '0px'
                                            },
                                            margin: {
                                                marginTop: '0px',
                                                marginRight: '0px',
                                                marginBottom: '30px',
                                                marginLeft: '0px'
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                };
                handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.0', testData);
            }}>
                🧪 Test Title Update
            </div> */}
            
            {/* Log Current State Button */}
            {/* <div style={{
                position: 'fixed',
                top: '110px',
                left: '10px',
                zIndex: 1000,
                background: '#007bff',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }} onClick={() => {
                console.log('📊 Current state.data:', pageBuilder.data);
                // console.log('📋 Current state.data JSON:', JSON.stringify(pageBuilder.data, null, 2));
            }}>
                📊 Log Current State
            </div> */}
            
            {/* Current Title Display */}
            {/* <div style={{
                position: 'fixed',
                top: '160px',
                left: '10px',
                zIndex: 1000,
                background: '#6c757d',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '12px',
                maxWidth: '300px',
                wordWrap: 'break-word'
            }}>
                <strong>Current Title:</strong><br/>
                {style.Title?.data?.text || 'No title found'}
            </div> */}
            
            {/* Selected Component Indicator */}
            {/* {selectedItem && (
                <div style={{
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                    background: '#747ED1',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '5px',
                    zIndex: 1000,
                    fontSize: '12px',
                    maxWidth: '300px'
                }}>
                    <strong>Selected Component:</strong><br/>
                    Path: {selectedItem.path || 'N/A'}<br/>
                    {selectedItem.data?.data?.text && `Text: ${selectedItem.data.data.text.substring(0, 50)}...`}
                    <br/><br/>
                    <button 
                        onClick={() => {
                            const testData = {
                                data: {
                                    text: "Test Update " + new Date().toLocaleTimeString()
                                }
                            };
                            handleComponentUpdate(selectedItem.path, testData);
                        }}
                        style={{
                            background: '#fff',
                            color: '#747ED1',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '10px'
                        }}
                    >
                        Test Update
                    </button>
                </div>
            )} */}
            
        <Container item={style.Container}>
            <Sidebar item={style.Sidebar}>
                <Text 
                    DataCheck={style.SidebarTitle} 
                    onClick={() => handleComponentClick('data.0.data.0.data.0.data.0', style.SidebarTitle)}
                    onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.0.data.0', newData)}
                />
                <Text 
                    DataCheck={style.SidebarItem1} 
                    onClick={() => handleComponentClick('data.0.data.0.data.0.data.1', style.SidebarItem1)}
                    onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.0.data.1', newData)}
                />
                <Text 
                    DataCheck={style.SidebarItem2} 
                    onClick={() => handleComponentClick('data.0.data.0.data.0.data.2', style.SidebarItem2)}
                    onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.0.data.2', newData)}
                />
                <Text 
                    DataCheck={style.SidebarItem3} 
                    onClick={() => handleComponentClick('data.0.data.0.data.0.data.3', style.SidebarItem3)}
                    onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.0.data.3', newData)}
                />
                <Text 
                    DataCheck={style.SidebarItem4} 
                    onClick={() => handleComponentClick('data.0.data.0.data.0.data.4', style.SidebarItem4)}
                    onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.0.data.4', newData)}
                />
                <Text 
                    DataCheck={style.SidebarItem5} 
                    onClick={() => handleComponentClick('data.0.data.0.data.0.data.5', style.SidebarItem5)}
                    onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.0.data.5', newData)}
                />
            </Sidebar>

            <MainContent>
                <Text 
                    DataCheck={style.Title} 
                    onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.0', style.Title)}
                    onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.0', newData)}
                />
                <ContentWrap item={style?.ContentWrap?.style}>
                    {
                        style?.videoData?.length ? style?.videoData?.map((elem) => {
                            return (
                                <ImageEditor data={elem} key={elem?.id} index={elem?.id}>
                                    <VideoContainer onClick={handleVideoClick}>
                                        <VideoPlayer
                                            ref={videoRef}
                                            poster={elem?.poster}
                                            controls
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
                        <Text 
                            DataCheck={style?.StepTitle1} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.3', style?.StepTitle1)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.3', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription1} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.4', style?.StepDescription1)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.4', newData)}
                        />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text 
                            DataCheck={style?.StepTitle2} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.5', style?.StepTitle2)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.5', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription2} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.6', style?.StepDescription2)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.6', newData)}
                        />
                        <BulletList item={style.BulletList1?.style}>
                            <Text 
                                DataCheck={style?.BulletItem1} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.8', style?.BulletItem1)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.8', newData)}
                            />
                            <Text 
                                DataCheck={style?.BulletItem2} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.9', style?.BulletItem2)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.9', newData)}
                            />
                            <Text 
                                DataCheck={style?.BulletItem3} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.10', style?.BulletItem3)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.10', newData)}
                            />
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text 
                            DataCheck={style?.StepTitle3} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.11', style?.StepTitle3)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.11', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription3} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.12', style?.StepDescription3)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.12', newData)}
                        />
                        <BulletList item={style.BulletList2?.style}>
                            <Text 
                                DataCheck={style?.BulletItem4} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.14', style?.BulletItem4)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.14', newData)}
                            />
                            <Text 
                                DataCheck={style?.BulletItem5} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.15', style?.BulletItem5)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.15', newData)}
                            />
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text 
                            DataCheck={style?.StepTitle4} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.16', style?.StepTitle4)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.16', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription4} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.17', style?.StepDescription4)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.17', newData)}
                        />
                        <BulletList item={style.BulletList3?.style}>
                            <Text 
                                DataCheck={style?.BulletItem6} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.19', style?.BulletItem6)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.19', newData)}
                            />
                        </BulletList>
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text 
                            DataCheck={style?.StepTitle5} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.20', style?.StepTitle5)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.20', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription5} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.21', style?.StepDescription5)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.21', newData)}
                        />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text 
                            DataCheck={style?.StepTitle6} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.22', style?.StepTitle6)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.22', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription6} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.23', style?.StepDescription6)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.23', newData)}
                        />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text 
                            DataCheck={style?.StepTitle7} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.24', style?.StepTitle7)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.24', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription7} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.25', style?.StepDescription7)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.25', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription8} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.26', style?.StepDescription8)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.26', newData)}
                        />
                    </Section>

                    <Section item={style?.Section?.style}>
                        <Text 
                            DataCheck={style?.StepTitle8} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.27', style?.StepTitle8)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.27', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription10} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.28', style?.StepDescription10)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.28', newData)}
                        />
                        <Text 
                            DataCheck={style?.StepDescription9} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.29', style?.StepDescription9)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.29', newData)}
                        />
                        <BulletList item={style.BulletList4?.style}>
                            <Text 
                                DataCheck={style?.BulletItem7} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.31', style?.BulletItem7)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.31', newData)}
                            />
                            <Text 
                                DataCheck={style?.BulletItem8} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.32', style?.BulletItem8)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.32', newData)}
                            />
                        </BulletList>
                    </Section>

                    <HelpBox item={style?.HelpBox?.style}>
                        <Text 
                            DataCheck={style?.HelpBoxTitle} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.34', style?.HelpBoxTitle)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.34', newData)}
                        />
                        <Text 
                            DataCheck={style?.HelpBoxDesc} 
                            onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.35', style?.HelpBoxDesc)}
                            onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.35', newData)}
                        />
                        <EmailRow item={style?.EmailRow?.style} item2={style?.FaEnvelope?.style}>
                            <FaEnvelope className='envolev-icon' />
                            <Text 
                                DataCheck={style?.EmailText} 
                                onClick={() => handleComponentClick('data.0.data.0.data.1.data.0.custom__section.38', style?.EmailText)}
                                onUpdate={(newData) => handleComponentUpdate('data.0.data.0.data.1.data.0.custom__section.38', newData)}
                            />
                            {/* <EmailText item={style?.EmailText?.style}  >getsupport@gmail.com</EmailText> */}
                        </EmailRow>
                    </HelpBox>
                </ContentWrap>
            </MainContent>
        </Container>
        </>
    );
}
