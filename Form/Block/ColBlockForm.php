<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\PageBuilderBundle\Form\Block;

class ColBlockForm extends AbstractBlockForm implements ColBlockFormInterface
{
    public function getFields(): array
    {
        $fields = [
            $this->formFieldFactory->createField([
                'label' => 'Flex',
                'name' => 'flex',
                'field_type' => 'text_field',
                'value' => '1',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Span',
                'name' => 'span',
                'field_type' => 'text_field',
                'input_type' => 'number',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Offset',
                'name' => 'offset',
                'field_type' => 'text_field',
                'input_type' => 'number',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Order',
                'name' => 'order',
                'field_type' => 'text_field',
                'input_type' => 'number',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Pull',
                'name' => 'pull',
                'field_type' => 'text_field',
                'input_type' => 'number',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Push',
                'name' => 'push',
                'field_type' => 'text_field',
                'input_type' => 'number',
            ]),
        ];

        return array_merge($fields, parent::getFields());
    }
}
