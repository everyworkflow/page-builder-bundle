/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";

interface HeadingBlockInterface extends BlockInterface {
    heading_type: string;
    content: string;
}

export default HeadingBlockInterface;
