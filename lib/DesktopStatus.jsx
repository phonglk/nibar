import styles from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
  // display: "grid",
  // gridAutoFlow: "column",
  // gridGap: "8px"
};

const desktopStyle = {
  width: "auto",
  background: '#1c1c1c',
  height: '20px',
  padding: '0 5px',
  lineHeight: '15px'
};

const selectedDesktopStyle = {
  ...desktopStyle,
  background: '#1d3557',
  color: 'rgba(255,255,255, 0.9)'
}


const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  const spaces = output.spaces_primary.filter(({ focused }) => focused)
  if (spaces.length === 0) return null;
  const space = spaces[0]
  const windows = space.windows.map(id => output.windows.filter(w => w.id === id)[0])
  const windowsNum = windows.length
  const isFS = windows.filter(window => window['zoom-fullscreen']).length > 0

  return (
    <div style={containerStyle}>
      &nbsp;
      <span style={{ color: isFS ? 'white' : '#5c5c5c' }}>FS</span>
      &nbsp;
      <i className="fa fa-window-restore" /> {windowsNum}
    </div>
  );
};

export default render;
