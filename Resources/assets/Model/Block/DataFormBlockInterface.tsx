/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";
import DataFormInterface from "@EveryWorkflow/DataFormBundle/Model/DataFormInterface";

interface DataFormBlockInterface extends BlockInterface {
    data_form?: DataFormInterface;
}

export default DataFormBlockInterface;
