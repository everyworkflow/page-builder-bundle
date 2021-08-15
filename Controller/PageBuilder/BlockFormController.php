<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\PageBuilderBundle\Controller\PageBuilder;

use EveryWorkflow\PageBuilderBundle\Factory\BlockFormFactoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class BlockFormController extends AbstractController
{
    protected BlockFormFactoryInterface $blockFormFactory;

    public function __construct(BlockFormFactoryInterface $blockFormFactory)
    {
        $this->blockFormFactory = $blockFormFactory;
    }

    /**
     * @Route(
     *     path="api/page-builder/block-form/{blockType}",
     *     name="api.page_builder.block_form.block_type",
     *     methods="GET"
     * )
     */
    public function __invoke($blockType): JsonResponse
    {
        $form = $this->blockFormFactory->createFormForBlockType($blockType);
        $data = [
            'title' => str_replace('_', ' ', ucfirst($blockType)),
            'block_type' => $blockType,
            'data_form' => $form->toArray(),
        ];
        return (new JsonResponse())->setData($data);
    }
}
