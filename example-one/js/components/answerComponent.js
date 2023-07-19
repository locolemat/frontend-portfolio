AnswerComponent = {
    template: `
    <div class="ai-query-response-pair-inner-container" :id="queryId">
        <div class="ai-query-text"><p class="m-3">[[query]]</p></div>
        <div class="ai-response-text"><p class="m-3">[[answer]]</p></div>
    </div>
    `,
    data() {
        return {
            query:"",
            queryId:"",
            answer:"Прости, мне пока не подключили АПИхи и я не могу тебе сказать"
        }
    }
}