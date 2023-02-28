<template>
  <div class="workspace-container">
    <page-header>
      <template slot="content">
        <div class="workspace-title">
          <div class="workspace-left">
            <div class="workspace-left__image">
              <el-avatar size="large" :src="avatar"></el-avatar>
            </div>
            <div class="workspace-left__content">
              <p>早安，{{ user }}</p>
              <p>今日晴，20℃ - 32℃！</p>
            </div>
          </div>
          <div class="workspace-right">
            <div class="workspace-right-list">
              <div v-for="(item, index) in signList" :key="index" class="workspace-right-li">
                <div class="workspace-right-li__title">{{ item.label }}</div>
                <div class="workspace-right-li__number">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </page-header>
    <div class="public-content__padding workspace-content">
      <div class="workspace-content-major">
        <div class="project-group-container">
          <el-card shadow="never" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span style="font-size: 0.2rem">项目</span>
              <el-button type="text" style="float: right; padding: 3px 0">查看更多</el-button>
            </div>

            <div class="project-list-content">
              <div v-for="(item, index) in 6" :key="index" class="project-list-item">
                <el-card shadow="hover">
                  <div class="project-list">
                    <div class="project-list__title">
                      <el-avatar size="large" :src="avatar"></el-avatar>
                      <span class="project-name">Hello world</span>
                    </div>
                    <div class="project-list__description">
                      <span>这里是项目的description</span>
                    </div>
                    <div class="project-list__footer">
                      <div class="project-belong-from">
                        <span>前端</span>
                      </div>
                      <div class="project-create-time">
                        <span>2022-12-04</span>
                      </div>
                    </div>
                  </div>
                </el-card>
              </div>
            </div>
          </el-card>
        </div>
        <div class="dynamic-group-container">
          <el-card shadow="never" :body-style="{ 'padding-top': '0px 20px 10px 20px', 'max-height': '8rem', overflow: 'auto' }">
            <div slot="header" class="clearfix">
              <span style="font-size: 0.2rem">最新动态</span>
            </div>
            <div class="dynamic-group-content">
              <div v-for="(item, index) in 6" :key="index" class="dynamic-group-list">
                <div class="dynamic-group-item">
                  <div class="dynamic-group-item__avator">
                    <el-avatar size="large" :src="avatar"></el-avatar>
                  </div>
                  <div class="dynamic-group-item__description">
                    <div class="description-content">这里是最新动态</div>
                    <div class="description-time">2023-03-01</div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="workspace-content-secondary"></div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@components/PageHeader';

export default {
  components: { PageHeader },
  data() {
    return {
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      user: 'super Admin',
      signList: [
        { value: '1/20', label: '待办事项' },
        { value: '6', label: '成员' },
        { value: '10', label: '项目' },
      ],
    };
  },

  computed: {},

  methods: {},
};
</script>

<style lang="less" scoped>
.workspace-container {
  .workspace-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.3rem;
    background-color: #fff;

    span {
      font-size: 16px;
      font-weight: bold;
    }

    .workspace-left {
      display: flex;
      align-items: center;

      &__image {
        margin-right: 10px;
      }

      &__content {
        p {
          &:first-child {
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
          }

          &:last-child {
            color: #8d8d8d;
          }
        }
      }
    }

    .workspace-right {
      padding-right: 0.375rem;

      .workspace-right-list {
        display: flex;

        .workspace-right-li {
          display: flex;
          flex-direction: column;
          text-align: right;

          &:not(:last-child) {
            padding-right: 40px;
          }

          &__title {
            font-size: 0.175rem;
          }

          &__number {
            font-size: 0.275rem;
          }
        }
      }
    }
  }

  .workspace-content {
    display: flex;

    .workspace-content-major {
      margin: 0 0.25rem 0.25rem 0;
      width: 13.75rem;

      .project-group-container {
        margin-bottom: 0.3rem;

        ::v-deep(.el-card) {
          overflow: inherit;
          border: none;
          border-radius: 0;
        }

        .project-list-content {
          display: flex;
          flex-wrap: wrap;
          width: 100%;

          .project-list-item {
            width: 33.33%;

            .el-card {
              border-radius: 0;
              cursor: pointer;
              border-right: 1px solid #e8e8e8;
              border-bottom: 1px solid #e8e8e8;

              &:hover {
                position: relative;
                z-index: 1;
                box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 16%), 0 3px 6px 0 rgba(0, 0, 0, 12%), 0 5px 12px 4px rgba(0, 0, 0, 9%);
              }

              .project-list {
                &__title {
                  display: flex;
                  align-items: center;

                  span.project-name {
                    margin-left: 0.125rem;
                    font-size: 0.2rem;
                    font-weight: bold;
                  }
                }

                &__description {
                  margin-top: 0.125rem;
                  color: #8d8d8d;
                }

                &__footer {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 0.375rem;
                  color: #8d8d8d;
                }
              }
            }

            &:nth-child(3n) {
              .el-card {
                border-right: 0;
              }
            }
          }
        }
      }

      .dynamic-group-container {
        .dynamic-group-content {
          .dynamic-group-list {
            padding-top: 12px;

            &:not(:last-child) {
              padding: 12px 0;
              border-bottom: 1px solid #e8e8e8;
            }

            .dynamic-group-item {
              display: flex;

              &__description {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
