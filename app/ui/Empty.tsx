import React from 'react'
import { Button, Empty, Typography } from 'antd'

const App: React.FC = () => (
    <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 60 }}
        description={
            <Typography.Text>
                Customize <a href="#API">Description</a>
            </Typography.Text>
        }
    >
        <Button type="primary">Создать сейчас</Button>
    </Empty>
)

export default App
