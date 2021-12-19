import React from "react";
import "./widget-container.styles.scss";
import BarChart from "../widgets/barchart/barchart.component";
import Doughnut from "../widgets/doughnut/doughnut.component";
import SimpleDelta from "../widgets/simpledelta/simple-delta.component";
import {WidgetType} from "../../common/type.def";
import {Widget} from "../widgets/widgets";
import {Box} from "@mui/material";

const WidgetContainer: React.FC<WidgetContainerProps> = (props) => {
    const {type} = props;
    return <div className="widget-container" style={{height: "100%"}}>
        <div style={{width: '100%', height: '150px', backgroundColor: 'blue'}}></div>
        <Widget widgetType={type}/>
    </div>;
}

type WidgetContainerProps = {
    type: WidgetType
}

export default WidgetContainer;