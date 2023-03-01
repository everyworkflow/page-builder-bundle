<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\PageBuilderBundle\Factory;

use EveryWorkflow\CoreBundle\Model\DataObjectFactoryInterface;
use EveryWorkflow\PageBuilderBundle\Block\AbstractBlockInterface;
use EveryWorkflow\PageBuilderBundle\Model\PageBuilderConfigProviderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class BlockFactory implements BlockFactoryInterface
{
    public function __construct(
        protected DataObjectFactoryInterface $dataObjectFactory,
        protected PageBuilderConfigProviderInterface $pageBuilderConfigProvider,
        protected ContainerInterface $container
    ) {
    }

    public function create(string $className, array $data): AbstractBlockInterface
    {
        $block = $this->container->get($className);
        foreach ($data as $key => $val) {
            $block->setData($key, $val);
        }
        return $block;
    }

    public function createBlockFromType(string $blockType, array $data): AbstractBlockInterface
    {
        $blocks = $this->pageBuilderConfigProvider->get('blocks');
        if (isset($blocks[$blockType])) {
            return $this->create($blocks[$blockType], $data);
        }
        return $this->createBlock($data);
    }

    public function createBlock(array $data): AbstractBlockInterface
    {
        $blocks = $this->pageBuilderConfigProvider->get('blocks');
        if (isset($data['block_type'], $blocks[$data['block_type']])) {
            return $this->create($blocks[$data['block_type']], $data);
        }

        $blockType = $this->pageBuilderConfigProvider->get('default.block');
        return $this->create($blocks[$blockType], $data);
    }
}