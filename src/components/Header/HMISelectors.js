import React from "react";

import Selector from "components/Header/Selector";
import WS from "store/websocket";
import RENDERER from "../../renderer";
import STORE from "../../store";
import {inject, observer} from "mobx-react";

function readFileArrayBuffer(file) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = (evt) => {
            resolve(evt.target.result);
        };
        reader.readAsArrayBuffer(file);
    });
}

function formatSimMapObject(simMapObject) {
    if (simMapObject === null || simMapObject === undefined) {
        return simMapObject;
    }

    if (typeof simMapObject === "string" ||
        typeof simMapObject === "number" ||
        typeof simMapObject === "boolean" ||
        typeof simMapObject === "bigint" ||
        typeof simMapObject === "symbol") {
        return simMapObject;
    }

    if (Array.isArray(simMapObject)) {
        return simMapObject.map(obj => formatSimMapObject(obj));
    }

    const res = {};
    for (const [key, value] of Object.entries(simMapObject)) {
        if (key.endsWith("List") && Array.isArray(value)) {
            const newKey = key.slice(0, -4);
            res[newKey] = formatSimMapObject(value);
            delete simMapObject[key];
        } else {
            res[key] = formatSimMapObject(value);
        }
    }
    return res;
}

function extractRandomPositionFromMap(mapData) {
    if (mapData.lane.length === 0) {
        alert("Error: map data does not have any lanes...");
        return null;
    }

    return mapData.lane[0].centralCurve.segment[0].startPosition;
}

function fixCrosswalkId(mapData) {
    console.log(mapData);
    mapData.crosswalkList.forEach((crosswalk, index) => {
        if (!crosswalk.id) {
            crosswalk.id = {id: `CW_${index}`};
        }
    });
}

async function onSimMapFileSelected(e) {
    const arrayBuffer = await readFileArrayBuffer(e.target.files[0]);
    let mapData = proto.apollo.hdmap.Map.deserializeBinary(arrayBuffer).toObject();

    fixCrosswalkId(mapData);

    mapData = formatSimMapObject(mapData);
    console.log((JSON.parse(JSON.stringify(mapData))));

    // simulate sim_world_update
    RENDERER.coordinates.setSystem("ENU");
    const {x, y, z} = extractRandomPositionFromMap(mapData);

    const message = {
        timestamp: 1639103113554,
        autoDrivingCar: {
            positionX: x,
            positionY: y
        }
    };

    RENDERER.maybeInitializeOffest(x, y, false);

    RENDERER.updateMap(mapData, true);
    STORE.setInitializationStatus(true);
    STORE.update(message, true);

    RENDERER.updateWorld(message);
}

@inject("store") @observer
export default class HMISelectors extends React.Component {

    render() {
        const {isInitialized} = this.props.store;

        if (isInitialized) {
            setTimeout(() => {
                document.getElementById("route-editing-tab").click();
            }, 1000);
        }

        return (
            <React.Fragment>
                <div style={{marginRight: "1rem"}}>Select either base_map.bin or sim_map.bin</div>
                <input type="file" onChange={onSimMapFileSelected}/>
                <button style={{margin: "0 1rem"}}
                        onClick={() => alert("Author: Tang Yun -- ntutangyun [at] gmail [dot] com. \n\nI'm currently working on safety testing of Autonomous vehicles. Collaborations are welcome :)\n\nBuilt from Apollo's Dreamview.")}>
                    Author
                </button>
            </React.Fragment>
        );
    }
}
