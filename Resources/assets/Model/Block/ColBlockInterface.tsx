/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";

interface ColBlockInterface extends BlockInterface {
    flex?: string | number;
    span?: number;
    offset?: number;
    order?: number;
    pull?: number;
    push?: number;
}

export default ColBlockInterface;
