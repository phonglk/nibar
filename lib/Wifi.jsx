const render = ({ output }) => {
  if (typeof output === "undefined") return null;
  const status = output.status;
  const ssid = output.ssid;
  if (status === "inactive") return <div>No wifi</div>;
  return <div><i className='fa fa-wifi'></i> {output.ssid}</div>;
};

export default render;
