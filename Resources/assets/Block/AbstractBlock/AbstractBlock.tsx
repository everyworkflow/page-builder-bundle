/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import RenderBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/RenderBlockComponent";
import ColBlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/Block/ColBlockInterface";
import AddBlockInPageComponent from "@EveryWorkflow/PageBuilderBundle/Component/AddBlockInPageComponent";
import EditableBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/EditableBlockComponent";
import {MODE_EDIT} from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";
import DropBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/DropBlockComponent";

interface AbstractBlockProps {
    indexes?: Array<number>;
    blockData: ColBlockInterface;
    mode?: string;
}

const AbstractBlock = ({indexes, blockData, mode}: AbstractBlockProps) => {
    const renderBlockContent = () => (
        <>
            {blockData.block_data?.map((block, index) => (
                <React.Fragment key={index}>
                    {mode === MODE_EDIT && (
                        <DropBlockComponent indexes={[...indexes ?? [], index]}/>
                    )}
                    <RenderBlockComponent indexes={[...indexes ?? [], index]} blockData={block} mode={mode}/>
                </React.Fragment>
            ))}
        </>
    )

    return (
        <>
            {mode === MODE_EDIT ? (
                <EditableBlockComponent blockData={blockData} indexes={indexes}>
                    <AddBlockInPageComponent blockData={blockData} indexes={indexes}>
                        {renderBlockContent()}
                    </AddBlockInPageComponent>
                </EditableBlockComponent>
            ) : renderBlockContent()}
        </>
    );
}

export default AbstractBlock;
