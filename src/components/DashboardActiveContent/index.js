import React, { Component } from 'react';

import moment from 'moment';
import $ from 'jquery';

import MetricSelector from '../MetricSelector';
import MetricContent from '../MetricContent';

import * as MetricKeys from '../../client/metricKeys';
import metricInfo from '../../client/metricInfo';
import DataSource from '../../client/services/dataSource';

var styles = require('./styles.css');

export default class DashboardActiveContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      currentMetric: MetricKeys.LOGINS_PER_DAY,
      isPending: true,
      dataSet: null
    }

    this.dataSource = new DataSource();
  }

  componentDidMount() {
    this.fetchData(this.state.currentMetric, this.state.startDate, this.state.endDate);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.startDate !== prevState.startDate ||
      this.state.endDate !== prevState.endDate ||
      this.state.currentMetric !== prevState.currentMetric) {
      this.fetchData(this.state.currentMetric, this.state.startDate, this.state.endDate);
    }
  }

  fetchData(metric, startDate, endDate) {
    this.setState({ isPending: true, dataSet: null });

    if (this.serverRequest) {
      console.log('aborting pending request')
      this.serverRequest.abort();
    }

    this.serverRequest = this.dataSource.get(metric, startDate, endDate);

    this.serverRequest.then(function (data) {
      this.setState({ isPending: false, dataSet: data});
      this.serverRequest = null;
    }.bind(this)).fail(function (e) {
      if (e.statusText !== 'abort'){
        console.error('handle error');
      }
    });
  }

  selectionChanged (selectedMetric) {
    this.setState({ currentMetric: selectedMetric, isPending:true });
  }

  dateRangeChanged(startDate, endDate) {
    this.setState({ startDate, endDate, isPending:true });
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className={styles.root  + ' row'}>
          <div className="col-xs-3">
            <MetricSelector
              metricKey={this.state.currentMetric}
              onSelectionChanged={this.selectionChanged.bind(this)}
              />
          </div>
          <div className="col-xs-9 chart-wrapper">
            <MetricContent
              isPending={this.state.isPending}
              dataSet={this.state.dataSet}
              metricKey={this.state.currentMetric}
              title={metricInfo[this.state.currentMetric].title}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDateRangeChange={this.dateRangeChanged.bind(this)}
              />
          </div>
        </div>
      </div>
    )
  }
}
