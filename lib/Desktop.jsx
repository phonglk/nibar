import styles from "./styles.jsx";
import {run} from "uebersicht";

const PATH="PATH=PATH:/usr/local/bin/"
const yabai = message => run(`${PATH} yabai -m ${message}`)

const containerStyle = {
  display: "grid",
  gridAutoFlow: "column",
  // gridGap: "8px"
};

const desktopStyle = {
  width: "auto",
  background: '#1c1c1c',
  height: '20px',
  padding: '0 5px',
  lineHeight: '15px',
  cursor: 'pointer'
};

const selectedDesktopStyle = {
  ...desktopStyle,
  background: '#1d3557',
  color: 'rgba(255,255,255, 0.9)'
}


const renderSpace = ({index, focused, visible, windows, label}) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (focused == 1) {
    contentStyle.color = styles.colors.fg;
    contentStyle.fontWeight = "700";
  } else if (visible == 1) {
    contentStyle.color = styles.colors.fg;
  }
  const labelVis = label
    ? <div>{label}<sup>{index}</sup></div>
    : <div style={{ lineHeight: '23px' }}>🖥️ {index}</div>

    const onClick = async () => {
      const focusConfig = (await yabai(`config mouse_follows_focus`)).toString().trim()
      // if (focusConfig == 'on') {
      //   await yabai(`config mouse_follows_focus off`)
      //   await yabai('config mouse_follows_focus')
      // }
      await yabai(`space --focus ${index}`)
      // if (focusConfig==='on') {
      //   await yabai(`config mouse_follows_focus on`)
      // }
    }

  return (
    <div style={focused ? selectedDesktopStyle : contentStyle} onClick={onClick} key={index}>
      {labelVis}
    </div>
  );
};

const render = ({ output }) => {
  if (typeof output === "undefined") return null;

  const spaces = [];

  output.forEach(function(space) {
    spaces.push(renderSpace(space));
  });

  return (
    <div style={containerStyle}>
      {spaces}
    </div>
  );
};

export default render;
