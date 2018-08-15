import React, { PropTypes, PureComponent } from 'react';
import { ListView as LV, RefreshControl } from 'antd-mobile';
import styles from './style.scss';

const refreshIcons = [
  <div key="0" className="am-refresh-control-pull" style={{ color: '#108ee9' }}>
    <i
      className="fa fa-arrow-down"
      aria-hidden="true"
      style={{ marginRight: 10 }}
    />
    <span>下拉刷新</span>
  </div>,
  <div
    key="1"
    className="am-refresh-control-release"
    style={{ color: '#108ee9' }}
  >
    <i
      className="fa fa-arrow-up"
      aria-hidden="true"
      style={{ marginRight: 10 }}
    />
    <span>松开立即刷新</span>
  </div>
];

const loadindIcon = (
  <div style={{ color: '#108ee9' }}>
    <i
      className="fa fa-circle-o-notch fa-spin fa-fw"
      style={{ marginRight: 10 }}
    />
    <span>加载中...</span>
  </div>
);

const noMoreData = (
  <div className={styles && styles['no-more-data']}>
    <span className={styles && styles.tips}>已加载全部</span>
  </div>
);
const noData = (
  <div className={styles && styles['no-more-data']}>
    <span className={styles && styles.tips}>暂无数据</span>
  </div>
);

export default class ListView extends PureComponent {
  static propTypes = {
    renderHeader: PropTypes.func,
    renderRow: PropTypes.func,
    onRefresh: PropTypes.func,
    onLoadMore: PropTypes.func,
    refreshing: PropTypes.bool,
    loading: PropTypes.bool,
    hasMore: PropTypes.bool,
    initialListSize: PropTypes.number,
    dataSource: PropTypes.array,
    rowHasChanged: PropTypes.func
  };

  static defaultProps = {
    refreshing: false,
    hasMore: true,
    rowHasChanged: (row1, row2) => (row1.key || row1) !== (row2.key || row2)
  };

  constructor(props) {
    super(props);

    const dataSource = new LV.DataSource({
      rowHasChanged: this.props.rowHasChanged
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.dataSource)
    };
  }

  componentWillReceiveProps(props) {
    if (props.dataSource !== this.props.dataSource) {
      const { dataSource } = this.state;
      this.setState({
        dataSource: dataSource.cloneWithRows(props.dataSource)
      });
    }
  }

  onRefresh = () => {
    const { onRefresh } = this.props;
    if (onRefresh) {
      onRefresh();
    }
  };

  onEndReached = () => {
    // load new data
    if (this.props.loading || !this.props.hasMore) {
      return;
    }
    const { onLoadMore } = this.props;
    if (onLoadMore) {
      onLoadMore();
    }
  }

  getSeparator = (sectionID, rowID) => {
    return (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F8F8F8',
          height: 8
        }}
      />
    );
  };

  renderFooter = () => {
    return (
      <div style={{ padding: 30, textAlign: 'center' }}>
        {this._getFooterContent()}
      </div>
    );
  };

  _getFooterContent = () => {
    const { loading, hasMore } = this.props;
    const { dataSource } = this.state;
    if (loading) {
      return loadindIcon;
    } else if (hasMore) {
      return null;
    }
    return dataSource.getRowCount() > 0 ? noMoreData : noData;
  };

  render() {
    console.log('...list view....', styles);
    return (
      <LV
        ref={node => this.listview = node}
        dataSource={this.state.dataSource}
        renderHeader={this.props.renderHeader}
        renderFooter={this.renderFooter}
        renderRow={this.props.renderRow}
        renderSeparator={this.getSeparator}
        initialListSize={this.props.initialListSize || 10}
        pageSize={10}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
        style={{ height: '100vh' }}
        scrollerOptions={{ scrollbars: true }}
        refreshControl={
          <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={this.onRefresh}
            icon={refreshIcons}
            loading={loadindIcon}
          />
        }
      />
    );
  }
}
