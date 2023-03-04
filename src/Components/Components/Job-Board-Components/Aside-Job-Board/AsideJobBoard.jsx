import React from "react";

import AsideTop from "../../Custom-Components/Aside/Aside top/AsideTop";
import AsideBottom from "../../Custom-Components/Aside/Aside bottom/AsideBottom";
import "./asidejobboard.css";
const AsideJobBoard = ({ classname, btnid, asidetext, formsec, downloadh }) => {
  return (
    <aside className="jb-aside">
      <AsideTop
        classname={classname}
        btnid={btnid}
        asidetext={asidetext}
        formsec={formsec}
        downloadh={downloadh}
      />
      <AsideBottom />
    </aside>
  );
};

export default AsideJobBoard;
