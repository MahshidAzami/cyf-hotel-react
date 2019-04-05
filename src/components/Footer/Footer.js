import React from "react";
function Footer(props) {
  return (
    <ul>
      {props.details.map(data => (
        <li>{data}</li>
      ))}
    </ul>
  );
}

export default Footer;
