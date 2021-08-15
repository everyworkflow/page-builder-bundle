/*
 * @copyright EveryWorkflow. All rights reserved.
 */


import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";
import PageBuilderStateInterface from "@EveryWorkflow/PageBuilderBundle/Model/PageBuilderStateInterface";
import {ACTION_SET_BLOCK_DATA} from "@EveryWorkflow/PageBuilderBundle/Reducer/PageBuilderReducer";

const DeleteBlockAction = (indexes: Array<number>) => {
    const deleteDataByIndexes = (data: Array<BlockInterface>, level = 0): Array<BlockInterface> => {
        if (Array.isArray(indexes) && indexes[level] !== undefined && data[indexes[level]]) {
            const currentBlock: any = data[indexes[level]];
            if (indexes.length === (level + 1)) {
                delete data[indexes[level]];
            } else if (currentBlock.hasOwnProperty('block_data')) {
                currentBlock['block_data'] = deleteDataByIndexes(currentBlock['block_data'], level + 1);
                data[indexes[level]] = currentBlock;
            }
        }
        return data;
    }

    return (state: PageBuilderStateInterface, dispatch: any) => {
        const updatedData: any = deleteDataByIndexes(state.block_data);
        dispatch({type: ACTION_SET_BLOCK_DATA, payload: updatedData});
    };
}

export default DeleteBlockAction;
