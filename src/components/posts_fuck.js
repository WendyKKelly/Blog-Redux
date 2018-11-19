import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fuckPosts } from '../actions';



class PostsFuck extends Component {
  componentDidMount() {
    this.props.fuckPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div>
        <h3 key={post.subtitle}>{post.message}</h3>

        <h6 key={post.subtitle}>{post.subtitle}</h6>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.posts);
      return (
        <div>
        {this.renderPosts()}
        </div>
      );
  };
}

function mapStateToProps(state) {
  return { posts: state.posts };


}

export default connect(mapStateToProps, { fuckPosts })(PostsFuck);
