/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import StyleHelper from "@EveryWorkflow/CoreBundle/Helper/StyleHelper";
import ContainerBlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/Block/ContainerBlockInterface";
import RenderBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/RenderBlockComponent";
import AddBlockInPageComponent from "@EveryWorkflow/PageBuilderBundle/Component/AddBlockInPageComponent";
import EditableBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/EditableBlockComponent";
import {MODE_EDIT} from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";
import classNames from "classnames";
import DropBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/DropBlockComponent";

interface ContainerBlockProps {
    indexes?: Array<number>;
    blockData: ContainerBlockInterface;
    mode?: string;
}

const ContainerBlock = ({indexes, blockData, mode}: ContainerBlockProps) => {
    const renderBlockContent = () => (
        <div
            className={classNames(blockData.container_type === 'container-center' ? 'app-container-center' : '', blockData.class_name)}
            style={StyleHelper.remoteStyleParse(blockData.content_style)}>
            {blockData.block_data?.map((block, index) => (
                <React.Fragment key={index}>
                    {mode === MODE_EDIT && (
                        <DropBlockComponent indexes={[...indexes ?? [], ...[index]]}/>
                    )}
                    <RenderBlockComponent
                        indexes={[...indexes ?? [], ...[index]]}
                        blockData={{...block, block_type: block.block_type}}
                        mode={mode}
                    />
                </React.Fragment>
            ))}
        </div>
    )

    return (
        <div style={StyleHelper.remoteStyleParse(blockData.style)}>
            {mode === MODE_EDIT ? (
                <EditableBlockComponent blockData={blockData} indexes={indexes}>
                    <AddBlockInPageComponent blockData={blockData} indexes={indexes}>
                        {renderBlockContent()}
                    </AddBlockInPageComponent>
                </EditableBlockComponent>
            ) : renderBlockContent()}
        </div>
    );
}

export default ContainerBlock;
