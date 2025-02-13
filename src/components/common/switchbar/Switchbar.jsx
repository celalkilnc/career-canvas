import React from "react";
import "./SwitchbarStyle.css";
import SwtitchButton from "./SwtitchButton";
import { useTranslation } from 'react-i18next';
import '../../../styles/switchbar.css';

function Switchbar() {
  const { t } = useTranslation();

  return (
    <nav className="switchbar">
      <ul className="switchBar">
        <SwtitchButton path="information" label={t('sections.information')} />
        <SwtitchButton path="experience" label={t('sections.experience')} />
        <SwtitchButton path="education" label={t('sections.education')} />
        <SwtitchButton path="projects" label={t('sections.projects')} />
      </ul>
    </nav>
  );
}

export default Switchbar;
