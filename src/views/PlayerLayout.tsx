import { IJsonModel, Layout, Model } from 'flexlayout-react';
import { layoutFactory } from './layoutFactory';
import "./PlayerLayout.css";

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
                weight: 25,
                enableClose: true,
                children: [
                    {
                        type: "tab",
                        name: "One",
                        component: "control-column",
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
                        component: "pose-image",
                    }
                ]
            }
        ]
    }
};

const model = Model.fromJson(json);

function PlayerLayout() {

    return (
        <Layout model={model} factory={layoutFactory} />
    );
}

export default PlayerLayout;