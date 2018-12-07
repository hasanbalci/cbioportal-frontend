import * as React from 'react';
import {observer} from "mobx-react";
import styles from "./styles.module.scss";
import {StudyViewPageStore} from 'pages/studyView/StudyViewPageStore';
import RightPanel from "./rightPanel/RightPanel";
import StudySummary from "./studySummary/StudySummary";
import {ServerConfigHelpers} from "../../../config/config";
import UserSelections from "../UserSelections";


export interface IStudyPageHeaderProps {
    store: StudyViewPageStore,
}

@observer
export default class StudyPageHeader extends React.Component<IStudyPageHeaderProps, {}> {
    render() {
        return (
            <div style={{display: 'flex', flexDirection:'column',margin: '5px 20px'}}>
                <div style={{display: 'flex'}}>
                <StudySummary
                    studies={this.props.store.displayedStudies.result}
                    originStudies={this.props.store.originStudies}
                    showOriginStudiesInSummaryDescription={this.props.store.showOriginStudiesInSummaryDescription}
                />
                <RightPanel
                    user={ServerConfigHelpers.getUserEmailAddress()}
                    store={this.props.store}/>
                </div>

                <UserSelections
                    filter={this.props.store.userSelections}
                    getSelectedGene={this.props.store.getKnownHugoGeneSymbolByEntrezGeneId}
                    attributesMetaSet={this.props.store.chartMetaSet}
                    updateClinicalDataEqualityFilter={this.props.store.updateClinicalDataEqualityFilters}
                    updateClinicalDataIntervalFilter={this.props.store.updateClinicalDataIntervalFiltersByValues}
                    removeGeneFilter={this.props.store.removeGeneFilter}
                    removeCNAGeneFilter={this.props.store.removeCNAGeneFilters}
                    resetMutationCountVsCNAFilter={this.props.store.resetMutationCountVsCNAFilter}
                    clearCNAGeneFilter={this.props.store.clearCNAGeneFilter}
                    clearGeneFilter={this.props.store.clearGeneFilter}
                    removeWithMutationDataFilter={this.props.store.removeWithMutationDataFilter}
                    removeWithCNADataFilter={this.props.store.removeWithCNADataFilter}
                    clearChartSampleIdentifierFilter={this.props.store.clearChartSampleIdentifierFilter}
                    clearAllFilters={this.props.store.clearAllFilters}
                />
            </div>
        )
    }
}