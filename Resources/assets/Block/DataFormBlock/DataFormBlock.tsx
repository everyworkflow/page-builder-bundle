/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import Form from "antd/lib/form";
import Button from "antd/lib/button";
import StyleHelper from "@EveryWorkflow/PanelBundle/Helper/StyleHelper";
import DataFormBlockInterface from "@EveryWorkflow/PageBuilderBundle/Model/Block/DataFormBlockInterface";
import { FORM_TYPE_HORIZONTAL } from "@EveryWorkflow/DataFormBundle/Component/DataFormComponent/DataFormComponent";
import DataFormComponent from "@EveryWorkflow/DataFormBundle/Component/DataFormComponent";
import EditableBlockComponent from "@EveryWorkflow/PageBuilderBundle/Component/EditableBlockComponent";
import { MODE_EDIT } from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";

interface DataFormBlockProps {
    indexes?: Array<number>;
    blockData: DataFormBlockInterface;
    mode?: string;
}

const DataFormBlock = ({ indexes, blockData, mode }: DataFormBlockProps) => {
    const [form] = Form.useForm();

    const onSubmit = (data: any) => {
        console.log('DataFormBlock --> onSubmit -->', data);
    }

    const renderBlockContent = () => (
        <>
            <DataFormComponent
                form={form}
                formData={blockData.data_form}
                formType={FORM_TYPE_HORIZONTAL}
                onSubmit={onSubmit}
            />
            <Button type="primary" onClick={() => {
                form.submit();
            }}>Submit</Button>
        </>
    )

    return (
        <div style={StyleHelper.remoteStyleParse(blockData.style)}>
            {mode === MODE_EDIT ? (
                <EditableBlockComponent blockData={blockData} indexes={indexes}>
                    {renderBlockContent()}
                </EditableBlockComponent>
            ) : renderBlockContent()}
        </div>
    );
}

export default DataFormBlock;
