/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";
import BlockFormInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockFormInterface";

interface PageBuilderInterface {
    block_data: Array<BlockInterface>;
    block_form_data?: Array<BlockFormInterface>;
}

export default PageBuilderInterface;
