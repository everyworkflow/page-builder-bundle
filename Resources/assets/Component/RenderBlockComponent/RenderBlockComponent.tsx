/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from "react";
import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";
import {PageBlockMaps} from "@EveryWorkflow/PageBuilderBundle/Root/PageBlockMaps";

interface RenderBlockComponentProps {
    indexes?: Array<number>,
    blockData?: BlockInterface;
    mode?: string;
}

const RenderBlockComponent = ({indexes, blockData, mode}: RenderBlockComponentProps) => {
    if (blockData?.block_type && PageBlockMaps.hasOwnProperty(blockData.block_type)) {
        const DynamicBlock = PageBlockMaps[blockData.block_type];
        return <DynamicBlock indexes={indexes ?? []} blockData={blockData} mode={mode}/>;
    }

    return <p>Block with type "{blockData?.block_type}" not found!</p>;
}

export default RenderBlockComponent;
