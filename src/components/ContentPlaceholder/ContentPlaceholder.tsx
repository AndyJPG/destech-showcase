import './contentPlaceholder.scss';
import * as React from 'react';

type Props = {

};

function ContentPlaceholder(props: Props) {
  return (
      <div className="timeline-wrapper">
          <div className="timeline-item">
              <div className="animated-background">
                  <div className="background-maker">
                      <div className="content-top" />
                      <div className="content-separator" />
                      <div className="content-mid" />
                      <div className="content-separator" />
                      <div className="content-bottom" />
                      <div className="content-separator" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ContentPlaceholder;