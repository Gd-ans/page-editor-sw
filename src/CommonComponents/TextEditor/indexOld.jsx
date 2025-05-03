import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { updateTextEditorData } from '../../store/Slices/textEditorSlice.js';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaListOl,
  FaListUl,
  FaLink,
  FaHighlighter,
  FaFont,
  FaTextHeight
} from 'react-icons/fa';
import FontSizeDropdown from './FontSizeDropdown.jsx';
import TagHandlerDopDrown from './TagHandlerDopDrown.jsx';
import { Editable, withReact, Slate, ReactEditor } from 'slate-react';
import {
  Editor,
  createEditor,
  Element as SlateElement,
  Transforms,
} from 'slate';
import { withHistory } from 'slate-history';
import { getMarked, getBlock, toggleMark, toggleBlock } from '../../utils/SlateUtilityFunctions.jsx';
import withLinks from '../../utils/withLinks.js';
import ColorPickerTextEditor from './ColorPickerTextEditor.jsx';
import { insertLink } from '../../utils/link.js';
import LineHeightDropDown from './LineHeight.jsx';
import { useDebounceFunction } from '../../utils/debounce.js';
const ParentTextEditorWraper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  &.ActiveEdit {
    border-radius: 4px;
    display: inline-block;
  }
`;

const SlateContainer = styled.div`
  animation-name: slideLeft;
  animation-duration: 2s;

  @keyframes slideLeft {
    0% {
      margin-left: -400px;
    } 
    100% {
      margin-left: 0;
    }
  }
`;

const CustomizeTextEditorWrapper = styled.div`
  position: absolute;
  padding: 10px;
  background-color: #202020;
  border-radius: 5px;
  left: 0;
  display: flex;
  gap: 10px;
  place-items: center;
  z-index: 9;
  min-width: 400px;
  &:after {
    content: " ";
    left: 17px;
    bottom: -8px;
    border-top: ${({ position }) => (position ? "" : "20px solid #202020")};
    border-bottom: ${({ position }) => (position ? "20px solid #202020" : "")};
    border-right: 19px solid transparent;
    border-left: 19px solid transparent;
    border-bottom: none;
    z-index: -1;
  }
  &:before {
    height: 100%;
    width: 100%;
    bottom: -16px;
    left: 0;
    background: transparent;
    z-index: -1;
  }
  .active {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.10);
  }
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #747ED1;
    }
  }
`;

const TextEditorWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.03s;
  border: 2px solid transparent;
  transition: all ease 0.7s;
  ul li {
    list-style-type: disc;
  }
  &.ActiveEditor {
    padding: 8px 16px;
    border: 2px solid #747ED1;
    border-radius: 8px;
  }
`;

const EditText = styled.div`
    position: absolute;
    top: 9px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #747ED1;
    color: #fff;
    padding: 2px 10px;
    font-size: 12px;
`;

const TextEditorWrapUL = styled.div`
  ul li {
    list-style-type: disc;
    margin-left: 20px;
  }
  .link {
    a {
      pointer-events: none;
    }
  }
`;

