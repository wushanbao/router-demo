import  React,{Component} from 'react'
import  {Link} from 'react-router'
export  default  class  repo extends Component{
  state ={
    repos: [{
      username:'facebook',
      repoName:'yarn'
    },
      { username:'gecko',
        repoName:'firefox' },

      { username:'webkit',
           repoName:'Chrome'                    },

      {  repoName:'trident' ,
       username:'ie'}

    ]

  }

  render(){
    return(
      <div>
        <h3>ropo 的组件</h3>
        <ul>
          {
            this.state.repos.map((repo,index)=>{
              return( <li  key={index}>
                <Link to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</Link>
              </li>  )

          })}
        </ul>
        {this.props.children}
      </div>

    )

  }


}