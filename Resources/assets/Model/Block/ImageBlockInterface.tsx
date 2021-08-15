/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import BlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/BlockInterface";
import SelectedMediaItemInterface from "@EveryWorkflow/MediaManagerBundle/Model/SelectedMediaItemInterface";

interface ImageBlockInterface extends BlockInterface {
    alt?: string;
    fallback?: string;
    height?: number | string;
    width?: number | string;
    preview?: boolean;
    image?: SelectedMediaItemInterface,
}

export default ImageBlockInterface;