const TextEditor = ({ data, index, slider, ContextChange, style, sliderKey, sliderId }) => {
  // const dispatch = useDispatch();

  const Element = (props) => {
    return getBlock(props);
  };

  const Leaf = ({ attributes, children, leaf }) => {
    children = getMarked(leaf, children);
    return <span {...attributes}>{children}</span>;
  };

  const EditButtonRef = useRef(null);
  const TextEditorLinkref = useRef();
  const bgcolorPickerRef = useRef();
  const colorPickerRef = useRef();

  const [selectedElementData, setSelectedElementData] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [BackgroundFill, setBackgroundFill] = useState(false);
  const [colorFill, setColorFill] = useState(false);
  const [editTextButton, setEditTextButton] = useState(false);
  const [selection, setSelection] = useState();
  const [randomKey, setRandomKey] = useState('');
  const [linkPopUpOpen, setLinkPoUpOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState('');

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withLinks(withReact(createEditor()))), []);
  const [value, setValue] = useState(data);

  useEffect(() => {
    setValue(data); // Initialize with the data prop
  }, [data, index, slider, ContextChange]);

  const debouncedApiCalling = useDebounceFunction((callback) => callback(), 1000);

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (editTextButton && value) {
      debouncedApiCalling(() => handleSave(value));
    }
  }, [value]);

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

  useOutsideClick(EditButtonRef, () => {
    if (selectedElement !== '' && !linkPopUpOpen) {
      setSelectedElement('');
      if (editTextButton) {
        handleSave();
      }
      setEditTextButton(false);
    }
  });

  const handleSelection = () => {
    setSelectedElement(index);
  };

  const renderElement = useCallback((props) => <Element {...props} />, []);

  const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });
    return !!match;
  };

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const MouseOver = () => {
    setIsHovering(true);
  };

  const MouseOut = () => {
    setIsHovering(false);
  };

  const CustomizeButtonHandle = () => {
    setEditTextButton(!editTextButton);
    if (!editTextButton) {
      selectAll();
    } else {
      handleSave();
    }
  };

  const HandleChangeBGTextColor = () => {
    setSelection(editor.selection);
    selection && ReactEditor.focus(editor);
    setBackgroundFill(!BackgroundFill);
    setColorFill(false);
  };

  const HandleChangeTextColor = () => {
    setSelection(editor.selection);
    selection && ReactEditor.focus(editor);
    setColorFill(!colorFill);
    setBackgroundFill(false);
  };

  const TextActionHandle = () => {
    // TextEditorLinkref.current.open();
    // setLinkPoUpOpen(true); 
    const url = prompt("Enter a URL");
    insertLink(editor, url); // will be implemented later 
  };

  const TextActionCloseHandle = () => {
    TextEditorLinkref.current.close();
    setLinkPoUpOpen(false);
  };

  const addMarkData = (editor, data) => {
    Editor.addMark(editor, data.format, data.value);
  };

  const handleSave = (MegaValue) => {
    const updatedData = MegaValue ? MegaValue : value;
    // console.log(MegaValue, value, "zfgdhdff")
    // dispatch(updateTextEditorData(updatedData));  
  };

  const LinkSubmit = (action, pathname, urlSlug, email, telnumber, webUrl, file, actionRandom) => {
    let linkData;
    switch (action) {
      case 'Open Page':
        linkData = {
          action: 'openpage',
          pathname: pathname,
          urlSlug: urlSlug,
        };
        Transforms.select(editor, selection);
        insertLink(editor, { url: `${pathname}/${urlSlug}`, showInNewTab: false, data: linkData });
        break;

      case 'Open web address':
        linkData = {
          action: 'webUrl',
          webUrl: webUrl,
        };
        Transforms.select(editor, selection);
        insertLink(editor, { url: webUrl, showInNewTab: true, data: linkData });
        break;

      case 'Click to call':
        linkData = {
          action: 'call',
          telnumber: telnumber,
        };
        Transforms.select(editor, selection);
        insertLink(editor, { url: telnumber, showInNewTab: false, data: linkData });
        break;

      case 'Send an email':
        linkData = {
          action: 'email',
          email: email,
        };
        Transforms.select(editor, selection);
        insertLink(editor, { url: email, showInNewTab: false, data: linkData });
        break;

      case 'Download a file':
        linkData = {
          action: 'download',
          file: file,
        };
        Transforms.select(editor, selection);
        insertLink(editor, { url: file, showInNewTab: true, data: linkData });
        break;

      default:
        break;
    }
    TextActionCloseHandle();
  };

  const FontData = ['10', '12', '14', '16', '18', '20', '24', '28', '32', '36', '40', '44', '48', '56', '64', '128'];
  const LineHeightData = ['10', '12', '14', '16', '18', '20', '24', '28', '32', '36', '40', '44', '48', '56'];
  const HeadingData = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
  const FamilyData = ['Sans Serif', 'Serif', 'MonoSpace', 'Agdasima'];

  const selectAll = useCallback(() => {
    const range = { anchor: Editor?.start(editor, []), focus: Editor?.end(editor, []) };
    Transforms.select(editor, range);
  }, [editor]);

  const mainDiv = document.querySelector('.Theme2-style')
  const [popupPosition, setPopupPosition] = useState({ top: '-60px' });
  const popupRef = useRef(null);
  const [positionDown, setPositionDown] = useState(false);

  const changepopUpPosition = () => {
    let parentTop = mainDiv?.getBoundingClientRect().top;
    let top = editTextButton && popupRef?.current?.getBoundingClientRect().top;
    if (top - parentTop < 200) {
      setPositionDown(true);
      setPopupPosition({
        top: '150%',
      });
    }
    if (top - parentTop > 201) {
      setPositionDown(false);
      setPopupPosition({
        top: '-60px',
      });
    }
  };

  useEffect(() => {
    if (editTextButton) {
      changepopUpPosition();
    }
  }, [editTextButton]);


  return (
    <>
      <SlateContainer style={{ ...style?.desktop?.margin, ...style?.desktop?.padding }}>
        <ParentTextEditorWraper
          key={randomKey}
          className={isHovering || selectedElement === index ? 'ActiveEdit' : ''}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
          onClick={handleSelection}
          ref={EditButtonRef}
        >
          <Slate editor={editor} initialValue={data} onChange={handleEditorChange}>
            <TextEditorWrap
              className={isHovering || selectedElement === index ? 'ActiveEditor' : ''}
            >
              {isHovering && (
                <EditText
                  className="edit-btn"
                  onClick={() => CustomizeButtonHandle()}
                >
                  {editTextButton ? 'Close' : 'Edit'}
                </EditText>
              )}
              {editTextButton && (
                <CustomizeTextEditorWrapper
                  style={{ top: popupPosition.top }}
                  position={positionDown}
                  ref={popupRef}
                  data-test-id="menu"
                >
                  <FaBold
                    className={`${isMarkActive(editor, 'bold') ? 'active' : ''}`}
                    color={isMarkActive(editor, 'bold') ? '#747ED1' : '#fff'}
                    onClick={() => toggleMark(editor, 'bold')}
                  />
                  <FaItalic
                    className={`${isMarkActive(editor, 'italic') ? 'active' : ''}`}
                    color={isMarkActive(editor, 'italic') ? '#747ED1' : '#fff'}
                    onClick={() => toggleMark(editor, 'italic')}
                  />
                  <FaUnderline
                    className={`${isMarkActive(editor, 'underline') ? 'active' : ''}`}
                    color={isMarkActive(editor, 'underline') ? '#747ED1' : '#fff'}
                    onClick={() => toggleMark(editor, 'underline')}
                  />
                  <FaStrikethrough
                    className={`${isMarkActive(editor, 'strikethrough') ? 'active' : ''}`}
                    color={isMarkActive(editor, 'strikethrough') ? '#747ED1' : '#fff'}
                    onClick={() => toggleMark(editor, 'strikethrough')}
                  />
                  <FontSizeDropdown editor={editor} valuesData={FontData} manage={'Size'} />
                  <TagHandlerDopDrown editor={editor} valuesData={HeadingData} manage={'Tag'} />
                  <FaAlignLeft
                    className={`${isBlockActive(editor, 'alignLeft') ? 'active' : ''}`}
                    color={isBlockActive(editor, 'alignLeft') ? '#747ED1' : '#fff'}
                    onClick={() => toggleBlock(editor, 'alignLeft')}
                  />
                  <FaAlignCenter
                    className={`${isBlockActive(editor, 'alignCenter') ? 'active' : ''}`}
                    color={isBlockActive(editor, 'alignCenter') ? '#747ED1' : '#fff'}
                    onClick={() => toggleBlock(editor, 'alignCenter')}
                  />
                  <FaAlignRight
                    className={`${isBlockActive(editor, 'alignRight') ? 'active' : ''}`}
                    color={isBlockActive(editor, 'alignRight') ? '#747ED1' : '#fff'}
                    onClick={() => toggleBlock(editor, 'alignRight')}
                  />
                  <FaLink
                    onClick={TextActionHandle}
                    color="#fff"
                  />
                  <FaHighlighter
                    onClick={HandleChangeBGTextColor}
                    color="#fff"
                  />
                  <FaFont
                    onClick={HandleChangeTextColor}
                    color="#fff"
                  />
                  <LineHeightDropDown editor={editor} valuesData={LineHeightData} manage={'lineHeight'} />
                  <FaListOl
                    className={`${isBlockActive(editor, 'orderedList') ? 'active' : ''}`}
                    color={isBlockActive(editor, 'orderedList') ? '#747ED1' : '#fff'}
                    onClick={() => toggleBlock(editor, 'orderedList', style)}
                  />
                  <FaListUl
                    className={`${isBlockActive(editor, 'unorderedList') ? 'active' : ''}`}
                    color={isBlockActive(editor, 'unorderedList') ? '#747ED1' : '#fff'}
                    onClick={() => toggleBlock(editor, 'unorderedList', style)}
                  />
                </CustomizeTextEditorWrapper>
              )}
              <TextEditorWrapUL>
                <Editable
                  renderElement={renderElement}
                  renderLeaf={renderLeaf}
                  readOnly={editTextButton ? false : true}
                />
              </TextEditorWrapUL>
            </TextEditorWrap>
          </Slate>
          {BackgroundFill && (
            <ColorPickerTextEditor
              onclose={HandleChangeBGTextColor}
              editor={editor}
              format={'bgColor'}
              ref={bgcolorPickerRef}
              selection={selection}
            />
          )}
          {colorFill && (
            <ColorPickerTextEditor
              editor={editor}
              format={'color'}
              ref={colorPickerRef}
              onclose={HandleChangeTextColor}
              selection={selection}
            />
          )}
        </ParentTextEditorWraper>

      </SlateContainer>
    </>
  );
};

export default TextEditor;