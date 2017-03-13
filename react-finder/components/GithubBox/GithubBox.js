import React, {Component} from 'react';
import { Link } from 'react-router';
// 引入 material-ui 的卡片式元件
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// 引入 material-ui 的 RaisedButton
import RaisedButton from 'material-ui/RaisedButton';
// 引入 ActionHome icon
import ActionHome from 'material-ui/svg-icons/action/home'

export default class GithubBox extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
    <Card>
      <CardHeader
        title={this.props.data.name}
        subtitle={this.props.userId}
        avatar={this.props.data.avatar_url}
      />
      <CardText>
        Followers : {this.props.data.followers}
      </CardText>      
      <CardText>
        Following : {this.props.data.following}
      </CardText>
      <CardActions>
        <Link to="/">
          <RaisedButton 
            label="Back" 
            icon={<ActionHome />}
            secondary={true} 
          />
        </Link>
      </CardActions>
    </Card> 
  </div>
    )
  }
}