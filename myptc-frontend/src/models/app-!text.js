import {
  observable,
  action,
  computed
  // , runInAction
} from 'mobx';
import { take as _take, clamp as _clamp, range as _range } from 'lodash';
import { getBanners, getTag, getHotVideoList } from '../services/app';
// import request from '../utils/request';

export default class App {
  @observable banners = [];
  @observable allTitleList = [];
  // 热门视频
  @observable originalHotVideoList = [];

  @observable hotVideoCurrent = 0;
  // 精彩专题
  @observable allWonderfulTopicList = [];

  // 优秀讲师
  @observable allGoodTeacherList = [];
  @observable goodTeacherCurrent = 0;

  @computed
  get allHotVideoList() {
    return [
      {
        src:
          'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
        alt: 'images-1'
      },
      {
        src:
          'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
        alt: 'images-2'
      },
      {
        src:
          'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
        alt: 'images-3'
      },
      {
        src:
          'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
        alt: 'images-4'
      },
      {
        src:
          'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
        alt: 'test-1'
      },
      {
        src:
          'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
        alt: 'test-2'
      }
    ];

    // return this.originalHotVideoList.map(val => ({
    //   src: val.imgUrl,
    //   alt: val.lecturerName
    // }));
  }

  @computed
  get currentWonderfulTopList() {
    const currentList = _take(this.allWonderfulTopicList, 3);
    return currentList;
  }

  @computed
  get goodTeacherCurrentList() {
    const indexList = _range(this.goodTeacherCurrent, this.goodTeacherCurrent + 5, 1);
    const currentList = indexList.map(val => this.allGoodTeacherList[val]);
    return currentList;
  }

  @computed
  get titleList() {
    const titleList = _take(this.allTitleList, 6);
    return titleList;
  }
  @computed
  get moreTitleList() {
    const moreTitleList = this.allTitleList.slice(this.titleList.length);
    return moreTitleList;
  }

  @action
  getBanners = async () => {
    this.banners = [
      {
        src: 'http://gw.alicdn.com/mt/TB1Ht5yojnD8KJjSspbXXbbEXXa-1664-520.png'
      },
      {
        src: 'http://pic3.qiyipic.com/common/lego/20180511/8810f909522e4083bb57db2d4313ec13.jpg'
      },
      {
        src: 'http://gw.alicdn.com/mt/TB1Ht5yojnD8KJjSspbXXbbEXXa-1664-520.png'
      },
      {
        src: 'http://pic3.qiyipic.com/common/lego/20180511/8810f909522e4083bb57db2d4313ec13.jpg'
      }
    ];
    //   try {
    //     const { response: session } = await getBanners();
    //     this.banners = session.map(val => val.url);
    //   } catch (error) {
    //     console.log('error', error);
    //   }
  };

  @action
  getTitleLists = async () => {
    // [
    //   {
    //     comments: 'string',
    //     id: 1,
    //     name: 'dfff',
    //     videoCount: 0
    //   }
    // ];
    // try {
    //   this.allTitleList = [
    //     'CAD软件',
    //     'PLM软件',
    //     'PTC Matched',
    //     '物联网',
    //     '增强现实AR',
    //     'Elecworks',
    //     'Test1',
    //     'Test2'
    //   ];
    // } catch (error) {
    //   this.allTitleList = [];
    // }
    // console.log('服务器数据》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》');
    this.allTitleList = [
      {
        comments: 'string',
        id: 1,
        name: 'CAD软件',
        videoCount: 0
      },
      {
        comments: 'string',
        id: 1,
        name: 'PLM软件',
        videoCount: 0
      },
      {
        comments: 'string',
        id: 1,
        name: 'PTC Matched',
        videoCount: 0
      },
      {
        comments: 'string',
        id: 1,
        name: '物联网',
        videoCount: 0
      },
      {
        comments: 'string',
        id: 1,
        name: '增强现实AR',
        videoCount: 0
      },
      {
        comments: 'string',
        id: 1,
        name: 'Elecworks',
        videoCount: 0
      },
      {
        comments: 'string',
        id: 1,
        name: 'Test1',
        videoCount: 0
      },
      {
        comments: 'string',
        id: 1,
        name: 'Test2',
        videoCount: 0
      }
    ];
    // try {
    //   // console.log('取数据');
    //   const { response: session } = await getTag();
    //   this.allTitleList = session;
    //   // this.banners = session.map(val => val.url);
    // } catch (error) {
    //   console.log('error', error);
    // }
  };
  @action
  getWonderfulTopicLists = async () => {
    this.allWonderfulTopicList = [
      {
        src: './jczt.png',
        alt: 'images-1'
      },
      {
        src: './jczt.png',
        alt: 'images-2'
      },
      {
        src: './jczt.png',
        alt: 'images-3'
      },
      {
        src: './jczt.png',
        alt: 'images-4'
      },
      {
        src: './jczt.png',
        alt: 'test-1'
      },
      {
        src: './jczt.png',
        alt: 'test-2'
      }
    ];
  };

  // @action
  // hotVideoTurn = async num => {
  //   this.hotVideoCurrent = _clamp(this.allHotVideoList.length - 1, 0, this.hotVideoCurrent + num);
  // };
  @action
  goodTeacherTurn = async num => {
    this.goodTeacherCurrent = _clamp(
      this.allGoodTeacherList.length - 1,
      0,
      this.goodTeacherCurrent + num
    );
  };

  @action
  getHotVideoLists = async () => {
    try {
      // console.log('取数据');
      const data = {
        page: 1,
        row: 20,
        orderByKey: 'is_top'
      };
      const { response: session } = await getHotVideoList(data);
      console.log(session);
      this.originalHotVideoList = session.content;
      // this.allHotVideoList = session;
      // this.banners = session.map(val => val.url);
    } catch (error) {
      console.log('error', error);
    }
  };
  @action
  getGoodTeacherLists = async () => {
    try {
      this.allGoodTeacherList = [
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-1'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-2'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-3'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-4'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'test-1'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'test-2'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-1'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-2'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-3'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'images-4'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'test-1'
        },
        {
          src:
            'http://kcssmyptc-img.oss-cn-beijing.aliyuncs.com/5af81580-088d-4de9-8e31-2ab6383665f9.jpg',
          alt: 'test-2'
        }
      ];
    } catch (error) {
      this.allGoodTeacherList = [];
    }
  };
}

export const name = 'app';
