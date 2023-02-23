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
            <el-row>
              <el-col v-for="(item, index) in 6" :key="index" :span="8">
                <el-card shadow="hover" class="project-item-content">
                  <div class="project-item">
                    <div class="project-item__title">
                      <el-avatar size="large" :src="avatar"></el-avatar>
                      <span class="project-name">Hello world</span>
                    </div>
                    <div class="project-item__description">
                      <span>这里是项目的description</span>
                    </div>

                    <div class="project-item__footer">
                      <div class="project-belong-from">
                        <span>前端</span>
                      </div>
                      <div class="project-create-time">
                        <span>2022-12-04</span>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </div>
        <div class="dynamic-group-container"></div>
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
      height: 6.25rem;

      ::v-deep(.el-card) {
        border: none;
      }

      .project-group-container {
        .el-card {
          border-radius: 0;
        }

        .project-item-content {
          cursor: pointer;
          border-radius: 0;

          &:nth-child(3n) {
            border-right: 1px solid #e8e8e8;
            border-bottom: 1px solid #e8e8e8;
          }

          .project-item {
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
      }
    }
  }
}
</style>
