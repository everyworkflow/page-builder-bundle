<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\PageBuilderBundle;

use EveryWorkflow\PageBuilderBundle\DependencyInjection\PageBuilderExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class EveryWorkflowPageBuilderBundle extends Bundle
{
    public function getContainerExtension()
    {
        return new PageBuilderExtension();
    }
}
