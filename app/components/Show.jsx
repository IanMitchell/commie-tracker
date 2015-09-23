import React from "react";
import moment from "moment";

if (process.env.BROWSER) {
  require("./../assets/stylesheets/show.scss");
}

export default class Show extends React.Component {
  getStepLabel(bool) {
    if (bool) {
      return 'show-step-finished hint--success hint--top';
    }
    else {
      return 'show-step-pending hint--error hint--top';
    }
  }

  getEpisodeText() {
    if (this.props.show.status === 'airing') {
      return `${this.props.show.episodes.current} / ${this.props.show.episodes.total}`;
    }
    else {
      return this.props.show.episodes.current;
    }
  }

  getAirDate() {
    let str = moment(new Date(this.props.show.airtime.$date)).fromNow();

    if (str.includes('ago')) {
      return <span className="show-airing show-old">Airing: { str }</span>
    }
    else {
      return <span className="show-airing">Airing: { str }</span>
    }
  }

  render() {
    return (
      <div className="show">
        <div className="show-info">
          <h3>{ this.props.show.titles.english }</h3>
          <div className="show-meta">
            <span className="show-download">
              <a href={ this.props.show.link } target="blank">Download</a>
            </span>
            <span className="separator">&bull;</span>
            <span className="show-episode">Episode: { this.getEpisodeText() }</span>
            <span className="separator">&bull;</span>
            { this.getAirDate() }
          </div>
        </div>
        <div className="show-staff">
          <div className={ this.getStepLabel(this.props.show.progress.translated) }>
            <span className="show-staff-position">Translator:</span>
            <span className="show-staff-member">{ this.props.show.staff.translator.name }</span>
          </div>
          <div className={ this.getStepLabel(this.props.show.progress.typset) }>
            <span className="show-staff-position">Typesetter:</span>
            <span className="show-staff-member">{ this.props.show.staff.typesetter.name }</span>
          </div>
          <div className={ this.getStepLabel(this.props.show.progress.edited) }>
            <span className="show-staff-position">Editor:</span>
            <span className="show-staff-member">{ this.props.show.staff.editor.name }</span>
          </div>
          <div className={ this.getStepLabel(this.props.show.progress.timed) }>
            <span className="show-staff-position">Timer:</span>
            <span className="show-staff-member">{ this.props.show.staff.timer.name }</span>
          </div>
          <div className={ this.getStepLabel(this.props.show.progress.encoded) }>
            <span className="show-staff-position">Channel:</span>
            <span className="show-staff-member">{ this.props.show.channel }</span>
          </div>
        </div>
      </div>
    );
  }
}
