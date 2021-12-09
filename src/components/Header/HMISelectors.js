import React from "react";

import Selector from "components/Header/Selector";
import WS from "store/websocket";
import RENDERER from "../../renderer";
import STORE from "../../store";

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

export default class HMISelectors extends React.Component {
    render() {
        const {
            modes, currentMode,
            maps, currentMap,
            vehicles, currentVehicle,
        } = this.props;

        const onSimMapFileSelected = async (e) => {
            const arrayBuffer = await readFileArrayBuffer(e.target.files[0]);
            console.log(arrayBuffer);
            console.log(proto.apollo.hdmap.Map.deserializeBinary(arrayBuffer));
            const mapData = proto.apollo.hdmap.Map.deserializeBinary(arrayBuffer).toObject();
            console.log(mapData);

            RENDERER.updateMap(mapData, true);
            STORE.setInitializationStatus(true);
        };

        return (
            <React.Fragment>
                {/*<Selector*/}
                {/*    name="setup mode"*/}
                {/*    options={modes}*/}
                {/*    currentOption={currentMode}*/}
                {/*    onChange={(event) => {*/}
                {/*        WS.changeSetupMode(event.target.value);*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<Selector*/}
                {/*    name="vehicle"*/}
                {/*    options={vehicles}*/}
                {/*    currentOption={currentVehicle}*/}
                {/*    onChange={(event) => {*/}
                {/*        WS.changeVehicle(event.target.value);*/}
                {/*    }}*/}
                {/*/>*/}
                <input type="file" onChange={onSimMapFileSelected}/>
                {/*<Selector*/}
                {/*    name="map"*/}
                {/*    options={maps}*/}
                {/*    currentOption={currentMap}*/}
                {/*    onChange={(event) => {*/}
                {/*        WS.changeMap(event.target.value);*/}
                {/*    }}*/}
                {/*/>*/}
            </React.Fragment>
        );
    }
}
