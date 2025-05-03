import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import EditMediaPopUp from './EditMediaPopUp/EditMediaPopUp';
import { useDispatch } from 'react-redux';
import { clearSelectedTextItem, setSelectedTextItem } from '../../store/slices/selectedTextSlice';
const MainImageEditor = styled.div`
    position: relative;
    min-width: 1px;
    padding: 10px;
    height: 100%;
    width: 100%;
    &:after{
            content: "Click To Customize";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        transition: all .3s ease-in-out;
        opacity: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #747ED1;
        font-weight: 400;
        font-size: 24px;
        line-height: 47px;
        background:rgba(55, 88, 249, 0.1);
        border: 1px solid #747ED1;
    }
    &:hover:after{
        opacity: 1;
    }
`;
const BtnContainer = styled.div`
    display:flex;
    gap:14px;
    flex-wrap:wrap;
    position:absolute;
    z-index:2;
`;
const BtnEditMedia = styled.button`
    padding: 7px 17px;
    background-color: #202020;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    border-radius: 5rem;
    font-family: "Poppins",sans-serif;
    transition: all .3s;
    &:hover{
        background: #747ED1;
    } 
`;
const MainBtnEdit = styled.div`
position: relative;
`;
const ImageEditor = ({ children, index, data }) => {
    const dispatch = useDispatch()
    const selectedElementRef = useRef(null)
    const EditMedia = useRef();
    const [selectedElement, setSelectedElement] = useState(false);
    const [editMedia, setEditMedia] = useState(false);
    const handleSelection = () => {
        setSelectedElement(true)
        dispatch(setSelectedTextItem(data));
    }


    const useOutsideClick = (ref, callback) => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        useEffect(() => {
            document.addEventListener('mousedown', handleClick);
            return () => {
                document.removeEventListener('mousedown', handleClick);
            };
        }, [ref, callback]);
    };

    useOutsideClick(selectedElementRef, () => {
        if (selectedElement !== '') {
            setSelectedElement('');
            setEditMedia(false);
            // Clear the selected text item from the Redux store
            dispatch(clearSelectedTextItem());
        }
    });


    // console.log(data, "ASfsdf")
    return (
        <React.Fragment>
            <MainImageEditor onClick={() => handleSelection()} ref={selectedElementRef}>
                <BtnContainer >
                    {selectedElement && <MainBtnEdit ref={EditMedia}>
                        <BtnEditMedia onClick={() => { setEditMedia(!editMedia) }}>Edit Media</BtnEditMedia>
                        {
                            editMedia &&
                            <EditMediaPopUp />
                        }
                    </MainBtnEdit>}
                </BtnContainer>
                {children}
            </MainImageEditor>
        </React.Fragment>
    )
}

export default ImageEditor
