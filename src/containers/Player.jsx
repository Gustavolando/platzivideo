import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import { Redirect } from 'react-router'
import '../styles/components/player.scss'

const Player = props => {
  const { id } = props.match.params
  const hasPlaying = Object.keys(props.playing).length > 0

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);
  
  return hasPlaying ? (
    <div className="Player">
      <video controls={true} autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    setTimeout(<Redirect to="/404/" />, 1000)
  )
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)