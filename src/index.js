import React from 'react';
import ReactDOM from 'react-dom'
import FoldList from './components/fold-list'
import { List } from 'antd';

const data = [
    {
        title: 'aaaaaaaaaaaaaaaa',
    },
    {
        title: 'bbbbbbbbbbbbbbbb',
    },
    {
        title: 'cccccccccccccccc',
    },
    {
        title: 'dddddddddddddddd',
    },
]

class App extends React.Component {

    state = {
        isFold: false
    }

    renderItem = (item) => {
        return (
            <List.Item>
                {item.title}
            </List.Item>
        )
    }

    handleFold = () => {
        this.setState({
            isFold: !this.state.isFold
        })
    }


    render() {
        return (<div>
            <FoldList
                header={<div>{'header'}</div>}
                dataSource={data}
                renderItem={this.renderItem}
            />
            <FoldList
                header={<div>{'header'}</div>}
                dataSource={data}
                renderItem={this.renderItem}
            />
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'))