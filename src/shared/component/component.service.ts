import {IAreaParentsCode} from "./component.interface";

export const toInitAreaCodes = (payload: IAreaParentsCode) => {
    const copyObject = JSON.parse(JSON.stringify(payload));
    copyObject.active = false;
    return copyObject;
}
