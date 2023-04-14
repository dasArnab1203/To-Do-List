import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { IToDo } from "interfaces";

export const ToDoCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IToDo>();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                label = "Title"
                name="title"
                rules={[
                    {
                        required: true,
                    }
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label = "Description"
                name="description"
                rules={[
                    {
                        required: true,
                    }
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label = "Status"
                name="status"
                rules={[
                    {
                        required: true,
                    }
                ]}
                >
                
                <Select
                options={[
                    {
                        label: "Open",
                        value: "open",
                    },
                    {
                        label: "Working",
                        value: "working",
                    },
                    {
                        label: "Done",
                        value: "done",
                    },
                    {
                        label: "Overdue",
                        value: "overdue",
                    },
                ]}
                  />  
                </Form.Item>
            </Form>
        </Create>
    );
}