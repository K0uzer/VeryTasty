import React from 'react'
import { Alert, Flex, Spin } from 'antd'

const loader = () => {
    return (
        <Flex align="center" gap="middle">
            <Spin tip="Loading...">
                <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                />
            </Spin>
        </Flex>
    )
}

export default loader
