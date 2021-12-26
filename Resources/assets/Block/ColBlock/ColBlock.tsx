/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import Col from "antd/lib/col";
import StyleHelper from "@EveryWorkflow/PanelBundle/Helper/StyleHelper";
import RenderBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/RenderBlockComponent";
import ColBlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/Block/ColBlockInterface";
import AddBlockInPageComponent from "@EveryWorkflow/PageBuilderBundle/Component/AddBlockInPageComponent";
import EditableBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/EditableBlockComponent";
import { MODE_EDIT } from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";
import DropBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/DropBlockComponent";

interface ColBlockProps {
    indexes?: Array<number>;
    blockData: ColBlockInterface;
    mode?: string;
}

const ColBlock = ({ indexes, blockData, mode }: ColBlockProps) => {
    const renderBlockContent = () => (
        <>
            {blockData.block_data?.map((block, index) => (
                <React.Fragment key={index}>
                    {mode === MODE_EDIT && (
                        <DropBlockComponent indexes={[...indexes ?? [], ...[index]]} />
                    )}
                    <RenderBlockComponent indexes={[...indexes ?? [], ...[index]]} blockData={block} mode={mode} />
                </React.Fragment>
            ))}
        </>
    )

    return (
        <Col
            className={blockData.class_name}
            style={StyleHelper.remoteStyleParse(blockData.style)}
            flex={blockData.flex ?? '1'}
            span={blockData.span}
            offset={blockData.offset}
            order={blockData.order}
            pull={blockData.pull}
            push={blockData.push}>
            {mode === MODE_EDIT ? (
                <EditableBlockComponent blockData={blockData} indexes={indexes}>
                    <AddBlockInPageComponent blockData={blockData} indexes={indexes}>
                        {renderBlockContent()}
                    </AddBlockInPageComponent>
                </EditableBlockComponent>
            ) : renderBlockContent()}
        </Col>
    );
}

export default ColBlock;
