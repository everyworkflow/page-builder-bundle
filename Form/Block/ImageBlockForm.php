<?php

/**
 * @copyright EveryWorkflow. All rights reserved.
 */

declare(strict_types=1);

namespace EveryWorkflow\PageBuilderBundle\Form\Block;

class ImageBlockForm extends AbstractBlockForm implements ImageBlockFormInterface
{
    public function getFields(): array
    {
        $fields = [
            $this->formFieldFactory->createField([
                'label' => 'Image',
                'name' => 'image',
                'field_type' => 'media_image_selector_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Preview',
                'name' => 'preview',
                'field_type' => 'switch_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Alt text',
                'name' => 'alt',
                'field_type' => 'text_field',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Height',
                'name' => 'height',
                'field_type' => 'text_field',
                'input_type' => 'number',
            ]),
            $this->formFieldFactory->createField([
                'label' => 'Width',
                'name' => 'width',
                'field_type' => 'text_field',
                'input_type' => 'number',
            ]),
        ];

        return array_merge($fields, parent::getFields());
    }
}
