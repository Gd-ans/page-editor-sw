// import SelectDropDown from '@/CommonComponents/SelectDropdown';
import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
// import AddNewElement from '@/CommonComponents/UploadElements/AddNewElement';
import { FaVideo } from 'react-icons/fa6';
import { FiUpload } from 'react-icons/fi';

const MainEditPopUp = styled.div`
padding:16px;
background:#fff;
width:316px;
position: absolute;
z-index: 4;
border-radius: 8px;
top: 60px;
max-height: 380px;
overflow: auto;
`;
const ChangeImageWrapper = styled.div`
position: relative;
margin-top: 12px;
`;
const MainImage = styled.div`
height:170px;
width: 100%;
position: relative;
border-radius: 6px;
overflow: hidden;

.image{
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
}
video{
     width: 100%;
    height: 100%;
    object-fit: cover;
}
&:before{
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: rgba(32, 32, 32, 0.4);
    top: 0px;
    left: 0px;
};
svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
`;
const UploadElement = styled.div`
margin-top:12px;
`;

const UploadMediaButton = styled.button`
    background: rgba(55, 88, 249, 0.05);
    border: 0.5px dashed #747ED1;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px;
    width: 100%;
    height: 36px;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
`;

const UploadIcon = styled(FiUpload)`
    color:  #747ED1;
    width: 16px;
    height: 16px;
`;
const VideoIcon = styled(FaVideo)`
color: #ebdcdca1;
width: 30px;
height: 30px;
`;
const HiddenFileInput = styled.input`
  display: none;
`;

const EditMediaPopUp = () => {
    const ref = useRef();
    const fileInputRef = useRef();
    const videoRef = useRef();
    const [selectValue, setSelectValue] = useState("image");
    const [videoSrc, setVideoSrc] = useState(null);

    const onChangeHandle = (val) => {
        setSelectValue(val);
    }

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);
        }
    };

    return (
        <MainEditPopUp>
            {
                <ChangeImageWrapper>
                    <MainImage>
                        <video
                            ref={videoRef}
                            autoPlay={false}
                            muted={true}
                            loop={false}
                            type="video/mp4"
                            src={videoSrc}
                        // controls
                        />
                        {<VideoIcon />}
                    </MainImage>
                    <UploadElement>
                        <HiddenFileInput
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="video/*"
                        />
                        <UploadMediaButton onClick={handleUploadClick}>
                            <UploadIcon />
                            Upload Media
                        </UploadMediaButton>
                    </UploadElement>
                </ChangeImageWrapper>
            }
        </MainEditPopUp>
    )
}

export default EditMediaPopUp