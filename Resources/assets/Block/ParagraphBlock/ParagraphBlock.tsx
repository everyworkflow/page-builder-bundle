/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import Typography from "antd/lib/typography";
import StyleHelper from "@EveryWorkflow/CoreBundle/Helper/StyleHelper";
import ParagraphBlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/Block/ParagraphBlockInterface";
import EditableBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/EditableBlockComponent";
import {MODE_EDIT} from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";

interface ParagraphBlockProps {
    indexes?: Array<number>;
    blockData: ParagraphBlockInterface;
    mode?: string;
}

const ParagraphBlock = ({indexes, blockData, mode}: ParagraphBlockProps) => {
    const renderBlockContent = () => (
        <Typography.Paragraph style={StyleHelper.remoteStyleParse(blockData.style)}>
            {blockData.content}
        </Typography.Paragraph>
    )

    return (
        <>
            {mode === MODE_EDIT ? (
                <EditableBlockComponent blockData={blockData} indexes={indexes}>
                    {renderBlockContent()}
                </EditableBlockComponent>
            ) : renderBlockContent()}
        </>
    );
}

export default ParagraphBlock;
