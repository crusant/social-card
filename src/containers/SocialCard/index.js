import React, { Component } from 'react'
import './index.css'
import data from '../../data.json'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Profile from '../../components/Header/Profile'
import Timestamp from '../../components/Header/Timestamp'
import Content from '../../components/Content'
import Text from '../../components/Content/Text'
import Footer from '../../components/Footer'
import Reply from '../../components/Footer/Reply'
import Share from '../../components/Footer/Share'
import Favorite from '../../components/Footer/Favorite'
import Media from '../../components/Media'

class SocialCard extends Component {

  state = {
    isFavorite: false
  }

  handleReply = () => {
    alert('reply')
  }

  handleShare = () => {
    alert('share')
  }

  handleFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  render () {
    const { profile, timestamp, content } = data.socialCard

    return (
      <div className="SocialCard">
        <Container>
          <Header>
            <Profile {...profile} />
            <Timestamp date={timestamp} />
          </Header>
          <Content>
            <Text text={content.text} />
            <Media {...content.media} />
          </Content>
          <Footer>
            <Reply handleReply={this.handleReply} />
            <Share handleShare={this.handleShare} />
            <Favorite isFavorite={this.state.isFavorite} handleFavorite={this.handleFavorite} />
          </Footer>
        </Container>
      </div>
    )
  }

}

export default SocialCard