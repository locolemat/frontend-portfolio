const { createApp } = Vue

const size = 5;
let queryResponsePairs = []
let currentQuery = -1


app = createApp({
  data() {
    return {
      message: "",
      currentQuery: 0,
      answers: []
    }
  },
  methods: {
    setAnswer(queryId, message) {
      const answer = this.answers.find(element => element.queryId == queryId);
      if (answer) {
        answer.text = message
      }
    },
    sendQuery(queryId, message) {



      fetch("CONFIDENTIAL", {
        method: "POST",
        headers: {
			CONFIDENTIAL: "CONFIDENTIAL"
        },
        body: JSON.stringify({
          token: "CONFIDENTIAL",
          method: "CONFIDENTIAL", //Реальные API были заменены в соответствии с NDA
          query: message
        })
      })
        .then(response => response.json())
        .then(data => {
          debugger
          if (!data.status) {
            this.setAnswer(queryId, "Внутренняя ошибка API, повторите позже");
          } else {
            this.setAnswer(queryId, data.result);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    handleClick() {
      const queryId = crypto.randomUUID()
      this.answers.push({
        queryId: queryId,
        query: this.message,
        text: "Думаю..."
      })
      this.sendQuery(queryId, this.message)
      this.message = ""
      if (this.answers.length > size) {
        this.answers.shift()
      }

    },
    keyHandler(ev) {
      ev = ev || window.event;
      var key = ev.which || ev.keyCode;
      if (key == 13)
      {
        this.handleClick()
        return false;
      }
    }
  }
})
app.component("answerComponent", AnswerComponent);
app.component("navbarComponent", NavbarComponent);
app.mount("#app");




