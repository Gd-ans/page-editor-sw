// StyledComponents.jsx
import styled from "styled-components";
import { FaCirclePlay } from "react-icons/fa6";

export const Container = styled.div`
  display:${({ item }) => item?.desktop?.display} ;
  /* display: grid; */ 
  font-family: "Nunito Sans";
  background: #FAFAFA;
  padding: 24px;
  color: #333;
  gap: 36px;
`;

export const Sidebar = styled.div`
  width: 295px;
  height: 536px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #EFF0F7;
  padding: 18px;
  box-sizing: border-box;
`;

export const SidebarTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #1B202A;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #D9D9D9;
`;

export const SidebarItem = styled.div`
  cursor: pointer;
  color: #565656;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  margin-bottom: 8px;
`;

export const MainContent = styled.div``;

export const ContentWrap = styled.div`
  max-height: 610px;
  overflow-y: auto;
`;

export const Title = styled.h1`
  margin-top: 0;
  color: #1B202A;
  font-family: "Nunito Sans";
  font-size: 38px;
  font-weight: 800;
  line-height: 46.2px;
  margin-bottom: 16px;
`;

export const VideoContainer = styled.div`
  width: 405.76px;
  height: 303px;
  aspect-ratio: 405.76 / 303.0;
  border-radius: 10px;
  margin: 16px 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const VideoIcon = styled(FaCirclePlay)`
  font-size: 72px;
  color: white;
  border-radius: 50%;
  padding: 10px;
  transition: transform 0.3s ease;

  ${VideoContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const StepTitle = styled.p`
  margin-bottom: 4px;
  color: #1B202A;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-weight: 600;
  line-height: 28.5px;
`;

export const StepDescription = styled.p`
  color: #787486;
  font-family: "Nunito Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 28.5px;
  margin: 4px 0 0 0;
`;

export const BulletList = styled.ul`
  margin: 6px 0 0 18px;
  font-size: 14px;
  padding: 0;

  li {
    
  }
`;



export const BulletItem = styled.li`
  color: #787486;
  font-family: "Nunito Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 28.5px;
`;
export const HelpBox = styled.div`
  padding: 20px 32px;
  border-radius: 8px;
  background: rgba(116, 126, 209, 0.08);
`;

export const HelpBoxTitle = styled.p`
  color: #000;
  font-family: "Nunito Sans";
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px 0;
`;

export const HelpBoxText = styled.p`
  color: #000;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 20px 0;
`;

export const EmailRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #333;

  .envolev-icon {
    font-size: 20px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    fill: #747ED1;
  }
`;

export const EmailText = styled.span`
  margin-left: 8px;
  color: #646464;
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
`;
export const EmailIcon = styled.div` 
`;
