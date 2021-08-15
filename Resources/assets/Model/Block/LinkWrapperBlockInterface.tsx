/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";

interface LinkWrapperBlockInterface extends BlockInterface {
    link_path?: string;
    link_target?: string;
}

export default LinkWrapperBlockInterface;
