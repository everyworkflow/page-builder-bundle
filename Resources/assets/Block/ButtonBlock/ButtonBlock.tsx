/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import StyleHelper from "@EveryWorkflow/PanelBundle/Helper/StyleHelper";
import ButtonBlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/Block/ButtonBlockInterface";
import EditableBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/EditableBlockComponent";
import { MODE_EDIT } from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";
import Button from "antd/lib/button";

interface ButtonBlockProps {
    indexes?: Array<number>;
    blockData: ButtonBlockInterface;
    mode?: string;
}

const ButtonBlock = ({ indexes, blockData, mode }: ButtonBlockProps) => {
    const renderBlockContent = () => (
        <Button
            className={blockData.class_name}
            type={blockData.button_type}
            size={blockData.button_size}
            block={blockData.button_block}
            danger={blockData.button_danger}
            shape={blockData.button_shape}
            style={StyleHelper.remoteStyleParse(blockData.style)}>
            {blockData.button_path ? (
                <NavLink to={blockData.button_path} target={blockData.button_target}>{blockData.button_label}</NavLink>
            ) : blockData.button_label}
        </Button>
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

export default ButtonBlock;
