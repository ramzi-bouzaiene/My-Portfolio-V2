import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdHomeWork } from "react-icons/md";
import styles from "./Experience.module.css";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.mainContainer}>
      <h1 data-aos="slide-down">{t("experience.title")}</h1>
      <div className={styles.timeline}>
        <VerticalTimeline
          lineColor="#fff"
          className={styles.timeline}
          layout="1-column-left"
        >
          <VerticalTimelineElement
            position="right"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3d3e42", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3d3e42" }}
            date="Sep 2023 - Present"
            dateClassName={styles.dateStyle}
            iconStyle={{ background: "#f0bf6c", color: "#fff" }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.backendEngineer")}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#ffc86b" }}
            >
              Proxym Group
            </h4>
            <ul style={{ fontSize: "17px" }}>
              <li>{t("experience.backendEngineerTasks.1")}</li>
              <li>{t("experience.backendEngineerTasks.2")}</li>
              <li>{t("experience.backendEngineerTasks.3")}</li>
              <li>{t("experience.backendEngineerTasks.4")}</li>
              <li>{t("experience.backendEngineerTasks.5")}</li>
              <li>{t("experience.backendEngineerTasks.6")}</li>
              <li>{t("experience.backendEngineerTasks.7")}</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            position="right"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3d3e42", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3d3e42" }}
            date="Jan 2023 - Aug 2023"
            dateClassName={styles.dateStyle}
            iconStyle={{ background: "#f0bf6c", color: "#fff" }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.frontendDeveloper")}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#ffc86b" }}
            >
              Sastec TN
            </h4>
            <ul style={{ fontSize: "17px" }}>
              <li>{t("experience.sastecTasks.1")}</li>
              <li>{t("experience.sastecTasks.2")}</li>
              <li>{t("experience.sastecTasks.3")}</li>
              <li>{t("experience.sastecTasks.4")}</li>
              <li>{t("experience.sastecTasks.5")}</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            position="right"
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3d3e42", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3d3e42" }}
            date="Jul 2022 - Dec 2022"
            dateClassName={styles.dateStyle}
            iconStyle={{ background: "#f0bf6c", color: "#fff" }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title">
              {t("experience.frontendDeveloper")}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "#ffc86b" }}
            >
              Siyou Technology
            </h4>
            <ul style={{ fontSize: "17px" }}>
              <li>{t("experience.siyouTasks.1")}</li>
              <li>{t("experience.siyouTasks.2")}</li>
              <li>{t("experience.siyouTasks.3")}</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};
