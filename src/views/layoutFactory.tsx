import { TabNode } from "flexlayout-react";
import { BasicBox } from '../components/BasicBox';
import { ControlColumn } from "../components/ControlColumn";
import { PoseImage } from "../components/PoseImage";

// You'll likely need multiple layoutFactories so that props can be
// tailored to the components that it returns
export const layoutFactory = (node: TabNode, imgURL?: string) => {
    const component = node.getComponent();

    switch (component) {
        case "basic-box": {
            return <BasicBox />
        }
        case "control-column": {
            return <ControlColumn />
        }
        case "pose-image": {
            return <PoseImage imgURL={imgURL ?? ""} />
        } default: {
            throw new Error("Layout Factory: No such component");
        }
    }

}