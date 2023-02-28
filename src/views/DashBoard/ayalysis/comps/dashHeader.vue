<template>
  <section class="header-section">
    <div class="div-flex div-blue">
      <div class="div-circle">
        <i class="el-icon-user i-customer"></i>
      </div>
      <div class="div-desc">
        <p class="p-font">24</p>
        <span>&nbsp;&nbsp;个</span>
        <p>用户接入数量</p>
      </div>
    </div>
    <div class="div-flex div-green">
      <div class="div-circle">
        <i class="el-icon-c-scale-to-original i-customer"></i>
      </div>
      <div class="div-desc">
        <p class="p-font">6</p>
        <span>&nbsp;&nbsp;个</span>
        <p>网站接入数量</p>
      </div>
    </div>
    <div class="div-flex div-orange">
      <div class="div-circle">
        <i class="el-icon-mouse i-customer"></i>
      </div>
      <div class="div-desc">
        <p class="p-font">234</p>
        <span>&nbsp;&nbsp;次</span>
        <p>用户登录次数</p>
      </div>
    </div>
    <div class="div-flex div-purple">
      <div class="div-circle">
        <i class="el-icon-film i-customer"></i>
      </div>
      <div class="div-desc">
        <p class="p-font">3005</p>
        <span>&nbsp;&nbsp;次</span>
        <p>网站接入次数</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.header-section {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .div-flex {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.2rem;
    height: 100px;
    color: #fff;
    border-radius: 4px;
    flex: 1;

    .div-circle {
      position: relative;
      margin: 0.2rem;
      width: 60px;
      height: 60px;
      border: 1px solid #fff;
      border-radius: 90px;

      .i-customer {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 40px;
        color: #fff;
        transform: translate(-50%, -50%);
      }
    }

    .div-desc {
      flex: 1;

      .p-font {
        display: inline-block;
        margin-bottom: 0.2rem;
        font-size: 22px;
      }
    }
  }

  .div-flex:hover {
    box-shadow: 5px 5px 15px rgb(207, 206, 206);
  }

  .div-blue {
    background-image: linear-gradient(to right, #3d8efa, #54b7fb);
  }

  .div-green {
    background-image: linear-gradient(to right, #49c7d6, #71d3a4);
  }

  .div-orange {
    background-image: linear-gradient(to right, #f9815c, #fbae6a);
  }

  .div-purple {
    background-image: linear-gradient(to right, #7888f9, #c6b1f6);
  }

  .div-red {
    background-image: linear-gradient(to right, #e95467, #ef996a);
  }
}
</style>
