import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography, Tag } from "antd";


const { Title, Text } = Typography;
export const ToDoShow: React.FC = () => {

    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;


    return (
        <Show isLoading = {isLoading}>
            <Title level={5}>Title</Title>
            <Text>
                <Tag>{record?.title}</Tag>
            </Text>

            <Title level={5}>Description</Title>
            <Text>
                <Tag>{record?.description}</Tag>
            </Text>

            <Title level={5}>Status</Title>
            <Text>
                <Tag>{record?.status}</Tag>
            </Text>
            

        </Show>
    );
}