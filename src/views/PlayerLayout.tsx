import { Model, IJsonModel, Layout, TabNode } from 'flexlayout-react';
import "./PlayerLayout.css";
import { BasicBox } from '../components/BasicBox';

const json: IJsonModel = {
    global: {
        tabEnableFloat: true,
        tabSetMinWidth: 100,
        tabSetMinHeight: 100,
        borderMinSize: 100,
    },
    borders: [
        {
            type: "border",
            className: "layout-border",
            barSize: 15,
            location: "bottom",
            children: []
        },
        {
            type: "border",
            className: "layout-border",
            barSize: 10,
            location: "left",
            children: []
        },
        {
            type: "border",
            className: "layout-border",
            barSize: 10,
            location: "right",
            children: []
        },
    ],
    layout: {
        type: "row",
        weight: 100,
        height: 100,

        children: [
            {
                type: "tabset",
                weight: 50,
                enableClose: true,
                children: [
                    {
                        type: "tab",
                        name: "One",
                        component: "basic-box",
                        enableClose: true,
                        borderWidth: 5,
                    }
                ]
            },
            {
                type: "tabset",
                weight: 50,
                children: [
                    {
                        type: "tab",
                        name: "Two",
                        component: "basic-box",
                    }
                ]
            }
        ]
    }
};

const model = Model.fromJson(json);

function PlayerLayout() {
    const factory = (node: TabNode) => {
        const component = node.getComponent();
        if (component === "basic-box") {
            return <BasicBox></BasicBox>;
        }
    }

    return (
        <Layout model={model} factory={factory} />
    );
}

export default PlayerLayout;