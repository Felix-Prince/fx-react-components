import { List, Row, Col, Icon } from 'antd'
import React from 'react';

const FoldList = (props) => {
    const { dataSource, renderItem, header, itemLayout } = props

    const renderHeader = () => {
        return (
            <div>
                <Row type='flex' justify='space-between'>
                    <Col>{header}</Col>
                    <Col><Icon type='up' /></Col>
                </Row>
            </div>
        )
    }

    return (
        <List
            header={renderHeader()}
            itemLayout={itemLayout}
            dataSource={dataSource}
            renderItem={(item) => renderItem(item)}
        />
    )
}
export default FoldList