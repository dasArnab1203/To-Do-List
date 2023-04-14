import { List, TagField, DateField, useTable, ShowButton, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import { IToDo } from "interfaces";

export const ToDoList: React.FC = () => {

    const {tableProps} = useTable<IToDo>();
    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="title" title="title" />
                <Table.Column dataIndex="description" title="description" />
                <Table.Column 
                dataIndex="status"
                title="status" 
                render={(value) => <TagField value={value} />}
                />
                <Table.Column 
                dataIndex="createdAt"
                title="createdAt" 
                render={(value) => <DateField format="LLL" value={value} />}
                />
                <Table.Column<IToDo>
                    title = "Actions"
                    dataIndex="actions"
                    render={(_test, record): React.ReactNode => {
                        return (
                            <Space>
                            <ShowButton size="small" recordItemId={record.id} hideText/>
                            <EditButton size="small" recordItemId={record.id} hideText/>
                            <DeleteButton size="small" recordItemId={record.id} hideText/>
                            </Space>
                        )
                    }}
                 />


            </Table>
        </List>
    );
}