<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\PageBuilderBundle\Controller;

use EveryWorkflow\CoreBundle\Annotation\EWFRoute;
use EveryWorkflow\PageBuilderBundle\Factory\BlockFactoryInterface;
use EveryWorkflow\PageBuilderBundle\Factory\BlockFormFactoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class PageBuilderController extends AbstractController
{
    /**
     * @EWFRoute (
     *     api_path="page-builder/page-builder",
     *     name="api_page_builder_page_builder",
     *     methods="GET"
     * )
     */
    public function __invoke(
        Request $request,
        BlockFactoryInterface $blockFactory,
        BlockFormFactoryInterface $blockFormFactory
    ): JsonResponse {
        $data = [
            'block_data' => [
                $blockFactory->createBlock([
                    'block_type' => 'container_block',
                    'style' => '{"backgroundColor": "#fff", "padding": "42px 0"}',
                ])->setBlocks([
                    $blockFactory->createBlock([
                        'block_type' => 'paragraph_block',
                        'content' => 'Hello world - 1',
                    ]),
                    $blockFactory->createBlock([
                        'block_type' => 'paragraph_block',
                        'content' => 'Hello world - 2',
                    ]),
                    $blockFactory->createBlock([
                        'block_type' => 'paragraph_block',
                        'content' => 'Hello world - 3',
                    ]),
                    $blockFactory->createBlock([
                        'block_type' => 'paragraph_block',
                        'content' => 'Hello world - 4',
                    ]),
                    $blockFactory->createBlock([
                        'block_type' => 'paragraph_block',
                        'content' => 'Hello world - 5',
                    ]),
                    $blockFactory->createBlock([
                        'block_type' => 'row_block',
                        'justify' => 'center',
                        'align' => 'middle',
                        'style' => '{"backgroundColor": "#e6f7ff", "padding": 28, "borderRadius": 8}',
                    ])->setBlocks([
                        $blockFactory->createBlock([
                            'block_type' => 'col_block',
                            'span' => 12,
                        ])->setBlocks([
                            $blockFactory->createBlock([
                                'block_type' => 'heading_block',
                                'content' => 'Data platform',
                            ]),
                            $blockFactory->createBlock([
                                'block_type' => 'markdown_block',
                                'content' => "EveryWorkflow is bundle based data platform build using symfony and reactjs for modern data flow satisfying modern system needs.\n\n- Content management system\n- Customer relationship management\n- Product information management\n- Digital asset management\n- Ecommerce system\n",
                            ]),
                        ]),
                        $blockFactory->createBlock([
                            'block_type' => 'col_block',
                            'span' => 12,
                            'style' => '{"textAlign": "center"}',
                        ])->setBlocks([
                            $blockFactory->createBlock([
                                'block_type' => 'image_block',
                                'image' => [
                                    'path_name' => '/media/page-cover/first.png',
                                    'thumbnail_path' => '/media/page-cover/_thumbnail/first.png',
                                    'title' => 'Image alt text',
                                ],
                            ]),
                            $blockFactory->createBlock([
                                'block_type' => 'paragraph_block',
                                'content' => 'One platform to build every thing',
                            ]),
                        ]),
                    ]),
                ])->toArray(),
                $blockFactory->createBlock([
                    'block_type' => 'paragraph_block',
                    'content' => 'Hello',
                ])->toArray(),
                $blockFactory->createBlock([
                    'block_type' => 'container_block',
                ])->setBlocks([
                    $blockFactory->createBlock([
                        'block_type' => 'paragraph_block',
                        'content' => 'Hello 2',
                    ]),
                    $blockFactory->createBlock([
                        'block_type' => 'row_block',
                    ])->setBlocks([
                        $blockFactory->createBlock([
                            'block_type' => 'col_block',
                            'span' => 12,
                        ])->setBlocks([
                            $blockFactory->createBlock([
                                'block_type' => 'paragraph_block',
                                'content' => 'Hello 3',
                            ]),
                            $blockFactory->createBlock([
                                'block_type' => 'paragraph_block',
                                'content' => 'Hello 4',
                            ]),
                        ]),
                        $blockFactory->createBlock([
                            'block_type' => 'col_block',
                            'span' => 12,
                        ])->setBlocks([
                            $blockFactory->createBlock([
                                'block_type' => 'heading_block',
                                'content' => 'Heading title - 1',
                            ]),
                            $blockFactory->createBlock([
                                'block_type' => 'paragraph_block',
                                'content' => 'Hello 5',
                            ]),
                            $blockFactory->createBlock([
                                'block_type' => 'paragraph_block',
                                'content' => 'Hello 6',
                            ]),
                        ]),
                    ]),
                    $blockFactory->createBlock([
                        'block_type' => 'markdown_block',
                        'content' => "# Markdown header 1\n\n## Markdown header 2\n\n### Markdown header 3",
                    ]),
                ])->toArray(),
            ],
            'block_form_data' => [],
        ];

//        $blockTypes = [
//            'container_block',
//            'row_block',
//            'col_block',
//            'paragraph_block',
//            'heading_block',
//            'markdown_block',
//        ];
//        foreach ($blockTypes as $blockType) {
//            $data['block_form_data'][] = [
//                'title' => str_replace('_', ' ', ucfirst($blockType)),
//                'block_type' => $blockType,
//                'data_form' => $blockFormFactory->createFormForBlockType($blockType)->toArray(),
//            ];
//        }

        return (new JsonResponse())->setData($data);
    }
}
