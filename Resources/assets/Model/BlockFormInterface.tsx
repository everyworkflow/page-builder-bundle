/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import DataFormInterface from "@EveryWorkflow/DataFormBundle/Model/DataFormInterface";

interface PanelDataFormInterface extends DataFormInterface {
    panel_size?: string;
}

interface BlockFormInterface {
    title?: string;
    panel_size?: string;
    block_type: string;
    data_form?: PanelDataFormInterface;
}

export default BlockFormInterface;
