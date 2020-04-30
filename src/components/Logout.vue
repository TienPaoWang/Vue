<template>
  <div id="main">
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1 ,shrink-to-fit=no"
      />
    </head>
    <div class="banner">
      <img src="https://picsum.photos/id/123/1200/800" alt="" />
    </div>

    <!-- Main about-->
    <div class="about">
      <div class="wrap">
        <div class="title">
          <h1>title</h1>
        </div>
        <div class="item_group">
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/id/684/1200/800" alt="" />
            </div>
            <div class="text">
              <h2>How dod you do</h2>
              <p>
                You can simply type ctlorem to generate default 128 Traditional
                Chinese characters in HTML File. Also You can define how many
                characters you want to generate by typing ctlorem example:
                ctlorem120 to generate 120 characters .
              </p>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/id/84/1200/800" alt="" />
            </div>
            <div class="text">
              <h2>How dod you do</h2>
              <p>
                You can simply type ctlorem to generate default 128 Traditional
                Chinese characters in HTML File. Also You can define how many
                characters you want to generate by typing ctlorem example:
                ctlorem120 to generate 120 characters .
              </p>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/id/6/1200/800" alt="" />
            </div>
            <div class="text">
              <h2>How dod you do</h2>
              <p>
                You can simply type ctlorem to generate default 128 Traditional
                Chinese characters in HTML File. Also You can define how many
                characters you want to generate by typing ctlorem example:
                ctlorem120 to generate 120 characters .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- service  -->
    <div class="service">
      <div class="wrap">
        <div class="title">Service</div>
        <div class="item">
          <div class="pic">
            <img src="https://picsum.photos/id/68/1200/400" alt="" />
          </div>

          <div class="text">
            <h2>標題</h2>
            <p>
              You can simply type ctlorem to generate default 128 Traditional
              Chinese characters in HTML File. Also You can define how many
              characters you want to generate by typing ctlorem example:
              ctlorem120 to generate 120 characters .
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--About  -->
    <div class="about">
      <div class="wrap">
        <div class="title">
          關於我們
        </div>
        <div class="item_group">
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/id/11/1200/400" alt="" />
            </div>
            <div class="text">
              <h2></h2>
              <p>
                You can simply type ctlorem to generate default 128 Traditional
                Chinese characters in HTML File. Also You can define how many
                characters you want to generate by typing ctlorem example:
                ctlorem120 to generate 120 characters .
              </p>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/id/840/1200/400" alt="" />
            </div>
            <div class="text">
              <h2></h2>
              <p>
                You can simply type ctlorem to generate default 128 Traditional
                Chinese characters in HTML File. Also You can define how many
                characters you want to generate by typing ctlorem example:
                ctlorem120 to generate 120 characters .
              </p>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/id/600/1200/400" alt="" />
            </div>
            <div class="text">
              <h2></h2>
              <p>
                You can simply type ctlorem to generate default 128 Traditional
                Chinese characters in HTML File. Also You can define how many
                characters you want to generate by typing ctlorem example:
                ctlorem120 to generate 120 characters .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer-->
    <div class="footer">
      <div class="flex-container">
        <div>
          Copyright © 2020 Apple Inc.
        </div>
        <div class="row">
          <div class="box" a="#">
            隱私權政策
          </div>
          <div class="box" a="#">使用條款</div>
          <div class="box" a="#">銷售及退款</div>
          <div class="box" a="#">法律聲明</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.box {
  padding: 0 10px 0 10px;

  /* margin: 10px;  */
}
.banner img {
  width: 100%;
  padding: 0 0 10px;
}
img{
    vertical-align: bottom;
}
.wrap .pic img {
  width: 100%;
  padding: 0 10px;
}
.item_group .item .pic img {
  width: 100%;
  padding: 0 10px;
}

text {
  text-align: center;
}
.text p {
  font-size: 26px;
}
.title {
  font-size: 46px;
  background-color: rgba(204, 204, 204, 0.315);
  padding: 30px 10px;
}

.footer {
  padding: 10px;
  background-color: rgba(135, 68, 68, 0.226);
}
.service .item{
    margin: 20px 0;
}
@media screen and (min-width: 768px) {
  .item_group {
    display: flex;
  }
  .service .item {
    display: flex;
  }
  .service  .item .pic ,
  .service  .item .text {
    width: 50%;
    background-color: #ffa;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

}
</style>