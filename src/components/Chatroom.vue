<template>
  <!----------------------------------------There are another block--------------------------- -->
  <div>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1 ,shrink-to-fit=no"
      />
    </head>

    <div class="container">
      <div class="chatroom">
        <div class="message_content">
          <div class="form-group">
            <div>
              <div>
                <div>
                  <!-- Message -->
                  <div id="js-roomBody" class="roomBody">
                    <template>
                      <div
                        v-for="item in messages"
                        :key="item.id"
                        align="right"
                        style="text-align:right"
                        class="message_context"
                      >
                        <div class="username">
                          <p style="color:blue">{{ item.userName }}</p>
                        </div>
                        <div class="timestamp">
                          {{ item.timeStamp }}
                        </div>
                        <div class="box message_text">
                          {{ item.message }}
                        </div>

                        <div>
                          <span>
                            <button
                              @click="deletemessage(item.id)"
                              class="removebtn btn btn-outline-secondary"
                            >
                              remove
                            </button>
                          </span>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div class="message_bottom">
                <div class="input-group">
                  <textarea
                    v-model="tempmessage"
                    class="form-control"
                    @keyup.enter="addmessage($event)"
                    placeholder="Enter your message"
                    aria-label="With textarea"
                  ></textarea>
                </div>
                <div class="my-2 flex-container justify-content-end ">
                  <b-button
                    variant="primary"
                    class="px-3   pull-right"
                    @click="addmessage()"
                    >Enter</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Username and input box -->
        <div class="right_side">
          <!-- Username -->
          <div class="col-3">
            <div class="form-group">
              <div>
                Your name
                <div v-if="username !== ''">
                  <p style="color:blue">{{ username }}</p>
                </div>
                <div v-if="username == ''">
                  <p style="color:red">Null</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <div>
                請輸入你的姓名
                <div>
                  <b-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Jane Doe"
                    v-model="tempusername"
                  ></b-input>

                  <div>
                    <b-button
                      variant="primary"
                      type="submit"
                      class="button"
                      @click="addusername()"
                    >
                      Click
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase";
import "firebase/firestore";
import { dbdatabase } from "../main";
import { mapActions } from "vuex";

// msgRef = firebase中的資料表/messages/，若沒有的會自動建立

// const storageRef = firebase.storage().ref('/images/');
export default {
  // 指定此頁使用的name
  name: "ChatRoom",
  // 資料位置，於html中可用{{}}渲染出來
  data() {
    return {
      hoverMessageId: null,
      userNameSet: false, // 姓名輸入框
      username: "", // 名稱
      messages: [], // 訊息內容
      upload: false, // 上傳進度框
      progress: "", // 上傳進度%數,
      msgRef: "",
      tempusername: "",
      tempmessage: "",
      message: ""
    };
  },
  // 這個頁面的functions
  methods: {
    ...mapActions(["setspinner"]),
    addusername() {
      let vm = this;
      vm.username = vm.tempusername;
      vm.tempusername = "";
      console.log("vm.username=", vm.username);
    },
    addmessage(e) {
      console.log("addmessage");
      let vm = this;

      const time = this.getTime();
      vm.message = vm.tempmessage;
      console.log("vm.message=", vm.message);

      if (vm.username.trim() == "") {
        alert("Please input your name");
        return;
      }
      if (vm.message.length < 1 || (vm.message.trim() == "") === "") {
        return;
      }

      this.msgRef.push({
        userName: vm.username,
        message: vm.message,
        type: "text",
        timeStamp: time
      });
      vm.tempmessage = "";
      console.log("addmessage");
    },

    deletemessage(id) {
      let vm = this;
      const removemessage = vm.msgRef.child(id);
      console.log("removemessage=", removemessage);
      removemessage.remove();
    },

    /** 取得時間 */
    getTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      return `${hours >= 12 ? "下午" : "上午"} ${hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }`;
    },

    /** 刪除訊息 */
    deleteMessage(id) {
      console.log("id=", id);
      const message = this.msgRef.child(id);
      message.remove();
    }
  },
  // mounted是vue的生命週期之一，代表模板已編譯完成，已經取值準備渲染元件了
  mounted() {
    const ref = dbdatabase.database().ref("/chatroom/");
    this.msgRef = ref;
    const vm = this;
    console.log("chatroom mounted");
    console.log("ref=", ref);
    this.msgRef.on("value", function(snapshot) {
      const val = snapshot.val();

      const list = Object.keys(val).map(item => item);

      let temp = [];
      for (let i = 0; i < Object.keys(val).length; i++) {
        temp.push({ id: list[i], ...val[list[i]] });
      }
      console.log("temp=", temp);

      const messageData = val
        ? Object.keys(val).map(key => ({ id: key, ...val[key] }))
        : null;

      vm.messages = messageData;
    });

    const myref = dbdatabase.database().ref("/chatroom/");
    myref.on("value", function(snapshot) {
      const value = snapshot.val();
      console.log("snapshot value", value);
    });
  },
  updated() {
    console.log("updated");
    // const roombody = document.getElementById("#js-roomBody");
    // roombody.scrollTop = roombody.scrollHeight;
    const roomBody = document.querySelector("#js-roomBody");
    roomBody.scrollTop = roomBody.scrollHeight;
  }
};
</script>

<style scoped>
* {
  font-family: "微軟正黑體";
  margin: auto;
}
.container {
  padding: 10px 30px 0px 0px;
}
.name {
  text-align: center;
  margin: 10px 50px 10px 0px;
  color: #333333;
}

.right_side {
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  border-color: chartreuse;
  border-style: solid;
  padding: 20px;
}
button {
  margin: 0px 10px;
  padding: 1px;
}
.message_context {
  padding: 5px 0;
}
/* Head */
.roomHead {
  width: 100%;
  height: 85px;
  border-radius: 5px 5px 0px 0px;
  background-color: #2b364b;
  position: relative;
}
.roomHead__topButtons {
  padding: 2px 0px 5px 10px;
  text-align: left;
}
.roomHead__button {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 0px 1px;
  display: inline-block;
  cursor: pointer;
}
.close {
  background-color: #ff625a;
}
.minimize {
  background-color: #ffc02f;
}
.zoom {
  background-color: #28cb40;
}

.roomBody {
  padding: 10px 10px;
  margin: 10px 0px;
  background-color: #fff;
  height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}

/* name set */
.userName {
  height: 30px;
  font-size: 16px;
  margin-bottom: 10px;
  border: solid 1px #cbcbcb;
  width: 70%;
  text-align: center;
  display: inline-block;
}
.timestamp {
  font-size: 0.5rem;
}
.message_text {
  background-color: #b2ed8b;
  display: inline-block !important;
  border-radius: 10px;
}
.button {
  color: #ffffff;
  background-color: #2b364b;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  margin: 10px 5px;
}
.removebtn {
  margin: 0;
  font-size: 8px;
  padding: 3px;
  cursor: pointer;
  border-radius: 10px;
}
.chatroom {
  display: flex;
  width: 800px;
}
.message_content {
  width: 400px;
  margin: 10px;
  border-width:3px;  
  border-style:ridge;
}

/* media */

@media screen and (max-width: 768px) {
  .chatroom {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .message_content {
    margin: 0 3 vw;
    width: 95vw;
  }
  .right_side {
    margin: 20px 0;
    width: 95vw;
  }
}

@media screen and (max-width: 385px) {
  .messageBox__content {
    max-width: 50%;
  }
}
</style>
