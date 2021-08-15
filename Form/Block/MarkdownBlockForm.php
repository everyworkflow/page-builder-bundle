<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\PageBuilderBundle\Form\Block;

use EveryWorkflow\CoreBundle\Model\DataObjectInterface;
use EveryWorkflow\DataFormBundle\Factory\FieldOptionFactoryInterface;
use EveryWorkflow\DataFormBundle\Factory\FormFieldFactoryInterface;

class MarkdownBlockForm extends AbstractBlockForm implements MarkdownBlockFormInterface
{
    public function __construct(
        DataObjectInterface $dataObject,
        FormFieldFactoryInterface $formFieldFactory,
        FieldOptionFactoryInterface $fieldOptionFactory
    ) {
        parent::__construct($dataObject, $formFieldFactory, $fieldOptionFactory);
        $this->dataObject->setData(self::KEY_PANEL_SIZE, self::PANEL_SIZE_HALF);
    }

    public function getFields(): array
    {
        $fields = [
            $this->formFieldFactory->createField([
                'label' => 'Content',
                'name' => 'content',
                'field_type' => 'markdown_field',
            ]),
        ];

        return array_merge($fields, parent::getFields());
    }
}
