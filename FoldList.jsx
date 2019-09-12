const { List, Avatar } = antd;

const data = [
  {
    id: 1,
    data: [
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
  },
  {
    id: 2,
    data: [
      {
        title: 'eeeeeeeeeeeeeeeeeeeee',
      },
      {
        title: 'fffffffffffffffffff',
      },
      {
        title: 'gggggggggggggggggg',
      },
      {
        title: 'hhhhhhhhhhhhhhhhhhhh',
      },
    ]
  },
]



class FoldList extends React.Component {
  state = {
    curList: []
  }

  onFold = (id) => {
    let arr = this.state.curList
    if (arr.indexOf(id) != -1) {
      arr = arr.filter(item => item != id)
    } else {
      arr.push(id)
    }
    this.setState({
      curList: arr
    })
  }
  render() {
    const { curList } = this.state
    const { dataSource } = this.props
    return (
      <div>
        {
          dataSource.map(item => (
            <List
              key={item.id}
              header={<div onClick={() => this.onFold(item.id)}>Header</div>}
              itemLayout="horizontal"
              dataSource={item.data}
              fold={curList.indexOf(item.id) != -1}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          ))
        }

      </div>

    )
  }
}

ReactDOM.render(
  <FoldList dataSource={data} />,
  mountNode,
);