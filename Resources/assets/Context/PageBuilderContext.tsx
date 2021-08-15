/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { createContext } from 'react';
import {pageBuilderState} from "@EveryWorkflow/PageBuilderBundle/State/PageBuilderState";
import PageBuilderStateInterface from "@EveryWorkflow/PageBuilderBundle/Model/PageBuilderStateInterface";

export interface PageBuilderContextInterface {
    state: PageBuilderStateInterface;
    dispatch: any;
}

const PageBuilderContext = createContext<PageBuilderContextInterface>({
    state: pageBuilderState,
    dispatch: () => null,
});

export default PageBuilderContext;
