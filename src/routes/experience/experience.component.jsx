import { 
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
    return (
        <div className="experience">
          <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2012 - 2016"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                University of California, Irvine
              </h3>
              <p> Bachelor's Degree</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 - 2018"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Teacher
              </h3>
    
              <h4 className="vertical-timeline-element-subtitle">
                Taught students from K - 12th
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2022"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                California School of Podiatric Medicine
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>Medical student specializing on podiatric medicine and surgery</p>
            </VerticalTimelineElement>
    
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - present"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Financial Portfolio Management
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Directly manage stock portfolios for a small group of close clients
              </p>
            </VerticalTimelineElement>

          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2023"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Zero To Mastery Bootcamp
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>Coding Bootcamp for Javascript, ReactJS, Python</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      );
}

export default Experience;