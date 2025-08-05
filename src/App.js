import logo from './logo.svg';
import './App.css';
import A2ZGuide from './Component/GetHelp/GetHelp';
import PreviewDemo from './Component/Preview/PreviewDemo';
import dynamicData from './dynamicFile/A2ZGuide.json'
import "./Assets/styles/_base.scss"
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('builder'); // 'builder' or 'preview'

  return (
    <div>
      {/* Mode Toggle */}
      <div style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        zIndex: 1000,
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => setMode('builder')}
          style={{
            padding: '8px 16px',
            background: mode === 'builder' ? '#646fc8' : '#f0f0f0',
            color: mode === 'builder' ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600'
          }}
        >
          Builder
        </button>
        <button 
          onClick={() => setMode('preview')}
          style={{
            padding: '8px 16px',
            background: mode === 'preview' ? '#646fc8' : '#f0f0f0',
            color: mode === 'preview' ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600'
          }}
        >
          Preview
        </button>
      </div>

      {mode === 'builder' ? (
        <A2ZGuide data={dynamicData} />
      ) : (
        <PreviewDemo />
      )}
    </div>
  );
}

export default App;
