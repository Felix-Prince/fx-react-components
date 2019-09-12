import { List, Row, Col, Icon } from 'antd'
import React from 'react';

class FoldList extends React.Component {

    state = {
        isFold: false,
        iconType: 'up'
    }
    onFold = () => {
        this.setState({
            isFold: !this.state.isFold,
            iconType: !this.state.isFold ? "down" : 'up'
        })
    }

    renderHeader = () => {
        return (
            <div>
                <Row type='flex' justify='space-between'>
                    <Col>{this.props.header}</Col>
                    <Col><Icon type={this.state.iconType} onClick={this.onFold} /></Col>
                </Row>
            </div>
        )
    }
    render() {
        const { dataSource, renderItem, itemLayout } = this.props
        const { isFold } = this.state
        return (
            <List
                header={this.renderHeader()}
                itemLayout={itemLayout}
                dataSource={dataSource}
                renderItem={(item) => isFold ? <></> : renderItem(item)}
            />
        )
    }
}
export default FoldList