/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import Image from "antd/lib/image";
import StyleHelper from "@EveryWorkflow/CoreBundle/Helper/StyleHelper";
import ImageBlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/Block/ImageBlockInterface";
import EditableBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/EditableBlockComponent";
import {MODE_EDIT} from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";
import UrlHelper from '@EveryWorkflow/CoreBundle/Helper/UrlHelper';

interface ImageBlockProps {
    indexes?: Array<number>;
    blockData: ImageBlockInterface;
    mode?: string;
}

const ImageBlock = ({indexes, blockData, mode}: ImageBlockProps) => {
    const renderBlockContent = () => (
        <Image
            className={blockData.class_name}
            alt={blockData.alt ?? blockData.image?.title}
            fallback={blockData.fallback}
            height={blockData.height}
            width={blockData.width}
            src={UrlHelper.buildImgUrlFromPath(blockData.image?.path_name)}
            placeholder={blockData.image?.thumbnail_path}
            preview={blockData.preview === undefined ? false : blockData.preview}
            style={StyleHelper.remoteStyleParse(blockData.style)}
        />
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

export default ImageBlock;
