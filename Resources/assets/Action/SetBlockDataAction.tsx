/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";
import {ACTION_SET_BLOCK_DATA} from "@EveryWorkflow/PageBuilderBundle/Reducer/PageBuilderReducer";

const SetBlockDataAction = (blockData: Array<BlockInterface>) => {
    return (dispatch: any) => {
        dispatch({type: ACTION_SET_BLOCK_DATA, payload: blockData});
    };
}

export default SetBlockDataAction;
