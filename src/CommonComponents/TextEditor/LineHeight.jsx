import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
// import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';
import { activeMark, addMarkData, isBlockActive } from '../../utils/SlateUtilityFunctions';
import { useSlate } from 'slate-react';

const FontSizeDropdownWrapper = styled.div`
    background-color: #202020;
    cursor: pointer;
    position: relative;

    &:hover {
        svg {
            fill: #0184FF;
        }
    }

    button {
        text-align: center;
        height: 24px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        text-transform: capitalize;
        color: #FFFFFF;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        background: transparent;
        border: none;

        [aria-disabled="true"] {
            opacity: 0.2;
            pointer-events: none;
        }

        &:hover {
            color: #0184FF;
        }

        display: flex;
        align-items: center;
        gap: 6px;

        span {
            white-space: nowrap;
        }

        .icon {
            transition: transform 0.3s ease;
        }

        .open {
            transform: rotate(180deg);
        }
    }
`;

const FontDropdown = styled.ul`
    list-style: none;
    background-color: #202020;
    width: 40px;
    padding: 8px 0;
`;

const FontDropdownWrap = styled.div`
    position: absolute;
    top: 34px;
    left: 0;
`;

const InputWrap = styled.div`
    position: relative;
    margin: 2px 0;

    input {
        color: #000;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 11px;
        padding: 10px 24px 10px 6px;
        border-radius: 4px;
        width: 53px;
        background: #FFF;
        height: 24px;
        border: none;
    }
`;

const Text = styled.p`
    font-size: 12px;
    color: #787878;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 6px;
    line-height: 14px;
`;

const List = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    text-align: center;
    color: #FFFFFF;
    list-style-type: none !important;
    cursor: pointer;
    
    &:hover,
    &.active {
        background: #0184FF;
    }
`;

const LineHeightDropdown = ({ valuesData }) => {
    const editor = useSlate();
    const clickOutsideRef = useRef(null);
    const [DropdownOpen, setDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Auto");
    const [inputVal, setInputVal] = useState("");

    const handleOnChange = (value) => {
        addMarkData(editor, { format: "lineHeight", value: `${value}px` });
        setInputVal(`${value}px`);
        setSelectedValue(`${value}px`);
        setDropdownOpen(false);
    };

    const handleInput = (e) => {
        setInputVal(e.target.value);
        addMarkData(editor, { format: "lineHeight", value: `${e.target.value}px` });
    };

    const CheckActive = () => {
        return valuesData.some(() => isBlockActive(editor, "lineHeight")) ? 1 : 0;
    };

    useEffect(() => {
        const activeValue = activeMark(editor, "lineHeight").replace("px", "");
        setSelectedValue(activeValue);
        setInputVal(activeValue);
    }, [activeMark(editor, "lineHeight")]);

    return (
        <FontSizeDropdownWrapper ref={clickOutsideRef} aria-disabled={!selectedValue}>
            <button onClick={() => setDropdownOpen(!DropdownOpen)}>
                <span>{CheckActive() > 1 ? "Mixed" : activeMark(editor, "lineHeight")}</span>
                <span className={`icon ${DropdownOpen ? "open" : ""}`}>
                    <AiOutlineDown />
                </span>
            </button>
            {DropdownOpen && (
                <FontDropdownWrap>
                    <InputWrap>
                        <input type="text" value={inputVal} onChange={handleInput} maxLength={3} />
                        <Text>px</Text>
                    </InputWrap>
                    <FontDropdown>
                        {valuesData.map((value, key) => (
                            <List
                                key={key}
                                className={activeMark(editor, "lineHeight") === `${value}px` ? "active" : ""}
                                onClick={() => handleOnChange(value)}
                            >
                                {value.replace("px", "")}
                            </List>
                        ))}
                    </FontDropdown>
                </FontDropdownWrap>
            )}
        </FontSizeDropdownWrapper>
    );
};

export default LineHeightDropdown;
