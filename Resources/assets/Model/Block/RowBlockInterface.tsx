/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";

interface RowBlockInterface extends BlockInterface {
    align?: "top" | "middle" | "bottom" | "stretch" | undefined;
    gutter?: number | Array<any> | any;
    justify?: "start" | "end" | "center" | "space-around" | "space-between" | undefined;
    wrap?: boolean;
}

export default RowBlockInterface;
