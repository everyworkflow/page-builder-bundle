/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import {lazy} from "react";
import AbstractBlock from "@EveryWorkflow/PageBuilderBundle/Block/AbstractBlock";
import ContainerBlock from "@EveryWorkflow/PageBuilderBundle/Block/ContainerBlock";
import RowBlock from "@EveryWorkflow/PageBuilderBundle/Block/RowBlock";
import ColBlock from "@EveryWorkflow/PageBuilderBundle/Block/ColBlock";
import HeadingBlock from "@EveryWorkflow/PageBuilderBundle/Block/HeadingBlock";
import ParagraphBlock from "@EveryWorkflow/PageBuilderBundle/Block/ParagraphBlock";
import ButtonBlock from "@EveryWorkflow/PageBuilderBundle/Block/ButtonBlock";
import LinkWrapperBlock from "@EveryWorkflow/PageBuilderBundle/Block/LinkWrapperBlock";
import MarkdownBlock from "@EveryWorkflow/PageBuilderBundle/Block/MarkdownBlock";
import ImageBlock from "@EveryWorkflow/PageBuilderBundle/Block/ImageBlock";
const DataFormBlock = lazy(() => import("@EveryWorkflow/PageBuilderBundle/Block/DataFormBlock"));

export const PageBlockMaps: any = {
    abstract_block: AbstractBlock,
    container_block: ContainerBlock,
    row_block: RowBlock,
    col_block: ColBlock,
    heading_block: HeadingBlock,
    paragraph_block: ParagraphBlock,
    button_block: ButtonBlock,
    link_wrapper_block: LinkWrapperBlock,
    markdown_block: MarkdownBlock,
    image_block: ImageBlock,
    data_form_block: DataFormBlock,
};
