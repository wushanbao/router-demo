import  React,{Component} from 'react'
export default  class  Repos extends Component{
  render(){
    const {name,repo}= this.props.params
    return(
      <div>用户名：{name},仓库名：{repo}</div>
    )

  }


}